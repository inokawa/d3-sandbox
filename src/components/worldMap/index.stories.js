
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
        stroke: #000;
        fill: #ccc;
      }
    
      .selected {
        fill: darkcyan;
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
