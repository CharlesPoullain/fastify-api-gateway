import createServer from "./app";

const start = async (): Promise<void> => {
  try {
    const server = createServer({
      logger: true,
    });
    await server.listen({ port: 8080 });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
