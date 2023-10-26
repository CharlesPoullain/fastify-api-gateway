import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyHelmet from "@fastify/helmet";
import routes from "./routes";

const createServer = (options?: FastifyServerOptions): FastifyInstance => {
  const server = fastify(options);

  server.register(fastifyCors);
  server.register(fastifyHelmet);

  server.register(routes);

  return server;
};

export default createServer;
