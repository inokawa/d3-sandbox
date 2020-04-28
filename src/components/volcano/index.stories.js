import { withCssResources } from "@storybook/addon-cssresources";
import { heatmapInit, contourInit } from "./";

export default {
  title: "volcano",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: `volcano`,
        code: `<style>
      path {
        stroke: white;
        stroke-width: 0.1;
      }
      </style>`,
        picked: true,
      },
    ],
  },
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
  heatmapInit(canvas, matrix, data.width * 6, data.height * 6);
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
  contourInit(div, matrix, data.width * 6, data.height * 6);
  return div;
};
