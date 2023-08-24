import { config } from "../config/index.js";

import { getFileFromURL, getFileAsArray } from "../util/files.js";

const preloadDictionary = () => {
  if (localStorage.getItem("dictionary") == null) {
    getFileFromURL(config.origin).then((data) => getFileAsArray(data));
  }
};

export default preloadDictionary;
