import { Engine } from "@/core/engine.js";
import { Vector } from '@/physics/vector.js'

const engine = new Engine();
const vector = new Vector(10, 30);

engine.addEntity(vector);
engine.start();