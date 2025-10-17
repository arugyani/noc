import { Engine } from "@/core/engine";
import { Vector } from "@/lib/physics";


const engine = new Engine();
const vector = new Vector(10, 30);

engine.addEntity(vector);
engine.start();