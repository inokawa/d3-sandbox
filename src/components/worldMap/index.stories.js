import { withCssResources } from "@storybook/addon-cssresources";
import { mapInit, globeInit } from "./";

export default {
  title: "worldMap",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: "worldMap",
        code: `<style>
      .area {
        stroke: gray;
        fill: #e5e5e5;
        opacity: 0.6;
      }
    
      .selected {
        fill: cadetblue;
      }
      </style>`,
        picked: true,
      },
    ],
  },
};

export const map = () => {
  const div = document.createElement("div");

  // https://geojson-maps.ash.ms/
  const json = require("../../resources/custom.geo.json");
  mapInit(div, json.features);
  return div;
};

export const globe = () => {
  const div = document.createElement("div");

  // https://geojson-maps.ash.ms/
  const json = require("../../resources/custom.geo.json");
  globeInit(div, json.features);
  return div;
};
