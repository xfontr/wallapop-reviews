import Fastify from "fastify";
import rateLimit from "@fastify/rate-limit";
import ENVIRONMENT from "./constants/environment.js";

const fastify = Fastify();

await fastify.register(rateLimit, {
  max: ENVIRONMENT.rateLimit.max,
  timeWindow: ENVIRONMENT.rateLimit.timeWindow,
});

fastify.listen({ port: ENVIRONMENT.apiPort }, (error, _address) => {
  if (error) process.exit(1);
});

// fastify.get("/ping", async (_request, _reply) => {
//   return "pong\n";
// });
