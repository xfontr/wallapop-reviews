export const ENVIRONMENT = {
  endpoint:
    process.env["REVIEWS_ENDPOINT"] ??
    "https://api.wallapop.com/bff/sales/reviews/user-profile",
  prompt:
    process.env["REVIEWS_PROMPT"] ??
    "Write a 2 lines long review about this user based on the following reviews:",
};

export const AI_SUMMARY_MIN_LENGTH = 140;
export const AI_SUMMARY_MAX_LENGTH = 600;
export const AI_MODEL = "gpt-4o-mini";
