import { Entity } from "@/ui/entity.js";
import { createListener } from "@/core/events.js";

export class Engine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entities: Entity[];

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.entities = [];
    }    

    /** PRIMARY */
    start() {
        createListener('resize', this.handleResize);

        const main = () => {
            window.requestAnimationFrame(main);
            this.update();
            this.render();
        }

        this.handleResize();
        main();
    }
    
    update() {
        this.entities.forEach(e => e.update());
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight)
        this.entities.forEach(e => e.render(this.ctx));
    }

    /** HANDLERS */
    handleResize() {
        if (window.devicePixelRatio > 1) {
            this.canvas.width = this.canvas.clientWidth * 2;
            this.canvas.height = this.canvas.clientHeight * 2;
        } else {
            this.canvas.width = this.canvas.offsetHeight;
            this.canvas.height = this.canvas.offsetWidth;
        }
    }

    /** ADD & REMOVE */
    addEntity(e: Entity) {
        this.entities.push(e);
    }
}