import type { FastifySchema } from "fastify";

const postReviewsSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["userId"],
    properties: {
      userId: {
        type: "string",
        minLength: 5,
        maxLength: 20,
      },
    },
  },
};

export default postReviewsSchema;
