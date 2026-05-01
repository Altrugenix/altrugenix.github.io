import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,f as a,ln as o,r as s,s as c}from"./iframe-By8sOsRq.js";import{n as l,t as u}from"./dist-CPbNrqYW.js";import{n as d,r as f}from"./altrugenix-avatar-DsRqX_mL.js";var p,m,h,g,_=e((()=>{p=t(o(),1),s(),i(),l(),m=r(),h=u(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,{variants:{variant:{default:`bg-muted text-muted-foreground hover:bg-muted/80`,primary:`bg-primary text-primary-foreground hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,outline:`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,soft:`bg-primary/10 text-primary border border-transparent`},size:{sm:`px-2 py-0.5 text-[10px]`,md:`px-2.5 py-1 text-xs`,lg:`px-3 py-1.5 text-sm`}},defaultVariants:{variant:`default`,size:`md`}}),g=p.forwardRef(({className:e,variant:t,size:r,avatar:i,onDelete:a,clickable:o,children:s,...l},u)=>(0,m.jsxs)(`div`,{ref:u,className:n(h({variant:t,size:r,className:e}),o&&`cursor-pointer active:scale-95`),...l,children:[i&&(0,m.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,children:i}),(0,m.jsx)(`span`,{className:`truncate`,children:s}),a&&(0,m.jsx)(`button`,{onClick:e=>{e.stopPropagation(),a()},className:`hover:bg-foreground/10 rounded-full p-0.5 transition-colors`,"aria-label":`Delete`,children:(0,m.jsx)(c,{className:`h-3 w-3`})})]})),g.displayName=`Chip`,g.__docgenInfo={description:``,methods:[],displayName:`Chip`}})),v,y,b,x,S,C,w,T;e((()=>{_(),s(),f(),v=r(),y={title:`UI/Chip`,component:g,tags:[`autodocs`]},b={args:{children:`Standard Chip`}},x={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,v.jsx)(g,{variant:`default`,children:`Default`}),(0,v.jsx)(g,{variant:`primary`,children:`Primary`}),(0,v.jsx)(g,{variant:`secondary`,children:`Secondary`}),(0,v.jsx)(g,{variant:`soft`,children:`Soft`}),(0,v.jsx)(g,{variant:`outline`,children:`Outline`})]})},S={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,v.jsx)(g,{avatar:(0,v.jsx)(d,{src:`https://i.pravatar.cc/150?u=1`,className:`h-6 w-6`}),children:`John Doe`}),(0,v.jsx)(g,{variant:`primary`,avatar:(0,v.jsx)(a,{className:`h-4 w-4`}),children:`Administrator`})]})},C={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,v.jsx)(g,{onDelete:()=>alert(`Deleted!`),children:`Tag One`}),(0,v.jsx)(g,{variant:`soft`,onDelete:()=>{},children:`Refined Task`}),(0,v.jsx)(g,{variant:`outline`,onDelete:()=>{},children:`Optional`})]})},w={args:{children:`Click Me`,clickable:!0,onClick:()=>alert(`Clicked!`),variant:`soft`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Standard Chip"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip avatar={<Avatar src="https://i.pravatar.cc/150?u=1" className="h-6 w-6" />}>
        John Doe
      </Chip>
      <Chip variant="primary" avatar={<User className="h-4 w-4" />}>
        Administrator
      </Chip>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip onDelete={() => alert("Deleted!")}>Tag One</Chip>
      <Chip variant="soft" onDelete={() => {}}>
        Refined Task
      </Chip>
      <Chip variant="outline" onDelete={() => {}}>
        Optional
      </Chip>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    clickable: true,
    onClick: () => alert("Clicked!"),
    variant: "soft"
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Variants`,`WithAvatar`,`Deletable`,`Clickable`]}))();export{w as Clickable,b as Default,C as Deletable,x as Variants,S as WithAvatar,T as __namedExportsOrder,y as default};