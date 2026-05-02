import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-CKqxpGo4.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=t(),a={title:`Feedback/ProgressBar`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A horizontal progress bar for displaying completion status. Supports semantic color variants, three sizes, labels, and percentage display.`}}},argTypes:{value:{control:{type:`range`,min:0,max:100},description:`Current progress value (0–100).`,table:{category:`State`}},max:{control:`number`,description:`Maximum value (default: 100).`,table:{category:`State`}},variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`],description:`Semantic color variant.`,table:{category:`Appearance`}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Height of the progress bar.`,table:{category:`Appearance`}},label:{description:`Label text displayed above the bar.`,table:{category:`Content`}},showValue:{control:`boolean`,description:`Whether to display the percentage value.`,table:{category:`Content`}}}},o={args:{value:60,label:`Progress`,showValue:!0}},s={args:{value:100,label:`Complete`,showValue:!0,variant:`success`},parameters:{docs:{description:{story:`A fully completed progress bar with the success variant.`}}}},c={args:{value:80,label:`Storage Used`,showValue:!0,variant:`warning`,size:`lg`}},l={args:{value:45,size:`sm`},parameters:{docs:{description:{story:`A minimal slim progress bar without label or value display.`}}}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsx)(n,{value:25,label:`Default`,showValue:!0}),(0,i.jsx)(n,{value:50,label:`Success`,showValue:!0,variant:`success`}),(0,i.jsx)(n,{value:75,label:`Warning`,showValue:!0,variant:`warning`}),(0,i.jsx)(n,{value:90,label:`Destructive`,showValue:!0,variant:`destructive`})]}),parameters:{docs:{description:{story:`All four semantic variants compared at different progress values.`}}}},d={render:()=>(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsx)(n,{value:60,label:`Small`,showValue:!0,size:`sm`}),(0,i.jsx)(n,{value:60,label:`Medium`,showValue:!0,size:`md`}),(0,i.jsx)(n,{value:60,label:`Large`,showValue:!0,size:`lg`})]}),parameters:{docs:{description:{story:`All three sizes displayed at the same value.`}}}},f={render:()=>(0,i.jsxs)(`div`,{className:`max-w-md space-y-4`,children:[(0,i.jsx)(n,{value:85,label:`Cloud Storage`,showValue:!0,variant:`warning`,size:`lg`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`8.5 GB of 10 GB used — consider upgrading your plan.`})]}),parameters:{docs:{description:{story:`A storage usage indicator — a common real-world pattern for dashboards and account pages.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: "Progress",
    showValue: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: "Complete",
    showValue: true,
    variant: "success"
  },
  parameters: {
    docs: {
      description: {
        story: "A fully completed progress bar with the success variant."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    label: "Storage Used",
    showValue: true,
    variant: "warning",
    size: "lg"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal slim progress bar without label or value display."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} label="Success" showValue variant="success" />
      <ProgressBar value={75} label="Warning" showValue variant="warning" />
      <ProgressBar value={90} label="Destructive" showValue variant="destructive" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All four semantic variants compared at different progress values."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <ProgressBar value={60} label="Small" showValue size="sm" />
      <ProgressBar value={60} label="Medium" showValue size="md" />
      <ProgressBar value={60} label="Large" showValue size="lg" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All three sizes displayed at the same value."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">
      <ProgressBar value={85} label="Cloud Storage" showValue variant="warning" size="lg" />
      <p className="text-muted-foreground text-sm">
        8.5 GB of 10 GB used — consider upgrading your plan.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A storage usage indicator — a common real-world pattern for dashboards and account pages."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Complete`,`Warning`,`Small`,`AllVariants`,`Sizes`,`StorageUsage`]}))();export{u as AllVariants,s as Complete,o as Default,d as Sizes,l as Small,f as StorageUsage,c as Warning,p as __namedExportsOrder,a as default};