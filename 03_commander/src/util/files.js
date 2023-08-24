const getFileFromURL = async (url) => {
  const fetchData = await fetch(url);
  const rawResponse = await fetchData.blob();

  return rawResponse;
};

const getFileAsArray = async (data) => {
  let reader = new FileReader();

  reader.onload = () => localStorage.setItem("dictionary", reader.result);
  reader.onerror = () => console.log(reader.error);

  reader.readAsText(data);
};

export { getFileFromURL, getFileAsArray };
