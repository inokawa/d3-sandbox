import * as d3 from "d3";

function init(elem, points) {
  const width = Math.max(960, window.innerWidth);
  const height = Math.max(500, window.innerHeight);

  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const projection = d3
    .geoMercator()
    .center([-71.01, 42.264])
    .scale((1 << 22) / 2 / Math.PI)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  svg
    .selectAll(".track")
    .data([
      {
        type: "LineString",
        coordinates: points.filter((d, i) => i % 10 == 0),
      },
    ])
    .enter()
    .append("path")
    .attr("class", "track")
    .attr("d", (d) => path(d));
}

export default init;
