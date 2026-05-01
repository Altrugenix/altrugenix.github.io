import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,Ht as n,r}from"./iframe-coe0kFk0.js";import{a as i,t as a}from"./src-CxQaJ0KN.js";import{n as o,t as s}from"./src-CuQaqhm9.js";import{n as c,t as l}from"./src-4nQNK7LJ2.js";var u,d,f,p,m,h,g;e((()=>{l(),a(),s(),r(),u=n(),d={title:`Overlays/Popover`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A floating panel anchored to a trigger element. Supports configurable alignment (left/center/right) and side (top/bottom) positioning with click-away dismissal.`}}},argTypes:{trigger:{description:`The element that opens the popover when clicked.`,table:{category:`Content`}},align:{control:`select`,options:[`left`,`center`,`right`],description:`Horizontal alignment relative to the trigger.`,table:{category:`Positioning`}},side:{control:`select`,options:[`top`,`bottom`],description:`Vertical side the popover appears on.`,table:{category:`Positioning`}},open:{description:`Controlled open state.`,table:{category:`State`}},onOpenChange:{description:`Callback when the open state changes.`,table:{category:`Events`}}}},f={render:()=>(0,u.jsx)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Open Popover`}),children:(0,u.jsxs)(`div`,{className:`w-64 space-y-3 p-4`,children:[(0,u.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Quick Settings`}),(0,u.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Adjust your preferences here.`})]})})},p={render:()=>(0,u.jsx)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Right Aligned`}),align:`right`,children:(0,u.jsx)(`div`,{className:`w-48 p-4`,children:(0,u.jsx)(`p`,{className:`text-sm`,children:`This popover is right-aligned.`})})})},m={render:()=>(0,u.jsx)(`div`,{className:`pt-48`,children:(0,u.jsx)(c,{trigger:(0,u.jsx)(i,{variant:`outline`,children:`Opens Above`}),side:`top`,children:(0,u.jsx)(`div`,{className:`w-48 p-4`,children:(0,u.jsx)(`p`,{className:`text-sm`,children:`This popover appears above the trigger.`})})})}),parameters:{docs:{description:{story:`Popover positioned above the trigger — useful when there's no space below.`}}}},h={render:()=>(0,u.jsx)(c,{trigger:(0,u.jsx)(i,{variant:`ghost`,size:`icon`,children:(0,u.jsx)(t,{className:`h-4 w-4`})}),children:(0,u.jsxs)(`div`,{className:`w-72 space-y-3 p-4`,children:[(0,u.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Dimensions`}),(0,u.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,u.jsx)(o,{label:`Width`,placeholder:`100%`}),(0,u.jsx)(o,{label:`Height`,placeholder:`auto`})]}),(0,u.jsx)(i,{size:`sm`,className:`w-full`,children:`Apply`})]})}),parameters:{docs:{description:{story:`A popover containing a mini form — a common pattern for inline editing and settings panels.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Popover trigger={<Button variant="outline">Open Popover</Button>}>
      <div className="w-64 space-y-3 p-4">
        <h4 className="text-sm font-semibold">Quick Settings</h4>
        <p className="text-muted-foreground text-sm">
          Adjust your preferences here.
        </p>
      </div>
    </Popover>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Popover trigger={<Button variant="outline">Right Aligned</Button>} align="right">
      <div className="w-48 p-4">
        <p className="text-sm">This popover is right-aligned.</p>
      </div>
    </Popover>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="pt-48">
      <Popover trigger={<Button variant="outline">Opens Above</Button>} side="top">
        <div className="w-48 p-4">
          <p className="text-sm">This popover appears above the trigger.</p>
        </div>
      </Popover>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Popover positioned above the trigger — useful when there's no space below."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Popover trigger={<Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>}>
      <div className="w-72 space-y-3 p-4">
        <h4 className="text-sm font-semibold">Dimensions</h4>
        <div className="grid grid-cols-2 gap-3">
          <Input label="Width" placeholder="100%" />
          <Input label="Height" placeholder="auto" />
        </div>
        <Button size="sm" className="w-full">
          Apply
        </Button>
      </div>
    </Popover>,
  parameters: {
    docs: {
      description: {
        story: "A popover containing a mini form — a common pattern for inline editing and settings panels."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`AlignRight`,`TopSide`,`WithForm`]}))();export{p as AlignRight,f as Default,m as TopSide,h as WithForm,g as __namedExportsOrder,d as default};