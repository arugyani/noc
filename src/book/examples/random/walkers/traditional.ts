import { Point } from "@/lib/physics";

export class Walker extends Point {
    constructor(x: number, y: number) {
        super(x, y);
    }

    update() {
        let choice = Math.floor(Math.random() * 4);
        
        if (choice === 0) this.x++;
        else if (choice === 1) this.x--;
        else if (choice === 2) this.y++;
        else if (choice === 3) this.y--;
    }
}