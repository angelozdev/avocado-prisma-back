import { registerApolloServer } from "./apollo-server";
import app from "./app";
import { enviromentVariables } from "./utils";

async function initialize() {
  try {
    await registerApolloServer(app);
    const host = await app.listen({
      port: enviromentVariables.PORT ? +enviromentVariables.PORT : 5000,
    });
    console.log(`Server listening on ${host.replace("[::]", "localhost")}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

initialize();
