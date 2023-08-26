const replaceContent = (target, newData, tag = "li") => {
  const oldData = target.textContent;
  target.innerHTML = "";

  newData.forEach((data) => (target.innerHTML += `<${tag}>${data}</${tag}>`));

  return oldData;
};

const contentStream = (target, newData, prev = "", next = "") => {
  target.textContent = `${prev} ${newData} ${next}`;
};

export { replaceContent, contentStream };
