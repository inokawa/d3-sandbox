import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{T as r,a as i,ft as a,m as o,n as s,t as c,w as l,xt as u}from"./jsx-runtime-BGnb4_rT.js";import{r as d,t as f}from"./axis-Dt7WB0A3.js";import{n as p,r as m}from"./randamDataCreator-Dli9_kEh.js";function h(e,{xKey:t,yKey:n,xLabel:s,yLabel:c}){let f=a(e).append(`svg`).attr(`width`,600).attr(`height`,400).append(`g`).attr(`transform`,`translate(${600/2},${400/2})`),p=2*Math.PI,m=r().range([0,p]),h=l().range([0,200]);return g;function g(e){m.domain(e.map(e=>e[t])),h.domain([0,u(e,e=>e[n])]);let r=i().angle(e=>m(e[t])).outerRadius(e=>h(e[n])).curve(o),a=f.selectAll(`.line`).data([e]);a.enter().append(`path`).attr(`class`,`line`).merge(a).transition().attr(`d`,r),a.exit().remove(),d(f,e,m,t,200,p)}}var g=t((()=>{s(),f()})),_,v,y,b,x,S;t((()=>{_=e(n()),g(),m(),v=c(),y=`
.line {
  fill: steelblue;
  fill-opacity: 0.35;
  stroke: steelblue;
  stroke-width: 2px;
}
.x-axis {
  stroke: black;
  opacity: 0.5;    
}`,b={component:h},x=()=>{let e=(0,_.useRef)(null);return(0,_.useLayoutEffect)(()=>{let t=h(e.current,{xKey:`name`,yKey:`value`,xLabel:`名前`,yLabel:`値`});t(p(1e3));let n=setInterval(()=>{t(p(1e3))},1e3);return()=>{clearInterval(n)}},[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{ref:e}),(0,v.jsx)(`style`,{children:y})]})},x.__docgenInfo={description:``,methods:[],displayName:`normal`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S=[`normal`]}))();export{S as __namedExportsOrder,b as default,x as normal};