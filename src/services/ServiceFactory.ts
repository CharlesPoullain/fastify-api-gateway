import { servicesConfig } from "../config/servicesConfig";
import axios, { AxiosInstance } from "axios";

class ServiceFactory {
  private static instances: Record<string, AxiosInstance> = {};

  public static getService(serviceName: string): AxiosInstance {
    if (!ServiceFactory.instances[serviceName]) {
      const serviceConfig = servicesConfig[serviceName];
      if (!serviceConfig) {
        throw new Error(`Service ${serviceName} not found`);
      }
      ServiceFactory.instances[serviceName] = axios.create({
        baseURL: serviceConfig.baseUrl,
      });
    }
    return ServiceFactory.instances[serviceName];
  }
}

export default ServiceFactory;
