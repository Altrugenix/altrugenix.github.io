import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,dt as r,i,r as a}from"./iframe-Zc9R2ftq.js";var o,s,c,l,u=e((()=>{o=t(r(),1),i(),s=n(),c={default:`border-primary bg-primary`,success:`border-success bg-success`,warning:`border-warning bg-warning`,destructive:`border-destructive bg-destructive`},l=o.forwardRef(({className:e,items:t,...n},r)=>(0,s.jsx)(`div`,{ref:r,className:a(`relative space-y-0`,e),...n,children:t.map((e,n)=>{let r=e.variant||`default`;return(0,s.jsxs)(`div`,{className:`relative flex gap-4 pb-8 last:pb-0`,children:[n!==t.length-1&&(0,s.jsx)(`div`,{className:`absolute left-[0.6875rem] top-6 h-full w-px bg-border`}),(0,s.jsx)(`div`,{className:`relative z-10 flex shrink-0`,children:e.icon?(0,s.jsx)(`div`,{className:a(`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background`,c[r].replace(`bg-`,`border-`)),children:(0,s.jsx)(`span`,{className:`h-3 w-3`,children:e.icon})}):(0,s.jsx)(`div`,{className:a(`mt-1 h-3.5 w-3.5 rounded-full border-2`,c[r])})}),(0,s.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,s.jsx)(`p`,{className:`text-sm font-semibold`,children:e.title}),e.date&&(0,s.jsx)(`time`,{className:`text-xs text-muted-foreground`,children:e.date})]}),e.description&&(0,s.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.description})]})]},n)})})),l.displayName=`Timeline`,l.__docgenInfo={description:``,methods:[],displayName:`Timeline`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TimelineItem`}],raw:`TimelineItem[]`},description:``}}}})),d=e((()=>{u()})),f,p,m,h;e((()=>{d(),f={title:`Data Display/Timeline`,component:l,tags:[`autodocs`]},p={args:{items:[{title:`Project Created`,description:`Initial project scaffolding was set up.`,date:`Jan 1, 2026`,variant:`success`},{title:`Components Built`,description:`All atom and molecule components implemented.`,date:`Feb 15, 2026`,variant:`success`},{title:`Testing Phase`,description:`Running integration and accessibility tests.`,date:`Mar 10, 2026`,variant:`warning`},{title:`Production Release`,description:`Scheduled for public release.`,date:`Apr 1, 2026`,variant:`default`}]}},m={args:{items:[{title:`Step 1`,description:`Account created.`},{title:`Step 2`,description:`Email verified.`},{title:`Step 3`,description:`Profile completed.`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Project Created",
      description: "Initial project scaffolding was set up.",
      date: "Jan 1, 2026",
      variant: "success"
    }, {
      title: "Components Built",
      description: "All atom and molecule components implemented.",
      date: "Feb 15, 2026",
      variant: "success"
    }, {
      title: "Testing Phase",
      description: "Running integration and accessibility tests.",
      date: "Mar 10, 2026",
      variant: "warning"
    }, {
      title: "Production Release",
      description: "Scheduled for public release.",
      date: "Apr 1, 2026",
      variant: "default"
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Step 1",
      description: "Account created."
    }, {
      title: "Step 2",
      description: "Email verified."
    }, {
      title: "Step 3",
      description: "Profile completed."
    }]
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Minimal`]}))();export{p as Default,m as Minimal,h as __namedExportsOrder,f as default};