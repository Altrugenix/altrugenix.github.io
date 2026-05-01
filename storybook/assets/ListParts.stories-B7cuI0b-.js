import{n as e}from"./chunk-jRWAZmH_.js";import{E as t,Et as n,Ht as r,T as i,V as a,p as o,r as s,vt as c}from"./iframe-coe0kFk0.js";import{a as l,i as u,n as d,r as f,t as p}from"./src-eZEzacXe.js";var m,h,g,_,v;e((()=>{p(),s(),m=r(),h={title:`Data Display/List/Advanced`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:"Advanced compositions for the List component using subcomponents like `ListItemButton` and `ListItemDecorator`."}}}},g={render:()=>(0,m.jsx)(`div`,{className:`bg-card max-w-sm rounded-xl border shadow-sm`,children:(0,m.jsxs)(d,{divided:!0,children:[(0,m.jsxs)(u,{children:[(0,m.jsx)(l,{children:(0,m.jsx)(o,{className:`h-4 w-4`})}),(0,m.jsx)(`div`,{className:`flex-1 font-medium`,children:`Profile Settings`}),(0,m.jsx)(c,{className:`h-4 w-4 opacity-50`})]}),(0,m.jsxs)(u,{children:[(0,m.jsx)(l,{children:(0,m.jsx)(n,{className:`h-4 w-4`})}),(0,m.jsx)(`div`,{className:`flex-1 font-medium`,children:`Notifications`}),(0,m.jsx)(c,{className:`h-4 w-4 opacity-50`})]}),(0,m.jsxs)(u,{children:[(0,m.jsx)(l,{children:(0,m.jsx)(i,{className:`h-4 w-4`})}),(0,m.jsx)(`div`,{className:`flex-1 font-medium`,children:`Privacy & Security`}),(0,m.jsx)(c,{className:`h-4 w-4 opacity-50`})]}),(0,m.jsxs)(u,{className:`text-destructive hover:bg-destructive/10`,children:[(0,m.jsx)(l,{children:(0,m.jsx)(a,{className:`h-4 w-4`})}),(0,m.jsx)(`div`,{className:`flex-1 font-bold`,children:`Logout`})]})]})}),parameters:{docs:{description:{story:"An interactive menu using `ListItemButton` for hover/active states, typically used in sidebars or dropdowns."}}}},_={render:()=>(0,m.jsx)(`div`,{className:`bg-card max-w-sm rounded-xl border shadow-sm`,children:(0,m.jsxs)(d,{divided:!0,children:[(0,m.jsx)(f,{leading:(0,m.jsx)(t,{className:`h-5 w-5`}),trailing:(0,m.jsx)(`div`,{className:`bg-primary h-2 w-2 rounded-full`}),secondary:`Manage your application settings`,children:`System Settings`}),(0,m.jsx)(f,{leading:(0,m.jsx)(n,{className:`h-5 w-5 text-amber-500`}),secondary:`Updated 2 hours ago`,children:`Activity Feed`})]})}),parameters:{docs:{description:{story:"List items displaying primary text alongside `secondary` subtitle text."}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-card max-w-sm rounded-xl border shadow-sm">
      <List divided>
        <ListItemButton>
          <ListItemDecorator>
            <User className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Profile Settings</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton>
          <ListItemDecorator>
            <Bell className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Notifications</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton>
          <ListItemDecorator>
            <Shield className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Privacy & Security</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton className="text-destructive hover:bg-destructive/10">
          <ListItemDecorator>
            <LogOut className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-bold">Logout</div>
        </ListItemButton>
      </List>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "An interactive menu using \`ListItemButton\` for hover/active states, typically used in sidebars or dropdowns."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-card max-w-sm rounded-xl border shadow-sm">
      <List divided>
        <ListItem leading={<Settings className="h-5 w-5" />} trailing={<div className="bg-primary h-2 w-2 rounded-full" />} secondary="Manage your application settings">
          System Settings
        </ListItem>
        <ListItem leading={<Bell className="h-5 w-5 text-amber-500" />} secondary="Updated 2 hours ago">
          Activity Feed
        </ListItem>
      </List>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "List items displaying primary text alongside \`secondary\` subtitle text."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`InteractiveList`,`MixedContent`]}))();export{g as InteractiveList,_ as MixedContent,v as __namedExportsOrder,h as default};