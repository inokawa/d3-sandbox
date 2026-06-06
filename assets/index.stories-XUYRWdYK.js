import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{T as r,ft as i,n as a,t as o,w as s,xt as c}from"./jsx-runtime-BGnb4_rT.js";import{n as l,t as u}from"./axis-Dt7WB0A3.js";import{n as d,r as f}from"./randamDataCreator-Dli9_kEh.js";function p(e,{xKey:t,yKey:n,xLabel:a,yLabel:o}){let u=i(e).append(`svg`).attr(`width`,600).attr(`height`,400),d={top:50,right:50,bottom:50,left:50},f=600-d.right-d.left,p=400-d.top-d.bottom,m=u.append(`g`).attr(`transform`,`translate(${d.left},${d.top})`),h=r().rangeRound([0,f]).padding(.1),g=s().range([p,0]);return _;function _(e){h.domain(e.map(e=>e[t])),g.domain([0,c(e,e=>e[n])]),l(m,h,g,a,o,f,p,d);let r=m.selectAll(`rect`).data(e,e=>e[t]);r.enter().append(`rect`).merge(r).transition().attr(`x`,e=>h(e[t])).attr(`y`,e=>g(e[n])).attr(`width`,h.bandwidth()).attr(`height`,e=>p-g(e[n])).attr(`class`,`plot`),r.exit().remove()}}var m=t((()=>{a(),u()})),h,g,_,v,y,b;t((()=>{h=e(n()),m(),f(),g=o(),_=`.plot {
  fill: steelblue;
}`,v={component:p},y=()=>{let e=(0,h.useRef)(null);return(0,h.useLayoutEffect)(()=>{let t=p(e.current,{xKey:`name`,yKey:`value`,xLabel:`名前`,yLabel:`値`});t(d(1e3));let n=setInterval(()=>{t(d(1e3))},1e3);return()=>{clearInterval(n)}},[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{ref:e}),(0,g.jsx)(`style`,{children:_})]})},y.__docgenInfo={description:``,methods:[],displayName:`normal`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`normal`]}))();export{b as __namedExportsOrder,v as default,y as normal};