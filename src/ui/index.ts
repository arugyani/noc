export function createButton(text: string, callback: (e?: Event) => void, containerId: string = "simulation") {
    const button = document.createElement("button");
    const content = document.createTextNode(text);

    button.appendChild(content);
    button.onclick = callback

    const container = document.getElementById(containerId);
    container.append(button);

    return button;
}