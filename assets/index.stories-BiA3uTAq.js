import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{St as r,f as i,ft as a,n as o,t as s,w as c,xt as l}from"./jsx-runtime-BGnb4_rT.js";import{n as u,t as d}from"./axis-Dt7WB0A3.js";import{n as f,r as p}from"./randamDataCreator-Dli9_kEh.js";function m(e,{xKey:t,yKey:n,xLabel:o,yLabel:s}){let d=a(e).append(`svg`).attr(`width`,600).attr(`height`,400),f={top:50,right:50,bottom:50,left:50},p=600-f.right-f.left,m=400-f.top-f.bottom,h=d.append(`g`).attr(`transform`,`translate(${f.left},${f.top})`),g=c().range([0,p]),_=c().range([m,0]);return v;function v(e){g.domain(r(e,e=>e[t])),_.domain([0,l(e,e=>e[n])]),u(h,g,_,o,s,p,m,f);let a=i().x(e=>g(e[t])).y(e=>_(e[n])),c=h.selectAll(`.line`).data([e]);c.enter().append(`path`).attr(`class`,`line`).merge(c).transition().attr(`d`,a),c.exit().remove()}}var h=t((()=>{o(),d()})),g,_,v,y,b,x;t((()=>{g=e(n()),h(),p(),_=s(),v=`.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}`,y={component:m},b=()=>{let e=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{let t=m(e.current,{xKey:`name`,yKey:`value`,xLabel:`名前`,yLabel:`値`});t(f(1e3));let n=setInterval(()=>{t(f(1e3))},1e3);return()=>{clearInterval(n)}},[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{ref:e}),(0,_.jsx)(`style`,{children:v})]})},b.__docgenInfo={description:``,methods:[],displayName:`normal`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`normal`]}))();export{x as __namedExportsOrder,y as default,b as normal};