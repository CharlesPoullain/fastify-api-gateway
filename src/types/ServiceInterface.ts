interface ServiceMethods {
  [methodName: string]: (...args: any[]) => Promise<any>;
}

export default ServiceMethods;
