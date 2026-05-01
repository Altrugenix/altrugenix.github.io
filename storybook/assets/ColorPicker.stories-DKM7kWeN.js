import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,M as i,gn as a,r as o,xt as s,zt as c}from"./iframe-coe0kFk0.js";import{n as l,t as u}from"./src-CuQaqhm9.js";import{n as d,t as f}from"./src-4nQNK7LJ2.js";var p,m,h,g,_=e((()=>{p=t(a(),1),r(),u(),f(),o(),m=n(),h=[`#000000`,`#ffffff`,`#f44336`,`#e91e63`,`#9c27b0`,`#673ab7`,`#3f51b5`,`#2196f3`,`#03a9f4`,`#00bcd4`,`#009688`,`#4caf50`,`#8bc34a`,`#cddc39`,`#ffeb3b`,`#ffc107`,`#ff9800`,`#ff5722`,`#795548`,`#9e9e9e`,`#607d8b`],g=({value:e,onChange:t,presets:n=h,className:r,disabled:a=!1})=>{let[o,u]=(0,p.useState)(e),f=e=>{let n=e.target.value;u(n),/^#[0-9A-F]{6}$/i.test(n)&&t(n)},g=e=>{u(e),t(e)};return(0,m.jsxs)(`div`,{className:c(`flex items-center gap-2`,r),children:[(0,m.jsx)(d,{trigger:(0,m.jsx)(`button`,{disabled:a,className:c(`border-input h-9 w-9 shrink-0 rounded-md border shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50`,`ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`),style:{backgroundColor:e},title:`Select color`,children:(0,m.jsx)(`span`,{className:`sr-only`,children:`Toggle Color Picker`})}),children:(0,m.jsxs)(`div`,{className:`space-y-3`,children:[(0,m.jsx)(`div`,{className:`text-muted-foreground text-xs font-semibold tracking-wider uppercase`,children:`Presets`}),(0,m.jsx)(`div`,{className:`grid grid-cols-7 gap-1.5`,children:n.map(t=>(0,m.jsx)(`button`,{className:c(`group relative h-6 w-6 rounded-sm border border-black/10 transition-transform hover:z-10 hover:scale-125`,e===t&&`ring-primary ring-2 ring-offset-1`),style:{backgroundColor:t},onClick:()=>g(t),children:e===t&&(0,m.jsx)(s,{className:c(`absolute inset-0 m-auto h-3 w-3`,t.toLowerCase()===`#ffffff`?`text-black`:`text-white`)})},t))}),(0,m.jsxs)(`div`,{className:`border-border space-y-2 border-t pt-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(i,{className:`text-muted-foreground h-4 w-4`}),(0,m.jsx)(`div`,{className:`text-muted-foreground text-xs font-medium`,children:`Custom Hex`})]}),(0,m.jsx)(l,{value:o,onChange:f,className:`h-8 font-mono text-xs uppercase`,placeholder:`#000000`})]})]})}),(0,m.jsx)(l,{value:o,onChange:f,disabled:a,className:`h-9 font-mono uppercase`,placeholder:`#000000`})]})},g.__docgenInfo={description:``,methods:[],displayName:`ColorPicker`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},presets:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[
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
]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),y=t(a(),1),b=n(),x={title:`Forms/ColorPicker`,component:g,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"An interactive color picker with a gradient area, hue slider, hex input, and optional preset color swatches. Fully controlled via `value` and `onChange`."}}},argTypes:{value:{description:`The current hex color value.`,table:{category:`State`}},onChange:{description:`Callback triggered when the color changes.`,table:{category:`Events`}},presets:{description:`Array of hex color strings for quick-select preset swatches.`,table:{category:`Data`}},disabled:{control:`boolean`,description:`Prevents interaction.`,table:{category:`State`}}}},S=({initialColor:e=`#3b82f6`})=>{let[t,n]=(0,y.useState)(e);return(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(g,{value:t,onChange:n}),(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(`div`,{className:`h-8 w-8 rounded border`,style:{backgroundColor:t}}),(0,b.jsx)(`span`,{className:`font-mono text-sm`,children:t})]})]})},C={render:()=>(0,b.jsx)(S,{}),parameters:{docs:{description:{story:`A controlled color picker with live preview swatch and hex display.`}}}},w=()=>{let[e,t]=(0,y.useState)(`#e91e63`);return(0,b.jsx)(g,{value:e,onChange:t,presets:[`#f44336`,`#e91e63`,`#9c27b0`,`#2196f3`,`#4caf50`,`#ff9800`,`#795548`,`#607d8b`]})},T={render:()=>(0,b.jsx)(w,{}),parameters:{docs:{description:{story:`A color picker with custom brand preset swatches for quick access to approved colors.`}}}},E={render:()=>(0,b.jsx)(g,{value:`#9c27b0`,onChange:()=>{},disabled:!0}),parameters:{docs:{description:{story:`A disabled color picker — all interaction is prevented.`}}}},D=()=>{let[e,t]=(0,y.useState)(`#3b82f6`),[n,r]=(0,y.useState)(`#10b981`);return(0,b.jsxs)(`div`,{className:`space-y-6`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Primary Color`}),(0,b.jsx)(g,{value:e,onChange:t})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Secondary Color`}),(0,b.jsx)(g,{value:n,onChange:r})]}),(0,b.jsxs)(`div`,{className:`flex gap-2 pt-2`,children:[(0,b.jsx)(`div`,{className:`rounded-lg px-4 py-2 text-sm font-medium text-white`,style:{backgroundColor:e},children:`Primary`}),(0,b.jsx)(`div`,{className:`rounded-lg px-4 py-2 text-sm font-medium text-white`,style:{backgroundColor:n},children:`Secondary`})]})]})},O={render:()=>(0,b.jsx)(D,{}),parameters:{docs:{description:{story:`A brand color configuration panel with two color pickers and live preview buttons.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: "A controlled color picker with live preview swatch and hex display."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <CustomPresetsDemo />,
  parameters: {
    docs: {
      description: {
        story: "A color picker with custom brand preset swatches for quick access to approved colors."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ColorPicker value="#9c27b0" onChange={() => {}} disabled />,
  parameters: {
    docs: {
      description: {
        story: "A disabled color picker — all interaction is prevented."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <BrandColorSelectorDemo />,
  parameters: {
    docs: {
      description: {
        story: "A brand color configuration panel with two color pickers and live preview buttons."
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CustomPresets`,`Disabled`,`BrandColorSelector`]}))();export{O as BrandColorSelector,T as CustomPresets,C as Default,E as Disabled,k as __namedExportsOrder,x as default};