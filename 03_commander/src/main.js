import preloadDictionary from "./preload/dictionary.js";
import getSuggestion from "./util/approach.js";

const getter = document.querySelector("#getter");

window.addEventListener("load", () => {
  preloadDictionary();
});

getter.addEventListener("keyup", (event) => {
  console.log(getSuggestion(event.target.value));
});
