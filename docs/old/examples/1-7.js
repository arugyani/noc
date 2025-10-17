class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x + this.x, center.y + this.y);
        ctx.stroke();
    }

    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }

    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
    }

    mult(n) {
        this.x = this.x * n;
        this.y = this.y * n;
    }

    div(n) {
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
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Mover {
    constructor() {
        this.position = new Vector(Math.random() * width, Math.random() * height);
        this.velocity = new Vector(Math.random() * 4 - 2, Math.random() * 4 - 2);
    }

    update() {
        this.position.add(this.velocity);
        this.checkEdges();
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 48, 0, Math.PI * 2);
        ctx.fill();
    }

    checkEdges() { 
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;

        if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let center = new Vector(width / 2, height / 2);

let mover = new Mover();

/** FUNCTIONS */
function onResize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;


    center.x = width / 2;
    center.y = height / 2;

    if (window.devicePixelRatio > 1) {
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
    } else {
        canvas.width = width;
        canvas.height = height;
    }
}
function setup() {
    onResize();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = "round";
    ctx.strokeStyle = "#fcfcfc";
    ctx.lineWidth = "4"
    mover.render(ctx);
}

function update() {
    mover.update();
}

/** EVENT LISTENERS */
window.addEventListener('resize', onResize);

/** GAME LOOP */
;(() => {
    function main() {
        window.requestAnimationFrame(main);

        update();
        render();
    }

    setup();
    main();
})();