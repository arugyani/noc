import { Entity } from "@/core/entity";

export class Vector extends Entity {
    private origin: [number, number];

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        super();

        this.x = x;
        this.y = y;
        this.origin = [0, 0];
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.origin[0], this.origin[1]);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }

    update() {}

    /** MATH */
    add(v: Vector) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }

    sub(v: Vector) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
    }

    mult(n: number) {
        this.x = this.x * n;
        this.y = this.y * n;
    }

    div(n: number) {
        this.x = this.x / n;
        this.y = this.y / n;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    norm() {
        let m = this.mag();

        if (m > 0) {
            this.div(m);
        }
    }

    limit(max: number) {
        if (this.mag() > max) {
            this.norm();
            this.mult(max);
        }
    }
    
    /** UTIL */
    setOrigin(x: number, y: number) {
        this.origin = [x, y];
    }

    clearOrigin() {
        this.origin = [0, 0];
    }
}