import {
  nonNull,
  objectType,
  queryField,
  mutationField,
  inputObjectType,
  intArg,
} from "nexus";
import { hasValidUser } from "../utils/guards";

export const Attributes = objectType({
  name: "Attributes",
  definition(t) {
    t.string("hardiness", { description: "The hardiness of the fruit." });
    t.string("taste", { description: "The taste of the fruit." });
    t.string("shape", { description: "The shape of the fruit." });
  },
});

export const Avocado = objectType({
  name: "Avocado",
  description: "Avocado",
  definition(t) {
    t.implements("BaseModel");
    t.nonNull.string("name", { description: "The name of the fruit." });
    t.nonNull.string("description", {
      description: "The description of the fruit.",
    });
    t.field("attributes", { type: Attributes });
    t.nonNull.string("image", { description: "The image of the fruit." });
    t.nonNull.float("price", { description: "The price of the fruit." });
    t.nonNull.string("sku", { description: "The SKU of the fruit." });
  },
});

// ****************************************** QUERIES *******************************************************
const GetAvoById = queryField("GetAvoById", {
  type: Avocado,
  args: { id: nonNull(intArg()) },
  resolve: (_, args, context) => {
    return context.orm.avocado.findFirst({
      take: 1,
      where: { id: args.id },
      include: { attributes: true },
    });
  },
  description: "Get an avocado by ID.",
});

const GetAvos = queryField((t) => {
  t.nonNull.list.field("GetAvos", {
    args: { filter: "Filter" },
    type: "Avocado",
    resolve: async (_, args, context) => {
      const { limit, offset, orderBy, orderDirection } = args.filter || {};

      return context.orm.avocado.findMany({
        take: limit ?? 10,
        skip: offset ?? 0,
        include: {
          attributes: true,
        },
        orderBy: {
          [orderBy ?? "createdAt"]: orderDirection ?? "asc",
        },
      });
    },
  });
});

export const AvocadoQueries = [GetAvoById, GetAvos];

// ****************************************** MUTATIONS *******************************************************
const CreateAvocadoInput = inputObjectType({
  name: "CreateAvocadoInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.string("image");
    t.nonNull.int("price");
    t.nonNull.string("sku");
    t.string("hardiness");
    t.string("taste");
    t.string("shape");
  },
});

const CreateAvocado = mutationField("CreateAvocado", {
  type: Avocado,
  args: { input: nonNull(CreateAvocadoInput) },
  resolve: async (_, { input }, context) => {
    await hasValidUser(context);
    const { description, image, name, price, sku, ...attributes } = input;
    return context.orm.avocado.create({
      data: {
        description,
        image,
        name,
        price,
        sku,
        attributes: {
          create: {
            ...attributes,
          },
        },
      },
    });
  },
});

export const AvocadoMutations = [CreateAvocado];
