import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-BHTzRF4B.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Forms/Textarea`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"A multi-line text input with label, helper text, and error messaging. Built on the native `<textarea>` element with consistent styling and accessibility."}}},argTypes:{label:{description:`Label text rendered above the textarea.`,table:{category:`Content`}},placeholder:{description:`Placeholder text shown when empty.`,table:{category:`Content`}},helperText:{description:`Informational text displayed below the textarea.`,table:{category:`Validation`}},errorText:{description:`Error message — triggers error styling when provided.`,table:{category:`Validation`}},error:{control:`boolean`,description:`Applies error styling without a message.`,table:{category:`Validation`}},disabled:{control:`boolean`,description:`Prevents interaction.`,table:{category:`State`}},rows:{control:`number`,description:`Number of visible text rows.`,table:{category:`Appearance`}}}},o={args:{label:`Bio`,placeholder:`Tell us about yourself...`}},s={args:{label:`Description`,placeholder:`Describe your project...`,helperText:`Maximum 500 characters.`}},c={args:{label:`Feedback`,defaultValue:`x`,errorText:`Please provide at least 10 characters of feedback.`},parameters:{docs:{description:{story:`Error state with a validation message displayed below the textarea.`}}}},l={args:{label:`System Notes`,disabled:!0,value:`This content is locked and cannot be edited.`}},u={args:{label:`Long Form Content`,placeholder:`Write your article here...`,rows:10},parameters:{docs:{description:{story:`A taller textarea suitable for long-form content like articles or descriptions.`}}}},d={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(n,{label:`Default`,placeholder:`Normal state...`}),(0,i.jsx)(n,{label:`With Helper`,placeholder:`Has guidance...`,helperText:`Helpful context below the field.`}),(0,i.jsx)(n,{label:`Error`,defaultValue:`oops`,errorText:`This field has a validation error.`}),(0,i.jsx)(n,{label:`Disabled`,disabled:!0,value:`Read-only content`})]}),parameters:{docs:{description:{story:`All textarea states shown together for easy comparison.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself..."
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Describe your project...",
    helperText: "Maximum 500 characters."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    defaultValue: "x",
    errorText: "Please provide at least 10 characters of feedback."
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with a validation message displayed below the textarea."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "System Notes",
    disabled: true,
    value: "This content is locked and cannot be edited."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Long Form Content",
    placeholder: "Write your article here...",
    rows: 10
  },
  parameters: {
    docs: {
      description: {
        story: "A taller textarea suitable for long-form content like articles or descriptions."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Textarea label="Default" placeholder="Normal state..." />
      <Textarea label="With Helper" placeholder="Has guidance..." helperText="Helpful context below the field." />
      <Textarea label="Error" defaultValue="oops" errorText="This field has a validation error." />
      <Textarea label="Disabled" disabled value="Read-only content" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All textarea states shown together for easy comparison."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithHelper`,`WithError`,`Disabled`,`CustomRows`,`AllStates`]}))();export{d as AllStates,u as CustomRows,o as Default,l as Disabled,c as WithError,s as WithHelper,f as __namedExportsOrder,a as default};