import { FastifyInstance } from "fastify";
import testRoute from "./testRoute";

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.register(testRoute);
};

export default routes;
