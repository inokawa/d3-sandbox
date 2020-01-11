import { withCssResources } from '@storybook/addon-cssresources';
import init from './barChart.js';
import getRangedData from '../../utils/getRangedData.js';

export default {
  title: 'barChart',
  decorators: [withCssResources],
  parameters: {
    cssresources: [{
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
