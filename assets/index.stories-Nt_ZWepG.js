import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{St as r,ft as i,n as a,t as o,w as s,xt as c}from"./jsx-runtime-BGnb4_rT.js";import{n as l,t as u}from"./axis-Dt7WB0A3.js";import{r as d,t as f}from"./randamDataCreator-Dli9_kEh.js";function p(e,{xKey:t,yKey:n,xLabel:a,yLabel:o,name:u}){let d=i(e).append(`svg`).attr(`width`,600).attr(`height`,400),f={top:50,right:50,bottom:50,left:50},p=600-f.right-f.left,m=400-f.top-f.bottom,h=d.append(`g`).attr(`transform`,`translate(${f.left},${f.top})`),g=s().range([0,p]),_=s().range([m,0]);return v;function v(e){g.domain(r(e,e=>e[t])),_.domain([0,c(e,e=>e[n])]),l(h,g,_,a,o,p,m,f);let i=h.selectAll(`circle`).data(e,e=>e[u]);i.enter().append(`circle`).merge(i).transition().attr(`r`,3).attr(`cx`,e=>g(e[t])).attr(`cy`,e=>_(e[n])).attr(`class`,`plot`),i.exit().remove()}}var m=t((()=>{a(),u()})),h,g,_,v,y,b;t((()=>{h=e(n()),m(),d(),g=o(),_=`.plot {
  fill: steelblue;
}`,v={component:p},y=()=>{let e=(0,h.useRef)(null);return(0,h.useLayoutEffect)(()=>{let t=p(e.current,{xKey:`x`,xLabel:`名前`,yKey:`y`,yLabel:`値`,name:`name`});t(f(100,1e3));let n=setInterval(()=>{t(f(100,1e3))},1e3);return()=>{clearInterval(n)}},[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{ref:e}),(0,g.jsx)(`style`,{children:_})]})},y.__docgenInfo={description:``,methods:[],displayName:`normal`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      xKey: "x",
      xLabel: "名前",
      yKey: "y",
      yLabel: "値",
      name: "name"
    });
    update(getRandom2dData(100, 1000));
    const id = setInterval(() => {
      update(getRandom2dData(100, 1000));
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