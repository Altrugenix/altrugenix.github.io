import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,c as i,gn as a,p as o,r as s,s as c,xt as l,zt as u}from"./iframe-zfMobaDd.js";import{n as d,t as f}from"./dist-DrkvuII2.js";import{r as p,t as m}from"./src-Bw7zAyGs.js";var h,g,_,v,y=e((()=>{h=t(a(),1),s(),r(),d(),g=n(),_=f(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,{variants:{variant:{default:`bg-muted text-muted-foreground hover:bg-muted/80`,primary:`bg-primary text-primary-foreground hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,outline:`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,soft:`bg-primary/10 text-primary border border-transparent`},size:{sm:`px-2 py-0.5 text-[10px]`,md:`px-2.5 py-1 text-xs`,lg:`px-3 py-1.5 text-sm`}},defaultVariants:{variant:`default`,size:`md`}}),v=h.forwardRef(({className:e,variant:t,size:n,avatar:r,onDelete:a,clickable:o,children:s,...c},l)=>(0,g.jsxs)(`div`,{ref:l,className:u(_({variant:t,size:n,className:e}),o&&`cursor-pointer active:scale-95`),...c,children:[r&&(0,g.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,children:r}),(0,g.jsx)(`span`,{className:`truncate`,children:s}),a&&(0,g.jsx)(`button`,{onClick:e=>{e.stopPropagation(),a()},className:`hover:bg-foreground/10 rounded-full p-0.5 transition-colors`,"aria-label":`Delete`,children:(0,g.jsx)(i,{className:`h-3 w-3`})})]})),v.displayName=`Chip`,v.__docgenInfo={description:`A compact element that represents an input, attribute, or entity.
Inspired by MUI Chip.`,methods:[],displayName:`Chip`,props:{avatar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left icon or avatar`},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Right button for deletion`},clickable:{required:!1,tsType:{name:`boolean`},description:`Whether the chip is interactive`}},composes:[`VariantProps`]}})),b=e((()=>{y()})),x,S,C,w,T,E,D,O,k,A;e((()=>{b(),s(),m(),x=n(),S={title:`Data Display/Chip`,component:v,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A compact element representing an input, attribute, or action. Supports multiple variants, sizes, avatars, delete actions, and clickable interaction.`}}},argTypes:{variant:{control:`select`,options:[`default`,`primary`,`secondary`,`outline`,`soft`],description:`Visual style of the chip.`,table:{category:`Appearance`}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size of the chip.`,table:{category:`Appearance`}},avatar:{description:`Left-aligned icon or avatar element.`,table:{category:`Content`}},onDelete:{description:`When provided, renders a delete button on the right.`,table:{category:`Events`}},clickable:{control:`boolean`,description:`Makes the chip interactive with a press effect.`,table:{category:`Behavior`}}}},C={args:{children:`Standard Chip`}},w={render:()=>(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(v,{variant:`default`,children:`Default`}),(0,x.jsx)(v,{variant:`primary`,children:`Primary`}),(0,x.jsx)(v,{variant:`secondary`,children:`Secondary`}),(0,x.jsx)(v,{variant:`soft`,children:`Soft`}),(0,x.jsx)(v,{variant:`outline`,children:`Outline`})]}),parameters:{docs:{description:{story:`All five chip variants displayed side by side.`}}}},T={render:()=>(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(v,{size:`sm`,children:`Small`}),(0,x.jsx)(v,{size:`md`,children:`Medium`}),(0,x.jsx)(v,{size:`lg`,children:`Large`})]}),parameters:{docs:{description:{story:`Comparison of all three chip sizes.`}}}},E={render:()=>(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(v,{avatar:(0,x.jsx)(p,{src:`https://i.pravatar.cc/150?u=1`,className:`h-6 w-6`}),children:`John Doe`}),(0,x.jsx)(v,{variant:`primary`,avatar:(0,x.jsx)(o,{className:`h-4 w-4`}),children:`Administrator`}),(0,x.jsx)(v,{variant:`soft`,avatar:(0,x.jsx)(c,{className:`h-4 w-4`}),children:`Pro Plan`})]}),parameters:{docs:{description:{story:`Chips with leading avatars or icons for user profiles, roles, and status indicators.`}}}},D={render:()=>(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(v,{onDelete:()=>{},children:`Tag One`}),(0,x.jsx)(v,{variant:`soft`,onDelete:()=>{},children:`Refined Task`}),(0,x.jsx)(v,{variant:`outline`,onDelete:()=>{},children:`Optional`})]}),parameters:{docs:{description:{story:`Chips with a delete button — common for removable tags and filter tokens.`}}}},O={args:{children:`Click Me`,clickable:!0,variant:`soft`},parameters:{docs:{description:{story:`Clickable chips have a cursor pointer and scale-down press animation.`}}}},k={render:()=>(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`Filters:`}),(0,x.jsx)(v,{variant:`primary`,size:`sm`,avatar:(0,x.jsx)(l,{className:`h-3 w-3`}),children:`Active`}),(0,x.jsx)(v,{variant:`soft`,size:`sm`,onDelete:()=>{},children:`TypeScript`}),(0,x.jsx)(v,{variant:`soft`,size:`sm`,onDelete:()=>{},children:`React`}),(0,x.jsx)(v,{variant:`outline`,size:`sm`,clickable:!0,children:`+ Add filter`})]}),parameters:{docs:{description:{story:`A filter bar composed of chips — a common pattern for search interfaces and data tables.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Standard Chip"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All five chip variants displayed side by side."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three chip sizes."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip avatar={<Avatar src="https://i.pravatar.cc/150?u=1" className="h-6 w-6" />}>
        John Doe
      </Chip>
      <Chip variant="primary" avatar={<User className="h-4 w-4" />}>
        Administrator
      </Chip>
      <Chip variant="soft" avatar={<Zap className="h-4 w-4" />}>
        Pro Plan
      </Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chips with leading avatars or icons for user profiles, roles, and status indicators."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Chip onDelete={() => {}}>Tag One</Chip>
      <Chip variant="soft" onDelete={() => {}}>
        Refined Task
      </Chip>
      <Chip variant="outline" onDelete={() => {}}>
        Optional
      </Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chips with a delete button — common for removable tags and filter tokens."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    clickable: true,
    variant: "soft"
  },
  parameters: {
    docs: {
      description: {
        story: "Clickable chips have a cursor pointer and scale-down press animation."
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-sm">Filters:</span>
      <Chip variant="primary" size="sm" avatar={<Check className="h-3 w-3" />}>
        Active
      </Chip>
      <Chip variant="soft" size="sm" onDelete={() => {}}>
        TypeScript
      </Chip>
      <Chip variant="soft" size="sm" onDelete={() => {}}>
        React
      </Chip>
      <Chip variant="outline" size="sm" clickable>
        + Add filter
      </Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A filter bar composed of chips — a common pattern for search interfaces and data tables."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Variants`,`Sizes`,`WithAvatar`,`Deletable`,`Clickable`,`FilterBar`]}))();export{O as Clickable,C as Default,D as Deletable,k as FilterBar,T as Sizes,w as Variants,E as WithAvatar,A as __namedExportsOrder,S as default};