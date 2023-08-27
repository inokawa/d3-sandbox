"use strict";(self.webpackChunkd3_sandbox=self.webpackChunkd3_sandbox||[]).push([[22],{"./src/components/alphabet/index.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories,normal:()=>normal});var d3=__webpack_require__("./node_modules/d3/index.js");const alphabet=function init(elem){const margin_top=50,margin_left=25,graph=d3.Ys(elem).append("svg").attr("width",600).attr("height",400).append("g").attr("transform",`translate(${margin_left},${margin_top})`);return function update(data){const t=graph.transition().duration(750),text=graph.selectAll("text").data(data,(d=>d));text.classed("update",!0).transition(t).attr("x",((d,i)=>20*i)).attr("y",0),text.enter().append("text").text((d=>d)).classed("enter",!0).attr("x",((d,i)=>20*i)).attr("y",-20).attr("fill-opacity",0).transition(t).attr("y",0).attr("fill-opacity",1),text.exit().classed("exit",!0).transition(t).attr("y",20).attr("fill-opacity",0).remove()}};var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_stories={component:alphabet},ALPHABETS="abcdefghijklmnopqrstuvwxyz".split(""),normal=()=>{const ref=(0,react.useRef)(null);return(0,react.useLayoutEffect)((()=>{const update=alphabet(ref.current);update(ALPHABETS);const id=setInterval((()=>{update(d3.TVQ(ALPHABETS).slice(0,Math.floor(26*Math.random())).sort())}),1e3);return()=>{clearInterval(id)}}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{ref}),(0,jsx_runtime.jsx)("style",{children:"\ntext {\n  font: bold 28px monospace;\n}\n\n.enter {\n  fill: green;\n}\n\n.update {\n  fill: #333;\n}\n\n.exit {\n  fill: brown;\n}\n"})]})},__namedExportsOrder=["normal"]}}]);