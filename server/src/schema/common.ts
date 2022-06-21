import { enumType, inputObjectType, interfaceType } from "nexus";
import { Prisma } from "@prisma/client";

export const OrderBy = enumType({
  name: "OrderBy",
  members: Prisma.AvocadoScalarFieldEnum,
  description: "Order by",
});

export const OrderDirection = enumType({
  name: "OrderDirection",
  members: Prisma.SortOrder,
  description: "Order direction",
});

export const BaseModel = interfaceType({
  name: "BaseModel",
  definition(t) {
    t.nonNull.int("id", { description: "The ID of the model." });
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("updatedAt", { type: "DateTime" });
  },
  resolveType: () => null,
});

export const Filter = inputObjectType({
  name: "Filter",
  definition(t) {
    t.field("orderBy", {
      type: OrderBy,
      default: "price",
      description: "Order by",
    });
    t.field("orderDirection", {
      type: OrderDirection,
      default: "asc",
      description: "Order direction",
    });
    t.int("limit", {
      description: "The limit of the pagination.",
      default: 10,
    });
    t.int("offset", {
      description: "The offset of the pagination.",
      default: 0,
    });
  },
});
