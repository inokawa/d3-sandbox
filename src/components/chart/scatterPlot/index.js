import * as d3 from "d3";
import { setAxis } from "../axis";

/**
 * 散布図
 * @param {*} elem
 * @param {*} param
 */
function init(elem, { xKey, yKey, xLabel, yLabel, name }) {
  // svg領域設定
  const svgWidth = 600;
  const svgHeight = 400;
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // グラフ領域設定
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = svgWidth - margin.right - margin.left;
  const height = svgHeight - margin.top - margin.bottom;
  const graph = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // scale設定
  const xScale = d3.scaleLinear().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  return update;

  function update(data) {
    // ドメイン設定
    xScale.domain(d3.extent(data, (d) => d[xKey]));
    yScale.domain([0, d3.max(data, (d) => d[yKey])]);

    // 軸の作成
    setAxis(graph, xScale, yScale, xLabel, yLabel, width, height, margin);

    // 散布図の作成
    const svgData = graph.selectAll("circle").data(data, (d) => d[name]);

    svgData
      .enter()
      .append("circle")
      .merge(svgData)
      .transition()
      .attr("r", 3)
      .attr("cx", (d) => xScale(d[xKey]))
      .attr("cy", (d) => yScale(d[yKey]))
      .attr("class", "plot");

    svgData.exit().remove();
  }
}

export default init;
