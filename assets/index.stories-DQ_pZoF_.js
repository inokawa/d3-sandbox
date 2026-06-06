import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{O as r,c as i,ft as a,h as o,it as s,n as c,t as l,y as u}from"./jsx-runtime-BGnb4_rT.js";import{n as d,r as f}from"./randamDataCreator-Dli9_kEh.js";function p(e,{key:t,label:n}){let c=a(e).append(`svg`).attr(`width`,600).attr(`height`,400).append(`g`).attr(`transform`,`translate(${600/2},${400/2})`),l=r(u),d=i().value(e=>e[t]),f=o().outerRadius(180).innerRadius(100),p=o().outerRadius(160).innerRadius(160);return m;function m(e){let n=c.selectAll(`.pie`).data(d(e),e=>e.data[t]),r=n.enter().append(`g`).attr(`class`,`pie`);r.append(`path`).attr(`d`,``).merge(n.selectAll(`path`)).attr(`fill`,e=>l(e.index)).transition().attrTween(`d`,e=>{let t=s({startAngle:0,endAngle:0},e);return e=>f(t(e))}),r.append(`text`).attr(`fill`,`black`).attr(`dy`,`5px`).attr(`font`,`10px`).attr(`text-anchor`,`middle`).attr(`transform`,e=>`translate(${p.centroid(e)})`).text(e=>e.data[t]),n.exit().remove()}}var m=t((()=>{c()})),h,g,_,v,y;t((()=>{m(),f(),h=e(n()),g=l(),_={component:p},v=()=>{let e=(0,h.useRef)(null);return(0,h.useLayoutEffect)(()=>{let t=p(e.current,{key:`value`,label:`値`});t(d(1e3));let n=setInterval(()=>{t(d(1e3))},1e3);return()=>{clearInterval(n)}},[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(`div`,{ref:e})})},v.__docgenInfo={description:``,methods:[],displayName:`normal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current, {
      key: "value",
      label: "値"
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
    </>;
}`,...v.parameters?.docs?.source}}},y=[`normal`]}))();export{y as __namedExportsOrder,_ as default,v as normal};