import {
  FastifyInstance,
  FastifyError,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.setErrorHandler(
    (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
      fastify.log.error(error);
      return reply
        .status(500)
        .send({ error: "Une erreur serveur est survenue" });
    }
  );
};
