export function createButton(text: string, callback: (e?: Event) => void) {
    const button = document.createElement("button");
    const content = document.createTextNode(text);

    button.appendChild(content);
    button.onclick = callback

    const container = document.getElementById("container");
    container.append(button);

    return button;
}