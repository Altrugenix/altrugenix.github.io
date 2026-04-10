import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";var o,s,c,l,u=e((()=>{o=t(r(),1),i(),s=n(),c={sm:`max-w-screen-sm`,md:`max-w-screen-md`,lg:`max-w-screen-lg`,xl:`max-w-screen-xl`,"2xl":`max-w-screen-2xl`,full:`max-w-full`},l=o.forwardRef(({className:e,size:t=`xl`,centered:n=!0,children:r,...i},o)=>(0,s.jsx)(`div`,{ref:o,className:a(`w-full px-4 sm:px-6 lg:px-8`,c[t],n&&`mx-auto`,e),...i,children:r})),l.displayName=`Container`,l.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg" | "xl" | "2xl" | "full"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"full"`}]},description:`Max width preset`,defaultValue:{value:`"xl"`,computed:!1}},centered:{required:!1,tsType:{name:`boolean`},description:`Center content horizontally`,defaultValue:{value:`true`,computed:!1}}}}})),d=e((()=>{u()})),f,p,m,h,g,_;e((()=>{d(),f=n(),p={title:`Layout/Container`,component:l,tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(l,{className:`rounded-lg border bg-card p-8`,children:[(0,f.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Default Container (XL)`}),(0,f.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:`Content is centered and constrained to max-w-screen-xl by default.`})]})},h={render:()=>(0,f.jsx)(`div`,{className:`space-y-6`,children:[`sm`,`md`,`lg`,`xl`,`full`].map(e=>(0,f.jsx)(l,{size:e,className:`rounded border bg-card/50 p-4`,children:(0,f.jsxs)(`p`,{className:`text-sm font-medium`,children:[`size="`,e,`"`]})},e))})},g={args:{centered:!1,size:`md`,className:`rounded-lg border bg-card p-6`,children:(0,f.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`This container is left-aligned (centered=false).`})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Container className="rounded-lg border bg-card p-8">
      <h2 className="text-lg font-semibold">Default Container (XL)</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Content is centered and constrained to max-w-screen-xl by default.
      </p>
    </Container>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map(size => <Container key={size} size={size} className="rounded border bg-card/50 p-4">
          <p className="text-sm font-medium">size=&quot;{size}&quot;</p>
        </Container>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    centered: false,
    size: "md",
    className: "rounded-lg border bg-card p-6",
    children: <p className="text-sm text-muted-foreground">
        This container is left-aligned (centered=false).
      </p>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Sizes`,`NotCentered`]}))();export{m as Default,g as NotCentered,h as Sizes,_ as __namedExportsOrder,p as default};