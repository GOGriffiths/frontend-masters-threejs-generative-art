const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: "A4",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

    //context.beginPath();
    context.arc(
      width * 0.5,
      height * 0.5,
      width * 0.1,
      height * 0.1,
      Math.Pi * 2,
      false
    );
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 40;
    context.strokeStyle = "blue";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
