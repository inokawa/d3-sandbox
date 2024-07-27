import{s as w,j as s}from"./transform-CEP3XEcg.js";import{r as y}from"./index-CSLRt44l.js";import{m as k,a as X}from"./axis-C0Qc0BIX.js";import{b as Y}from"./band-kGs45d5H.js";import{l as D}from"./linear-DWv9Ni3i.js";import{c as E}from"./line-D1asebFX.js";import{a as H}from"./area-B7ihX6eg.js";import{g as R}from"./randamDataCreator-CW-qjJzg.js";import"./init-Dsdtmz7w.js";import"./ordinal-7e937yJ6.js";import"./range-DRfWy93k.js";import"./array-CiruCqMi.js";import"./point-DWREGWZc.js";import"./shuffle-DE2rdEB6.js";var M=u(E);function I(e){this._curve=e}I.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,t){this._curve.point(t*Math.sin(e),t*-Math.cos(e))}};function u(e){function t(n){return new I(e(n))}return t._curve=e,t}function o(e){var t=e.curve;return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(n){return arguments.length?t(u(n)):t()._curve},e}function W(){var e=H().curve(M),t=e.curve,n=e.lineX0,d=e.lineX1,m=e.lineY0,p=e.lineY1;return e.angle=e.x,delete e.x,e.startAngle=e.x0,delete e.x0,e.endAngle=e.x1,delete e.x1,e.radius=e.y,delete e.y,e.innerRadius=e.y0,delete e.y0,e.outerRadius=e.y1,delete e.y1,e.lineStartAngle=function(){return o(n())},delete e.lineX0,e.lineEndAngle=function(){return o(d())},delete e.lineX1,e.lineInnerRadius=function(){return o(m())},delete e.lineY0,e.lineOuterRadius=function(){return o(p())},delete e.lineY1,e.curve=function(f){return arguments.length?t(u(f)):t()._curve},e}function S(e,{xKey:t,yKey:n,xLabel:d,yLabel:m}){const g=w(e).append("svg").attr("width",600).attr("height",400).append("g").attr("transform",`translate(${600/2},${400/2})`),v=2*Math.PI,h=200,c=Y().range([0,v]),x=D().range([0,h]);return A;function A(i){c.domain(i.map(r=>r[t])),x.domain([0,k(i,r=>r[n])]);const j=W().angle(r=>c(r[t])).outerRadius(r=>x(r[n])).curve(E),l=g.selectAll(".line").data([i]);l.enter().append("path").attr("class","line").merge(l).transition().attr("d",j),l.exit().remove(),X(g,i,c,t,h,v)}}const C=`
.line {
  fill: steelblue;
  fill-opacity: 0.35;
  stroke: steelblue;
  stroke-width: 2px;
}
.x-axis {
  stroke: black;
  opacity: 0.5;    
}`,te={component:S},a=()=>{const e=y.useRef(null);return y.useLayoutEffect(()=>{const t=S(e.current,{xKey:"name",yKey:"value",xLabel:"名前",yLabel:"値"});t(R(1e3));const n=setInterval(()=>{t(R(1e3))},1e3);return()=>{clearInterval(n)}},[]),s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:e}),s.jsx("style",{children:C})]})};a.__docgenInfo={description:"",methods:[],displayName:"normal"};var _,L,b;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      xKey: "name",
      yKey: "value",
      xLabel: "名前",
      yLabel: "値"
    });
    update(getRangedData(1000));
    const id = setInterval(() => {
      update(getRangedData(1000));
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <>
      <div ref={ref} />
      <style>{css}</style>
    </>;
}`,...(b=(L=a.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const ne=["normal"];export{ne as __namedExportsOrder,te as default,a as normal};
