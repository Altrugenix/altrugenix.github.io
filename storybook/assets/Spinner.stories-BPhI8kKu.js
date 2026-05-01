import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{n,t as r}from"./src-CQCRIOpb.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Feedback/Spinner`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A loading indicator using a spinning icon animation. Supports multiple sizes and an optional text label for context.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Size of the spinner icon.`,table:{category:`Appearance`}},label:{description:`Optional label displayed below the spinner.`,table:{category:`Content`}}}},o={args:{}},s={args:{label:`Loading data...`}},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-end gap-8`,children:[(0,i.jsx)(n,{size:`sm`,label:`Small`}),(0,i.jsx)(n,{size:`md`,label:`Medium`}),(0,i.jsx)(n,{size:`lg`,label:`Large`}),(0,i.jsx)(n,{size:`xl`,label:`Extra Large`})]}),parameters:{docs:{description:{story:`Comparison of all four available spinner sizes.`}}}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,i.jsx)(n,{size:`sm`}),(0,i.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`Processing your request...`})]}),parameters:{docs:{description:{story:`A small spinner used inline with text, suitable for loading states within forms or list items.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading data..."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8">
      <Spinner size="sm" label="Small" />
      <Spinner size="md" label="Medium" />
      <Spinner size="lg" label="Large" />
      <Spinner size="xl" label="Extra Large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all four available spinner sizes."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span className="text-muted-foreground text-sm">
        Processing your request...
      </span>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A small spinner used inline with text, suitable for loading states within forms or list items."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithLabel`,`Sizes`,`InlineUsage`]}))();export{o as Default,l as InlineUsage,c as Sizes,s as WithLabel,u as __namedExportsOrder,a as default};