import { Engine } from "@/core/engine";
import { Walker } from "@/book/examples/random/walkers"
import { createButton } from "@/ui";

/** ENGINE */
const engine = new Engine();

/** RANDOM WALKERS */
const traditional = createButton("Traditional", () => {
    engine.setEntity(new Walker(engine.width / 2, engine.height / 2));
})

const clear = createButton("Reset", () => engine.reset())

engine.start();