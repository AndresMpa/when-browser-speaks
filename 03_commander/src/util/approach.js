import { config } from "../config/index.js";

const words = JSON.parse(localStorage.getItem("dictionary")) || [];

const getSuggestion = (value) => {
  let suggestion = words.filter(
    (word) => Levenshtein.get(word, value) <= config.levenshteinDistance,
  );

  return suggestion;
};

export default getSuggestion;
