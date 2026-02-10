import type { RateLimitOptions } from "@fastify/rate-limit";

const ENVIRONMENT = {
  apiPort: +(process.env["API_PORT"] ?? 8080),
  rateLimit: {
    max: +(process.env["RATE_LIMIT_MAX"] ?? 5),
    timeWindow: process.env["RATE_LIMIT_TIME_WINDOW"] || "1 minute",
  } satisfies RateLimitOptions,
};

export default ENVIRONMENT;
