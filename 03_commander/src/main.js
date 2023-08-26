import preloadDictionary from "./preload/dictionary.js";
import getterHandler from "./event/keyboard.js";

const getter = document.querySelector("#getter");

window.addEventListener("load", () => preloadDictionary());

getter.addEventListener("keyup", (event) => getterHandler(event.target.value));
