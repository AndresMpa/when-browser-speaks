const getFileFromURL = async (url) => {
  const fetchData = await fetch(url);
  const rawResponse = await fetchData.blob();

  return rawResponse;
};

const getFileAsArray = async (data) => {
  let reader = new FileReader();

  reader.onload = () => {
    try {
      localStorage.setItem(
        "dictionary",
        JSON.stringify(reader.result.split(" ")),
      );
    } catch (error) {
      console.error(error);
    }
  };
  reader.onerror = () => console.log(reader.error);

  reader.readAsText(data);
};

export { getFileFromURL, getFileAsArray };
