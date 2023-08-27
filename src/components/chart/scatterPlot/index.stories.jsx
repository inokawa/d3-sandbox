import { useRef, useLayoutEffect } from "react";
import init from ".";
import { getRandom2dData } from "../randamDataCreator";

const css = `.plot {
  fill: steelblue;
}`;

export default {
  component: init,
};

export const normal = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      xKey: "x",
      xLabel: "名前",
      yKey: "y",
      yLabel: "値",
      name: "name",
    });

    update(getRandom2dData(100, 1000));
    const id = setInterval(() => {
      update(getRandom2dData(100, 1000));
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
