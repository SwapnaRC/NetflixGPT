import OpenAI from "openai";
import { OPENAI_API_KEY  } from "./constants";

const openai = new OpenAI({
  organization: "cant share bcz of privacy policy",
  apiKey: { OPENAI_API_KEY  },
  dangerouslyAllowBrowser: true,
});

export default openai;
