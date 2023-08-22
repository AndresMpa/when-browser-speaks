import config from "../config/index.js";
import voiceHandler from "./voice.js";
import textHandler from "./text.js";

const avalibleHandlers = {
  voice: voiceHandler,
  text: textHandler,
};

export const proxyHandler = avalibleHandlers[config.handler];
