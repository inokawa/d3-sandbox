import * as d3 from "d3";

function init(elem, data) {
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
  root.x0 = height / 2;
  root.y0 = 0;

  const diagonal = (s, d) =>
    `M ${s.y} ${s.x}
        C ${(s.y + d.y) / 2} ${s.x},
          ${(s.y + d.y) / 2} ${d.x},
          ${d.y} ${d.x}`;

  update(root);

  let id = 0;
  const duration = 750;
  return update;

  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  function update(source) {
    const treeData = tree(root);

    // Compute the new tree layout.
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach((d) => {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    const node = graph
      .selectAll("g.node")
      .data(nodes, (d) => d.id || (d.id = ++id));

    // enter
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${source.y0},${source.x0})`)
      .on("click", click);

    nodeEnter
      .append("circle")
      .attr("class", "node")
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
      .select("circle.node")
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

    const link = graph.selectAll("path.link").data(links, (d) => d.id);

    // enter
    const linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", (d) =>
        diagonal({ x: source.x0, y: source.y0 }, { x: source.x0, y: source.y0 })
      );

    // update
    const linkUpdate = linkEnter.merge(link);
    linkUpdate
      .transition()
      .duration(duration)
      .attr("d", (d) => diagonal(d, d.parent));

    // exit
    const linkExit = link
      .exit()
      .transition()
      .duration(duration)
      .attr("d", (d) =>
        diagonal({ x: source.x, y: source.y }, { x: source.x, y: source.y })
      )
      .remove();

    // Store the old positions for transition.
    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }
}

export default init;
