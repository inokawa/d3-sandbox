import { withCssResources } from '@storybook/addon-cssresources';
import * as d3 from 'd3';
import init from './alphabet';

export default {
  title: 'alphabet',
  decorators: [withCssResources],
  parameters: {
    cssresources: [{
      id: `alphabet`,
      code: `<style>
      text {
        font: bold 28px monospace;
      }
      
      .enter {
        fill: green;
      }
      
      .update {
        fill: #333;
      }
      
      .exit {
        fill: brown;
      }
      </style>`,
      picked: true,
    },
    ],
  },
};

const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const getLetters = () =>
  d3.shuffle(ALPHABETS)
    .slice(0, Math.floor(Math.random() * 26))
    .sort();

export const normal = () => {
  const div = document.createElement('div');
  const update = init(div);

  update(getLetters());
  setInterval(() => {
    update(getLetters());
  }, 1000)
  return div;
};
