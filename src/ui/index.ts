export function setupUi() {
    const button = document.createElement("button");
    const content = document.createTextNode("Vectors");

    button.appendChild(content);

    const root = document.getElementById("root");
    root.prepend(button);
}