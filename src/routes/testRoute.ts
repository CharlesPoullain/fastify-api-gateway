import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const testRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ message: "Hello, this is a test route!" });
  });
};

export default testRoute;
