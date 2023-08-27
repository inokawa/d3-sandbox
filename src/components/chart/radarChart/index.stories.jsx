import { useLayoutEffect, useRef } from "react";
import init from ".";
import { getRangedData } from "../randamDataCreator";

const css = `
.line {
  fill: steelblue;
  fill-opacity: 0.35;
  stroke: steelblue;
  stroke-width: 2px;
}
.x-axis {
  stroke: black;
  opacity: 0.5;    
}`;

export default {
  component: init,
};

export const normal = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      xKey: "name",
      yKey: "value",
      xLabel: "名前",
      yLabel: "値",
    });

    update(getRangedData(1000));
    const id = setInterval(() => {
      update(getRangedData(1000));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
