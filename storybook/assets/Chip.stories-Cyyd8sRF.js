import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,d as i,g as a,i as o,r as s,s as c}from"./iframe-CAjx62e_.js";import{n as l,t as u}from"./dist-CWM4ALlg.js";import{r as d,t as f}from"./avatar-DGug9nGW.js";var p,m,h,g,_=e((()=>{p=t(r(),1),c(),o(),l(),m=n(),h=u(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,{variants:{variant:{default:`bg-muted text-muted-foreground hover:bg-muted/80`,primary:`bg-primary text-primary-foreground hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,outline:`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,soft:`bg-primary/10 text-primary border border-transparent`},size:{sm:`px-2 py-0.5 text-[10px]`,md:`px-2.5 py-1 text-xs`,lg:`px-3 py-1.5 text-sm`}},defaultVariants:{variant:`default`,size:`md`}}),g=p.forwardRef(({className:e,variant:t,size:n,avatar:r,onDelete:a,clickable:o,children:c,...l},u)=>(0,m.jsxs)(`div`,{ref:u,className:s(h({variant:t,size:n,className:e}),o&&`cursor-pointer active:scale-95`),...l,children:[r&&(0,m.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,children:r}),(0,m.jsx)(`span`,{className:`truncate`,children:c}),a&&(0,m.jsx)(`button`,{onClick:e=>{e.stopPropagation(),a()},className:`rounded-full p-0.5 transition-colors hover:bg-foreground/10`,"aria-label":`Delete`,children:(0,m.jsx)(i,{className:`h-3 w-3`})})]})),g.displayName=`Chip`,g.__docgenInfo={description:`A compact element that represents an input, attribute, or entity.
Inspired by MUI Chip.`,methods:[],displayName:`Chip`,props:{avatar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left icon or avatar`},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Right button for deletion`},clickable:{required:!1,tsType:{name:`boolean`},description:`Whether the chip is interactive`}},composes:[`VariantProps`]}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E;e((()=>{v(),c(),f(),y=n(),b={title:`UI/Chip`,component:g,tags:[`autodocs`]},x={args:{children:`Standard Chip`}},S={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,y.jsx)(g,{variant:`default`,children:`Default`}),(0,y.jsx)(g,{variant:`primary`,children:`Primary`}),(0,y.jsx)(g,{variant:`secondary`,children:`Secondary`}),(0,y.jsx)(g,{variant:`soft`,children:`Soft`}),(0,y.jsx)(g,{variant:`outline`,children:`Outline`})]})},C={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,y.jsx)(g,{avatar:(0,y.jsx)(d,{src:`https://i.pravatar.cc/150?u=1`,className:`h-6 w-6`}),children:`John Doe`}),(0,y.jsx)(g,{variant:`primary`,avatar:(0,y.jsx)(a,{className:`h-4 w-4`}),children:`Administrator`})]})},w={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,y.jsx)(g,{onDelete:()=>alert(`Deleted!`),children:`Tag One`}),(0,y.jsx)(g,{variant:`soft`,onDelete:()=>{},children:`Refined Task`}),(0,y.jsx)(g,{variant:`outline`,onDelete:()=>{},children:`Optional`})]})},T={args:{children:`Click Me`,clickable:!0,onClick:()=>alert(`Clicked!`),variant:`soft`}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Standard Chip"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip avatar={<Avatar src="https://i.pravatar.cc/150?u=1" className="h-6 w-6" />}>
        John Doe
      </Chip>
      <Chip variant="primary" avatar={<User className="h-4 w-4" />}>
        Administrator
      </Chip>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip onDelete={() => alert("Deleted!")}>Tag One</Chip>
      <Chip variant="soft" onDelete={() => {}}>
        Refined Task
      </Chip>
      <Chip variant="outline" onDelete={() => {}}>
        Optional
      </Chip>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    clickable: true,
    onClick: () => alert("Clicked!"),
    variant: "soft"
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Variants`,`WithAvatar`,`Deletable`,`Clickable`]}))();export{T as Clickable,x as Default,w as Deletable,S as Variants,C as WithAvatar,E as __namedExportsOrder,b as default};