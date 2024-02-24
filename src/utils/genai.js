import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEN_AI_API_KEY } from "./constants";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEN_AI_API_KEY);

export default genAI