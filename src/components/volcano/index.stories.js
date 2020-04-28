import { heatmapInit, contourInit } from "./";

export default {
  title: "volcano",
};

export const heatmap = () => {
  const canvas = document.createElement("canvas");

  // https://en.wikipedia.org/wiki/Maungawhau
  const data = require("../../resources/volcano.json");
  const matrix = [];
  data.values.forEach((v, i) => {
    if (i % data.width === 0) {
      matrix.push([]);
    }
    matrix[matrix.length - 1].push(v);
  });
  heatmapInit(canvas, matrix, data.width * 4, data.height * 4);
  return canvas;
};

export const contour = () => {
  const div = document.createElement("div");

  // https://en.wikipedia.org/wiki/Maungawhau
  const data = require("../../resources/volcano.json");
  const matrix = [];
  data.values.forEach((v, i) => {
    if (i % data.width === 0) {
      matrix.push([]);
    }
    matrix[matrix.length - 1].push(v);
  });
  contourInit(div, matrix, data.width * 4, data.height * 4);
  return div;
};
