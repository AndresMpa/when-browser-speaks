import config from "./config/index.js"

import spanishActions from "./actions/spanish.js";
import englishActions from "./actions/english.js";
import proxyManager from "./proxy/manager.js";

import { languageDetector } from "./util/language.js";

const getter = document.querySelector("#getter");
let actions;

if (languageDetector(config.defaultLanguge)) {
  actions = spanishActions(getter);
} else {
  actions = englishActions(getter);
}

getter.addEventListener("keyup", proxyManager(getter, actions), false);
