import { FastifyInstance } from "fastify";
import HttpClient from "../services/HttpClient";

const testRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/test", async (request, reply) => {
    try {
      const httpClient = HttpClient.getInstance();
      const response = await httpClient.get("https://dummyjson.com/products");

      return reply.send(response.data);
    } catch (error) {
      fastify.log.error(error);
      return reply
        .status(500)
        .send({ error: "Failed to fetch data from microservice" });
    }
  });
};

export default testRoute;
