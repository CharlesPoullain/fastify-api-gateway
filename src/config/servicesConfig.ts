export const servicesConfig: any = {
  dummyService: {
    baseUrl: "https://dummyjson.com",
    endpoints: {
      getAllProducts: "/products",
      getSingleProduct: (id: number | string) => `/products/${id}`,
    },
  },
  anotherService: {
    baseUrl: "https://another-service.com",
    endpoints: {},
  },
};
