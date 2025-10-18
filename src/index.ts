import { createButton } from "@/ui";
import { Engine } from "@/core/engine";
import { Point, Vector } from "@/lib/physics";
import { BiasedWalker, TraditionalWalker, RandomDistribution } from "@/book/random";
import { random } from "./lib/math";

/** ENGINE */
const engine = new Engine();

/** EXAMPLES */
const traditionalWalker = createButton("0.1 - A Traditional Random Walk", () => {
    engine.setEntity(new TraditionalWalker(engine.width / 2, engine.height / 2));
})

const randomDistribution = createButton("0.2 - A Random-Number Distribution", () => {
    engine.setEntity(new RandomDistribution(20, new Vector(engine.width, engine.height)));
})

const rightWalker = createButton("0.3 - A Walker That Tends Right", () => {
    engine.setEntity(new BiasedWalker(
        engine.width / 2, engine.height / 2,
        {
            xStep: () => random(-2.5, 5),
            yStep: () => random(-5, 5)
        }
    ))
})

/** EXERCISES */
const biasedWalker = createButton("0.1 - A Biased Random Walk", () => {
    engine.setEntity(new BiasedWalker(engine.width / 2, engine.height / 2));
})

const clear = createButton("Reset", () => engine.reset())

engine.start();