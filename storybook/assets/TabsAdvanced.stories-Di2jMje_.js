import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,Et as n,H as r,Ht as i,ft as a,p as o,r as s}from"./iframe-coe0kFk0.js";import{n as c,t as l}from"./src-DF6BhqY0.js";var u,d,f,p,m,h,g;e((()=>{l(),s(),u=i(),d={title:`Navigation/Tabs/Advanced`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Advanced compositions and layouts for the Tabs component.`}}}},f=[{value:`profile`,label:`Profile`,icon:(0,u.jsx)(o,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`Profile Settings Content`})},{value:`account`,label:`Account`,icon:(0,u.jsx)(r,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`Account Security Content`})},{value:`notifications`,label:`Notifications`,icon:(0,u.jsx)(n,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`Notification Preferences`})},{value:`settings`,label:`General`,icon:(0,u.jsx)(t,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`General Settings`})}],p={args:{items:f,orientation:`vertical`,variant:`pills`},parameters:{docs:{description:{story:`A vertical tab list using the pills variant, commonly used for sidebar settings menus.`}}}},m={args:{items:f,orientation:`vertical`,variant:`underline`},parameters:{docs:{description:{story:`A vertical tab list using the underline variant, creating a minimal border-indicator effect.`}}}},h={render:()=>(0,u.jsx)(`div`,{className:`max-w-[400px]`,children:(0,u.jsx)(c,{scrollable:!0,items:[...f,{value:`help`,label:`Help Center`,icon:(0,u.jsx)(a,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`Help documentation here`})},{value:`extra`,label:`Extra Long Tab Name For Testing`,content:(0,u.jsx)(`div`,{className:`bg-card text-card-foreground rounded border p-4 text-sm`,children:`Extra content`})}]})}),parameters:{docs:{description:{story:"When the tab list exceeds its container width, `scrollable` enables horizontal scrolling (or wrapping depending on the variant)."}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "pills"
  },
  parameters: {
    docs: {
      description: {
        story: "A vertical tab list using the pills variant, commonly used for sidebar settings menus."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "underline"
  },
  parameters: {
    docs: {
      description: {
        story: "A vertical tab list using the underline variant, creating a minimal border-indicator effect."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[400px]">
      <Tabs scrollable items={[...ITEMS, {
      value: "help",
      label: "Help Center",
      icon: <HelpCircle className="h-4 w-4" />,
      content: <div className="bg-card text-card-foreground rounded border p-4 text-sm">
                Help documentation here
              </div>
    }, {
      value: "extra",
      label: "Extra Long Tab Name For Testing",
      content: <div className="bg-card text-card-foreground rounded border p-4 text-sm">
                Extra content
              </div>
    }]} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "When the tab list exceeds its container width, \`scrollable\` enables horizontal scrolling (or wrapping depending on the variant)."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`VerticalPills`,`VerticalUnderline`,`ScrollableList`]}))();export{h as ScrollableList,p as VerticalPills,m as VerticalUnderline,g as __namedExportsOrder,d as default};