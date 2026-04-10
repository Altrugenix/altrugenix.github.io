import{n as e}from"./chunk-zsgVPwQN.js";import{Pt as t,g as n,j as r,s as i,xt as a}from"./iframe-CAjx62e_.js";import{n as o,t as s}from"./tabs-BiutVI6V.js";var c,l,u,d,f,p,m,h,g;e((()=>{s(),i(),c=t(),l={title:`Composites/Tabs`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`pills`,`underline`]}}},u=[{label:`Overview`,value:`overview`,content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Overview content panel.`})},{label:`Analytics`,value:`analytics`,content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Analytics content panel.`})},{label:`Settings`,value:`settings`,content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Settings content panel.`})}],d={args:{items:u,variant:`default`}},f={args:{items:u,variant:`pills`}},p={args:{items:u,variant:`underline`}},m={args:{variant:`default`,items:[{label:`Profile`,value:`profile`,icon:(0,c.jsx)(n,{className:`h-4 w-4`}),content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Profile settings.`})},{label:`Analytics`,value:`analytics`,icon:(0,c.jsx)(a,{className:`h-4 w-4`}),content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Analytics data.`})},{label:`Settings`,value:`settings`,icon:(0,c.jsx)(r,{className:`h-4 w-4`}),content:(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`App settings.`})}]}},h={args:{variant:`default`,items:[...u,{label:`Billing`,value:`billing`,disabled:!0,content:(0,c.jsx)(`p`,{children:`Billing (disabled)`})}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "default"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "pills"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "underline"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    items: [{
      label: "Profile",
      value: "profile",
      icon: <User className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">Profile settings.</p>
    }, {
      label: "Analytics",
      value: "analytics",
      icon: <BarChart className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">Analytics data.</p>
    }, {
      label: "Settings",
      value: "settings",
      icon: <Settings className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">App settings.</p>
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    items: [...tabItems, {
      label: "Billing",
      value: "billing",
      disabled: true,
      content: <p>Billing (disabled)</p>
    }]
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Pills`,`Underline`,`WithIcons`,`WithDisabled`]}))();export{d as Default,f as Pills,p as Underline,h as WithDisabled,m as WithIcons,g as __namedExportsOrder,l as default};