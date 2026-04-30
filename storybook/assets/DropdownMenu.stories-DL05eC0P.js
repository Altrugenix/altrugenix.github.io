import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";import{r as o,t as s}from"./altrugenix-button-B6cD2NVL.js";var c,l,u,d,f,p=e((()=>{c=t(a(),1),i(),l=r(),u=c.forwardRef(({className:e,trigger:t,align:r=`left`,children:i,...a},o)=>{let[s,u]=(0,c.useState)(!1),d=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&u(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,l.jsxs)(`div`,{ref:d,className:n(`relative inline-block`,e),...a,children:[(0,l.jsx)(`div`,{onClick:()=>u(!s),className:`cursor-pointer`,"aria-haspopup":`true`,"aria-expanded":s,children:t}),s&&(0,l.jsx)(`div`,{ref:o,className:n(`bg-popover text-popover-foreground absolute z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md`,`animate-in fade-in-0 zoom-in-95`,r===`right`?`right-0`:`left-0`),role:`menu`,children:i})]})}),u.displayName=`DropdownMenu`,d=c.forwardRef(({className:e,disabled:t,destructive:r,...i},a)=>(0,l.jsx)(`div`,{ref:a,role:`menuitem`,className:n(`relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none`,t&&`pointer-events-none opacity-50`,r?`text-destructive hover:bg-destructive/10 focus:bg-destructive/10`:`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,e),...i})),d.displayName=`DropdownMenuItem`,f=c.forwardRef(({className:e,...t},r)=>(0,l.jsx)(`div`,{ref:r,className:n(`bg-border -mx-1 my-1 h-px`,e),role:`separator`,...t})),f.displayName=`DropdownMenuSeparator`,u.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`,props:{align:{defaultValue:{value:`"left"`,computed:!1},required:!1}}},d.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`},f.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`}})),m,h,g,_,v;e((()=>{p(),o(),m=r(),h={title:`Navigation/DropdownMenu`,component:u,tags:[`autodocs`]},g={args:{trigger:(0,m.jsx)(s,{variant:`outline`,children:`Open Menu`}),children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{children:`Profile`}),(0,m.jsx)(d,{children:`Settings`}),(0,m.jsx)(d,{children:`Team`}),(0,m.jsx)(f,{}),(0,m.jsx)(d,{destructive:!0,children:`Sign out`})]})}},_={render:()=>(0,m.jsx)(`div`,{className:`flex justify-end`,children:(0,m.jsxs)(u,{trigger:(0,m.jsx)(s,{variant:`outline`,children:`Right-aligned`}),align:`right`,children:[(0,m.jsx)(d,{children:`Option 1`}),(0,m.jsx)(d,{children:`Option 2`}),(0,m.jsx)(d,{disabled:!0,children:`Disabled`})]})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    children: <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Sign out</DropdownMenuItem>
      </>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end">
      <DropdownMenu trigger={<Button variant="outline">Right-aligned</Button>} align="right">
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      </DropdownMenu>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`AlignRight`]}))();export{_ as AlignRight,g as Default,v as __namedExportsOrder,h as default};