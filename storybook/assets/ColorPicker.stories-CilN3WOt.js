import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{I as n,Pt as r,bt as i,cn as a,i as o,r as s,s as c}from"./iframe-CAjx62e_.js";import{n as l,t as u}from"./Input-BMgjnZAM.js";import{n as d,t as f}from"./Popover-kSa4WUv0.js";var p,m,h,g,_=e((()=>{p=t(a(),1),o(),l(),d(),c(),m=r(),h=[`#000000`,`#ffffff`,`#f44336`,`#e91e63`,`#9c27b0`,`#673ab7`,`#3f51b5`,`#2196f3`,`#03a9f4`,`#00bcd4`,`#009688`,`#4caf50`,`#8bc34a`,`#cddc39`,`#ffeb3b`,`#ffc107`,`#ff9800`,`#ff5722`,`#795548`,`#9e9e9e`,`#607d8b`],g=({value:e,onChange:t,presets:r=h,className:a,disabled:o=!1})=>{let[c,l]=(0,p.useState)(e),d=e=>{let n=e.target.value;l(n),/^#[0-9A-F]{6}$/i.test(n)&&t(n)},g=e=>{l(e),t(e)};return(0,m.jsxs)(`div`,{className:s(`flex items-center gap-2`,a),children:[(0,m.jsx)(f,{trigger:(0,m.jsx)(`button`,{disabled:o,className:s(`h-9 w-9 shrink-0 rounded-md border border-input shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50`,`ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`),style:{backgroundColor:e},title:`Select color`,children:(0,m.jsx)(`span`,{className:`sr-only`,children:`Toggle Color Picker`})}),children:(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsx)(`div`,{className:`text-xs font-semibold uppercase tracking-wider text-muted-foreground`,children:`Presets`}),(0,m.jsx)(`div`,{className:`grid grid-cols-7 gap-1.5`,children:r.map(t=>(0,m.jsx)(`button`,{className:s(`group relative h-6 w-6 rounded-sm border border-black/10 transition-transform hover:z-10 hover:scale-125`,e===t&&`ring-2 ring-primary ring-offset-1`),style:{backgroundColor:t},onClick:()=>g(t),children:e===t&&(0,m.jsx)(i,{className:s(`absolute inset-0 m-auto h-3 w-3`,t.toLowerCase()===`#ffffff`?`text-black`:`text-white`)})},t))}),(0,m.jsxs)(`div`,{className:`space-y-2 border-t border-border pt-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(n,{className:`h-4 w-4 text-muted-foreground`}),(0,m.jsx)(`div`,{className:`text-xs font-medium text-muted-foreground`,children:`Custom Hex`})]}),(0,m.jsx)(u,{value:c,onChange:d,className:`h-8 font-mono text-xs uppercase`,placeholder:`#000000`})]})]})}),(0,m.jsx)(u,{value:c,onChange:d,disabled:o,className:`h-9 font-mono uppercase`,placeholder:`#000000`})]})},g.__docgenInfo={description:``,methods:[],displayName:`ColorPicker`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},presets:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[
  "#000000",
  "#ffffff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),v=e((()=>{_()})),y,b,x,S,C,w,T;e((()=>{v(),y=t(a(),1),b=r(),x={title:`UI/ColorPicker`,component:g,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-[400px] p-10`,children:(0,b.jsx)(e,{})})]},S={render:e=>{let[t,n]=(0,y.useState)(`#6366f1`);return(0,b.jsx)(g,{...e,value:t,onChange:n})}},C={render:e=>{let[t,n]=(0,y.useState)(`#ec4899`),r=[`#ef4444`,`#f97316`,`#f59e0b`,`#eab308`,`#84cc16`,`#22c55e`,`#10b981`,`#06b6d4`,`#0ea5e9`,`#3b82f6`,`#6366f1`,`#8b5cf6`,`#a855f7`,`#d946ef`,`#ec4899`,`#f43f5e`];return(0,b.jsx)(g,{...e,value:t,onChange:n,presets:r})}},w={args:{value:`#6366f1`,disabled:!0}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [color, setColor] = useState("#6366f1");
    return <ColorPicker {...args} value={color} onChange={setColor} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [color, setColor] = useState("#ec4899");
    const presets = ["#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16", "#22c55e", "#10b981", "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef", "#ec4899", "#f43f5e"];
    return <ColorPicker {...args} value={color} onChange={setColor} presets={presets} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#6366f1",
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCustomPresets`,`Disabled`]}))();export{S as Default,w as Disabled,C as WithCustomPresets,T as __namedExportsOrder,x as default};