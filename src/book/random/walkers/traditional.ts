import { Point } from "@/lib/physics";

export class TraditionalWalker extends Point {
    update() {
        let xstep = Math.floor(Math.random() * 3) - 1;
        let ystep = Math.floor(Math.random() * 3) - 1;

        console.log(xstep, ystep);
        
        this.x += xstep;
        this.y += ystep;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#FBFFF1";
        super.render(ctx);
    }
}