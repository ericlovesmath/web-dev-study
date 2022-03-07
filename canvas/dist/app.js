"use strict";
const canvas = document.querySelector("#playground");
const ctx = canvas.getContext("2d");
const width = 700;
const height = 700;
canvas.width = width;
canvas.height = height;
main();
function main() {
    ctx.fillRect(50, 50, 50, 50);
    ctx.strokeStyle = "red";
    ctx.strokeRect(200, 200, 250, 250);
    ctx.strokeStyle = "blue";
    ctx.strokeRect(225, 225, 250, 250);
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(125, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.stroke();
    let painting = false;
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    ;
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    ;
    const rect = canvas.getBoundingClientRect();
    function draw(e) {
        if (!painting)
            return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
    ctx.beginPath();
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
}
//# sourceMappingURL=app.js.map