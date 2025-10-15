import { start, width, height } from "./modules/canvas.js";
import { Vector } from "./modules/vector.js";

import { createListener } from "./modules/events.js";
import { createEntity } from "./modules/canvas.js";

let mouseX, mouseY;

const mouse = new Vector(mouseX, mouseY);
const center = new Vector(width / 2, height / 2);

createListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

console.log(width, height);

createEntity(mouse);
createEntity(center);

start();