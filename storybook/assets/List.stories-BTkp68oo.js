import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{d as n,g as r,i,l as a,pt as o,r as s,s as c,z as l}from"./iframe-DM0JAH7r.js";import{n as u,t as d}from"./avatar-DXj6kvuv.js";import{n as f,t as p}from"./badge-xmsdxdCa.js";var m,h,g,_,v=e((()=>{m=t(o(),1),i(),h=l(),g=m.forwardRef(({className:e,divided:t=!1,ordered:n=!1,children:r,...i},a)=>n?(0,h.jsx)(`ol`,{ref:a,className:s(`w-full`,t&&`[&>li+li]:border-t`,e),...i,children:r}):(0,h.jsx)(`ul`,{ref:a,className:s(`w-full`,t&&`[&>li+li]:border-t`,e),...i,children:r})),g.displayName=`List`,_=m.forwardRef(({className:e,leading:t,trailing:n,secondary:r,interactive:i,children:a,...o},c)=>(0,h.jsxs)(`li`,{ref:c,className:s(`flex items-center gap-3 px-4 py-3`,i&&`cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground`,e),...o,children:[t&&(0,h.jsx)(`span`,{className:`shrink-0`,children:t}),(0,h.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,h.jsx)(`div`,{className:`truncate text-sm font-medium`,children:a}),r&&(0,h.jsx)(`p`,{className:`mt-0.5 truncate text-xs text-muted-foreground`,children:r})]}),n&&(0,h.jsx)(`span`,{className:`shrink-0`,children:n})]})),_.displayName=`ListItem`,g.__docgenInfo={description:``,methods:[],displayName:`List`,props:{divided:{required:!1,tsType:{name:`boolean`},description:`Whether to show dividers between items`,defaultValue:{value:`false`,computed:!1}},ordered:{required:!1,tsType:{name:`boolean`},description:`Render as ordered list`,defaultValue:{value:`false`,computed:!1}}}},_.__docgenInfo={description:``,methods:[],displayName:`ListItem`,props:{leading:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left element (icon, avatar, etc.)`},trailing:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Right element (badge, action, etc.)`},secondary:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Secondary text below the main content`},interactive:{required:!1,tsType:{name:`boolean`},description:`Whether the item is interactive (clickable)`}}}})),y=e((()=>{v()})),b,x,S,C,w,T;e((()=>{y(),d(),p(),c(),b=l(),x={title:`Data Display/List`,component:g,tags:[`autodocs`]},S={render:()=>(0,b.jsxs)(g,{divided:!0,className:`rounded-lg border`,children:[(0,b.jsx)(_,{children:`First item`}),(0,b.jsx)(_,{children:`Second item`}),(0,b.jsx)(_,{children:`Third item`})]})},C={render:()=>(0,b.jsxs)(g,{divided:!0,className:`rounded-lg border`,children:[(0,b.jsx)(_,{leading:(0,b.jsx)(u,{fallback:`JD`}),secondary:`jane@example.com`,trailing:(0,b.jsx)(f,{variant:`success`,children:`Active`}),interactive:!0,children:`Jane Doe`}),(0,b.jsx)(_,{leading:(0,b.jsx)(u,{fallback:`AB`}),secondary:`alan@example.com`,trailing:(0,b.jsx)(f,{variant:`warning`,children:`Pending`}),interactive:!0,children:`Alan Baker`}),(0,b.jsx)(_,{leading:(0,b.jsx)(u,{fallback:`SM`}),secondary:`sarah@example.com`,trailing:(0,b.jsx)(f,{variant:`outline`,children:`Inactive`}),interactive:!0,children:`Sarah Miller`})]})},w={render:()=>(0,b.jsxs)(g,{divided:!0,className:`rounded-lg border`,children:[(0,b.jsx)(_,{leading:(0,b.jsx)(a,{className:`h-4 w-4`}),interactive:!0,children:`Profile`}),(0,b.jsx)(_,{leading:(0,b.jsx)(r,{className:`h-4 w-4`}),interactive:!0,children:`Messages`}),(0,b.jsx)(_,{leading:(0,b.jsx)(n,{className:`h-4 w-4`}),interactive:!0,children:`Favorites`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <List divided className="rounded-lg border">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <List divided className="rounded-lg border">
      <ListItem leading={<Avatar fallback="JD" />} secondary="jane@example.com" trailing={<Badge variant="success">Active</Badge>} interactive>
        Jane Doe
      </ListItem>
      <ListItem leading={<Avatar fallback="AB" />} secondary="alan@example.com" trailing={<Badge variant="warning">Pending</Badge>} interactive>
        Alan Baker
      </ListItem>
      <ListItem leading={<Avatar fallback="SM" />} secondary="sarah@example.com" trailing={<Badge variant="outline">Inactive</Badge>} interactive>
        Sarah Miller
      </ListItem>
    </List>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <List divided className="rounded-lg border">
      <ListItem leading={<User className="h-4 w-4" />} interactive>
        Profile
      </ListItem>
      <ListItem leading={<Mail className="h-4 w-4" />} interactive>
        Messages
      </ListItem>
      <ListItem leading={<Star className="h-4 w-4" />} interactive>
        Favorites
      </ListItem>
    </List>
}`,...w.parameters?.docs?.source}}},T=[`Simple`,`WithLeadingAndTrailing`,`WithIcons`]}))();export{S as Simple,w as WithIcons,C as WithLeadingAndTrailing,T as __namedExportsOrder,x as default};