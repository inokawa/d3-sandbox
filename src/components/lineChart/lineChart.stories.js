
import { withCssResources } from '@storybook/addon-cssresources';
import init from './lineChart.js';
import getRangedData from '../../utils/getRangedData.js';

export default {
  title: 'lineChart',
  decorators: [withCssResources],
  parameters: {
    cssresources: [{
      id: `lineChart`,
      code: `<style>
      .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 2px;
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
      key: 'name',
      name: '名前'
    },
    {
      key: 'value',
      name: '値'
    });

  update(getRangedData(1000));
  setInterval(() => {
    update(getRangedData(1000));
  }, 1000)
  return div;
};
