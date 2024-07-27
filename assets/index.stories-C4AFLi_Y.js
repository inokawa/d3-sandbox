import{s as E,j as c}from"./transform-CEP3XEcg.js";import{r as u}from"./index-CSLRt44l.js";import{m as I,s as _}from"./axis-C0Qc0BIX.js";import{b as w}from"./band-kGs45d5H.js";import{l as D}from"./linear-DWv9Ni3i.js";import{g as f}from"./randamDataCreator-CW-qjJzg.js";import"./init-Dsdtmz7w.js";import"./ordinal-7e937yJ6.js";import"./range-DRfWy93k.js";import"./shuffle-DE2rdEB6.js";function b(s,{xKey:e,yKey:r,xLabel:y,yLabel:R}){const L=E(s).append("svg").attr("width",600).attr("height",400),n={top:50,right:50,bottom:50,left:50},p=600-n.right-n.left,l=400-n.top-n.bottom,g=L.append("g").attr("transform",`translate(${n.left},${n.top})`),o=w().rangeRound([0,p]).padding(.1),i=D().range([l,0]);return j;function j(d){o.domain(d.map(t=>t[e])),i.domain([0,I(d,t=>t[r])]),_(g,o,i,y,R,p,l);const m=g.selectAll("rect").data(d,t=>t[e]);m.enter().append("rect").merge(m).transition().attr("x",t=>o(t[e])).attr("y",t=>i(t[r])).attr("width",o.bandwidth()).attr("height",t=>l-i(t[r])).attr("class","plot"),m.exit().remove()}}const H=`.plot {
  fill: steelblue;
}`,G={component:b},a=()=>{const s=u.useRef(null);return u.useLayoutEffect(()=>{const e=b(s.current,{xKey:"name",yKey:"value",xLabel:"名前",yLabel:"値"});e(f(1e3));const r=setInterval(()=>{e(f(1e3))},1e3);return()=>{clearInterval(r)}},[]),c.jsxs(c.Fragment,{children:[c.jsx("div",{ref:s}),c.jsx("style",{children:H})]})};a.__docgenInfo={description:"",methods:[],displayName:"normal"};var h,v,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const J=["normal"];export{J as __namedExportsOrder,G as default,a as normal};
