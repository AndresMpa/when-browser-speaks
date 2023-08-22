export const displayActions = (raw, target) => {
  // Just to see commands
  const content = Object.keys(raw);

  const label = document.createElement("p");
  label.textContent = `Comandos disponibles: ${content
    .toString()
    .replaceAll(",", ", ")}`;
  label.style.paddingLeft = "15px";

  target.appendChild(label);
};
