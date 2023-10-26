import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyHelmet from "@fastify/helmet";
import path from "path";
import AutoLoad from "@fastify/autoload";

const createServer = (options?: FastifyServerOptions): FastifyInstance => {
  const server = fastify(options);

  server.register(fastifyCors);
  server.register(fastifyHelmet);

  server.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: { prefix: "/" },
  });

  return server;
};

export default createServer;
