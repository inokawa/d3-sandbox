
import { withCssResources } from '@storybook/addon-cssresources';
import init from './worldMap';

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
        fill: pink;
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
  const json = require("./custom.geo.json");
  init(div, json.features);
  return div;
};
