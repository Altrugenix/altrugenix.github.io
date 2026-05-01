import{n as e}from"./chunk-jRWAZmH_.js";import{D as t,Ft as n,H as r,bt as i,ct as a,f as o,r as s}from"./iframe-By8sOsRq.js";import{n as c,t as l}from"./altrugenix-tabs-C7rPqzSt.js";var u,d,f,p,m,h,g;e((()=>{c(),s(),u=n(),d={title:`Composites/Tabs/Advanced`,component:l,tags:[`autodocs`]},f=[{value:`profile`,label:`Profile`,icon:(0,u.jsx)(o,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`rounded border p-4`,children:`Profile Settings Content`})},{value:`account`,label:`Account`,icon:(0,u.jsx)(r,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`rounded border p-4`,children:`Account Security Content`})},{value:`notifications`,label:`Notifications`,icon:(0,u.jsx)(i,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`rounded border p-4`,children:`Notification Preferences`})},{value:`settings`,label:`General`,icon:(0,u.jsx)(t,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{className:`rounded border p-4`,children:`General Settings`})}],p={args:{items:f,orientation:`vertical`,variant:`pills`}},m={args:{items:f,orientation:`vertical`,variant:`underline`}},h={render:()=>(0,u.jsx)(`div`,{className:`max-w-[300px]`,children:(0,u.jsx)(l,{scrollable:!0,items:[...f,{value:`help`,label:`Help Center`,icon:(0,u.jsx)(a,{className:`h-4 w-4`}),content:(0,u.jsx)(`div`,{children:`Help!`})},{value:`extra`,label:`Extra Tab`,content:(0,u.jsx)(`div`,{children:`Extra`})}]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "pills"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "underline"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[300px]">
      <Tabs scrollable items={[...ITEMS, {
      value: "help",
      label: "Help Center",
      icon: <HelpCircle className="h-4 w-4" />,
      content: <div>Help!</div>
    }, {
      value: "extra",
      label: "Extra Tab",
      content: <div>Extra</div>
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Vertical`,`UnderlineVertical`,`Scrollable`]}))();export{h as Scrollable,m as UnderlineVertical,p as Vertical,g as __namedExportsOrder,d as default};