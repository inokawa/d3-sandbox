import { withCssResources } from "@storybook/addon-cssresources";
import init from ".";
import { getRangedData } from "../randamDataCreator";

export default {
  title: "chart/barChart",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: `barChart`,
        code: `<style>
      .plot {
        fill: steelblue;
      }
      </style>`,
        picked: true,
      },
    ],
  },
};

export const normal = () => {
  const div = document.createElement("div");
  const update = init(div, {
    xKey: "name",
    yKey: "value",
    xLabel: "名前",
    yLabel: "値",
  });

  update(getRangedData(1000));
  setInterval(() => {
    update(getRangedData(1000));
  }, 1000);
  return div;
};
