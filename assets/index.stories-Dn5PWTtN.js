import{s as _,j as o}from"./transform-CEP3XEcg.js";import{r as u}from"./index-CSLRt44l.js";import{m as D,s as H}from"./axis-C0Qc0BIX.js";import{l as f}from"./linear-DWv9Ni3i.js";import{e as S}from"./extent-Ccx1MofX.js";import{a as x}from"./randamDataCreator-CW-qjJzg.js";import"./init-Dsdtmz7w.js";import"./range-DRfWy93k.js";import"./shuffle-DE2rdEB6.js";function b(s,{xKey:n,yKey:a,xLabel:L,yLabel:R,name:j}){const E=_(s).append("svg").attr("width",600).attr("height",400),e={top:50,right:50,bottom:50,left:50},d=600-e.right-e.left,p=400-e.top-e.bottom,g=E.append("g").attr("transform",`translate(${e.left},${e.top})`),c=f().range([0,d]),i=f().range([p,0]);return I;function I(l){c.domain(S(l,t=>t[n])),i.domain([0,D(l,t=>t[a])]),H(g,c,i,L,R,d,p);const m=g.selectAll("circle").data(l,t=>t[j]);m.enter().append("circle").merge(m).transition().attr("r",3).attr("cx",t=>c(t[n])).attr("cy",t=>i(t[a])).attr("class","plot"),m.exit().remove()}}const W=`.plot {
  fill: steelblue;
}`,C={component:b},r=()=>{const s=u.useRef(null);return u.useLayoutEffect(()=>{const n=b(s.current,{xKey:"x",xLabel:"名前",yKey:"y",yLabel:"値",name:"name"});n(x(100,1e3));const a=setInterval(()=>{n(x(100,1e3))},1e3);return()=>{clearInterval(a)}},[]),o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:s}),o.jsx("style",{children:W})]})};r.__docgenInfo={description:"",methods:[],displayName:"normal"};var h,v,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const G=["normal"];export{G as __namedExportsOrder,C as default,r as normal};
