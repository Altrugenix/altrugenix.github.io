import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l,u=e((()=>{o=t(i(),1),r(),s=n(),c={none:``,sm:`p-2`,md:`p-4`,lg:`p-6`,xl:`p-8`},l=o.forwardRef(({className:e,as:t=`div`,padding:n=`none`,children:r,...i},o)=>(0,s.jsx)(t,{ref:o,className:a(c[n],e),...i,children:r})),l.displayName=`Box`,l.__docgenInfo={description:`Box is a generic wrapper component — the most basic layout primitive.
Use it to apply spacing, padding, and styling to a block of content.`,methods:[],displayName:`Box`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:`Render as a different HTML element`,defaultValue:{value:`"div"`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Padding preset`,defaultValue:{value:`"none"`,computed:!1}}}}})),d=e((()=>{u()})),f,p,m,h,g,_;e((()=>{d(),f=n(),p={title:`Layout/Box`,component:l,tags:[`autodocs`]},m={args:{padding:`md`,className:`rounded-lg border bg-card`,children:(0,f.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`The Box is the most fundamental layout primitive. It renders a div with optional padding presets.`})}},h={render:()=>(0,f.jsx)(`div`,{className:`space-y-4`,children:[`none`,`sm`,`md`,`lg`,`xl`].map(e=>(0,f.jsx)(l,{padding:e,className:`bg-card rounded-lg border`,children:(0,f.jsxs)(`p`,{className:`text-sm font-medium`,children:[`padding="`,e,`"`]})},e))})},g={render:()=>(0,f.jsxs)(l,{as:`section`,padding:`lg`,className:`bg-primary/5 rounded-lg border`,children:[(0,f.jsx)(`h2`,{className:`text-lg font-semibold`,children:`Rendered as <section>`}),(0,f.jsx)(`p`,{className:`text-muted-foreground mt-2 text-sm`,children:`Box can render as any HTML element using the "as" prop.`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    padding: "md",
    className: "rounded-lg border bg-card",
    children: <p className="text-muted-foreground text-sm">
        The Box is the most fundamental layout primitive. It renders a div with
        optional padding presets.
      </p>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["none", "sm", "md", "lg", "xl"] as const).map(size => <Box key={size} padding={size} className="bg-card rounded-lg border">
          <p className="text-sm font-medium">padding=&quot;{size}&quot;</p>
        </Box>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box as="section" padding="lg" className="bg-primary/5 rounded-lg border">
      <h2 className="text-lg font-semibold">Rendered as &lt;section&gt;</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Box can render as any HTML element using the &quot;as&quot; prop.
      </p>
    </Box>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`PaddingSizes`,`CustomElement`]}))();export{g as CustomElement,m as Default,h as PaddingSizes,_ as __namedExportsOrder,p as default};