import ENVIRONMENT from "./shared/constants/environment.js";
import reviews from "./reviews/index.js";
import fastify from "./fastify.js";

reviews(fastify);

fastify.listen({ port: ENVIRONMENT.apiPort }, (error) => {
  if (!error) return;

  fastify.log.error(error);
  process.exit(1);
});
