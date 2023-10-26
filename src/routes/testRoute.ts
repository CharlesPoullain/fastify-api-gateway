import { FastifyInstance } from "fastify";
import HttpService from "../services/HttpService";

const testRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/test", async (request, reply) => {
    const httpService = HttpService.getInstance();
    const response = await httpService.get("https://dummyjson.com/productss");
    return reply.send(response.data);
  });
};

export default testRoute;
