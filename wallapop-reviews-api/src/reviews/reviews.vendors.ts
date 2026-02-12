import OpenAI from "openai";
import ENVIRONMENT from "../shared/constants/environment.js";
import { AI_MODEL } from "./reviews.constants.js";

const openai = new OpenAI({
  apiKey: ENVIRONMENT.openAi.apiKey,
});

export async function openAiPrompt(
  content: string,
): Promise<string | undefined> {
  const { choices } = await openai.chat.completions.create({
    model: AI_MODEL,
    messages: [{ role: "user", content }],
  });

  return choices[0]?.message?.content?.trim();
}
