import * as d3 from 'd3';

function init(elem) {
  // svg領域設定
  const svgWidth = 600;
  const svgHeight = 400;
  const svg = d3.select(elem)
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  // グラフ領域設定
  const margin = { top: 50, right: 25, bottom: 50, left: 25 };
  const width = svgWidth - margin.right - margin.left;
  const height = svgHeight - margin.top - margin.bottom;
  const graph = svg
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  return update;

  function update(data) {
    const t = d3.transition()
      .duration(750);

    // join
    const text = graph.selectAll('text')
      .data(data, d => d);
    // update
    text
      .classed('update', true)
      .transition(t)
      .attr('x', (d, i) => i * 20)
      .attr('y', 0);
    // enter
    text.enter()
      .append('text')
      .text(d => d)
      .classed('enter', true)
      .attr('x', (d, i) => i * 20)
      .attr('y', -20)
      .attr('fill-opacity', 0)
      .transition(t)
      .attr('y', 0)
      .attr('fill-opacity', 1);
    // exit
    text.exit()
      .classed('exit', true)
      .transition(t)
      .attr('y', 20)
      .attr('fill-opacity', 0)
      .remove();
  };
}

export default init;
