import{s as _,j as o}from"./transform-CEP3XEcg.js";import{r as u}from"./index-CSLRt44l.js";import{m as w,s as D}from"./axis-C0Qc0BIX.js";import{l as f}from"./linear-DWv9Ni3i.js";import{e as H}from"./extent-Ccx1MofX.js";import{l as S}from"./line-D1asebFX.js";import{g as h}from"./randamDataCreator-CW-qjJzg.js";import"./init-Dsdtmz7w.js";import"./array-CiruCqMi.js";import"./point-DWREGWZc.js";import"./range-DRfWy93k.js";import"./shuffle-DE2rdEB6.js";function b(s,{xKey:n,yKey:a,xLabel:L,yLabel:R}){const j=_(s).append("svg").attr("width",600).attr("height",400),e={top:50,right:50,bottom:50,left:50},p=600-e.right-e.left,d=400-e.top-e.bottom,g=j.append("g").attr("transform",`translate(${e.left},${e.top})`),i=f().range([0,p]),l=f().range([d,0]);return E;function E(c){i.domain(H(c,t=>t[n])),l.domain([0,w(c,t=>t[a])]),D(g,i,l,L,R,p,d);const I=S().x(t=>i(t[n])).y(t=>l(t[a])),m=g.selectAll(".line").data([c]);m.enter().append("path").attr("class","line").merge(m).transition().attr("d",I),m.exit().remove()}}const W=`.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}`,P={component:b},r=()=>{const s=u.useRef(null);return u.useLayoutEffect(()=>{const n=b(s.current,{xKey:"name",yKey:"value",xLabel:"名前",yLabel:"値"});n(h(1e3));const a=setInterval(()=>{n(h(1e3))},1e3);return()=>{clearInterval(a)}},[]),o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:s}),o.jsx("style",{children:W})]})};r.__docgenInfo={description:"",methods:[],displayName:"normal"};var x,v,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const Q=["normal"];export{Q as __namedExportsOrder,P as default,r as normal};
