export function mainTwo() {

  const canvas = document.querySelector<HTMLCanvasElement>("#playground")!;
  const ctx = canvas.getContext("2d")!;

  const width = 700;
  const height = 700;

  canvas.width = width;
  canvas.height = height;

  let x = Math.random() * width;
  let y = Math.random() * height;
  let dx = (Math.random() - 0.5) * 10;
  let dy = (Math.random() - 0.5) * 10;
  let radius = 30;
  // Runs each frame
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    if (x + radius > width || x - radius < 0) {
      dx *= -1;
    }
    if (y + radius > height || y - radius < 0) {
      dy *= -1;
    }

    x += dx;
    y += dy;
  }

  // animate();

}
