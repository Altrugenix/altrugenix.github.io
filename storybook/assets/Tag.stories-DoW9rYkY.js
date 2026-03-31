import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,c as r,d as i,dt as a,i as o,r as s,s as c}from"./iframe-Zc9R2ftq.js";var l,u,d,f,p=e((()=>{l=t(a(),1),o(),c(),u=n(),d={default:`bg-primary/10 text-primary border-primary/20`,secondary:`bg-secondary text-secondary-foreground border-secondary`,outline:`bg-transparent text-foreground border-border`,success:`bg-success/10 text-success border-success/20`,warning:`bg-warning/10 text-warning border-warning/20`,destructive:`bg-destructive/10 text-destructive border-destructive/20`},f=l.forwardRef(({className:e,variant:t=`default`,onRemove:n,icon:i,children:a,...o},c)=>(0,u.jsxs)(`span`,{ref:c,className:s(`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors`,d[t],e),...o,children:[i&&(0,u.jsx)(`span`,{className:`shrink-0`,children:i}),a,n&&(0,u.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),n()},className:`ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring`,"aria-label":`Remove`,children:(0,u.jsx)(r,{className:`h-3 w-3`})})]})),f.displayName=`Tag`,f.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| "default"
| "secondary"
| "outline"
| "success"
| "warning"
| "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Show a remove button`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left icon or avatar`}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S;e((()=>{m(),c(),h=n(),g={title:`Data Display/Tag`,component:f,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`outline`,`success`,`warning`,`destructive`]}}},_={args:{children:`React`}},v={args:{children:`Featured`,icon:(0,h.jsx)(i,{className:`h-3 w-3`})}},y={args:{children:`TypeScript`,onRemove:()=>alert(`Removed!`)}},b={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(f,{children:`Default`}),(0,h.jsx)(f,{variant:`secondary`,children:`Secondary`}),(0,h.jsx)(f,{variant:`outline`,children:`Outline`}),(0,h.jsx)(f,{variant:`success`,children:`Success`}),(0,h.jsx)(f,{variant:`warning`,children:`Warning`}),(0,h.jsx)(f,{variant:`destructive`,children:`Destructive`})]})},x={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(f,{variant:`default`,onRemove:()=>{},children:`React`}),(0,h.jsx)(f,{variant:`success`,onRemove:()=>{},children:`TypeScript`}),(0,h.jsx)(f,{variant:`warning`,onRemove:()=>{},children:`Tailwind`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "React"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Featured",
    icon: <Star className="h-3 w-3" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "TypeScript",
    onRemove: () => alert("Removed!")
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="destructive">Destructive</Tag>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithIcon`,`Removable`,`AllVariants`,`RemovableGroup`]}))();export{b as AllVariants,_ as Default,y as Removable,x as RemovableGroup,v as WithIcon,S as __namedExportsOrder,g as default};