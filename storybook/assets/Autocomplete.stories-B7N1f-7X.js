import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";import{n as o,t as s}from"./src-CbP_nypd.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),s(),l=n(),u=c.forwardRef(({className:e,options:t,value:n,onChange:r,...i},s)=>{let[u,d]=(0,c.useState)(!1),[f,p]=(0,c.useState)(()=>n??``),m=(0,c.useRef)(null),h=t.filter(e=>e.toLowerCase().includes(f.toLowerCase()));(0,c.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&d(!1)};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[]);let g=e=>{p(e.target.value),r?.(e.target.value),d(!0)},_=e=>{p(e),r?.(e),d(!1)};return(0,l.jsxs)(`div`,{className:`relative w-full`,ref:m,children:[(0,l.jsx)(o,{className:a(e),value:f,onChange:g,onFocus:()=>d(!0),ref:s,...i}),u&&h.length>0&&(0,l.jsx)(`ul`,{className:`bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-md outline-none`,children:h.map((e,t)=>(0,l.jsx)(`li`,{className:`hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm outline-none select-none`,onClick:()=>_(e),children:e},t))})]})}),u.displayName=`Autocomplete`,u.__docgenInfo={description:``,methods:[],displayName:`Autocomplete`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}},composes:[`Omit`]}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b,x,S;e((()=>{f(),p=t(i(),1),m=n(),h={title:`Forms/Autocomplete`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A searchable input that filters and displays matching options from a predefined list. Built on top of the Input component with click-away dismissal.`}}},argTypes:{options:{description:`Array of string options to filter from.`,table:{category:`Data`}},label:{description:`Label text rendered above the input.`,table:{category:`Content`}},placeholder:{description:`Placeholder text when the input is empty.`,table:{category:`Content`}},value:{description:`Controlled value of the input.`,table:{category:`State`}},onChange:{description:`Callback triggered when the value changes.`,table:{category:`Events`}}}},g=[`React`,`Vue`,`Angular`,`Svelte`,`Next.js`,`Nuxt`,`Solid`,`Remix`,`Astro`,`Qwik`],_={args:{label:`Framework`,placeholder:`Search frameworks...`,options:g}},v={args:{label:`Color`,placeholder:`Pick a color...`,options:[`Red`,`Blue`,`Green`,`Yellow`,`Purple`]}},y={args:{label:`Country`,placeholder:`Search countries...`,options:[`Argentina`,`Australia`,`Brazil`,`Canada`,`China`,`Denmark`,`Egypt`,`France`,`Germany`,`India`,`Italy`,`Japan`,`Mexico`,`Norway`,`Philippines`,`Spain`,`Sweden`,`United Kingdom`,`United States`]},parameters:{docs:{description:{story:`With a large set of options, the dropdown scrolls and filtering becomes essential for quick selection.`}}}},b=()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{className:`max-w-sm space-y-2`,children:[(0,m.jsx)(u,{label:`Programming Language`,placeholder:`Type to search...`,options:[`TypeScript`,`JavaScript`,`Python`,`Rust`,`Go`,`C++`,`Java`,`Kotlin`,`Swift`],value:e,onChange:t}),(0,m.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`Selected:`,` `,(0,m.jsx)(`span`,{className:`font-mono font-semibold`,children:e||`—`})]})]})},x={render:()=>(0,m.jsx)(b,{}),parameters:{docs:{description:{story:`A controlled autocomplete with external state displaying the current value below.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Framework",
    placeholder: "Search frameworks...",
    options: frameworks
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color",
    placeholder: "Pick a color...",
    options: ["Red", "Blue", "Green", "Yellow", "Purple"]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    placeholder: "Search countries...",
    options: ["Argentina", "Australia", "Brazil", "Canada", "China", "Denmark", "Egypt", "France", "Germany", "India", "Italy", "Japan", "Mexico", "Norway", "Philippines", "Spain", "Sweden", "United Kingdom", "United States"]
  },
  parameters: {
    docs: {
      description: {
        story: "With a large set of options, the dropdown scrolls and filtering becomes essential for quick selection."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story: "A controlled autocomplete with external state displaying the current value below."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithFewOptions`,`ManyOptions`,`Controlled`]}))();export{x as Controlled,_ as Default,y as ManyOptions,v as WithFewOptions,S as __namedExportsOrder,h as default};