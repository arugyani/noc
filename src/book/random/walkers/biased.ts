import { random } from "@/lib/math";
import { Point } from "@/lib/physics";

export type StepFn = () => number;

type Options = {
    xStep?: StepFn;
    yStep?: StepFn;
}

export class BiasedWalker extends Point {
    private opts;

    constructor(x: number, y: number, opts: Options = {}) {
        super(x, y);
        this.opts = opts;
    } 

    update() {
        let xstep = this.opts.xStep ?? (() => random(-2.75, 3));
        let ystep = this.opts.yStep ?? (() => random(-2.75, 3));
        
        this.x += xstep();
        this.y += ystep();
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#FBFFF1";
        super.render(ctx);
    }
}