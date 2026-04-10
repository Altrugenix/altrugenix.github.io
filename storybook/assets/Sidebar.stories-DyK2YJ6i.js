import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,W as r,Z as i,cn as a,ft as o,h as s,j as c,s as l,wt as u}from"./iframe-CAjx62e_.js";import{n as d,r as f,t as p}from"./Sidebar-CXVE2Z5C.js";var m,h,g,_,v,y;e((()=>{f(),l(),m=t(a(),1),h=n(),g={title:`Navigation/Sidebar`,component:p,tags:[`autodocs`]},_={render:()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`flex h-[600px] overflow-hidden rounded-lg border`,children:[(0,h.jsxs)(p,{collapsed:e,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between border-b p-4`,children:[!e&&(0,h.jsx)(`span`,{className:`font-bold`,children:`App Name`}),(0,h.jsx)(`button`,{onClick:()=>t(!e),className:`rounded p-1 hover:bg-accent`,children:e?`»`:`«`})]}),(0,h.jsxs)(`div`,{className:`flex-1 space-y-1 p-2`,children:[(0,h.jsx)(d,{icon:(0,h.jsx)(i,{size:20}),active:!0,collapsed:e,children:`Dashboard`}),(0,h.jsx)(d,{icon:(0,h.jsx)(s,{size:20}),collapsed:e,children:`Users`}),(0,h.jsx)(d,{icon:(0,h.jsx)(r,{size:20}),collapsed:e,children:`Messages`}),(0,h.jsx)(d,{icon:(0,h.jsx)(u,{size:20}),collapsed:e,children:`Notifications`})]}),(0,h.jsxs)(`div`,{className:`space-y-1 border-t p-2`,children:[(0,h.jsx)(d,{icon:(0,h.jsx)(c,{size:20}),collapsed:e,children:`Settings`}),(0,h.jsx)(d,{icon:(0,h.jsx)(o,{size:20}),collapsed:e,children:`Support`})]})]}),(0,h.jsxs)(`div`,{className:`flex-1 bg-muted/20 p-8`,children:[(0,h.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Main Content Area`}),(0,h.jsxs)(`p`,{className:`mt-4 text-muted-foreground`,children:[`The sidebar is `,e?`collapsed`:`expanded`,`.`]})]})]})}},v={args:{collapsed:!0,children:(0,h.jsxs)(`div`,{className:`flex h-full flex-col py-4`,children:[(0,h.jsx)(d,{icon:(0,h.jsx)(i,{size:20}),active:!0,collapsed:!0}),(0,h.jsx)(d,{icon:(0,h.jsx)(s,{size:20}),collapsed:!0}),(0,h.jsx)(d,{icon:(0,h.jsx)(r,{size:20}),collapsed:!0}),(0,h.jsx)(`div`,{className:`mt-auto`,children:(0,h.jsx)(d,{icon:(0,h.jsx)(c,{size:20}),collapsed:!0})})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <div className="flex h-[600px] overflow-hidden rounded-lg border">
        <Sidebar collapsed={collapsed}>
          <div className="flex items-center justify-between border-b p-4">
            {!collapsed && <span className="font-bold">App Name</span>}
            <button onClick={() => setCollapsed(!collapsed)} className="rounded p-1 hover:bg-accent">
              {collapsed ? "»" : "«"}
            </button>
          </div>
          <div className="flex-1 space-y-1 p-2">
            <SidebarItem icon={<LayoutDashboard size={20} />} active collapsed={collapsed}>
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<Users size={20} />} collapsed={collapsed}>
              Users
            </SidebarItem>
            <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
              Messages
            </SidebarItem>
            <SidebarItem icon={<Bell size={20} />} collapsed={collapsed}>
              Notifications
            </SidebarItem>
          </div>
          <div className="space-y-1 border-t p-2">
            <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
              Settings
            </SidebarItem>
            <SidebarItem icon={<HelpCircle size={20} />} collapsed={collapsed}>
              Support
            </SidebarItem>
          </div>
        </Sidebar>
        <div className="flex-1 bg-muted/20 p-8">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p className="mt-4 text-muted-foreground">
            The sidebar is {collapsed ? "collapsed" : "expanded"}.
          </p>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    children: <div className="flex h-full flex-col py-4">
        <SidebarItem icon={<LayoutDashboard size={20} />} active collapsed />
        <SidebarItem icon={<Users size={20} />} collapsed />
        <SidebarItem icon={<Mail size={20} />} collapsed />
        <div className="mt-auto">
          <SidebarItem icon={<Settings size={20} />} collapsed />
        </div>
      </div>
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`CollapsedOnly`]}))();export{v as CollapsedOnly,_ as Default,y as __namedExportsOrder,g as default};