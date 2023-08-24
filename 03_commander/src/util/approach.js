import { config } from "../config/index.js";

const getSuggestion = (value) => {
  const words = localStorage.getItem("dictionary");

  let suggestion = words.find((key) => {
    return Levenshtein.get(key, value) <= config.levenshteinDistance;
  });

  return suggestion;
};

export default {
  getSuggestion,
};
