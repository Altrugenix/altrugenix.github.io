import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";var o,s,c,l,u=e((()=>{o=t(a(),1),i(),s=r(),c={none:``,sm:`p-2`,md:`p-4`,lg:`p-6`,xl:`p-8`},l=o.forwardRef(({className:e,as:t=`div`,padding:r=`none`,children:i,...a},o)=>(0,s.jsx)(t,{ref:o,className:n(c[r],e),...a,children:i})),l.displayName=`Box`,l.__docgenInfo={description:``,methods:[],displayName:`Box`,props:{as:{defaultValue:{value:`"div"`,computed:!1},required:!1},padding:{defaultValue:{value:`"none"`,computed:!1},required:!1}}}})),d,f,p,m,h,g;e((()=>{u(),d=r(),f={title:`Layout/Box`,component:l,tags:[`autodocs`]},p={args:{padding:`md`,className:`rounded-lg border bg-card`,children:(0,d.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`The Box is the most fundamental layout primitive. It renders a div with optional padding presets.`})}},m={render:()=>(0,d.jsx)(`div`,{className:`space-y-4`,children:[`none`,`sm`,`md`,`lg`,`xl`].map(e=>(0,d.jsx)(l,{padding:e,className:`bg-card rounded-lg border`,children:(0,d.jsxs)(`p`,{className:`text-sm font-medium`,children:[`padding="`,e,`"`]})},e))})},h={render:()=>(0,d.jsxs)(l,{as:`section`,padding:`lg`,className:`bg-primary/5 rounded-lg border`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Rendered as <section>`}),(0,d.jsx)(`p`,{className:`text-muted-foreground mt-2 text-sm`,children:`Box can render as any HTML element using the "as" prop.`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "md",
    className: "rounded-lg border bg-card",
    children: <p className="text-muted-foreground text-sm">
        The Box is the most fundamental layout primitive. It renders a div with
        optional padding presets.
      </p>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["none", "sm", "md", "lg", "xl"] as const).map(size => <Box key={size} padding={size} className="bg-card rounded-lg border">
          <p className="text-sm font-medium">padding=&quot;{size}&quot;</p>
        </Box>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box as="section" padding="lg" className="bg-primary/5 rounded-lg border">
      <h2 className="text-lg font-semibold">Rendered as &lt;section&gt;</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Box can render as any HTML element using the &quot;as&quot; prop.
      </p>
    </Box>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`PaddingSizes`,`CustomElement`]}))();export{h as CustomElement,p as Default,m as PaddingSizes,g as __namedExportsOrder,f as default};