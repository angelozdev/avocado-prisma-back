import path from "path";
import { readFile } from "fs/promises";
import { fastify, FastifyInstance } from "fastify";
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

async function initialize() {
  const app = fastify();
  const schemaPath = path.resolve(__dirname, "schema", "schema.graphql");
  const typeDefs = await readFile(schemaPath, "utf8");
  const server = new ApolloServer({
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

  app.get("/", (request, reply) => {
    reply.send("Hello");
  });

  await server.start();
  app.register(server.createHandler());
  await app.listen({ port: 4000 });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

initialize();
