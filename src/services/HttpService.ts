import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
      if (error instanceof Error) {
        throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
      } else {
        // Vous pouvez choisir de lancer une nouvelle erreur ou de gérer l'erreur différemment
        throw new Error(`Failed to fetch data from ${url}`);
      }
    }
  }
}

export default HttpService;
