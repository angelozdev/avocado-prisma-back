import { registerApolloServer } from "./apollo-server";
import app from "./app";

async function initialize() {
  try {
    await registerApolloServer(app);
    const host = await app.listen({ port: 3000 });
    console.log(`Server listening on ${host.replace("[::]", "localhost")}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

initialize();
