import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,i as r,r as i,tt as a}from"./iframe-B3RxNkLM.js";var o,s,c,l=e((()=>{o=t(a(),1),r(),s=n(),c=o.forwardRef(({className:e,src:t,alt:n,fallback:r,...a},c)=>{let[l,u]=o.useState(!1);return(0,s.jsx)(`div`,{ref:c,className:i(`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full font-medium`,e),...a,children:t&&!l?(0,s.jsx)(`img`,{src:t,alt:n,className:`aspect-square h-full w-full object-cover`,onError:()=>u(!0)}):(0,s.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground uppercase`,children:r||n?.slice(0,2)||`U`})})}),c.displayName=`Avatar`,c.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},fallback:{required:!1,tsType:{name:`string`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_;e((()=>{u(),d=n(),f={title:`UI/Avatar`,component:c,tags:[`autodocs`]},p={args:{src:`https://github.com/shadcn.png`,fallback:`CN`}},m={args:{fallback:`AB`}},h={args:{src:`https://broken-url.example/image.png`,fallback:`JD`}},g={render:()=>(0,d.jsxs)(`div`,{className:`flex -space-x-2`,children:[(0,d.jsx)(c,{src:`https://github.com/shadcn.png`,fallback:`CN`,className:`border-2 border-background`}),(0,d.jsx)(c,{fallback:`AB`,className:`border-2 border-background`}),(0,d.jsx)(c,{fallback:`QR`,className:`border-2 border-background`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: "AB"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "JD"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      <Avatar src="https://github.com/shadcn.png" fallback="CN" className="border-2 border-background" />
      <Avatar fallback="AB" className="border-2 border-background" />
      <Avatar fallback="QR" className="border-2 border-background" />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`WithImage`,`FallbackOnly`,`BrokenImage`,`Group`]}))();export{h as BrokenImage,m as FallbackOnly,g as Group,p as WithImage,_ as __namedExportsOrder,f as default};