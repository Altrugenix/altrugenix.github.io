import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-BRzU8djk.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Layout/Sheet`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A foundational surface component for grouping content with a specific background variant and elevation. Supports outlined, soft, solid, and plain styles.`}}},argTypes:{variant:{control:`select`,options:[`outlined`,`soft`,`solid`,`plain`],description:`Visual style of the sheet surface.`,table:{category:`Appearance`}},elevation:{control:`select`,options:[`xs`,`sm`,`md`,`lg`],description:`Box shadow depth.`,table:{category:`Appearance`}},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`],description:`Internal padding.`,table:{category:`Appearance`}},as:{control:`select`,options:[`div`,`section`,`article`,`aside`],description:`HTML element to render as.`,table:{category:`Behavior`}}}},o={args:{children:(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h3`,{className:`font-bold`,children:`Basic Sheet`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`This is a foundational surface component for grouping content.`})]})}},s={render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,i.jsx)(n,{variant:`outlined`,children:(0,i.jsx)(`p`,{className:`text-sm font-medium`,children:`Outlined`})}),(0,i.jsx)(n,{variant:`soft`,children:(0,i.jsx)(`p`,{className:`text-sm font-medium`,children:`Soft`})}),(0,i.jsx)(n,{variant:`solid`,children:(0,i.jsx)(`p`,{className:`text-sm font-medium`,children:`Solid`})}),(0,i.jsx)(n,{variant:`plain`,children:(0,i.jsx)(`p`,{className:`text-sm font-medium`,children:`Plain`})})]}),parameters:{docs:{description:{story:`All four sheet variants side by side.`}}}},c={render:()=>(0,i.jsx)(`div`,{className:`flex flex-wrap gap-6 p-4`,children:[`xs`,`sm`,`md`,`lg`].map(e=>(0,i.jsx)(n,{variant:`solid`,elevation:e,className:`flex h-24 w-24 items-center justify-center`,children:(0,i.jsx)(`span`,{className:`font-mono text-sm`,children:e})},e))}),parameters:{docs:{description:{story:`Four elevation levels from extra-small to large shadow.`}}}},l={render:()=>(0,i.jsxs)(n,{variant:`outlined`,className:`max-w-sm`,children:[(0,i.jsx)(`h3`,{className:`mb-2 text-lg font-semibold`,children:`Sheet as a Card`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Sheets can serve as general-purpose content containers. Use variant and elevation props to match your design intent.`})]}),parameters:{docs:{description:{story:`A sheet used as a simple content card.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-2">
        <h3 className="font-bold">Basic Sheet</h3>
        <p className="text-muted-foreground text-sm">
          This is a foundational surface component for grouping content.
        </p>
      </div>
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <Sheet variant="outlined">
        <p className="text-sm font-medium">Outlined</p>
      </Sheet>
      <Sheet variant="soft">
        <p className="text-sm font-medium">Soft</p>
      </Sheet>
      <Sheet variant="solid">
        <p className="text-sm font-medium">Solid</p>
      </Sheet>
      <Sheet variant="plain">
        <p className="text-sm font-medium">Plain</p>
      </Sheet>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All four sheet variants side by side."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-4">
      {(["xs", "sm", "md", "lg"] as const).map(elev => <Sheet key={elev} variant="solid" elevation={elev} className="flex h-24 w-24 items-center justify-center">
          <span className="font-mono text-sm">{elev}</span>
        </Sheet>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Four elevation levels from extra-small to large shadow."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet variant="outlined" className="max-w-sm">
      <h3 className="mb-2 text-lg font-semibold">Sheet as a Card</h3>
      <p className="text-muted-foreground text-sm">
        Sheets can serve as general-purpose content containers. Use variant and
        elevation props to match your design intent.
      </p>
    </Sheet>,
  parameters: {
    docs: {
      description: {
        story: "A sheet used as a simple content card."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Variants`,`Elevations`,`ContentCard`]}))();export{l as ContentCard,o as Default,c as Elevations,s as Variants,u as __namedExportsOrder,a as default};