import {
  idArg,
  interfaceType,
  nonNull,
  objectType,
  queryField,
  mutationField,
  inputObjectType,
} from "nexus";
import { Avocado as IAvocado, Attributes as IAttributes } from "nexus-prisma";

export const BaseModel = interfaceType({
  name: "BaseModel",
  definition(t) {
    t.nonNull.id("id", { description: "The ID of the model." });
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("updatedAt", { type: "DateTime" });
  },
  resolveType: () => null,
});

export const Attributes = objectType({
  name: IAttributes.$name,
  description: IAttributes.$description,
  definition(t) {
    t.field(IAttributes.hardiness);
    t.field(IAttributes.shape);
    t.field(IAttributes.taste);
  },
});

export const Avocado = objectType({
  name: IAvocado.$name,
  description: IAvocado.$description,
  definition(t) {
    t.implements(BaseModel);
    t.field(IAvocado.name);
    t.field(IAvocado.description);
    t.field(IAvocado.price);
    t.field(IAvocado.image);
    t.field(IAvocado.sku);
    t.field(IAvocado.attributes);
  },
});

// ****************************************** QUERIES *******************************************************
const GetAvocateById = queryField("GetAvocateById", {
  type: Avocado,
  args: { id: nonNull(idArg()) },
  resolve: () => null,
  description: "Get an avocado by ID.",
});

const GetAllAvocados = queryField((t) => {
  t.nonNull.list.field("GetAllAvocados", { type: Avocado, resolve: () => [] });
});

export const AvocadoQueries = [GetAvocateById, GetAllAvocados];

// ****************************************** MUTATIONS *******************************************************
const CreateAvocadoInput = inputObjectType({
  name: "CreateAvocadoInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.string("image");
    t.nonNull.int("price");
    t.nonNull.string("sku");
  },
});

const CreateAvocado = mutationField("CreateAvocado", {
  type: Avocado,
  args: { input: nonNull(CreateAvocadoInput) },
  resolve: (source, args, context, info) => {
    return {
      ...args.input,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  },
});

export const AvocadoMutations = [CreateAvocado];
