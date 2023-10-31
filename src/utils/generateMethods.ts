import HttpService from "../services/HttpService";

export const generateMethods = (httpService: HttpService, endpoints: any) => {
  const methods: any = {};
  for (const [methodName, endpoint] of Object.entries(endpoints)) {
    if (typeof endpoint === "function") {
      methods[methodName] = (...args: any[]) =>
        httpService.get(endpoint(...args));
    } else if (typeof endpoint === "string") {
      methods[methodName] = () => httpService.get(endpoint);
    }
  }
  return methods;
};
