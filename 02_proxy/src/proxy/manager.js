import { proxyGenerator } from "./generator.js";
import textProxy from "../handlers/text.js";
import { displayActions } from "../util/prompt.js";

const managerConstructor = (target, actions) => {
  const proxy = proxyGenerator(actions, textProxy);
  displayActions(actions, target.parentNode.parentNode);

  const proxyManager = (event) => {
    proxy.value = event.target.value;
  };

  return proxyManager;
};

export default managerConstructor;
