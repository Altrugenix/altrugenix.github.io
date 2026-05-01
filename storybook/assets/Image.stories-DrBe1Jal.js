import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";var o,s,c,l=e((()=>{o=t(a(),1),i(),s=r(),c=o.forwardRef(({className:e,src:t,alt:r,fallback:i,onLoad:a,onError:c,...l},u)=>{let[d,f]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!0);return(0,s.jsx)(`img`,{ref:u,src:d?i:t,alt:r,className:n(`object-cover transition-opacity duration-300`,p&&`opacity-0`,e),onLoad:e=>{m(!1),a?.(e)},onError:e=>{f(!0),m(!1),c?.(e)},...l})}),c.displayName=`Image`,c.__docgenInfo={description:``,methods:[],displayName:`Image`}})),u,d,f,p,m,h;e((()=>{l(),u=r(),d={title:`UI/Image`,component:c,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{className:`bg-muted/20 aspect-video max-w-[500px] overflow-hidden rounded-xl border`,children:(0,u.jsx)(e,{})})]},f={args:{src:`https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80`,alt:`Nature Landscape`,className:`h-full w-full`}},p={args:{src:`https://invalid-image-url.com/nothing.jpg`,fallback:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80`,alt:`Fallback Image`,className:`h-full w-full`}},m={decorators:[e=>(0,u.jsx)(`div`,{className:`border-primary h-[300px] w-[300px] overflow-hidden rounded-full border-4`,children:(0,u.jsx)(e,{})})],args:{src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80`,alt:`Portrait`,className:`h-full w-full`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Nature Landscape",
    className: "h-full w-full"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://invalid-image-url.com/nothing.jpg",
    fallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    alt: "Fallback Image",
    className: "h-full w-full"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="border-primary h-[300px] w-[300px] overflow-hidden rounded-full border-4">
        <Story />
      </div>],
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Portrait",
    className: "h-full w-full"
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithFallback`,`Square`]}))();export{f as Default,m as Square,p as WithFallback,h as __namedExportsOrder,d as default};