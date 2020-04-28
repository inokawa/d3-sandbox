import * as d3 from "d3";

const extentMatrix = (matrix) =>
  d3.extent(
    matrix.reduce((acc, r) => acc.concat(r), []),
    (d) => d
  );

const init = (canvasRef, matrix, width, height) => {
  const canvas = d3
    .select(canvasRef)
    .attr("width", width)
    .attr("height", height);

  const context = canvas.node().getContext("2d");
  const color = d3
    .scaleSequential(d3.interpolateSpectral)
    .domain(extentMatrix(matrix));

  const X = 0;
  const Y = 1;
  const canvasDim = [width, height];

  const heatmapDim = [matrix[0].length, matrix.length];

  const image = context.createImageData(heatmapDim[X], heatmapDim[Y]);
  for (let y = 0, p = -1; y < heatmapDim[Y]; ++y) {
    for (let x = 0; x < heatmapDim[X]; ++x) {
      const weight = matrix[y][x];
      const c = d3.rgb(color(weight));
      image.data[++p] = c.r;
      image.data[++p] = c.g;
      image.data[++p] = c.b;
      image.data[++p] = 255;
    }
  }

  context.putImageData(image, 0, 0);

  const imageObj = new Image();
  imageObj.onload = () => {
    context.scale(canvasDim[X] / heatmapDim[X], canvasDim[Y] / heatmapDim[Y]);
    context.drawImage(imageObj, 0, 0);
  };
  imageObj.src = canvas.node().toDataURL();
};

export default init;
