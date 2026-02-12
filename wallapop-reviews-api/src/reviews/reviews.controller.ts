import type { FastifyRequest, FastifyReply } from "fastify";
import type { RequestBody } from "./reviews.body.js";
import type { WallapopReview } from "../shared/types/WallapopReview.js";
import { openAiPrompt } from "./reviews.vendors.js";
import {
  AI_SUMMARY_MAX_LENGTH,
  AI_SUMMARY_MIN_LENGTH,
  ENVIRONMENT,
} from "./reviews.constants.js";
import { buildPrompt, buildUrl } from "./reviews.helpers.js";
import * as api from "../shared/helpers/api.js";

export async function postReviews(
  request: FastifyRequest<{ Body: RequestBody }>,
  reply: FastifyReply,
) {
  const { href } = buildUrl(ENVIRONMENT.endpoint, request.body.userId);

  const reviews = await api.get<WallapopReview[]>(href);

  if (!reviews || !reviews.length) return undefined;

  const content = buildPrompt(reviews, ENVIRONMENT.prompt);

  let summary = await openAiPrompt(content);

  if (!summary) return undefined;

  if (
    summary.length < AI_SUMMARY_MIN_LENGTH ||
    summary.length > AI_SUMMARY_MAX_LENGTH
  ) {
    return reply.code(502).send({
      error: "AI response length invalid",
    });
  }

  return summary;
}

export default postReviews;
