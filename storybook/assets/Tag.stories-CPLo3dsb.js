import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,Q as i,c as a,gn as o,lt as s,r as c,w as l,zt as u}from"./iframe-zfMobaDd.js";var d,f,p,m,h=e((()=>{d=t(o(),1),r(),c(),f=n(),p={default:`bg-primary/10 text-primary border-primary/20`,secondary:`bg-secondary text-secondary-foreground border-secondary`,outline:`bg-transparent text-foreground border-border`,success:`bg-success/10 text-success border-success/20`,warning:`bg-warning/10 text-warning border-warning/20`,destructive:`bg-destructive/10 text-destructive border-destructive/20`},m=d.forwardRef(({className:e,variant:t=`default`,onRemove:n,icon:r,children:i,...o},s)=>(0,f.jsxs)(`span`,{ref:s,className:u(`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors`,p[t],e),...o,children:[r&&(0,f.jsx)(`span`,{className:`shrink-0`,children:r}),i,n&&(0,f.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),n()},className:`focus:ring-ring ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 focus:ring-1 focus:outline-none`,"aria-label":`Remove`,children:(0,f.jsx)(a,{className:`h-3 w-3`})})]})),m.displayName=`Tag`,m.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{variant:{required:!1,tsType:{name:`union`,raw:`| "default"
| "secondary"
| "outline"
| "success"
| "warning"
| "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"destructive"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Show a remove button`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left icon or avatar`}}}})),g=e((()=>{h()})),_,v,y,b,x,S,C,w,T;e((()=>{g(),c(),_=n(),v={title:`Data Display/Tag`,component:m,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A small label for categorizing, filtering, or annotating content. Supports six semantic variants, leading icons, and an optional remove button.`}}},argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`outline`,`success`,`warning`,`destructive`],description:`Semantic color variant.`,table:{category:`Appearance`}},icon:{description:`Leading icon element.`,table:{category:`Content`}},onRemove:{description:`When provided, renders a close (×) button on the right.`,table:{category:`Events`}},children:{description:`Tag label text.`,table:{category:`Content`}}}},y={args:{children:`React`}},b={args:{children:`Featured`,icon:(0,_.jsx)(l,{className:`h-3 w-3`})}},x={args:{children:`TypeScript`,onRemove:()=>{}},parameters:{docs:{description:{story:`A removable tag with a dismiss button — common for selected filter tokens.`}}}},S={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(m,{children:`Default`}),(0,_.jsx)(m,{variant:`secondary`,children:`Secondary`}),(0,_.jsx)(m,{variant:`outline`,children:`Outline`}),(0,_.jsx)(m,{variant:`success`,children:`Success`}),(0,_.jsx)(m,{variant:`warning`,children:`Warning`}),(0,_.jsx)(m,{variant:`destructive`,children:`Destructive`})]}),parameters:{docs:{description:{story:`All six tag variants displayed together.`}}}},C={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(m,{variant:`default`,onRemove:()=>{},children:`React`}),(0,_.jsx)(m,{variant:`success`,onRemove:()=>{},children:`TypeScript`}),(0,_.jsx)(m,{variant:`warning`,onRemove:()=>{},children:`Tailwind`})]})},w={render:()=>(0,_.jsxs)(`div`,{className:`space-y-3`,children:[(0,_.jsx)(`p`,{className:`text-foreground text-sm font-medium`,children:`Tech Stack`}),(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(m,{icon:(0,_.jsx)(s,{className:`h-3 w-3`}),variant:`default`,children:`React 19`}),(0,_.jsx)(m,{icon:(0,_.jsx)(s,{className:`h-3 w-3`}),variant:`success`,children:`TypeScript`}),(0,_.jsx)(m,{icon:(0,_.jsx)(i,{className:`h-3 w-3`}),variant:`outline`,children:`Tailwind v4`}),(0,_.jsx)(m,{icon:(0,_.jsx)(i,{className:`h-3 w-3`}),variant:`outline`,children:`Vite 6`}),(0,_.jsx)(m,{variant:`secondary`,children:`Storybook`})]})]}),parameters:{docs:{description:{story:`Tags with icons used to display a technology stack — a common pattern for project cards and profiles.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: "React"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Featured",
    icon: <Star className="h-3 w-3" />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: "TypeScript",
    onRemove: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "A removable tag with a dismiss button — common for selected filter tokens."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="destructive">Destructive</Tag>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All six tag variants displayed together."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <p className="text-foreground text-sm font-medium">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        <Tag icon={<Code2 className="h-3 w-3" />} variant="default">
          React 19
        </Tag>
        <Tag icon={<Code2 className="h-3 w-3" />} variant="success">
          TypeScript
        </Tag>
        <Tag icon={<Hash className="h-3 w-3" />} variant="outline">
          Tailwind v4
        </Tag>
        <Tag icon={<Hash className="h-3 w-3" />} variant="outline">
          Vite 6
        </Tag>
        <Tag variant="secondary">Storybook</Tag>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tags with icons used to display a technology stack — a common pattern for project cards and profiles."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithIcon`,`Removable`,`AllVariants`,`RemovableGroup`,`TechStack`]}))();export{S as AllVariants,y as Default,x as Removable,C as RemovableGroup,w as TechStack,b as WithIcon,T as __namedExportsOrder,v as default};