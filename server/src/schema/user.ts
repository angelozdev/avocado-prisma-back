import {
  inputObjectType,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { enviromentVariables } from "../utils";
import { UserInputError } from "apollo-server-core";

export const User = objectType({
  name: "User",
  definition(t) {
    t.implements("BaseModel");
    t.nonNull.string("username", { description: "The name of the user." });
    t.nonNull.string("email", { description: "The email of the user." });
    t.nonNull.string("password", { description: "The password of the user." });
  },
});

export const Token = objectType({
  name: "Token",
  definition(t) {
    t.nonNull.string("accessToken", { description: "The token of the user." });
    t.nonNull.string("username", { description: "The username of the user." });
  },
});

export const LogIn = queryField("LogIn", {
  type: "Token",
  args: {
    username: nonNull(stringArg({ description: "The username of the user." })),
    password: nonNull(stringArg({ description: "The password of the user." })),
  },
  resolve: async (_, args, context) => {
    const { username, password } = args;
    const user = await context.orm.user.findUnique({
      where: { username },
    });

    if (!user) throw new UserInputError("Invalid username or password.");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UserInputError("Invalid username or password.");

    const accessToken = sign(
      { userId: user.id },
      enviromentVariables.JWT_SECRET
    );

    return {
      username: user.username,
      accessToken,
    };
  },
});

export const CreateUser = inputObjectType({
  definition(t) {
    t.nonNull.string("username", { description: "The username of the user." });
    t.nonNull.string("password", { description: "The password of the user." });
    t.nonNull.string("email", { description: "The email of the user." });
  },
  name: "CreateUser",
});

export const SignUp = mutationField("SignUp", {
  type: "User",
  args: { input: nonNull(CreateUser) },
  resolve: async (_, { input }, context) => {
    const { username, password, email } = input;
    const hashedPassword = await bcrypt.hash(password, 10);

    return context.orm.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  },
});
