import { createListener } from "@/core/events";
import { Entity } from "./entity";

export type EngineProps = {
    clear?: boolean
};

export class Engine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entity: Entity;

    public width: number;
    public height: number;

    constructor(clear?: boolean) {
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
    
    private update() {
        if (this.entity) this.entity.update();
    }

    private render() {
        if (this.entity) this.entity.render(this.ctx);
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

    /** ENTITIES */
    setEntity(entity: Entity) {
        this.clear();
        this.entity = entity;
    }

    /** RENDERING */
    reset() {
        this.entity = null;
        this.clear();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}