import Fastify from "fastify";
import rateLimit from "@fastify/rate-limit";
import ENVIRONMENT from "../constants/environment.js";

const fastify = Fastify({ logger: true });

await fastify.register(rateLimit, {
  max: ENVIRONMENT.rateLimit.max,
  timeWindow: ENVIRONMENT.rateLimit.timeWindow,
});

export default fastify;
