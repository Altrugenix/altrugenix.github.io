import{n as e}from"./chunk-jRWAZmH_.js";import{At as t,Et as n,Ft as r,Mt as i,Ot as a}from"./iframe-BnAwTMlV.js";var o,s,c=e((()=>{n(),i(),o=r(),s=({data:e,height:n=200,className:r,showLabels:i=!0})=>{let s=Math.max(...e.map(e=>e.value),1);return(0,o.jsx)(`div`,{className:t(`flex w-full items-end gap-2`,r),style:{height:n},children:e.map((e,n)=>{let r=e.value/s*100;return(0,o.jsxs)(`div`,{className:`group flex h-full flex-1 flex-col items-center justify-end gap-2`,children:[(0,o.jsx)(`div`,{className:`relative flex h-full w-full items-end justify-center`,children:(0,o.jsx)(a.div,{initial:{height:0},animate:{height:`${r}%`},transition:{delay:n*.05,duration:.5,ease:`easeOut`},className:t(`relative w-full max-w-[40px] rounded-t-md`,e.color||`bg-primary`),children:(0,o.jsx)(`div`,{className:`bg-background absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-md border px-2 py-1 text-xs font-bold whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover:opacity-100`,children:e.value})})}),i&&(0,o.jsx)(`span`,{className:`text-muted-foreground w-full truncate text-center text-[10px] tracking-wider uppercase`,children:e.label})]},n)})})}})),l,u,d,f,p,m,h,g;e((()=>{c(),l=r(),u={title:`UI/Charts/BarChart`,component:s,tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{className:`bg-card max-w-[600px] rounded-xl border p-10`,children:(0,l.jsx)(e,{})})]},d=[{label:`Jan`,value:400,color:`bg-indigo-500`},{label:`Feb`,value:300,color:`bg-purple-500`},{label:`Mar`,value:600,color:`bg-rose-500`},{label:`Apr`,value:800,color:`bg-amber-500`},{label:`May`,value:500,color:`bg-emerald-500`},{label:`Jun`,value:900,color:`bg-blue-500`},{label:`Jul`,value:550,color:`bg-teal-500`}],f={args:{data:d}},p={args:{data:d.map(e=>({...e,color:`bg-primary`}))}},m={args:{data:d,height:400}},h={args:{data:d,showLabels:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA.map(d => ({
      ...d,
      color: "bg-primary"
    }))
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA,
    height: 400
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA,
    showLabels: false
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Monochromatic`,`CustomHeight`,`NoLabels`]}))();export{m as CustomHeight,f as Default,p as Monochromatic,h as NoLabels,g as __namedExportsOrder,u as default};