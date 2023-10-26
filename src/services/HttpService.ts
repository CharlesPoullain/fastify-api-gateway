import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { CustomError } from "../errors/CustomError";

class HttpService {
  private static instance: HttpService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create();
  }

  public static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  public async get(
    url: string,
    headers?: Record<string, string>
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {};
    if (headers) {
      config.headers = headers;
    }
    try {
      const response = await this.axiosInstance.get(url, config);
      return response;
    } catch (error: unknown) {
      throw new CustomError(
        "EXTERNAL_SERVICE_ERROR",
        `Failed to fetch data from ${url}: ${(error as Error).message}`
      );
    }
  }
}

export default HttpService;
