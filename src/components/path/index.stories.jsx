import { useLayoutEffect, useRef } from "react";
import init from ".";
import trackCsv from "../../resources/track.csv?raw";
import { csvParse } from "d3";

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
    let points = csvParse(trackCsv);
    points = points.map((d, i) => [+d.longitude, +d.latitude]);
    console.log(points);

    init(ref.current, points);
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
