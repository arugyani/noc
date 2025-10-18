import { random } from "@/lib/math";
import { Point } from "@/lib/physics";

export class BiasedWalker extends Point {
    update() {
        let xstep = random(-2.75, 3);
        let ystep = random(-2.75, 3);
        
        this.x += xstep;
        this.y += ystep;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#FBFFF1";
        super.render(ctx);
    }
}