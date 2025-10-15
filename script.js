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

    limit(max) {
        console.log(max, this.mag());
        if (this.mag() > max) {
            this.norm();
            this.mult(max);
        }
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let center = new Vector(width / 2, height / 2);

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
}

function update() {
}

function onPress(event) {
    const { code } = event;

    if (code == "ArrowUp") vehicle.speedUp();
    else if (code == "ArrowDown") vehicle.slowDown();
}

/** EVENT LISTENERS */
window.addEventListener('resize', onResize);
window.addEventListener("keydown", onPress);

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