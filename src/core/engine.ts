import { createListener } from "@/core/events";
import { Point } from "@/lib/physics";

export class Engine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public width: number;
    public height: number;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        
        const ctx = this.canvas.getContext('2d');
        if (!ctx) throw new Error('2D context not available!');
        this.ctx = ctx;

        createListener('resize', () => this.handleResize());
        this.handleResize();
    }    

    /** PRIMARY */
    start(callback?: () => void) {
        const main = () => {
            window.requestAnimationFrame(main);

            if (callback) callback();
            
            this.update();
            this.render();
        }

        main();
    }
    
    private update() {}

    private render() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    /** HANDLERS */
    private handleResize() {
        const cssWidth = this.canvas.clientWidth;
        const cssHeight = this.canvas.clientHeight;
        const dpr = window.devicePixelRatio || 1;

        this.canvas.width = Math.round(cssWidth * dpr);
        this.canvas.height = Math.round(cssHeight * dpr);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(dpr, dpr);

        this.width = cssWidth;
        this.height = cssHeight;
    }
}