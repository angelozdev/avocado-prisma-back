import path from "path";
import { ApolloServer } from "apollo-server";
import { readFile } from "fs/promises";
import { PrismaClient } from "@prisma/client";

import schema from "./schema";

const orm = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function initialize() {
  const schemaPath = path.resolve(__dirname, "schema", "schema.graphql");
  const typeDefs = await readFile(schemaPath, "utf8");
  const server = new ApolloServer({ typeDefs, schema, context: { orm } });

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

initialize();
