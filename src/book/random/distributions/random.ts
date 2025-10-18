import { Entity } from "@/core/entity";
import { Vector } from "@/lib/physics";

export class RandomDistribution extends Entity {
    private total: number;
    private arr: number[];
    private dimensions: Vector;

    private width;

    constructor(total: number, dimensions: Vector) {
        super();

        this.total = total;
        this.dimensions = dimensions;
        this.width = this.dimensions.x / total;
        this.arr = new Array(total).fill(0);
    }

    update() {
        const index = Math.floor(Math.random() * this.total);
        this.arr[index] += 2;
    }

    render(ctx: CanvasRenderingContext2D) {
        this.arr.forEach((val, i) => {
                ctx.fillStyle = "#7f7f7f"
                ctx.lineWidth = 3;
                ctx.fillRect(i * this.width, this.dimensions.y - val, this.width - 1, val)

                ctx.fillStyle =  "#000000";
                ctx.strokeRect(i * this.width, this.dimensions.y - val, this.width - 1, val);
            }
        );
    }
}