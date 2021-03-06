import * as d3 from "d3";

function mapInit(elem, data) {
  const margin = { top: 10, right: 20, bottom: 10, left: 20 };
  const width = 1000;
  const height = 600;
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const mapGroup = svg.append("g");

  const projection = d3
    .geoMercator()
    // .scale(340)
    // .center([33, 100])
    .translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);

  // const zoom = d3.zoom()
  //   .scaleExtent([1, 40])
  //   .translateExtent([[0, 0], [width, height]])
  //   .extent([[0, 0], [width, height]])
  //   .on('zoom', zoomed);

  drawGraticule(mapGroup, path);

  let active;

  mapGroup
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "area")
    .call(onMouseEnter, mapGroup)
    .call(onMouseLeave)
    .on("click", (event, d) => {
      if (active === d) return reset();
      mapGroup.selectAll(".active").classed("active", false);
      d3.select("#" + d.properties.name).classed("active", (active = d));

      const b = path.bounds(d);

      mapGroup
        .transition()
        .duration(700)
        .attr(
          "transform",
          `translate(${projection.translate()})scale(${
            0.95 /
            Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height)
          })translate(${-(b[1][0] + b[0][0]) / 2},${-(b[1][1] + b[0][1]) / 2})`
        );
    });

  function reset() {
    mapGroup.selectAll(".active").classed("active", (active = false));
    mapGroup.transition().duration(700).attr("transform", "");
  }
}

function globeInit(elem, data) {
  const width = 960;
  const height = 500;
  const config = {
    speed: 0.005,
    verticalTilt: -30,
    horizontalTilt: 0,
  };

  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  const projection = d3.geoOrthographic();
  const path = d3.geoPath().projection(projection);

  drawGraticule(svg, path);

  svg
    .selectAll(".area")
    .data(data)
    .enter()
    .append("path")
    .attr("class", "area")
    .attr("d", path)
    .call(onMouseEnter, svg)
    .call(onMouseLeave);

  enableRotation();

  function enableRotation() {
    d3.timer((elapsed) => {
      projection.rotate([
        config.speed * elapsed - 120,
        config.verticalTilt,
        config.horizontalTilt,
      ]);
      svg.selectAll("path").attr("d", path);
    });
  }
}

function drawGraticule(area, path) {
  const graticule = d3.geoGraticule().step([10, 10]);

  area
    .append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path)
    .style("fill", "#fff")
    .style("stroke", "#ccc");
}

function onMouseEnter(selection, area) {
  selection.on("mouseenter", (event, d) => {
    d3.select(event.currentTarget).classed("selected", true);
    area
      .append("text")
      .classed("tooltip", true)
      .style("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 300)
      .text(d.properties.name);
  });
}

function onMouseLeave(selection) {
  selection.on("mouseleave", (event, d) => {
    d3.select(event.currentTarget).classed("selected", false);
    d3.selectAll(".tooltip").remove();
  });
}

export { mapInit, globeInit };
