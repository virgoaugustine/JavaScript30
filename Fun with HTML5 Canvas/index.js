const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

let lastX = 0;
let lastY = 0;
let hue = 0;

let isDrawing = false;

function draw(e) {
    if (!isDrawing) return;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue++;

    
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    lastX = e.offsetX
    lastY = e.offsetY
    isDrawing = true;
})
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

