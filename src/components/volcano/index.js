import * as d3 from "d3";

const flatten = (matrix) => matrix.reduce((acc, r) => acc.concat(r), []);

const extentMatrix = (matrix) => d3.extent(flatten(matrix), (d) => d);

const heatmapInit = (canvasRef, matrix, width, height) => {
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
  const matrixDim = [matrix[0].length, matrix.length];

  const image = context.createImageData(matrixDim[X], matrixDim[Y]);
  for (let y = 0, p = -1; y < matrixDim[Y]; ++y) {
    for (let x = 0; x < matrixDim[X]; ++x) {
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
    context.scale(canvasDim[X] / matrixDim[X], canvasDim[Y] / matrixDim[Y]);
    context.drawImage(imageObj, 0, 0);
  };
  imageObj.src = canvas.node().toDataURL();
};

const contourInit = (elem, matrix, width, height) => {
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", width)
    .attr("height", height);

  const X = 0;
  const Y = 1;
  const matrixDim = [matrix[0].length, matrix.length];
  const extent = extentMatrix(matrix);

  const graph = svg
    .append("g")
    .attr(
      "transform",
      `scale(${width / matrixDim[X]},${height / matrixDim[Y]})`
    );

  const path = d3.geoPath();
  const contours = d3
    .contours()
    .size([matrixDim[X], matrixDim[Y]])
    .thresholds(d3.range(extent[0], extent[1], 10));

  const color = d3
    .scaleSequential(d3.interpolateSpectral)
    .domain(extentMatrix(matrix));

  graph
    .selectAll("path")
    .data(contours(flatten(matrix)))
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", (d) => color(d.value))
    .attr("stroke", "white")
    .attr("stroke-width", 0.03);
};

export { heatmapInit, contourInit };
