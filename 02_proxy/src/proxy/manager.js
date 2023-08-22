import { proxyGenerator } from "./generator.js";
import { proxyHandler } from "../handlers/index.js";
import { displayActions } from "../util/prompt.js";

const managerConstructor = (target, actions) => {
  const proxy = proxyGenerator(actions, proxyHandler);
  displayActions(actions, target.parentNode.parentNode);

  const proxyManager = (event) => {
    proxy.value = event.target.value;
  };

  return proxyManager;
};

export default managerConstructor;
