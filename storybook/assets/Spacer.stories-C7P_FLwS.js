import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";var o,s,c,l,u=e((()=>{o=t(i(),1),r(),s=n(),c={xs:{vertical:`h-1`,horizontal:`w-1`},sm:{vertical:`h-2`,horizontal:`w-2`},md:{vertical:`h-4`,horizontal:`w-4`},lg:{vertical:`h-8`,horizontal:`w-8`},xl:{vertical:`h-12`,horizontal:`w-12`},"2xl":{vertical:`h-16`,horizontal:`w-16`}},l=o.forwardRef(({className:e,size:t=`md`,axis:n=`vertical`,...r},i)=>(0,s.jsx)(`div`,{ref:i,className:a(c[t][n],e),"aria-hidden":`true`,...r})),l.displayName=`Spacer`,l.__docgenInfo={description:``,methods:[],displayName:`Spacer`,props:{size:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`}]},description:`Size of the spacer`,defaultValue:{value:`"md"`,computed:!1}},axis:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Axis — vertical adds height, horizontal adds width`,defaultValue:{value:`"vertical"`,computed:!1}}}}})),d=e((()=>{u()})),f,p,m,h,g,_;e((()=>{d(),f=n(),p={title:`Layout/Spacer`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`An invisible layout utility that adds consistent whitespace between elements. Supports six sizes and both vertical (default) and horizontal axes.`}}},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],description:`Amount of spacing.`,table:{category:`Appearance`}},axis:{control:`select`,options:[`vertical`,`horizontal`],description:`Direction of spacing.`,table:{category:`Appearance`}}}},m={render:()=>(0,f.jsx)(`div`,{children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`bg-card rounded border p-2 text-xs`,children:[`Content above (size="`,e,`")`]}),(0,f.jsx)(l,{size:e,className:`bg-primary/10`}),(0,f.jsx)(`div`,{className:`bg-card rounded border p-2 text-xs`,children:`Content below`}),(0,f.jsx)(l,{size:`lg`})]},e))}),parameters:{docs:{description:{story:`All six vertical spacer sizes shown with a tinted background for visibility. In production, the spacer is invisible.`}}}},h={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center`,children:[(0,f.jsx)(`div`,{className:`bg-card rounded border p-3 text-xs`,children:`Left`}),(0,f.jsx)(l,{axis:`horizontal`,size:`xl`,className:`bg-primary/10`}),(0,f.jsx)(`div`,{className:`bg-card rounded border p-3 text-xs`,children:`Right`})]}),parameters:{docs:{description:{story:`A horizontal spacer used to add gap between inline elements.`}}}},g={render:()=>(0,f.jsxs)(`div`,{className:`max-w-sm`,children:[(0,f.jsx)(`div`,{className:`bg-card rounded border p-3 text-sm`,children:`Form Field 1`}),(0,f.jsx)(l,{size:`md`}),(0,f.jsx)(`div`,{className:`bg-card rounded border p-3 text-sm`,children:`Form Field 2`}),(0,f.jsx)(l,{size:`md`}),(0,f.jsx)(`div`,{className:`bg-card rounded border p-3 text-sm`,children:`Form Field 3`}),(0,f.jsx)(l,{size:`xl`}),(0,f.jsx)(`div`,{className:`bg-primary text-primary-foreground rounded p-3 text-center text-sm font-medium`,children:`Submit`})]}),parameters:{docs:{description:{story:`Spacers used for consistent vertical rhythm in a form layout — smaller gaps between fields, larger gap before the submit button.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All six vertical spacer sizes shown with a tinted background for visibility. In production, the spacer is invisible."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center">
      <div className="bg-card rounded border p-3 text-xs">Left</div>
      <Spacer axis="horizontal" size="xl" className="bg-primary/10" />
      <div className="bg-card rounded border p-3 text-xs">Right</div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A horizontal spacer used to add gap between inline elements."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm">
      <div className="bg-card rounded border p-3 text-sm">Form Field 1</div>
      <Spacer size="md" />
      <div className="bg-card rounded border p-3 text-sm">Form Field 2</div>
      <Spacer size="md" />
      <div className="bg-card rounded border p-3 text-sm">Form Field 3</div>
      <Spacer size="xl" />
      <div className="bg-primary text-primary-foreground rounded p-3 text-center text-sm font-medium">
        Submit
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Spacers used for consistent vertical rhythm in a form layout — smaller gaps between fields, larger gap before the submit button."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`VerticalSizes`,`Horizontal`,`InForm`]}))();export{h as Horizontal,g as InForm,m as VerticalSizes,_ as __namedExportsOrder,p as default};