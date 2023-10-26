import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({});
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  public async get(
    url: string,
    headers?: Record<string, string>
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {};
    if (headers) {
      config.headers = headers;
    }
    return await this.axiosInstance.get(url, config);
  }
}

export default HttpClient;
