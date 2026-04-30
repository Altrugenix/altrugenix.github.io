import{n as e}from"./chunk-jRWAZmH_.js";import{Ft as t,bt as n,r}from"./iframe-BnAwTMlV.js";import{r as i,t as a}from"./altrugenix-button-B6cD2NVL.js";import{n as o,t as s}from"./altrugenix-popover-Cp1-ZoER.js";var c,l,u,d,f,p;e((()=>{o(),i(),r(),c=t(),l={title:`Overlays/Popover`,component:s,tags:[`autodocs`]},u={args:{trigger:(0,c.jsx)(a,{variant:`outline`,children:`Open Popover`}),children:(0,c.jsxs)(`div`,{className:`grid gap-4`,children:[(0,c.jsxs)(`div`,{className:`space-y-2`,children:[(0,c.jsx)(`h4`,{className:`leading-none font-medium`,children:`Dimensions`}),(0,c.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Set the dimensions for the layer.`})]}),(0,c.jsx)(`div`,{className:`grid gap-2`,children:(0,c.jsx)(a,{size:`sm`,variant:`outline`,children:`Save`})})]})}},d={args:{trigger:(0,c.jsx)(a,{variant:`ghost`,size:`icon`,children:(0,c.jsx)(n,{className:`h-5 w-5`})}),children:(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,c.jsx)(`div`,{className:`bg-primary h-2 w-2 rounded-full`}),(0,c.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,c.jsx)(`p`,{className:`text-sm font-medium`,children:`New notification`}),(0,c.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`2 minutes ago`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center gap-4 opacity-50`,children:[(0,c.jsx)(`div`,{className:`h-2 w-2 rounded-full bg-transparent`}),(0,c.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[(0,c.jsx)(`p`,{className:`text-sm font-medium`,children:`System update`}),(0,c.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`1 hour ago`})]})]}),(0,c.jsx)(a,{variant:`ghost`,size:`sm`,className:`w-full`,children:`Mark all as read`})]})}},f={render:()=>(0,c.jsxs)(`div`,{className:`flex h-[300px] items-center justify-center gap-4`,children:[(0,c.jsx)(s,{side:`top`,align:`left`,trigger:(0,c.jsx)(a,{variant:`outline`,children:`Top Left`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the top and left`})}),(0,c.jsx)(s,{side:`bottom`,align:`center`,trigger:(0,c.jsx)(a,{variant:`outline`,children:`Bottom Center`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the bottom and center`})}),(0,c.jsx)(s,{side:`bottom`,align:`right`,trigger:(0,c.jsx)(a,{variant:`outline`,children:`Bottom Right`}),children:(0,c.jsx)(`div`,{className:`p-2`,children:`Aligned to the bottom and right`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outline">Open Popover</Button>,
    children: <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Dimensions</h4>
          <p className="text-muted-foreground text-sm">
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
          <div className="bg-primary h-2 w-2 rounded-full" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New notification</p>
            <p className="text-muted-foreground text-xs">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-2 w-2 rounded-full bg-transparent" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System update</p>
            <p className="text-muted-foreground text-xs">1 hour ago</p>
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