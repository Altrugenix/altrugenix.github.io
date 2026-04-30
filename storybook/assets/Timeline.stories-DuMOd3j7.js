import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";var o,s,c,l,u=e((()=>{o=t(a(),1),i(),s=r(),c={default:`border-primary bg-primary`,success:`border-success bg-success`,warning:`border-warning bg-warning`,destructive:`border-destructive bg-destructive`},l=o.forwardRef(({className:e,items:t,...r},i)=>(0,s.jsx)(`div`,{ref:i,className:n(`relative space-y-0`,e),...r,children:t.map((e,r)=>{let i=e.variant||`default`;return(0,s.jsxs)(`div`,{className:`relative flex gap-4 pb-8 last:pb-0`,children:[r!==t.length-1&&(0,s.jsx)(`div`,{className:`bg-border absolute top-6 left-[0.6875rem] h-full w-px`}),(0,s.jsx)(`div`,{className:`relative z-10 flex shrink-0`,children:e.icon?(0,s.jsx)(`div`,{className:n(`bg-background flex h-6 w-6 items-center justify-center rounded-full border-2`,c[i].replace(`bg-`,`border-`)),children:(0,s.jsx)(`span`,{className:`h-3 w-3`,children:e.icon})}):(0,s.jsx)(`div`,{className:n(`mt-1 h-3.5 w-3.5 rounded-full border-2`,c[i])})}),(0,s.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,s.jsx)(`p`,{className:`text-sm font-semibold`,children:e.title}),e.date&&(0,s.jsx)(`time`,{className:`text-muted-foreground text-xs`,children:e.date})]}),e.description&&(0,s.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:e.description})]})]},r)})})),l.displayName=`Timeline`,l.__docgenInfo={description:``,methods:[],displayName:`Timeline`}})),d,f,p,m;e((()=>{u(),d={title:`Data Display/Timeline`,component:l,tags:[`autodocs`]},f={args:{items:[{title:`Project Created`,description:`Initial project scaffolding was set up.`,date:`Jan 1, 2026`,variant:`success`},{title:`Components Built`,description:`All atom and molecule components implemented.`,date:`Feb 15, 2026`,variant:`success`},{title:`Testing Phase`,description:`Running integration and accessibility tests.`,date:`Mar 10, 2026`,variant:`warning`},{title:`Production Release`,description:`Scheduled for public release.`,date:`Apr 1, 2026`,variant:`default`}]}},p={args:{items:[{title:`Step 1`,description:`Account created.`},{title:`Step 2`,description:`Email verified.`},{title:`Step 3`,description:`Profile completed.`}]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Minimal`]}))();export{f as Default,p as Minimal,m as __namedExportsOrder,d as default};