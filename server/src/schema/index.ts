import path from "path";
import { makeSchema } from "nexus";

import {
  Avocado,
  AvocadoQueries,
  AvocadoMutations,
  Attributes,
} from "./avocado";
import { DateScalar } from "./scalars";

const schema = makeSchema({
  types: [Avocado, DateScalar, AvocadoQueries, AvocadoMutations, Attributes],
  outputs: {
    schema: path.resolve(__dirname, "schema.graphql"),
    typegen: path.resolve(__dirname, "typegen.d.ts"),
  },
});

export default schema;
