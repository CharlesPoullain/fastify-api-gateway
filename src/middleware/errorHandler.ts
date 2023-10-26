import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { CustomError } from "../errors/CustomError";

const errorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  request.log.error(error);
  if (error instanceof CustomError) {
    return reply.status(500).send({ code: error.code, message: error.message });
  }

  return reply.status(500).send({
    code: "INTERNAL_SERVER_ERROR",
    message: "Une erreur serveur est survenue",
  });
};

export default errorHandler;
