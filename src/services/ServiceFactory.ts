import { servicesConfig } from "../config/servicesConfig";
import { generateMethods } from "../utils/generateMethods";
import HttpService from "./HttpService";
import ServiceMethods from "../types/ServiceInterface";

class ServiceFactory {
  private static instances: Record<string, ServiceMethods> = {};

  public static getService(serviceName: string): ServiceMethods {
    if (!ServiceFactory.instances[serviceName]) {
      const serviceConfig = servicesConfig[serviceName];
      if (!serviceConfig) {
        throw new Error(`Service ${serviceName} not found`);
      }
      const httpService = new HttpService(serviceConfig.baseUrl);
      const methods = generateMethods(httpService, serviceConfig.endpoints);
      ServiceFactory.instances[serviceName] = methods;
    }
    return ServiceFactory.instances[serviceName];
  }
}

export default ServiceFactory;
