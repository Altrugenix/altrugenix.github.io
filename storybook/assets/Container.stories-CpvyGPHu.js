import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";var o,s,c,l,u=e((()=>{o=t(a(),1),i(),s=r(),c={sm:`max-w-screen-sm`,md:`max-w-screen-md`,lg:`max-w-screen-lg`,xl:`max-w-screen-xl`,"2xl":`max-w-screen-2xl`,full:`max-w-full`},l=o.forwardRef(({className:e,size:t=`xl`,centered:r=!0,children:i,...a},o)=>(0,s.jsx)(`div`,{ref:o,className:n(`w-full px-4 sm:px-6 lg:px-8`,c[t],r&&`mx-auto`,e),...a,children:i})),l.displayName=`Container`,l.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{size:{defaultValue:{value:`"xl"`,computed:!1},required:!1},centered:{defaultValue:{value:`!0`,computed:!1},required:!1}}}})),d,f,p,m,h,g;e((()=>{u(),d=r(),f={title:`Layout/Container`,component:l,tags:[`autodocs`]},p={render:()=>(0,d.jsxs)(l,{className:`bg-card rounded-lg border p-8`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Default Container (XL)`}),(0,d.jsx)(`p`,{className:`text-muted-foreground mt-2 text-sm`,children:`Content is centered and constrained to max-w-screen-xl by default.`})]})},m={render:()=>(0,d.jsx)(`div`,{className:`space-y-6`,children:[`sm`,`md`,`lg`,`xl`,`full`].map(e=>(0,d.jsx)(l,{size:e,className:`bg-card/50 rounded border p-4`,children:(0,d.jsxs)(`p`,{className:`text-sm font-medium`,children:[`size="`,e,`"`]})},e))})},h={args:{centered:!1,size:`md`,className:`rounded-lg border bg-card p-6`,children:(0,d.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`This container is left-aligned (centered=false).`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Container className="bg-card rounded-lg border p-8">
      <h2 className="text-lg font-semibold">Default Container (XL)</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Content is centered and constrained to max-w-screen-xl by default.
      </p>
    </Container>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map(size => <Container key={size} size={size} className="bg-card/50 rounded border p-4">
          <p className="text-sm font-medium">size=&quot;{size}&quot;</p>
        </Container>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    centered: false,
    size: "md",
    className: "rounded-lg border bg-card p-6",
    children: <p className="text-muted-foreground text-sm">
        This container is left-aligned (centered=false).
      </p>
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Sizes`,`NotCentered`]}))();export{p as Default,h as NotCentered,m as Sizes,g as __namedExportsOrder,f as default};