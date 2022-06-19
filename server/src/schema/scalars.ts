import { scalarType } from "nexus";
import { Kind } from "graphql";

export const DateScalar = scalarType({
  name: "DateTime",
  asNexusMethod: "date",
  description: "Date custom scalar type",
  parseValue(value) {
    return new Date(value as number);
  },
  serialize(value) {
    return (value as Date).getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});
