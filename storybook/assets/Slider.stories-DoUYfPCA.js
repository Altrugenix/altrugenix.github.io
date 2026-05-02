import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,gn as r}from"./iframe-zfMobaDd.js";import{n as i,t as a}from"./src-DCvc2bg2.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{a(),o=t(r(),1),s=n(),c={title:`Forms/Slider`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A range input slider for selecting numeric values within a defined range. Supports labels, min/max bounds, step increments, and disabled state.`}}},argTypes:{label:{description:`Label text rendered above the slider.`,table:{category:`Content`}},min:{control:`number`,description:`Minimum allowed value.`,table:{category:`Range`}},max:{control:`number`,description:`Maximum allowed value.`,table:{category:`Range`}},step:{control:`number`,description:`Step increment between values.`,table:{category:`Range`}},disabled:{control:`boolean`,description:`Prevents interaction.`,table:{category:`State`}},defaultValue:{control:`number`,description:`Initial value for uncontrolled usage.`,table:{category:`State`}}}},l={args:{label:`Volume`,defaultValue:50}},u={args:{label:`Price Range`,min:0,max:1e3,step:50,defaultValue:500},parameters:{docs:{description:{story:`A slider with custom min, max, and step values.`}}}},d={args:{label:`Locked`,defaultValue:75,disabled:!0}},f={args:{label:`Opacity`,min:0,max:100,step:1,defaultValue:80},parameters:{docs:{description:{story:`A slider with step=1 for precise, fine-grained value selection.`}}}},p=()=>{let[e,t]=(0,o.useState)(50);return(0,s.jsxs)(`div`,{className:`w-full space-y-2`,children:[(0,s.jsx)(i,{label:`Brightness`,min:0,max:100,value:e,onChange:e=>t(Number(e.target.value))}),(0,s.jsxs)(`p`,{className:`text-muted-foreground text-center text-sm`,children:[`Current value: `,(0,s.jsxs)(`span`,{className:`font-mono font-semibold`,children:[e,`%`]})]})]})},m={render:()=>(0,s.jsx)(p,{}),parameters:{docs:{description:{story:`A controlled slider that displays the current value in real-time.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Volume",
    defaultValue: 50
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Price Range",
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500
  },
  parameters: {
    docs: {
      description: {
        story: "A slider with custom min, max, and step values."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Locked",
    defaultValue: 75,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Opacity",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 80
  },
  parameters: {
    docs: {
      description: {
        story: "A slider with step=1 for precise, fine-grained value selection."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LiveValueDemo />,
  parameters: {
    docs: {
      description: {
        story: "A controlled slider that displays the current value in real-time."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithRange`,`Disabled`,`FineGrained`,`WithLiveValue`]}))();export{l as Default,d as Disabled,f as FineGrained,m as WithLiveValue,u as WithRange,h as __namedExportsOrder,c as default};