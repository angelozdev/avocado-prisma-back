import path from "path";
import { makeSchema } from "nexus";

import {
  Attributes,
  Avocado,
  AvocadoMutations,
  AvocadoQueries,
} from "./avocado";

import * as Common from "./common";
import { DateScalar } from "./scalars";

const sourcePath = path.join(__dirname, "..");
const typesPath = path.join(sourcePath, "types");

const schema = makeSchema({
  types: [
    Avocado,
    DateScalar,
    AvocadoQueries,
    AvocadoMutations,
    Attributes,
    Common,
  ],
  outputs: {
    schema: path.resolve(__dirname, "schema.graphql"),
    typegen: path.resolve(typesPath, "generated.d.ts"),
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
  contextType: {
    module: path.resolve(typesPath, "context.d.ts"),
    export: "Context",
  },
});

export default schema;
