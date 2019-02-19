const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

//react style fn setch ↓↓
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
