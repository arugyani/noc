import { createButton } from "@/ui";
import { Engine } from "@/core/engine";
import { Vector } from "@/lib/physics";
import { BiasedWalker, TraditionalWalker, RandomDistribution } from "@/book/random";

/** ENGINE */
const engine = new Engine();

/** EXAMPLES */
const traditionalWalker = createButton("0.1 - A Traditional Random Walk", () => {
    engine.setEntity(new TraditionalWalker(engine.width / 2, engine.height / 2));
})

const randomDistribution = createButton("0.2 - A Random-Number Distribution", () => {
    engine.setEntity(new RandomDistribution(20, new Vector(engine.width, engine.height)));
})

/** EXERCISES */
const biasedWalker = createButton("0.1 - A Biased Random Walk", () => {
    engine.setEntity(new BiasedWalker(engine.width / 2, engine.height / 2))
})

const clear = createButton("Reset", () => engine.reset())

engine.start();