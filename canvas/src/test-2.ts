export function mainTwo() {

  const canvas = document.querySelector<HTMLCanvasElement>("#playground")!;
  const ctx = canvas.getContext("2d")!;

  const width = 700;
  const height = 700;

  canvas.width = width;
  canvas.height = height;

  class Circle {

    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;

    constructor(x: number, y: number, dx: number, dy: number, radius: number) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }

    update() {
      if (this.x + this.radius > width || this.x - this.radius < 0) {
        this.dx *= -1;
      }
      if (this.y + this.radius > height || this.y - this.radius < 0) {
        this.dy *= -1;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }

  let circle = new Circle(200, 200, 4, 5, 30);

  // Runs each frame
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    circle.update();
  }

  // animate();

}
