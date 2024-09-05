import fastify from "fastify";
const app = fastify({ logger: true });
import { routes } from "./routes";
import cors from '@fastify/cors';

const start = async () => {


await app.register(routes);
await app.register(cors);
  try {
    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
