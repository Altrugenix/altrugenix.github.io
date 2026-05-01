import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({className:e,level:t=1,...n},r)=>(0,s.jsx)(`h${t}`,{ref:r,className:a({1:`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading`,2:`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading`,3:`scroll-m-20 text-2xl font-semibold tracking-tight font-heading`,4:`scroll-m-20 text-xl font-semibold tracking-tight font-heading`,5:`scroll-m-20 text-lg font-semibold tracking-tight font-heading`,6:`scroll-m-20 text-base font-semibold tracking-tight font-heading`}[t],e),...n})),c.displayName=`Heading`,c.__docgenInfo={description:``,methods:[],displayName:`Heading`,props:{level:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:``,defaultValue:{value:`1`,computed:!1}}}}})),u=e((()=>{l()})),d,f,p,m,h,g;e((()=>{u(),d=n(),f={title:`Typography/Heading`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:"A semantic heading component rendering h1–h6 elements with consistent typographic styling. Use the `level` prop to control the heading hierarchy."}}},argTypes:{level:{control:{type:`number`,min:1,max:6},description:`The heading level (1–6), determines the HTML element and size.`,table:{category:`Appearance`}},children:{description:`The heading text content.`,table:{category:`Content`}}}},p={args:{level:1,children:`This is a Heading Level 1`}},m={render:()=>(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(c,{level:1,children:`Heading 1 — Page Title`}),(0,d.jsx)(c,{level:2,children:`Heading 2 — Section`}),(0,d.jsx)(c,{level:3,children:`Heading 3 — Subsection`}),(0,d.jsx)(c,{level:4,children:`Heading 4 — Group Title`}),(0,d.jsx)(c,{level:5,children:`Heading 5 — Label`}),(0,d.jsx)(c,{level:6,children:`Heading 6 — Caption`})]}),parameters:{docs:{description:{story:`All six heading levels displayed together, showing the typographic scale from h1 to h6.`}}}},h={render:()=>(0,d.jsxs)(`article`,{className:`max-w-lg space-y-4`,children:[(0,d.jsx)(c,{level:1,children:`Getting Started`}),(0,d.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Welcome to the Altrugenix design system. Follow this guide to set up your first project.`}),(0,d.jsx)(c,{level:2,children:`Installation`}),(0,d.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Install the core package using your preferred package manager.`}),(0,d.jsx)(c,{level:3,children:`Configuration`}),(0,d.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Configure the theme provider at the root of your application.`})]}),parameters:{docs:{description:{story:`Headings used in a realistic content layout with paragraphs, demonstrating proper heading hierarchy.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "This is a Heading Level 1"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading level={1}>Heading 1 — Page Title</Heading>
      <Heading level={2}>Heading 2 — Section</Heading>
      <Heading level={3}>Heading 3 — Subsection</Heading>
      <Heading level={4}>Heading 4 — Group Title</Heading>
      <Heading level={5}>Heading 5 — Label</Heading>
      <Heading level={6}>Heading 6 — Caption</Heading>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All six heading levels displayed together, showing the typographic scale from h1 to h6."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <article className="max-w-lg space-y-4">
      <Heading level={1}>Getting Started</Heading>
      <p className="text-muted-foreground text-sm">
        Welcome to the Altrugenix design system. Follow this guide to set up
        your first project.
      </p>
      <Heading level={2}>Installation</Heading>
      <p className="text-muted-foreground text-sm">
        Install the core package using your preferred package manager.
      </p>
      <Heading level={3}>Configuration</Heading>
      <p className="text-muted-foreground text-sm">
        Configure the theme provider at the root of your application.
      </p>
    </article>,
  parameters: {
    docs: {
      description: {
        story: "Headings used in a realistic content layout with paragraphs, demonstrating proper heading hierarchy."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`AllLevels`,`InContent`]}))();export{m as AllLevels,p as Default,h as InContent,g as __namedExportsOrder,f as default};