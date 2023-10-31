import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CustomError } from "../errors/CustomError";

class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  public async get(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {};
    if (headers) {
      config.headers = headers;
    }
    try {
      const response = await this.axiosInstance.get(endpoint, config);
      return response;
    } catch (error: unknown) {
      throw new CustomError(
        "EXTERNAL_SERVICE_ERROR",
        `Failed to fetch data from ${endpoint}: ${(error as Error).message}`
      );
    }
  }
}

export default HttpService;
