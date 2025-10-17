import { createListener } from "./events.js";

export class Renderer {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d');

        this.entities = [];
    }    

    /** PRIMARY */
    start() {
        createListener('resize', this.handleResize);
        createListener('mousemouse', this.handleMouse)

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
        this.ctx.clearRect(0, 0, this.width, this.height)

        this.entities.forEach(e => e.render(this));
    }

    /** HANDLERS */
    handleResize() {
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;

        if (window.devicePixelRatio > 1) {
            canvas.width = canvas.clientWidth * 2;
            canvas.height = canvas.clientHeight * 2;
        } else {
            canvas.width = this.width;
            canvas.height = this.height;
        }
    }

    handleMouse(e) {
        this.mouseX = e.target.mouseX;
        this.mouseY = e.target.mouseY;
    }

    /** ADD & REMOVE */
    addEntity(entity) {
        this.entities.push(entity);
    }

    removeEntity(entity) {
        this.entities = this.entities.filter(e => e == entity);
    }
}