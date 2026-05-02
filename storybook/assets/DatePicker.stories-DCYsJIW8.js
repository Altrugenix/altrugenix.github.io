import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,gn as r}from"./iframe-zfMobaDd.js";import{i,t as a}from"./src-eDZOc1XF2.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{a(),o=t(r(),1),s=n(),c={title:`Forms/DatePicker`,component:i,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"A simple date picker input that opens a native or custom calendar popover. Controlled via `value` and `onChange`."}}},argTypes:{value:{description:`The currently selected Date object.`,table:{category:`State`}},onChange:{description:`Callback triggered when a date is selected.`,table:{category:`Events`}},placeholder:{description:`Placeholder text when no date is selected.`,table:{category:`Content`}}}},l=()=>{let[e,t]=(0,o.useState)(void 0);return(0,s.jsxs)(`div`,{className:`space-y-2`,children:[(0,s.jsx)(i,{value:e,onChange:t}),e&&(0,s.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`Selected: `,e.toLocaleDateString()]})]})},u={render:()=>(0,s.jsx)(l,{})},d=()=>{let[e,t]=(0,o.useState)(new Date(`2026-05-01`));return(0,s.jsx)(i,{value:e,onChange:t})},f={render:()=>(0,s.jsx)(d,{}),parameters:{docs:{description:{story:`A date picker initialized with a pre-selected date.`}}}},p=()=>{let[e,t]=(0,o.useState)(void 0);return(0,s.jsx)(i,{value:e,onChange:t,placeholder:`Select your birth date`})},m={render:()=>(0,s.jsx)(p,{})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledDatePicker />
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <WithPreselectedDateDemo />,
  parameters: {
    docs: {
      description: {
        story: "A date picker initialized with a pre-selected date."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <CustomPlaceholderDemo />
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithPreselectedDate`,`CustomPlaceholder`]}))();export{m as CustomPlaceholder,u as Default,f as WithPreselectedDate,h as __namedExportsOrder,c as default};