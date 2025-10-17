import { Entity } from "@/core/entity";

export class Point extends Entity {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        super();

        this.x = x;
        this.y = y;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {}
}