import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";var o,s,c,l=e((()=>{o=t(a(),1),i(),s=r(),c=o.forwardRef(({className:e,orientation:t=`horizontal`,label:r,...i},a)=>r&&t===`horizontal`?(0,s.jsxs)(`div`,{ref:a,className:n(`flex items-center gap-3`,e),role:`separator`,...i,children:[(0,s.jsx)(`div`,{className:`bg-border h-px flex-1`}),(0,s.jsx)(`span`,{className:`text-muted-foreground text-xs font-medium`,children:r}),(0,s.jsx)(`div`,{className:`bg-border h-px flex-1`})]}):(0,s.jsx)(`div`,{ref:a,role:`separator`,className:n(t===`horizontal`?`bg-border h-px w-full`:`bg-border inline-block h-full w-px`,e),...i})),c.displayName=`Divider`,c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{defaultValue:{value:`"horizontal"`,computed:!1},required:!1}}}})),u,d,f,p,m,h;e((()=>{l(),u=r(),d={title:`Layout/Divider`,component:c,tags:[`autodocs`]},f={render:()=>(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`p`,{className:`text-sm`,children:`Content above`}),(0,u.jsx)(c,{}),(0,u.jsx)(`p`,{className:`text-sm`,children:`Content below`})]})},p={render:()=>(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`p`,{className:`text-sm`,children:`Section 1`}),(0,u.jsx)(c,{label:`OR`}),(0,u.jsx)(`p`,{className:`text-sm`,children:`Section 2`})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex h-8 items-center gap-4`,children:[(0,u.jsx)(`span`,{className:`text-sm`,children:`Left`}),(0,u.jsx)(c,{orientation:`vertical`}),(0,u.jsx)(`span`,{className:`text-sm`,children:`Right`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Section 1</p>
      <Divider label="OR" />
      <p className="text-sm">Section 2</p>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Horizontal`,`WithLabel`,`Vertical`]}))();export{f as Horizontal,m as Vertical,p as WithLabel,h as __namedExportsOrder,d as default};