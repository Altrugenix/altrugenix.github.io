import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";var o,s,c,l,u=e((()=>{o=t(a(),1),i(),s=r(),c={xs:{vertical:`h-1`,horizontal:`w-1`},sm:{vertical:`h-2`,horizontal:`w-2`},md:{vertical:`h-4`,horizontal:`w-4`},lg:{vertical:`h-8`,horizontal:`w-8`},xl:{vertical:`h-12`,horizontal:`w-12`},"2xl":{vertical:`h-16`,horizontal:`w-16`}},l=o.forwardRef(({className:e,size:t=`md`,axis:r=`vertical`,...i},a)=>(0,s.jsx)(`div`,{ref:a,className:n(c[t][r],e),"aria-hidden":`true`,...i})),l.displayName=`Spacer`,l.__docgenInfo={description:``,methods:[],displayName:`Spacer`,props:{size:{defaultValue:{value:`"md"`,computed:!1},required:!1},axis:{defaultValue:{value:`"vertical"`,computed:!1},required:!1}}}})),d,f,p,m,h;e((()=>{u(),d=r(),f={title:`Layout/Spacer`,component:l,tags:[`autodocs`]},p={render:()=>(0,d.jsx)(`div`,{children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{className:`bg-card rounded border p-2 text-xs`,children:[`Content above (size="`,e,`")`]}),(0,d.jsx)(l,{size:e,className:`bg-primary/10`}),(0,d.jsx)(`div`,{className:`bg-card rounded border p-2 text-xs`,children:`Content below`}),(0,d.jsx)(l,{size:`lg`})]},e))})},m={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center`,children:[(0,d.jsx)(`div`,{className:`bg-card rounded border p-3 text-xs`,children:`Left`}),(0,d.jsx)(l,{axis:`horizontal`,size:`xl`,className:`bg-primary/10`}),(0,d.jsx)(`div`,{className:`bg-card rounded border p-3 text-xs`,children:`Right`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(size => <div key={size}>
          <div className="bg-card rounded border p-2 text-xs">
            Content above (size=&quot;{size}&quot;)
          </div>
          <Spacer size={size} className="bg-primary/10" />
          <div className="bg-card rounded border p-2 text-xs">
            Content below
          </div>
          <Spacer size="lg" />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center">
      <div className="bg-card rounded border p-3 text-xs">Left</div>
      <Spacer axis="horizontal" size="xl" className="bg-primary/10" />
      <div className="bg-card rounded border p-3 text-xs">Right</div>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VerticalSizes`,`Horizontal`]}))();export{m as Horizontal,p as VerticalSizes,h as __namedExportsOrder,f as default};