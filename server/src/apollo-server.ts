import path from "path";
import { FastifyInstance } from "fastify";
import { readFile } from "fs/promises";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { PrismaClient } from "@prisma/client";

import schema from "./schema";

const orm = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

function fastifyAppClosePlugin(app: FastifyInstance) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function getApolloServer(app: FastifyInstance) {
  try {
    const schemaPath = path.resolve(__dirname, "schema", "schema.graphql");
    const typeDefs = await readFile(schemaPath, "utf8");
    const apolloServer = new ApolloServer({
      typeDefs,
      schema,
      context: { orm },
      csrfPrevention: true,
      cache: "bounded",
      plugins: [
        fastifyAppClosePlugin(app),
        ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
      ],
    });
    return apolloServer;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export async function registerApolloServer(app: FastifyInstance) {
  const apolloServer = await getApolloServer(app);
  await apolloServer.start();
  app.register(apolloServer.createHandler({ path: "/graphql" }));
}
