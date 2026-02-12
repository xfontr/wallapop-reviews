import OpenAI from "openai";
import ENVIRONMENT from "./shared/constants/environment.js";

const openai = new OpenAI({
  apiKey: ENVIRONMENT.openAi.apiKey,
});

export default openai;
