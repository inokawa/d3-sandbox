import hello from './hello.html';

export default {
  title: 'Demo',
};

export const heading = () => hello;

export const button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
