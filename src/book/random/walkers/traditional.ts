import { Point } from "@/lib/physics";

export class TraditionalWalker extends Point {
    constructor(x: number, y: number) {
        super(x, y);
    }

    update() {
        let xstep = Math.floor(Math.random() * 3) - 1;
        let ystep = Math.floor(Math.random() * 3) - 1;
        
        this.x += xstep;
        this.y += ystep;
    }
}