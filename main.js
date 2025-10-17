import { Renderer } from "./modules/renderer.js";
import { Vector } from './modules/vector.js'

const renderer = new Renderer();

const mouse = new Vector(renderer.mouseX, renderer.mouseY);
renderer.addEntity(mouse);

renderer.start();