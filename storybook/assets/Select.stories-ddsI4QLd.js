import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-BE2DSly7.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={title:`Forms/Select`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A native HTML select wrapper with label, error, and helper text support. Provides consistent styling with the rest of the form field components.`}}},argTypes:{label:{description:`Label text rendered above the select.`,table:{category:`Content`}},error:{control:`boolean`,description:`Applies error styling to the select.`,table:{category:`Validation`}},errorText:{description:`Error message displayed below the select.`,table:{category:`Validation`}},disabled:{control:`boolean`,description:`Disables the select element.`,table:{category:`State`}}}},o={args:{label:`Country`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`option`,{value:``,children:`Select a country...`}),(0,i.jsx)(`option`,{value:`us`,children:`United States`}),(0,i.jsx)(`option`,{value:`uk`,children:`United Kingdom`}),(0,i.jsx)(`option`,{value:`ca`,children:`Canada`}),(0,i.jsx)(`option`,{value:`au`,children:`Australia`}),(0,i.jsx)(`option`,{value:`de`,children:`Germany`}),(0,i.jsx)(`option`,{value:`fr`,children:`France`}),(0,i.jsx)(`option`,{value:`jp`,children:`Japan`})]})}},s={args:{label:`Role`,error:!0,errorText:`Please select a role.`,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`option`,{value:``,children:`Choose...`}),(0,i.jsx)(`option`,{value:`admin`,children:`Admin`}),(0,i.jsx)(`option`,{value:`editor`,children:`Editor`}),(0,i.jsx)(`option`,{value:`viewer`,children:`Viewer`})]})},parameters:{docs:{description:{story:`The error state highlights the select with a red border and displays validation feedback below.`}}}},c={args:{label:`Plan`,disabled:!0,children:(0,i.jsx)(`option`,{children:`Enterprise`})}},l={render:()=>(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsxs)(n,{label:`Default`,children:[(0,i.jsx)(`option`,{value:``,children:`Choose a framework...`}),(0,i.jsx)(`option`,{value:`react`,children:`React`}),(0,i.jsx)(`option`,{value:`vue`,children:`Vue`}),(0,i.jsx)(`option`,{value:`svelte`,children:`Svelte`})]}),(0,i.jsxs)(n,{label:`With Error`,error:!0,errorText:`Selection is required.`,children:[(0,i.jsx)(`option`,{value:``,children:`Choose...`}),(0,i.jsx)(`option`,{value:`a`,children:`Option A`})]}),(0,i.jsx)(n,{label:`Disabled`,disabled:!0,children:(0,i.jsx)(`option`,{children:`Locked option`})})]}),parameters:{docs:{description:{story:`Overview of all select states in a single view.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    children: <>
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="jp">Japan</option>
      </>
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Role",
    error: true,
    errorText: "Please select a role.",
    children: <>
        <option value="">Choose...</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "The error state highlights the select with a red border and displays validation feedback below."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Plan",
    disabled: true,
    children: <option>Enterprise</option>
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Select label="Default">
        <option value="">Choose a framework...</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </Select>
      <Select label="With Error" error errorText="Selection is required.">
        <option value="">Choose...</option>
        <option value="a">Option A</option>
      </Select>
      <Select label="Disabled" disabled>
        <option>Locked option</option>
      </Select>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Overview of all select states in a single view."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithError`,`Disabled`,`AllStates`]}))();export{l as AllStates,o as Default,c as Disabled,s as WithError,u as __namedExportsOrder,a as default};