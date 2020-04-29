import { withCssResources } from "@storybook/addon-cssresources";
import init from ".";

export default {
  title: "path",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: `path`,
        code: `<style>
        path {
          fill: none;
          stroke: steelblue;
          stroke-width: 2.5px;
          stroke-linejoin: round;
          stroke-linecap: round;
        }        
        </style>`,
        picked: true,
      },
    ],
  },
};

export const track = () => {
  let points = require("../../resources/track.csv");
  points.shift(); // remove header
  points = points.map((d, i) => [+d[1], +d[0]]);

  const div = document.createElement("div");
  init(div, points);
  return div;
};
