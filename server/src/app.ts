import { fastify } from "fastify";
import path from "path";
import fastifyStatic from "@fastify/static";

const app = fastify();
app.register(fastifyStatic, {
  root: path.resolve(__dirname, "static"),
  prefix: "/static",
});

app.get("/", async () => {
  return "Hello World!";
});

export default app;
