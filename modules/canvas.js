import { createListener } from "./events.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');       
const entities = [];

/** GLOBALS */
export let width;
export let height;

/** HANDLERS */
function handleResize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;

    if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
    } else {
        canvas.width = width;
        canvas.height = height;
    }
}

function update() {
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    entities.forEach(entity => {
        ctx.fillStyle = "#333333";
        ctx.beginPath();
        ctx.arc(entity.x, entity.y, 48, 0, Math.PI * 2);
        ctx.fill();
    });
}

export function createEntity(entity) {
    entities.push(entity);
}

export function start() { 
    createListener('resize', handleResize);    

    const main = () => {
        window.requestAnimationFrame(main);

        update();
        render();
    }

    handleResize();
    main();
}