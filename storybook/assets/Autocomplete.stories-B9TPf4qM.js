import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";import{n as o,t as s}from"./altrugenix-input-BecAsuUZ.js";var c,l,u,d=e((()=>{c=t(a(),1),i(),s(),l=r(),u=c.forwardRef(({className:e,options:t,value:r,onChange:i,...a},s)=>{let[u,d]=(0,c.useState)(!1),[f,p]=(0,c.useState)(()=>r??``),m=(0,c.useRef)(null),h=t.filter(e=>e.toLowerCase().includes(f.toLowerCase()));(0,c.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&d(!1)};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[]);let g=e=>{p(e.target.value),i?.(e.target.value),d(!0)},_=e=>{p(e),i?.(e),d(!1)};return(0,l.jsxs)(`div`,{className:`relative w-full`,ref:m,children:[(0,l.jsx)(o,{className:n(e),value:f,onChange:g,onFocus:()=>d(!0),ref:s,...a}),u&&h.length>0&&(0,l.jsx)(`ul`,{className:`bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-md outline-none`,children:h.map((e,t)=>(0,l.jsx)(`li`,{className:`hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-pointer items-center rounded-sm px-3 py-1.5 text-sm outline-none select-none`,onClick:()=>_(e),children:e},t))})]})}),u.displayName=`Autocomplete`,u.__docgenInfo={description:``,methods:[],displayName:`Autocomplete`}})),f,p,m,h;e((()=>{d(),f={title:`UI/Autocomplete`,component:u,tags:[`autodocs`]},p={args:{label:`Framework`,placeholder:`Search frameworks...`,options:[`React`,`Vue`,`Angular`,`Svelte`,`Next.js`,`Nuxt`,`Solid`,`Remix`]}},m={args:{label:`Color`,placeholder:`Pick a color...`,options:[`Red`,`Blue`,`Green`]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Framework",
    placeholder: "Search frameworks...",
    options: ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt", "Solid", "Remix"]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color",
    placeholder: "Pick a color...",
    options: ["Red", "Blue", "Green"]
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithFewOptions`]}))();export{p as Default,m as WithFewOptions,h as __namedExportsOrder,f as default};