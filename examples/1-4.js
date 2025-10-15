// class Vector {
//     constructor(x, y, z) {
//         this.x = x;
//         this.y = y;
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
    
//     mouse = new Vector(mouseX, mouseY);
//     center = new Vector(width / 2, height / 2);
// }

// function render() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.lineCap = "round";
//     ctx.lineWidth = "2"

//     ctx.strokeStyle = "#fcfcfc";

//     mouse.sub(center);
//     mouse.mult(2);

//     ctx.beginPath();
//     ctx.moveTo(center.x, center.y);
//     ctx.lineTo(center.x + mouse.x, center.y + mouse.y);
//     ctx.stroke(); 

//     ctx.strokeStyle = "#333333";
//     ctx.lineWidth = "7.5";

//     mouse.mult(0.5);
//     mouse.add(center);

//     ctx.beginPath();
//     ctx.moveTo(center.x, center.y);
//     ctx.lineTo(mouse.x, mouse.y);
//     ctx.stroke();
// }

// function update() {
//     mouse.x = mouseX;
//     mouse.y = mouseY;
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