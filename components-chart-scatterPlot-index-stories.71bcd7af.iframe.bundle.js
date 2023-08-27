"use strict";(self.webpackChunkd3_sandbox=self.webpackChunkd3_sandbox||[]).push([[894],{"./src/components/chart/axis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>setAxis,a:()=>setRadialAxis});var d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/index.js");function setAxis(svg,xScale,yScale,xName,yName,width,height,margin){const xAxis=d3__WEBPACK_IMPORTED_MODULE_0__.LLu(xScale),x=svg.selectAll(".x-axis").data(["dummy"]);x.enter().append("g").merge(x).attr("class","x-axis").attr("transform",`translate(0,${height})`).transition().call(xAxis);const yAxis=d3__WEBPACK_IMPORTED_MODULE_0__.y4O(yScale),y=svg.selectAll(".y-axis").data(["dummy"]);y.enter().append("g").merge(y).attr("class","y-axis").transition().call(yAxis)}function setRadialAxis(svg,data,xScale,xKey,radius,fullCircle){const xAxis=svg.selectAll(".x-axis").data(data,(d=>d[xKey])),xAxisEnter=xAxis.enter().append("g").attr("class","x-axis");xAxisEnter.append("line").attr("y2",-radius),xAxisEnter.merge(xAxis).transition().attr("transform",(d=>`rotate(${360*xScale(d[xKey])/fullCircle})`)),xAxis.exit().remove()}},"./src/components/chart/randamDataCreator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>getRandom2dData,K:()=>getRangedData});var d3__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3/index.js");const getRangedData=max=>{const list=[],arr=d3__WEBPACK_IMPORTED_MODULE_0__.w6H(0,Math.ceil(30*Math.random()));for(let i=0;i<arr.length;i++)list.push({name:10*arr[i],value:Math.floor(Math.random()*Math.random()*max)});return list},getRandom2dData=(xMax,yMax)=>{const list=[],length=Math.ceil(50*Math.random());for(let i=0;i<length;i++)list.push({x:Math.floor(Math.random()*Math.random()*xMax),y:Math.floor(Math.random()*Math.random()*yMax),name:i});return d3__WEBPACK_IMPORTED_MODULE_0__.TVQ(list),list}},"./src/components/chart/scatterPlot/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories,normal:()=>normal});var react=__webpack_require__("./node_modules/react/index.js"),d3=__webpack_require__("./node_modules/d3/index.js"),axis=__webpack_require__("./src/components/chart/axis.js");const scatterPlot=function init(elem,{xKey,yKey,xLabel,yLabel,name}){const svg=d3.Ys(elem).append("svg").attr("width",600).attr("height",400),margin={top:50,right:50,bottom:50,left:50},width=600-margin.right-margin.left,height=400-margin.top-margin.bottom,graph=svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`),xScale=d3.BYU().range([0,width]),yScale=d3.BYU().range([height,0]);return function update(data){xScale.domain(d3.Wem(data,(d=>d[xKey]))),yScale.domain([0,d3.Fp7(data,(d=>d[yKey]))]),(0,axis.Y)(graph,xScale,yScale,xLabel,yLabel,width,height,margin);const svgData=graph.selectAll("circle").data(data,(d=>d[name]));svgData.enter().append("circle").merge(svgData).transition().attr("r",3).attr("cx",(d=>xScale(d[xKey]))).attr("cy",(d=>yScale(d[yKey]))).attr("class","plot"),svgData.exit().remove()}};var randamDataCreator=__webpack_require__("./src/components/chart/randamDataCreator.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_stories={component:scatterPlot},normal=()=>{const ref=(0,react.useRef)(null);return(0,react.useLayoutEffect)((()=>{const update=scatterPlot(ref.current,{xKey:"x",xLabel:"名前",yKey:"y",yLabel:"値",name:"name"});update((0,randamDataCreator.I)(100,1e3));const id=setInterval((()=>{update((0,randamDataCreator.I)(100,1e3))}),1e3);return()=>{clearInterval(id)}}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{ref}),(0,jsx_runtime.jsx)("style",{children:".plot {\n  fill: steelblue;\n}"})]})},__namedExportsOrder=["normal"]}}]);