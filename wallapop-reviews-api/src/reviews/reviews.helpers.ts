import type { WallapopReview } from "../shared/types/WallapopReview.js";

export function buildUrl(baseUrl: string, userId: string): URL {
  const url = new URL(baseUrl);

  url.searchParams.set("page", "0");
  url.searchParams.set("order_by", "creation_desc");
  url.searchParams.set("user_id", userId);

  return url;
}

export function buildPrompt(reviews: WallapopReview[], basePrompt: string) {
  return `
${basePrompt}

${reviews.map((comment, i) => `(${i + 1}) ${comment}`).join("\n")}
`;
}
