import{n as e}from"./chunk-jRWAZmH_.js";import{Ft as t,Ht as n,Lt as r,Nt as i,zt as a}from"./iframe-zfMobaDd.js";var o,s,c=e((()=>{i(),r(),o=n(),s=({data:e,height:n=200,className:r,showLabels:i=!0})=>{let s=Math.max(...e.map(e=>e.value),1);return(0,o.jsx)(`div`,{className:a(`flex w-full items-end gap-2`,r),style:{height:n},children:e.map((e,n)=>{let r=e.value/s*100;return(0,o.jsxs)(`div`,{className:`group flex h-full flex-1 flex-col items-center justify-end gap-2`,children:[(0,o.jsx)(`div`,{className:`relative flex h-full w-full items-end justify-center`,children:(0,o.jsx)(t.div,{initial:{height:0},animate:{height:`${r}%`},transition:{delay:n*.05,duration:.5,ease:`easeOut`},className:a(`relative w-full max-w-[40px] rounded-t-md`,e.color||`bg-primary`),children:(0,o.jsx)(`div`,{className:`bg-background absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-md border px-2 py-1 text-xs font-bold whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover:opacity-100`,children:e.value})})}),i&&(0,o.jsx)(`span`,{className:`text-muted-foreground w-full truncate text-center text-[10px] tracking-wider uppercase`,children:e.label})]},n)})})},s.__docgenInfo={description:``,methods:[],displayName:`BarChart`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`ChartDataPoint`}],raw:`ChartDataPoint[]`},description:``},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},showLabels:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),l=e((()=>{c()})),u,d,f,p,m,h,g,_;e((()=>{l(),u=n(),d={title:`Data Display/BarChart`,component:s,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{className:`bg-card max-w-[600px] rounded-xl border p-10`,children:(0,u.jsx)(e,{})})],parameters:{docs:{description:{component:`A simple responsive bar chart that renders individual bars based on data objects with values and colors. Scales automatically based on the maximum value.`}}},argTypes:{data:{description:`Array of data points containing label, value, and color (Tailwind class).`,table:{category:`Data`}},height:{control:`number`,description:`Height of the chart container in pixels.`,table:{category:`Appearance`}},showLabels:{control:`boolean`,description:`Whether to display labels under each bar.`,table:{category:`Appearance`}},className:{description:`Custom CSS classes for the chart wrapper.`,table:{category:`Appearance`}}}},f=[{label:`Jan`,value:400,color:`bg-indigo-500`},{label:`Feb`,value:300,color:`bg-purple-500`},{label:`Mar`,value:600,color:`bg-rose-500`},{label:`Apr`,value:800,color:`bg-amber-500`},{label:`May`,value:500,color:`bg-emerald-500`},{label:`Jun`,value:900,color:`bg-blue-500`},{label:`Jul`,value:550,color:`bg-teal-500`}],p={args:{data:f},parameters:{docs:{description:{story:`A standard bar chart with multiple colors indicating different data points or categories.`}}}},m={args:{data:f.map(e=>({...e,color:`bg-primary`}))},parameters:{docs:{description:{story:`A unified color palette where all bars use the theme's primary color.`}}}},h={args:{data:f,height:400},parameters:{docs:{description:{story:"A taller chart using the `height` prop to scale appropriately."}}}},g={args:{data:f,showLabels:!1},parameters:{docs:{description:{story:`Bar chart with x-axis labels hidden.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA
  },
  parameters: {
    docs: {
      description: {
        story: "A standard bar chart with multiple colors indicating different data points or categories."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA.map(d => ({
      ...d,
      color: "bg-primary"
    }))
  },
  parameters: {
    docs: {
      description: {
        story: "A unified color palette where all bars use the theme's primary color."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA,
    height: 400
  },
  parameters: {
    docs: {
      description: {
        story: "A taller chart using the \`height\` prop to scale appropriately."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: MOCK_DATA,
    showLabels: false
  },
  parameters: {
    docs: {
      description: {
        story: "Bar chart with x-axis labels hidden."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Monochromatic`,`CustomHeight`,`NoLabels`]}))();export{h as CustomHeight,p as Default,m as Monochromatic,g as NoLabels,_ as __namedExportsOrder,d as default};