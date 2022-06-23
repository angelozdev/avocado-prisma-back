import { registerApolloServer } from "./apollo-server";
import app from "./app";

async function initialize() {
  try {
    await registerApolloServer(app);
    const a = await app.listen({ port: 3000 });
    console.log("Server started on port 3000");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

initialize();
