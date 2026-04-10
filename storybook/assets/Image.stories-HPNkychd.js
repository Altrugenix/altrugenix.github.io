import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";var o,s,c,l=e((()=>{o=t(r(),1),i(),s=n(),c=o.forwardRef(({className:e,src:t,alt:n,fallback:r,onLoad:i,onError:c,...l},u)=>{let[d,f]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!0);return(0,s.jsx)(`img`,{ref:u,src:d?r:t,alt:n,className:a(`object-cover transition-opacity duration-300`,p&&`opacity-0`,e),onLoad:e=>{m(!1),i?.(e)},onError:e=>{f(!0),m(!1),c?.(e)},...l})}),c.displayName=`Image`,c.__docgenInfo={description:``,methods:[],displayName:`Image`,props:{fallback:{required:!1,tsType:{name:`string`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h,g;e((()=>{u(),d=n(),f={title:`UI/Image`,component:c,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{className:`aspect-video max-w-[500px] overflow-hidden rounded-xl border bg-muted/20`,children:(0,d.jsx)(e,{})})]},p={args:{src:`https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80`,alt:`Nature Landscape`,className:`h-full w-full`}},m={args:{src:`https://invalid-image-url.com/nothing.jpg`,fallback:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80`,alt:`Fallback Image`,className:`h-full w-full`}},h={decorators:[e=>(0,d.jsx)(`div`,{className:`h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary`,children:(0,d.jsx)(e,{})})],args:{src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80`,alt:`Portrait`,className:`h-full w-full`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Nature Landscape",
    className: "h-full w-full"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://invalid-image-url.com/nothing.jpg",
    fallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    alt: "Fallback Image",
    className: "h-full w-full"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary">
        <Story />
      </div>],
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Portrait",
    className: "h-full w-full"
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithFallback`,`Square`]}))();export{p as Default,h as Square,m as WithFallback,g as __namedExportsOrder,f as default};