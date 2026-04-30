import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,S as a,ln as o,r as s,s as c}from"./iframe-BnAwTMlV.js";var l,u,d,f,p=e((()=>{l=t(o(),1),i(),s(),u=r(),d={default:`bg-primary/10 text-primary border-primary/20`,secondary:`bg-secondary text-secondary-foreground border-secondary`,outline:`bg-transparent text-foreground border-border`,success:`bg-success/10 text-success border-success/20`,warning:`bg-warning/10 text-warning border-warning/20`,destructive:`bg-destructive/10 text-destructive border-destructive/20`},f=l.forwardRef(({className:e,variant:t=`default`,onRemove:r,icon:i,children:a,...o},s)=>(0,u.jsxs)(`span`,{ref:s,className:n(`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors`,d[t],e),...o,children:[i&&(0,u.jsx)(`span`,{className:`shrink-0`,children:i}),a,r&&(0,u.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),r()},className:`focus:ring-ring ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 focus:ring-1 focus:outline-none`,"aria-label":`Remove`,children:(0,u.jsx)(c,{className:`h-3 w-3`})})]})),f.displayName=`Tag`,f.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{variant:{defaultValue:{value:`"default"`,computed:!1},required:!1}}}})),m,h,g,_,v,y,b,x;e((()=>{p(),s(),m=r(),h={title:`Data Display/Tag`,component:f,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`outline`,`success`,`warning`,`destructive`]}}},g={args:{children:`React`}},_={args:{children:`Featured`,icon:(0,m.jsx)(a,{className:`h-3 w-3`})}},v={args:{children:`TypeScript`,onRemove:()=>alert(`Removed!`)}},y={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,m.jsx)(f,{children:`Default`}),(0,m.jsx)(f,{variant:`secondary`,children:`Secondary`}),(0,m.jsx)(f,{variant:`outline`,children:`Outline`}),(0,m.jsx)(f,{variant:`success`,children:`Success`}),(0,m.jsx)(f,{variant:`warning`,children:`Warning`}),(0,m.jsx)(f,{variant:`destructive`,children:`Destructive`})]})},b={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,m.jsx)(f,{variant:`default`,onRemove:()=>{},children:`React`}),(0,m.jsx)(f,{variant:`success`,onRemove:()=>{},children:`TypeScript`}),(0,m.jsx)(f,{variant:`warning`,onRemove:()=>{},children:`Tailwind`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: "React"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Featured",
    icon: <Star className="h-3 w-3" />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "TypeScript",
    onRemove: () => alert("Removed!")
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="destructive">Destructive</Tag>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag variant="default" onRemove={() => {}}>
        React
      </Tag>
      <Tag variant="success" onRemove={() => {}}>
        TypeScript
      </Tag>
      <Tag variant="warning" onRemove={() => {}}>
        Tailwind
      </Tag>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithIcon`,`Removable`,`AllVariants`,`RemovableGroup`]}))();export{y as AllVariants,g as Default,v as Removable,b as RemovableGroup,_ as WithIcon,x as __namedExportsOrder,h as default};