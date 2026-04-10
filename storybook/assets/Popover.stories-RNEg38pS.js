import{n as e}from"./chunk-zsgVPwQN.js";import{Pt as t,s as n,wt as r}from"./iframe-CAjx62e_.js";import{a as i,t as a}from"./button-WWkxm_3b.js";import{n as o,t as s}from"./Popover-kSa4WUv0.js";var c,l,u,d,f,p;e((()=>{o(),a(),n(),c=t(),l={title:`Overlays/Popover`,component:s,tags:[`autodocs`]},u={args:{trigger:(0,c.jsx)(i,{variant:`outline`,children:`Open Popover`}),children:(0,c.jsxs)(`div`,{className:`grid gap-4`,children:[(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`h4`,{className:`font-medium leading-none`,children:`Dimensions`}),(0,c.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Set the dimensions for the layer.`})]}),(0,c.jsx)(`div`,{className:`grid gap-2`,children:(0,c.jsx)(i,{size:`sm`,variant:`outline`,children:`Save`})})]})}},d={args:{trigger:(0,c.jsx)(i,{variant:`ghost`,size:`icon`,children:(0,c.jsx)(r,{className:`h-5 w-5`})}),children:(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(`div`,{className:`h-2 w-2 rounded-full bg-primary`}),(0,c.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,c.jsx)(`p`,{className:`text-sm font-medium`,children:`New notification`}),(0,c.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`2 minutes ago`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-4 opacity-50`,children:[(0,c.jsx)(`div`,{className:`h-2 w-2 rounded-full bg-transparent`}),(0,c.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,c.jsx)(`p`,{className:`text-sm font-medium`,children:`System update`}),(0,c.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`1 hour ago`})]})]}),(0,c.jsx)(i,{variant:`ghost`,size:`sm`,className:`w-full`,children:`Mark all as read`})]})}},f={render:()=>(0,c.jsxs)(`div`,{className:`flex h-[300px] items-center justify-center gap-4`,children:[(0,c.jsx)(s,{side:`top`,align:`left`,trigger:(0,c.jsx)(i,{variant:`outline`,children:`Top Left`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the top and left`})}),(0,c.jsx)(s,{side:`bottom`,align:`center`,trigger:(0,c.jsx)(i,{variant:`outline`,children:`Bottom Center`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the bottom and center`})}),(0,c.jsx)(s,{side:`bottom`,align:`right`,trigger:(0,c.jsx)(i,{variant:`outline`,children:`Bottom Right`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the bottom and right`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outline">Open Popover</Button>,
    children: <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <Button size="sm" variant="outline">
            Save
          </Button>
        </div>
      </div>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>,
    children: <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New notification</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-2 w-2 rounded-full bg-transparent" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System update</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full">
          Mark all as read
        </Button>
      </div>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-[300px] items-center justify-center gap-4">
      <Popover side="top" align="left" trigger={<Button variant="outline">Top Left</Button>}>
        <div className="p-2">Aligned to the top and left</div>
      </Popover>

      <Popover side="bottom" align="center" trigger={<Button variant="outline">Bottom Center</Button>}>
        <div className="p-2">Aligned to the bottom and center</div>
      </Popover>

      <Popover side="bottom" align="right" trigger={<Button variant="outline">Bottom Right</Button>}>
        <div className="p-2">Aligned to the bottom and right</div>
      </Popover>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`CustomContent`,`Alignment`]}))();export{f as Alignment,d as CustomContent,u as Default,p as __namedExportsOrder,l as default};