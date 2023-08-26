import { replaceContent, contentStream } from "../util/content.js";
import getSuggestion from "../util/approach.js";

const outputTitle = document.querySelector("#outputTitle");
const outputList = document.querySelector("#outputList");
let suggestionsList = {};
let currentLabel;

const getterHandler = (label) => {
  contentStream(outputTitle, label, "Suggestions for");

  currentLabel = label.split(" ");
  currentLabel.pop();

  currentLabel.forEach((word) => (suggestionsList[word] = getSuggestion(word)));

  Object.keys(suggestionsList).forEach((word) =>
    replaceContent(outputList, suggestionsList[word]),
  );
};

export default getterHandler;
