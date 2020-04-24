import * as d3 from 'd3';
import setAxis from '../setAxis';

/**
 * 線グラフ
 * @param {*} elem
 * @param {*} xParam
 * @param {*} yParam
 */
function init(elem, xParam, yParam) {
  // svg領域設定
  const svgWidth = 600;
  const svgHeight = 400;
  const svg = d3.select(elem)
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

  // グラフ領域設定
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = svgWidth - margin.right - margin.left;
  const height = svgHeight - margin.top - margin.bottom;
  const graph = svg
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // scale設定
  const xScale = d3.scaleLinear().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  return update;

  function update(data) {
    // ドメイン設定
    xScale.domain(d3.extent(data, d => d[xParam.key]));
    yScale.domain([0, d3.max(data, d => d[yParam.key])]);

    // 軸の作成
    setAxis(graph, xScale, yScale, xParam.name, yParam.name, width, height, margin);

    // データマッピング用関数
    const line = d3.line()
      .x(d => xScale(d[xParam.key]))
      .y(d => yScale(d[yParam.key]));

    // 線の作成
    // join
    const path = graph.selectAll('.line')
      .data([data]);
    // enter+update
    path.enter()
      .append('path')
      .attr('class', 'line')
      .merge(path)
      .transition()
      .attr('d', line);
    // exit
    path.exit()
      .remove();
  }
}

export default init;
