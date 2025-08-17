import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const OPEN_AI = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default OPEN_AI;
