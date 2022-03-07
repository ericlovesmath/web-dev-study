const canvas = document.querySelector<HTMLCanvasElement>("#playground")!;
const ctx = canvas.getContext("2d")!;

const width = 700;
const height = 700;

canvas.width = width;
canvas.height = height;

main()

function main() {

  // Rectangles

  ctx.fillRect(50, 50, 50, 50); // x1 y1 width height, top-left is 0
  ctx.strokeStyle = "red";
  ctx.strokeRect(200, 200, 250, 250);
  ctx.strokeStyle = "blue";
  ctx.strokeRect(225, 225, 250, 250);

  // Paths

  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(125, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(200, 150);
  ctx.stroke();

  // Event Listeners with Mouse

  let painting = false;

  function startPosition(e: MouseEvent) {
    painting = true
    draw(e); // For when you mousedown but not mousemove
  };

  function finishedPosition() {
    painting = false
    ctx.beginPath(); // Start of new line
  };

  const rect = canvas.getBoundingClientRect(); // Pos of canvas

  function draw(e: MouseEvent) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();

    // For smoother experience, draw line to new pos instead of dot
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  ctx.beginPath();
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

}
