import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,i as r,r as i,tt as a}from"./iframe-B3RxNkLM.js";var o,s,c,l=e((()=>{o=t(a(),1),r(),s=n(),c=o.forwardRef(({className:e,orientation:t=`horizontal`,label:n,...r},a)=>n&&t===`horizontal`?(0,s.jsxs)(`div`,{ref:a,className:i(`flex items-center gap-3`,e),role:`separator`,...r,children:[(0,s.jsx)(`div`,{className:`h-px flex-1 bg-border`}),(0,s.jsx)(`span`,{className:`text-xs font-medium text-muted-foreground`,children:n}),(0,s.jsx)(`div`,{className:`h-px flex-1 bg-border`})]}):(0,s.jsx)(`div`,{ref:a,role:`separator`,className:i(t===`horizontal`?`h-px w-full bg-border`:`inline-block h-full w-px bg-border`,e),...r})),c.displayName=`Divider`,c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation`,defaultValue:{value:`"horizontal"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Optional label displayed in the center`}}}})),u=e((()=>{l()})),d,f,p,m,h,g;e((()=>{u(),d=n(),f={title:`Layout/Divider`,component:c,tags:[`autodocs`]},p={render:()=>(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`p`,{className:`text-sm`,children:`Content above`}),(0,d.jsx)(c,{}),(0,d.jsx)(`p`,{className:`text-sm`,children:`Content below`})]})},m={render:()=>(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`p`,{className:`text-sm`,children:`Section 1`}),(0,d.jsx)(c,{label:`OR`}),(0,d.jsx)(`p`,{className:`text-sm`,children:`Section 2`})]})},h={render:()=>(0,d.jsxs)(`div`,{className:`flex h-8 items-center gap-4`,children:[(0,d.jsx)(`span`,{className:`text-sm`,children:`Left`}),(0,d.jsx)(c,{orientation:`vertical`}),(0,d.jsx)(`span`,{className:`text-sm`,children:`Right`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Section 1</p>
      <Divider label="OR" />
      <p className="text-sm">Section 2</p>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Horizontal`,`WithLabel`,`Vertical`]}))();export{p as Horizontal,h as Vertical,m as WithLabel,g as __namedExportsOrder,f as default};