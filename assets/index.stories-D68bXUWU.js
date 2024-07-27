import{s as _,j as i}from"./transform-CEP3XEcg.js";import{r as u}from"./index-CSLRt44l.js";import{m as D,s as H}from"./axis-C0Qc0BIX.js";import{l as f}from"./linear-DWv9Ni3i.js";import{e as S}from"./extent-Ccx1MofX.js";import{a as W}from"./area-B7ihX6eg.js";import{g as h}from"./randamDataCreator-CW-qjJzg.js";import"./init-Dsdtmz7w.js";import"./array-CiruCqMi.js";import"./line-D1asebFX.js";import"./point-DWREGWZc.js";import"./range-DRfWy93k.js";import"./shuffle-DE2rdEB6.js";function b(s,{xKey:n,yKey:a,xLabel:L,yLabel:R}){const j=_(s).append("svg").attr("width",600).attr("height",400),e={top:50,right:50,bottom:50,left:50},p=600-e.right-e.left,d=400-e.top-e.bottom,g=j.append("g").attr("transform",`translate(${e.left},${e.top})`),c=f().range([0,p]),o=f().range([d,0]);return E;function E(l){c.domain(S(l,t=>t[n])),o.domain([0,D(l,t=>t[a])]),H(g,c,o,L,R,p,d);const I=W().x(t=>c(t[n])).y0(o(0)).y1(t=>o(t[a])),m=g.selectAll(".line").data([l]);m.enter().append("path").attr("class","line").merge(m).transition().attr("d",I),m.exit().remove()}}const w=`
.line {
  fill: steelblue;
}
`,Q={component:b},r=()=>{const s=u.useRef(null);return u.useLayoutEffect(()=>{const n=b(s.current,{xKey:"name",yKey:"value",xLabel:"名前",yLabel:"値"});n(h(1e3));const a=setInterval(()=>{n(h(1e3))},1e3);return()=>{clearInterval(a)}},[]),i.jsxs(i.Fragment,{children:[i.jsx("div",{ref:s}),i.jsx("style",{children:w})]})};r.__docgenInfo={description:"",methods:[],displayName:"normal"};var x,v,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const T=["normal"];export{T as __namedExportsOrder,Q as default,r as normal};
