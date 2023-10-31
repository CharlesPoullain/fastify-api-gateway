import { FastifyInstance } from "fastify";
import ServiceFactory from "../services/ServiceFactory";
import { servicesConfig } from "../config/servicesConfig";

const testRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/test", async (request, reply) => {
    const service = ServiceFactory.getService("dummyService");
    const response = await service.getAllProducts();
    return reply.send(response.data);
  });
};

export default testRoute;
