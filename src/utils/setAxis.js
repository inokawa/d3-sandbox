import * as d3 from 'd3';

export default function setAxis(svg, xScale, yScale, xName, yName, width, height, margin) {
  const xAxis = d3.axisBottom(xScale)
  // .tickSizeInner(-height) // グリッドを描画;
  const x = svg.selectAll('.x-axis')
    .data(['dummy']);
  x.enter()
    .append('g')
    .merge(x)
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .transition()
    .call(xAxis);
  //   // 凡例
  // x.append('text')
  //   .attr('fill', 'black')
  //   .attr('x', (width - margin.left - margin.right) / 2 + margin.left)
  //   .attr('y', 35)
  //   .attr('text-anchor', 'middle')
  //   .attr('font-size', '10pt')
  //   .attr('font-weight', 'bold')
  //   .text(xName);

  const yAxis = d3.axisLeft(yScale)
  // .tickSizeInner(-width) // グリッドを描画;
  const y = svg.selectAll('.y-axis')
    .data(['dummy']);
  y.enter()
    .append('g')
    .merge(y)
    .attr('class', 'y-axis')
    .transition()
    // .attr('transform', 'translate(' + margin.left  + ',0)')
    .call(yAxis);
  // // 凡例
  // .append('text')
  // .attr('fill', 'black')
  // .attr('text-anchor', 'middle')
  // .attr('x', -(height - margin.top - margin.bottom) / 2 - margin.top)
  // .attr('y', -35)
  // .attr('transform', 'rotate(-90)')
  // .attr('font-weight', 'bold')
  // .attr('font-size', '10pt')
  // .text(yName);
}
