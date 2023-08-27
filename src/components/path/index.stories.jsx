import { useLayoutEffect, useRef } from "react";
import init from ".";

const css = `
path {
  fill: none;
  stroke: steelblue;
  stroke-width: 2.5px;
  stroke-linejoin: round;
  stroke-linecap: round;

  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  animation: dash 5s linear alternate infinite;
}
  
@keyframes dash {
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
}`;

export default {
  component: init,
};

export const track = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    let points = require("../../resources/track.csv");
    points.shift(); // remove header
    points = points.map((d, i) => [+d[1], +d[0]]);

    init(ref.current, points);
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
