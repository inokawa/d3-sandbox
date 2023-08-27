import { useLayoutEffect, useRef } from "react";
import { heatmapInit, contourInit } from ".";

const css = `
path {
  stroke: white;
  stroke-width: 0.1;
}`;

export default {
  component: heatmapInit,
};

export const heatmap = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // https://en.wikipedia.org/wiki/Maungawhau
    const data = require("../../resources/volcano.json");
    const matrix = [];
    data.values.forEach((v, i) => {
      if (i % data.width === 0) {
        matrix.push([]);
      }
      matrix[matrix.length - 1].push(v);
    });
    heatmapInit(ref.current, matrix, data.width * 6, data.height * 6);
  }, []);

  return (
    <>
      <canvas ref={ref} />
      <style>{css}</style>
    </>
  );
};

export const contour = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    // https://en.wikipedia.org/wiki/Maungawhau
    const data = require("../../resources/volcano.json");
    const matrix = [];
    data.values.forEach((v, i) => {
      if (i % data.width === 0) {
        matrix.push([]);
      }
      matrix[matrix.length - 1].push(v);
    });
    contourInit(ref.current, matrix, data.width * 6, data.height * 6);
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
