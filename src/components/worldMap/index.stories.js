
import { withCssResources } from '@storybook/addon-cssresources';
import init from './';

export default {
  title: 'worldMap',
  decorators: [withCssResources],
  parameters: {
    cssresources: [{
      id: `worldMap`,
      code: `<style>
      .area {
        stroke: gray;
        fill: #e5e5e5;
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

export const normal = () => {
  const div = document.createElement('div');

  // https://geojson-maps.ash.ms/
  const json = require("../../resources/custom.geo.json");
  init(div, json.features);
  return div;
};
