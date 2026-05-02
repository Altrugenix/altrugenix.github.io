import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-rb5kBBvT2.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Forms/Checkbox`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A checkbox input for toggling individual boolean values. Supports labels, descriptions, and disabled states with built-in accessibility.`}}},argTypes:{label:{description:`Primary text label rendered next to the checkbox.`,table:{category:`Content`}},description:{description:`Secondary description text rendered below the label.`,table:{category:`Content`}},disabled:{control:`boolean`,description:`Prevents interaction with the checkbox.`,table:{category:`State`}},defaultChecked:{control:`boolean`,description:`Initial checked state for uncontrolled usage.`,table:{category:`State`}}}},o={args:{label:`Accept terms and conditions`}},s={args:{label:`Marketing emails`,description:`Receive emails about new products and features.`},parameters:{docs:{description:{story:`A checkbox with supplementary description text to provide extra context.`}}}},c={args:{label:`I agree`,defaultChecked:!0}},l={args:{label:`Can't toggle this`,disabled:!0}},u={args:{label:`Mandatory agreement`,disabled:!0,defaultChecked:!0},parameters:{docs:{description:{story:`A locked-on checkbox — useful for mandatory, non-negotiable settings.`}}}},d={render:()=>(0,i.jsxs)(`fieldset`,{className:`space-y-3`,children:[(0,i.jsx)(`legend`,{className:`text-foreground mb-2 text-sm font-semibold`,children:`Select your interests`}),(0,i.jsx)(n,{label:`Design`,description:`UI/UX, illustration, branding`}),(0,i.jsx)(n,{label:`Engineering`,description:`Frontend, backend, DevOps`,defaultChecked:!0}),(0,i.jsx)(n,{label:`Data Science`,description:`Machine learning, analytics`}),(0,i.jsx)(n,{label:`Marketing`,description:`Growth, SEO, content`})]}),parameters:{docs:{description:{story:`Multiple checkboxes composed as a group with descriptions, simulating a real preference selection form.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products and features."
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with supplementary description text to provide extra context."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree",
    defaultChecked: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Can't toggle this",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Mandatory agreement",
    disabled: true,
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "A locked-on checkbox — useful for mandatory, non-negotiable settings."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <fieldset className="space-y-3">
      <legend className="text-foreground mb-2 text-sm font-semibold">
        Select your interests
      </legend>
      <Checkbox label="Design" description="UI/UX, illustration, branding" />
      <Checkbox label="Engineering" description="Frontend, backend, DevOps" defaultChecked />
      <Checkbox label="Data Science" description="Machine learning, analytics" />
      <Checkbox label="Marketing" description="Growth, SEO, content" />
    </fieldset>,
  parameters: {
    docs: {
      description: {
        story: "Multiple checkboxes composed as a group with descriptions, simulating a real preference selection form."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithDescription`,`Checked`,`Disabled`,`DisabledChecked`,`CheckboxGroup`]}))();export{d as CheckboxGroup,c as Checked,o as Default,l as Disabled,u as DisabledChecked,s as WithDescription,f as __namedExportsOrder,a as default};