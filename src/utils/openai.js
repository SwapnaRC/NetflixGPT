import OpenAI from "openai";
import { OPENAI_API_KEY  } from "./constants";

const openai = new OpenAI({
//   organization: "org-ULuqtaAk1nwaN5Ym1EvUXA6N",
  apiKey: { OPENAI_API_KEY  },
  dangerouslyAllowBrowser: true,
});

export default openai;
