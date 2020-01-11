import * as d3 from 'd3';

export const getRangedData = (max) => {
  const list = [];
  const arr = d3.range(0, Math.ceil(Math.random() * 30));
  for (let i = 0; i < arr.length; i++) {
    list.push({
      name: arr[i] * 10,
      value: Math.floor(Math.random() * Math.random() * max)
    });
  }
  return list;
};
