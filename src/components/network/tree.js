import * as d3 from "d3";

function init(elem, data, key) {
  const svgWidth = 1200;
  const svgHeight = 1000;
  const svg = d3
    .select(elem)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  const margin = { top: 50, right: 90, bottom: 50, left: 90 };
  const width = svgWidth - margin.right - margin.left;
  const height = svgHeight - margin.top - margin.bottom;
  const graph = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const tree = d3.tree().size([height, width]);
  const root = d3.hierarchy(data, (d) => d.children);

  const duration = 750;

  const diagonal = d3
    .linkHorizontal()
    .x((d) => d.y)
    .y((d) => d.x);

  update(root);

  return update;

  function onClick(event, d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      if (!d._children) return;
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  function update(source) {
    const tempSource = { x: source.x || height / 2, y: source.y || 0 };

    const treeData = tree(root);
    // Compute the new tree layout.
    const nodes = treeData.descendants();
    const links = treeData.links();

    // Normalize for fixed-depth.
    nodes.forEach((d) => {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    const node = graph
      .selectAll("g.node")
      .data(nodes, (d) => d.data[key] + d.depth);

    // enter
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${tempSource.y},${tempSource.x})`)
      .on("click", onClick)
      .on("mouseenter", traceOn)
      .on("mouseleave", traceOff);

    nodeEnter
      .append("circle")
      .attr("r", 1e-6)
      .style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

    nodeEnter
      .append("text")
      .attr("dy", ".35em")
      .attr("x", (d) => (d.children || d._children ? -13 : 13))
      .attr("text-anchor", (d) => (d.children || d._children ? "end" : "start"))
      .text((d) => d.data.name);

    // update
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate
      .transition()
      .duration(duration)
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    nodeUpdate
      .select("circle")
      .style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

    // exit
    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr("transform", (d) => `translate(${source.y},${source.x})`)
      .remove();

    nodeExit.select("circle").attr("r", 1e-6);

    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** links section ***************************

    const link = graph
      .selectAll("path.link")
      .data(
        links,
        (d) =>
          d.target.data[key] +
          d.target.depth +
          d.source.data[key] +
          d.source.depth
      );

    // enter
    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", (d) =>
        diagonal({
          source: tempSource,
          target: tempSource,
        })
      );

    // update
    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d) => diagonal(d));

    // exit
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d) =>
        diagonal({
          source: source,
          target: source,
        })
      )
      .remove();

    function traceOn(event, d) {
      traceBack(d);
      traceForward(d);

      function traceBack(d) {
        linkUpdate
          .filter((l) => l.target === d)
          .classed("trace", true)
          .each((l) => traceBack(l.source));
      }

      function traceForward(d) {
        linkUpdate
          .filter((l) => l.source === d)
          .classed("trace", true)
          .each((l) => traceForward(l.target));
      }
    }

    function traceOff(event, d) {
      linkUpdate.classed("trace", false);
    }
  }
}

export default init;
