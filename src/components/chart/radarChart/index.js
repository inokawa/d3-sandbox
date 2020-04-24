import * as d3 from "d3";
import { setRadialAxis } from "../axis";

/**
 * 棒グラフ
 * @param {*} elem
 * @param {*} param
 */
function init(elem, { xKey, yKey, xLabel, yLabel }) {
  // svg領域設定
  const svgWidth = 600;
  const svgHeight = 400;
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // グラフ領域設定
  const width = svgWidth;
  const height = svgHeight;
  const graph = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // scale設定
  const FULL_CIRCLE = 2 * Math.PI;
  const radius = 200;

  const xScale = d3.scaleBand().range([0, FULL_CIRCLE]);
  const yScale = d3.scaleLinear().range([0, radius]);

  return update;

  function update(data) {
    // ドメイン設定
    xScale.domain(data.map((d) => d[xKey]));
    yScale.domain([0, d3.max(data, (d) => d[yKey])]);

    // データマッピング用関数
    const line = d3
      .areaRadial()
      .angle((d) => xScale(d[xKey]))
      .outerRadius((d) => yScale(d[yKey]))
      .curve(d3.curveLinear);

    // 線の作成
    // join
    const path = graph.selectAll(".line").data([data]);
    // enter+update
    path
      .enter()
      .append("path")
      .attr("class", "line")
      .merge(path)
      .transition()
      .attr("d", line);
    // exit
    path.exit().remove();

    // 軸の作成
    setRadialAxis(graph, data, xScale, xKey, radius, FULL_CIRCLE);
  }
}

export default init;
