import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,E as r,Ht as i,Lt as a,V as o,gn as s,p as c,r as l,rt as u,y as d,zt as f}from"./iframe-coe0kFk0.js";import{a as p,t as m}from"./src-CxQaJ0KN.js";var h,g,_,v,y,b=e((()=>{h=t(s(),1),a(),g=i(),_=h.forwardRef(({className:e,trigger:t,align:n=`left`,children:r,...i},a)=>{let[o,s]=(0,h.useState)(!1),c=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,g.jsxs)(`div`,{ref:c,className:f(`relative inline-block`,e),...i,children:[(0,g.jsx)(`div`,{onClick:()=>s(!o),className:`cursor-pointer`,"aria-haspopup":`true`,"aria-expanded":o,children:t}),o&&(0,g.jsx)(`div`,{ref:a,className:f(`bg-popover text-popover-foreground absolute z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md`,`animate-in fade-in-0 zoom-in-95`,n===`right`?`right-0`:`left-0`),role:`menu`,children:r})]})}),_.displayName=`DropdownMenu`,v=h.forwardRef(({className:e,disabled:t,destructive:n,...r},i)=>(0,g.jsx)(`div`,{ref:i,role:`menuitem`,className:f(`relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none`,t&&`pointer-events-none opacity-50`,n?`text-destructive hover:bg-destructive/10 focus:bg-destructive/10`:`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`,e),...r})),v.displayName=`DropdownMenuItem`,y=h.forwardRef(({className:e,...t},n)=>(0,g.jsx)(`div`,{ref:n,className:f(`bg-border -mx-1 my-1 h-px`,e),role:`separator`,...t})),y.displayName=`DropdownMenuSeparator`,_.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`,props:{trigger:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The trigger element`},align:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Alignment of the dropdown`,defaultValue:{value:`"left"`,computed:!1}}}},v.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{disabled:{required:!1,tsType:{name:`boolean`},description:``},destructive:{required:!1,tsType:{name:`boolean`},description:``}}},y.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`}})),x=e((()=>{b()})),S,C,w,T,E,D;e((()=>{x(),m(),l(),S=i(),C={title:`Overlays/DropdownMenu`,component:_,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A contextual menu triggered by a button click. Supports regular, disabled, and destructive menu items with separators for grouping.`}}},argTypes:{trigger:{description:`The element that opens the menu when clicked.`,table:{category:`Content`}},align:{control:`select`,options:[`left`,`right`],description:`Horizontal alignment of the dropdown panel.`,table:{category:`Positioning`}}}},w={render:()=>(0,S.jsxs)(_,{trigger:(0,S.jsx)(p,{variant:`outline`,children:`Open Menu`}),children:[(0,S.jsx)(v,{children:`Profile`}),(0,S.jsx)(v,{children:`Settings`}),(0,S.jsx)(v,{children:`Billing`}),(0,S.jsx)(y,{}),(0,S.jsx)(v,{destructive:!0,children:`Sign Out`})]})},T={render:()=>(0,S.jsxs)(_,{trigger:(0,S.jsx)(p,{variant:`outline`,children:`Account`}),children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(c,{className:`mr-2 h-4 w-4`}),` Profile`]}),(0,S.jsxs)(v,{children:[(0,S.jsx)(r,{className:`mr-2 h-4 w-4`}),` Settings`]}),(0,S.jsx)(y,{}),(0,S.jsxs)(v,{destructive:!0,children:[(0,S.jsx)(o,{className:`mr-2 h-4 w-4`}),` Sign Out`]})]}),parameters:{docs:{description:{story:`Menu items with leading icons for improved visual scanning.`}}}},E={render:()=>(0,S.jsx)(`div`,{className:`flex justify-end`,children:(0,S.jsxs)(_,{trigger:(0,S.jsx)(p,{variant:`outline`,children:`Actions`}),align:`right`,children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(n,{className:`mr-2 h-4 w-4`}),` New Document`]}),(0,S.jsxs)(v,{children:[(0,S.jsx)(u,{className:`mr-2 h-4 w-4`}),` Templates`]}),(0,S.jsx)(y,{}),(0,S.jsxs)(v,{disabled:!0,children:[(0,S.jsx)(r,{className:`mr-2 h-4 w-4`}),` Admin (Restricted)`]}),(0,S.jsxs)(v,{destructive:!0,children:[(0,S.jsx)(d,{className:`mr-2 h-4 w-4`}),` Delete All`]})]})}),parameters:{docs:{description:{story:`Right-aligned dropdown with icons, a disabled item, and a destructive action — common for toolbar action menus.`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button variant="outline">Open Menu</Button>}>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem destructive>Sign Out</DropdownMenuItem>
    </DropdownMenu>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button variant="outline">Account</Button>}>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" /> Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" /> Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem destructive>
        <LogOut className="mr-2 h-4 w-4" /> Sign Out
      </DropdownMenuItem>
    </DropdownMenu>,
  parameters: {
    docs: {
      description: {
        story: "Menu items with leading icons for improved visual scanning."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end">
      <DropdownMenu trigger={<Button variant="outline">Actions</Button>} align="right">
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" /> New Document
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" /> Templates
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Settings className="mr-2 h-4 w-4" /> Admin (Restricted)
        </DropdownMenuItem>
        <DropdownMenuItem destructive>
          <Trash2 className="mr-2 h-4 w-4" /> Delete All
        </DropdownMenuItem>
      </DropdownMenu>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Right-aligned dropdown with icons, a disabled item, and a destructive action — common for toolbar action menus."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithIcons`,`RightAligned`]}))();export{w as Default,E as RightAligned,T as WithIcons,D as __namedExportsOrder,C as default};