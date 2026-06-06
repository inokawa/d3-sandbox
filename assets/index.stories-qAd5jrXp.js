import{i as e,r as t,t as n}from"./iframe-BnRg5vJj.js";import{_t as r,ft as i,n as a,t as o}from"./jsx-runtime-BGnb4_rT.js";function s(e){let t=i(e).append(`svg`).attr(`width`,600).attr(`height`,400),n={top:50,right:25,bottom:50,left:25};600-n.right-n.left,400-n.top-n.bottom;let r=t.append(`g`).attr(`transform`,`translate(${n.left},${n.top})`);return a;function a(e){let t=r.transition().duration(750),n=r.selectAll(`text`).data(e,e=>e);n.classed(`update`,!0).transition(t).attr(`x`,(e,t)=>t*20).attr(`y`,0),n.enter().append(`text`).text(e=>e).classed(`enter`,!0).attr(`x`,(e,t)=>t*20).attr(`y`,-20).attr(`fill-opacity`,0).transition(t).attr(`y`,0).attr(`fill-opacity`,1),n.exit().classed(`exit`,!0).transition(t).attr(`y`,20).attr(`fill-opacity`,0).remove()}}var c=t((()=>{a()})),l,u,d,f,p,m,h,g;t((()=>{a(),c(),l=e(n()),u=o(),d=`
text {
  font: bold 28px monospace;
}

.enter {
  fill: green;
}

.update {
  fill: #333;
}

.exit {
  fill: brown;
}
`,f={component:s},p=`abcdefghijklmnopqrstuvwxyz`.split(``),m=()=>r(p).slice(0,Math.floor(Math.random()*26)).sort(),h=()=>{let e=(0,l.useRef)(null);return(0,l.useLayoutEffect)(()=>{let t=s(e.current);t(p);let n=setInterval(()=>{t(m())},1e3);return()=>{clearInterval(n)}},[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{ref:e}),(0,u.jsx)(`style`,{children:d})]})},h.__docgenInfo={description:``,methods:[],displayName:`normal`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const update = init(ref.current);
    update(ALPHABETS);
    const id = setInterval(() => {
      update(getLetters());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return <>
      <div ref={ref} />
      <style>{css}</style>
    </>;
}`,...h.parameters?.docs?.source}}},g=[`normal`]}))();export{g as __namedExportsOrder,f as default,h as normal};