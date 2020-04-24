import { withCssResources } from "@storybook/addon-cssresources";
import init from ".";
import { getRangedData } from "../randamDataCreator";

export default {
  title: "chart/pieChart",
  decorators: [withCssResources],
  parameters: {
    cssresources: [
      {
        id: `pieChart`,
        code: `<style>
      </style>`,
        picked: true,
      },
    ],
  },
};

export const normal = () => {
  const div = document.createElement("div");
  const update = init(div, {
    key: "value",
    label: "値",
  });

  update(getRangedData(1000));
  setInterval(() => {
    update(getRangedData(1000));
  }, 1000);
  return div;
};
