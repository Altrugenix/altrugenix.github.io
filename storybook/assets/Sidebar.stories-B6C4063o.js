import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{B as n,Ct as r,E as i,Et as a,Ht as o,f as s,ft as c,gn as l,q as u,r as d,tt as f}from"./iframe-coe0kFk0.js";import{n as p,r as m,t as h}from"./src-CfK0RjOW.js";var g,_,v,y,b,x,S;e((()=>{h(),d(),g=t(l(),1),_=o(),v={title:`Navigation/Sidebar`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`A vertical navigation panel with icon+text items and collapsible icon-only mode. Supports configurable expanded and collapsed widths.`}}},argTypes:{collapsed:{control:`boolean`,description:`Whether the sidebar is in icon-only collapsed mode.`,table:{category:`State`}},width:{description:`Width when expanded (CSS value, default: 16rem).`,table:{category:`Appearance`}},collapsedWidth:{description:`Width when collapsed (CSS value, default: 4rem).`,table:{category:`Appearance`}}}},y=()=>{let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(`div`,{className:`flex h-[600px] overflow-hidden rounded-lg border`,children:[(0,_.jsxs)(p,{collapsed:e,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between border-b p-4`,children:[!e&&(0,_.jsx)(`span`,{className:`font-bold`,children:`App Name`}),(0,_.jsx)(`button`,{onClick:()=>t(!e),className:`hover:bg-accent rounded p-1`,children:e?`»`:`«`})]}),(0,_.jsxs)(`div`,{className:`flex-1 space-y-1 p-2`,children:[(0,_.jsx)(m,{icon:(0,_.jsx)(u,{size:20}),active:!0,collapsed:e,children:`Dashboard`}),(0,_.jsx)(m,{icon:(0,_.jsx)(s,{size:20}),collapsed:e,children:`Users`}),(0,_.jsx)(m,{icon:(0,_.jsx)(f,{size:20}),collapsed:e,children:`Projects`}),(0,_.jsx)(m,{icon:(0,_.jsx)(r,{size:20}),collapsed:e,children:`Analytics`}),(0,_.jsx)(m,{icon:(0,_.jsx)(n,{size:20}),collapsed:e,children:`Messages`}),(0,_.jsx)(m,{icon:(0,_.jsx)(a,{size:20}),collapsed:e,children:`Notifications`})]}),(0,_.jsxs)(`div`,{className:`space-y-1 border-t p-2`,children:[(0,_.jsx)(m,{icon:(0,_.jsx)(i,{size:20}),collapsed:e,children:`Settings`}),(0,_.jsx)(m,{icon:(0,_.jsx)(c,{size:20}),collapsed:e,children:`Support`})]})]}),(0,_.jsxs)(`div`,{className:`bg-muted/20 flex-1 p-8`,children:[(0,_.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Main Content Area`}),(0,_.jsxs)(`p`,{className:`text-muted-foreground mt-4`,children:[`The sidebar is `,e?`collapsed`:`expanded`,`. Click the toggle to switch.`]})]})]})},b={render:()=>(0,_.jsx)(y,{}),parameters:{docs:{description:{story:`A full sidebar with collapsible toggle, grouped navigation items, and a bottom settings section.`}}}},x={args:{collapsed:!0,children:(0,_.jsxs)(`div`,{className:`flex h-full flex-col py-4`,children:[(0,_.jsx)(m,{icon:(0,_.jsx)(u,{size:20}),active:!0,collapsed:!0}),(0,_.jsx)(m,{icon:(0,_.jsx)(s,{size:20}),collapsed:!0}),(0,_.jsx)(m,{icon:(0,_.jsx)(n,{size:20}),collapsed:!0}),(0,_.jsx)(m,{icon:(0,_.jsx)(r,{size:20}),collapsed:!0}),(0,_.jsx)(`div`,{className:`mt-auto`,children:(0,_.jsx)(m,{icon:(0,_.jsx)(i,{size:20}),collapsed:!0})})]})},parameters:{docs:{description:{story:`A permanently collapsed sidebar showing icon-only navigation.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FullSidebarDemo />,
  parameters: {
    docs: {
      description: {
        story: "A full sidebar with collapsible toggle, grouped navigation items, and a bottom settings section."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    children: <div className="flex h-full flex-col py-4">
        <SidebarItem icon={<LayoutDashboard size={20} />} active collapsed />
        <SidebarItem icon={<Users size={20} />} collapsed />
        <SidebarItem icon={<Mail size={20} />} collapsed />
        <SidebarItem icon={<BarChart3 size={20} />} collapsed />
        <div className="mt-auto">
          <SidebarItem icon={<Settings size={20} />} collapsed />
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "A permanently collapsed sidebar showing icon-only navigation."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CollapsedOnly`]}))();export{x as CollapsedOnly,b as Default,S as __namedExportsOrder,v as default};