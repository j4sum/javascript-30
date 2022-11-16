const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'square';
ctx.lineCap = 'square';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; // stops func from running when not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // ctx.lineWidth = hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // start from
    ctx.lineTo(e.offsetX, e.offsetY); // go to
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];


    // can reset hue using the if statement
    hue++; //increment hue, second time it is 2, then 3 etc
    if (hue >= 360) {
        hue = 0;
    }

    // incrementing lineWidth from 0 to 100, once it hits 100 flip the direction else if it <= 1 flip the direction again
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++; //for every loop increment the line width
    } else {
        ctx.lineWidth--; // if <=1 decrement line width
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // updates the lastX and lastY
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);