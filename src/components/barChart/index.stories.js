import { withCssResources } from '@storybook/addon-cssresources';
import init from './';
import { getRangedData } from '../../utils/randamDataCreator';

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
