
import { withCssResources } from '@storybook/addon-cssresources';
import init from './scatterPlot.js';
import { getRangedData } from '../../utils/randamDataCreator';

export default {
  title: 'scatterPlot',
  decorators: [withCssResources],
  parameters: {
    cssresources: [{
      id: `scatterPlot`,
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
  const div = document.createElement('div');
  init(div, getRangedData(1000),
    {
      key: 'name',
      name: '名前'
    },
    {
      key: 'value',
      name: '値'
    });
  return div;
};
