// class Vector {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     render(ctx) {
//         ctx.beginPath();
//         ctx.moveTo(center.x, center.y);
//         ctx.lineTo(center.x + this.x, center.y + this.y);
//         ctx.stroke();
//     }

//     add(v) {
//         this.x = this.x + v.x;
//         this.y = this.y + v.y;
//     }

//     sub(v) {
//         this.x = this.x - v.x;
//         this.y = this.y - v.y;
//     }

//     mult(n) {
//         this.x = this.x * n;
//         this.y = this.y * n;
//     }

//     div(n) {
//         this.x = this.x / n;
//         this.y = this.y / n;
//     }

//     mag() {
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// }

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext("2d");

// let width = canvas.offsetWidth;
// let height = canvas.offsetHeight;

// let mouseX;
// let mouseY;

// /** DEMOS */
// let mouse;
// let center;
// let scaled;

// /** FUNCTIONS */
// function onResize() {
//     width = canvas.offsetWidth;
//     height = canvas.offsetHeight;

//     if (window.devicePixelRatio > 1) {
//         canvas.width = canvas.clientWidth * 2;
//         canvas.height = canvas.clientHeight * 2;
//     } else {
//         canvas.width = width;
//         canvas.height = height;
//     }
// }

// function onMove(event) {
//     const { clientX, clientY } = event;
//     mouseX = clientX;
//     mouseY = clientY;
// }

// function setup() {
//     onResize();
    
//     center = new Point(width / 2, height / 2);
//     mouse = new Vector(mouseX - center.x, mouseY - center.y);
// }

// function render() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.strokeStyle = "#333333";
//     ctx.lineCap = "round";
//     ctx.lineWidth = "2"

//     mouse.render(ctx);
//     ctx.fillRect(10, 10, mouse.mag(), 25);
// }

// function update() {
//     mouse.x = mouseX - center.x;
//     mouse.y = mouseY - center.y;
// }

// /** EVENT LISTENERS */
// window.addEventListener('resize', onResize);
// window.addEventListener('mousemove', onMove)

// /** GAME LOOP */
// ;(() => {
//     function main() {
//         window.requestAnimationFrame(main);

//         update();
//         render();
//     }

//     setup();
//     main();
// })();