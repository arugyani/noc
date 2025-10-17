export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    render(canvas) {
        const { ctx, width, height } = canvas;

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }

    update() {
        
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
        if (this.mag() > max) {
            this.norm();
            this.mult(max);
        }
    }
}