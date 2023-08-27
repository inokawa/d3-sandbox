import * as d3 from "d3";
import treeInit from "./tree";
import networkInit, { radialInit } from "./network";
import { useLayoutEffect, useRef } from "react";

const css = `
.node circle {
  r: 4px;
  fill: #fff;
  stroke: steelblue;
  stroke-width: 2px;
  cursor: pointer;
}

.node text {
  font: 10px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 1.5px;
  stroke-opacity: 0.4px;
}

.link.trace {
  stroke: turquoise;
}`;

export default {
  component: networkInit,
};

export const tree = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    treeInit(ref.current, require("../../resources/flare.json"), "name");
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};

export const network = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    networkInit(ref.current, require("../../resources/miserables.json"));
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};

export const radial = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    radialInit(ref.current, require("../../resources/miserables.json"));
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
