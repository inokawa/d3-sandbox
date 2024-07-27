import{s as E,j as n}from"./transform-CEP3XEcg.js";import{r as p}from"./index-CSLRt44l.js";import{s as j}from"./shuffle-DE2rdEB6.js";function x(r){const h=E(r).append("svg").attr("width",600).attr("height",400),l={top:50,right:25,bottom:50,left:25},d=h.append("g").attr("transform",`translate(${l.left},${l.top})`);return v;function v(y){const a=d.transition().duration(750),o=d.selectAll("text").data(y,t=>t);o.classed("update",!0).transition(a).attr("x",(t,i)=>i*20).attr("y",0),o.enter().append("text").text(t=>t).classed("enter",!0).attr("x",(t,i)=>i*20).attr("y",-20).attr("fill-opacity",0).transition(a).attr("y",0).attr("fill-opacity",1),o.exit().classed("exit",!0).transition(a).attr("y",20).attr("fill-opacity",0).remove()}}const L=`
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
`,H={component:x},g="abcdefghijklmnopqrstuvwxyz".split(""),A=()=>j(g).slice(0,Math.floor(Math.random()*26)).sort(),e=()=>{const r=p.useRef(null);return p.useLayoutEffect(()=>{const s=x(r.current);s(g);const c=setInterval(()=>{s(A())},1e3);return()=>{clearInterval(c)}},[]),n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:r}),n.jsx("style",{children:L})]})};e.__docgenInfo={description:"",methods:[],displayName:"normal"};var u,f,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(m=(f=e.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const w=["normal"];export{w as __namedExportsOrder,H as default,e as normal};
