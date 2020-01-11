
import { withCssResources } from '@storybook/addon-cssresources';
import init from './scatterPlot.js';
import { getRandom2dData } from '../../utils/randamDataCreator';

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
  const update = init(div,
    {
      key: 'x',
      name: '名前'
    },
    {
      key: 'y',
      name: '値'
    }, 'name');

  update(getRandom2dData(100, 1000));
  setInterval(() => {
    update(getRandom2dData(100, 1000));
  }, 1000)
  return div;
};
