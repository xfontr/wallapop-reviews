import type { FastifyInstance } from "fastify";
import postReviews from "./reviews.controller.js";
import schema from "./reviews.schema.js";

async function reviews(fastify: FastifyInstance) {
  fastify.post("/", { schema }, postReviews);
}

export default reviews;
