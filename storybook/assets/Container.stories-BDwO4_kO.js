import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l,u=e((()=>{o=t(i(),1),r(),s=n(),c={sm:`max-w-screen-sm`,md:`max-w-screen-md`,lg:`max-w-screen-lg`,xl:`max-w-screen-xl`,"2xl":`max-w-screen-2xl`,full:`max-w-full`},l=o.forwardRef(({className:e,size:t=`xl`,centered:n=!0,children:r,...i},o)=>(0,s.jsx)(`div`,{ref:o,className:a(`w-full px-4 sm:px-6 lg:px-8`,c[t],n&&`mx-auto`,e),...i,children:r})),l.displayName=`Container`,l.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg" | "xl" | "2xl" | "full"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"full"`}]},description:`Max width preset`,defaultValue:{value:`"xl"`,computed:!1}},centered:{required:!1,tsType:{name:`boolean`},description:`Center content horizontally`,defaultValue:{value:`true`,computed:!1}}}}})),d=e((()=>{u()})),f,p,m,h,g;e((()=>{d(),f=n(),p={title:`Layout/Container`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`A responsive wrapper that constrains content width to a maximum size preset. Supports six max-width breakpoints and optional horizontal centering.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`2xl`,`full`],description:`Maximum width preset.`,table:{category:`Appearance`}},centered:{control:`boolean`,description:`Center the container horizontally with auto margins.`,table:{category:`Appearance`}}}},m={args:{size:`lg`,centered:!0,children:(0,f.jsxs)(`div`,{className:`border-border bg-muted/30 rounded-lg border-2 border-dashed p-8 text-center text-sm`,children:[`Content constrained to `,(0,f.jsx)(`code`,{className:`font-mono`,children:`lg`}),` width`]})}},h={render:()=>(0,f.jsx)(`div`,{className:`space-y-4`,children:[`sm`,`md`,`lg`,`xl`,`2xl`,`full`].map(e=>(0,f.jsx)(l,{size:e,centered:!0,children:(0,f.jsxs)(`div`,{className:`bg-muted/20 rounded border p-4 text-center font-mono text-sm`,children:[`size="`,e,`"`]})},e))}),parameters:{docs:{description:{story:`All six container sizes shown stacked — each one is wider than the previous. Resize your browser to see the difference.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    centered: true,
    children: <div className="border-border bg-muted/30 rounded-lg border-2 border-dashed p-8 text-center text-sm">
        Content constrained to <code className="font-mono">lg</code> width
      </div>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map(size => <Container key={size} size={size} centered>
          <div className="bg-muted/20 rounded border p-4 text-center font-mono text-sm">
            size=&quot;{size}&quot;
          </div>
        </Container>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All six container sizes shown stacked — each one is wider than the previous. Resize your browser to see the difference."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`AllSizes`]}))();export{h as AllSizes,m as Default,g as __namedExportsOrder,p as default};