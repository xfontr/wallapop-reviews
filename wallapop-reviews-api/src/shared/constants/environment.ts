import type { RateLimitOptions } from "@fastify/rate-limit";

const ENVIRONMENT = {
  apiPort: +(process.env["API_PORT"] ?? 8080),
  rateLimit: {
    max: +(process.env["RATE_LIMIT_MAX"] ?? 5),
    timeWindow: process.env["RATE_LIMIT_TIME_WINDOW"] || "1 minute",
  } satisfies RateLimitOptions,
  openAi: {
    apiKey: process.env["OPENAI_API_KEY"] ?? "",
  },
  wallapop: {
    reviewsEndpoint:
      process.env["REVIEWS_ENDPOINT"] ??
      "https://api.wallapop.com/bff/sales/reviews/user-profile",
  },
};

export default ENVIRONMENT;
