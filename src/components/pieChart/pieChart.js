import * as d3 from 'd3';

/**
 * 円グラフ
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
  const width = svgWidth;
  const height = svgHeight;
  const graph = svg
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  // scale設定
  const cScale = d3.scaleOrdinal(d3.schemePaired);

  // angle データ生成関数
  const pie = d3.pie()
    .value(d => d[yParam.key]);

  // データマッピング用関数
  const radius = Math.min(width, height) / 2;
  const arc = d3.arc()
    .outerRadius(radius - 20)
    .innerRadius(radius - 100);
  const text = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  return update;

  function update(data) {
    // join
    const pieGroup = graph.selectAll('.pie')
      .data(pie(data), d => d.data[yParam.key]);

    const pieGroupEnter = pieGroup.enter()
      .append('g')
      .attr('class', 'pie')

    // update path
    pieGroupEnter
      .append('path')
      .attr('d', '')
      .merge(pieGroup.selectAll('path'))
      .attr('fill', d => cScale(d.index))
      .transition()
      .attrTween('d', d => {
        const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return t => arc(i(t));
      });

    // update text
    pieGroupEnter
      .append('text')
      .attr('fill', 'black')
      .attr('dy', '5px')
      .attr('font', '10px')
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${text.centroid(d)})`)
      .text(d => d.data[yParam.key]);

    // exit
    pieGroup.exit()
      .remove();
  }
}

export default init;
