import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";var o,s,c,l,u=e((()=>{o=t(i(),1),r(),s=n(),c={default:`border-primary bg-primary`,success:`border-success bg-success`,warning:`border-warning bg-warning`,destructive:`border-destructive bg-destructive`},l=o.forwardRef(({className:e,items:t,...n},r)=>(0,s.jsx)(`div`,{ref:r,className:a(`relative space-y-0`,e),...n,children:t.map((e,n)=>{let r=e.variant||`default`;return(0,s.jsxs)(`div`,{className:`relative flex gap-4 pb-8 last:pb-0`,children:[n!==t.length-1&&(0,s.jsx)(`div`,{className:`bg-border absolute top-6 left-[0.6875rem] h-full w-px`}),(0,s.jsx)(`div`,{className:`relative z-10 flex shrink-0`,children:e.icon?(0,s.jsx)(`div`,{className:a(`bg-background flex h-6 w-6 items-center justify-center rounded-full border-2`,c[r].replace(`bg-`,`border-`)),children:(0,s.jsx)(`span`,{className:`h-3 w-3`,children:e.icon})}):(0,s.jsx)(`div`,{className:a(`mt-1 h-3.5 w-3.5 rounded-full border-2`,c[r])})}),(0,s.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,s.jsx)(`p`,{className:`text-sm font-semibold`,children:e.title}),e.date&&(0,s.jsx)(`time`,{className:`text-muted-foreground text-xs`,children:e.date})]}),e.description&&(0,s.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:e.description})]})]},n)})})),l.displayName=`Timeline`,l.__docgenInfo={description:``,methods:[],displayName:`Timeline`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TimelineItem`}],raw:`TimelineItem[]`},description:``}}}})),d=e((()=>{u()})),f,p,m,h,g;e((()=>{d(),f={title:`Data Display/Timeline`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`A vertical timeline for displaying chronological events. Each item supports a title, description, date, and semantic variant color (default, success, warning, destructive).`}}},argTypes:{items:{description:`Array of timeline items with title, description, date, and optional variant.`,table:{category:`Data`}}}},p={args:{items:[{title:`Order placed`,description:`Your order #4219 was confirmed.`,date:`May 1, 2026`},{title:`Processing`,description:`We are preparing your package.`,date:`May 1, 2026`},{title:`Shipped`,description:`Package is on its way.`,date:`May 2, 2026`},{title:`Delivered`,description:`Package arrived at destination.`,date:`May 3, 2026`}]}},m={args:{items:[{title:`Project created`,description:`Repository initialized.`,date:`Apr 25`,variant:`success`},{title:`CI pipeline configured`,description:`GitHub Actions workflow added.`,date:`Apr 26`,variant:`success`},{title:`Build failing`,description:`TypeScript errors in 3 packages.`,date:`Apr 27`,variant:`destructive`},{title:`Fix in progress`,description:`Addressing type incompatibilities.`,date:`Apr 28`,variant:`warning`},{title:`All tests passing`,description:`Green build across all packages.`,date:`Apr 29`,variant:`success`}]},parameters:{docs:{description:{story:`Timeline with semantic variant colors showing the history of a development project.`}}}},h={args:{items:[{title:`v2.0.0`,description:`Major redesign with Tailwind v4 and React 19 support.`,date:`May 2026`,variant:`default`},{title:`v1.5.0`,description:`Added 20 new components including Kanban, VideoPlayer, and VirtualList.`,date:`Mar 2026`},{title:`v1.0.0`,description:`First stable release with 40 components.`,date:`Jan 2026`,variant:`success`},{title:`v0.1.0`,description:`Initial beta release.`,date:`Nov 2025`}]},parameters:{docs:{description:{story:`A changelog timeline showing version history of a project.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Order placed",
      description: "Your order #4219 was confirmed.",
      date: "May 1, 2026"
    }, {
      title: "Processing",
      description: "We are preparing your package.",
      date: "May 1, 2026"
    }, {
      title: "Shipped",
      description: "Package is on its way.",
      date: "May 2, 2026"
    }, {
      title: "Delivered",
      description: "Package arrived at destination.",
      date: "May 3, 2026"
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Project created",
      description: "Repository initialized.",
      date: "Apr 25",
      variant: "success" as const
    }, {
      title: "CI pipeline configured",
      description: "GitHub Actions workflow added.",
      date: "Apr 26",
      variant: "success" as const
    }, {
      title: "Build failing",
      description: "TypeScript errors in 3 packages.",
      date: "Apr 27",
      variant: "destructive" as const
    }, {
      title: "Fix in progress",
      description: "Addressing type incompatibilities.",
      date: "Apr 28",
      variant: "warning" as const
    }, {
      title: "All tests passing",
      description: "Green build across all packages.",
      date: "Apr 29",
      variant: "success" as const
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Timeline with semantic variant colors showing the history of a development project."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "v2.0.0",
      description: "Major redesign with Tailwind v4 and React 19 support.",
      date: "May 2026",
      variant: "default" as const
    }, {
      title: "v1.5.0",
      description: "Added 20 new components including Kanban, VideoPlayer, and VirtualList.",
      date: "Mar 2026"
    }, {
      title: "v1.0.0",
      description: "First stable release with 40 components.",
      date: "Jan 2026",
      variant: "success" as const
    }, {
      title: "v0.1.0",
      description: "Initial beta release.",
      date: "Nov 2025"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A changelog timeline showing version history of a project."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithVariants`,`ChangeLog`]}))();export{h as ChangeLog,p as Default,m as WithVariants,g as __namedExportsOrder,f as default};