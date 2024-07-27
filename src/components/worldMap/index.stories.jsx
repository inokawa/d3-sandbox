import { useLayoutEffect, useRef } from "react";
import { mapInit, globeInit } from ".";
import custom from "../../resources/custom.geo.json";

const css = `
.area {
  stroke: gray;
  fill: #e5e5e5;
  opacity: 0.6;
}

.selected {
  fill: cadetblue;
}`;

export default {
  component: mapInit,
};

export const map = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // https://geojson-maps.ash.ms/
    const json = structuredClone(custom);
    mapInit(ref.current, json.features);
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};

export const globe = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // https://geojson-maps.ash.ms/
    const json = structuredClone(custom);
    globeInit(ref.current, json.features);
  }, []);

  return (
    <>
      <div ref={ref} />
      <style>{css}</style>
    </>
  );
};
