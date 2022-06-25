import { AuthenticationError } from "apollo-server-core";
import { Context } from "../types/context";

export async function hasValidUser(context: Context) {
  if (!context.user?.id)
    throw new AuthenticationError(
      "You must be logged in to create an avocado."
    );

  const user = await context.orm.user.findUnique({
    where: { id: context.user.id },
  });

  if (!user)
    throw new AuthenticationError(
      "You must be logged in to create an avocado."
    );

  return true;
}
