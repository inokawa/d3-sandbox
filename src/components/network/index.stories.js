import { withCssResources } from "@storybook/addon-cssresources";
import * as d3 from "d3";
import treeInit from "./tree";

export default {
  title: "network",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: `network`,
        code: `<style>
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
      </style>`,
        picked: true,
      },
    ],
  },
};

export const tree = () => {
  const div = document.createElement("div");
  treeInit(div, require("../../resources/flare.json"), 'name');

  return div;
};
