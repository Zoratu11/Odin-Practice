export default function TextContainer(text) {
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flexContainer");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    const textElement = document.createElement("p");
    textElement.textContent = text;
    textElement.classList.add("hometext");

    textContainer.appendChild(textElement);
    flexContainer.appendChild(textContainer);
    return flexContainer;
}