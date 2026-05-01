import{n as e}from"./chunk-jRWAZmH_.js";import{B as t,D as n,Ht as r,r as i}from"./iframe-coe0kFk0.js";import{n as a,t as o}from"./src-CuQaqhm9.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{o(),i(),s=r(),c={title:`Forms/Input`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`A flexible text input component with built-in label, helper text, error messaging, size variants, and addon support. Automatically wires accessibility attributes.`}}},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Controls the height and font size of the input.`,table:{category:`Appearance`}},label:{description:`Label text rendered above the input.`,table:{category:`Content`}},placeholder:{description:`Placeholder text shown when the input is empty.`,table:{category:`Content`}},helperText:{description:`Informational text displayed below the input.`,table:{category:`Validation`}},errorText:{description:`Error message displayed below the input. When set, applies error styling.`,table:{category:`Validation`}},leftAddon:{description:`Icon or element rendered inside the input, on the left.`,table:{category:`Content`}},disabled:{control:`boolean`,description:`Prevents interaction and applies muted styling.`,table:{category:`State`}}}},l={args:{placeholder:`Enter text...`,label:`Username`}},u={args:{label:`Email`,placeholder:`you@example.com`,helperText:`We will never share your email.`},parameters:{docs:{description:{story:"Helper text provides additional context below the field, linked via `aria-describedby`."}}}},d={args:{label:`Password`,type:`password`,defaultValue:`short`,errorText:`Password must be at least 8 characters.`},parameters:{docs:{description:{story:"When `errorText` is provided, the input border turns red and the error message is announced to screen readers."}}}},f={args:{label:`Search`,placeholder:`Search components...`,leftAddon:(0,s.jsx)(n,{className:`h-4 w-4`})}},p={args:{label:`API Key`,disabled:!0,value:`sk-••••••••••••••••`}},m={render:()=>(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsx)(a,{label:`Small`,size:`sm`,placeholder:`Small input`}),(0,s.jsx)(a,{label:`Medium (default)`,size:`md`,placeholder:`Medium input`}),(0,s.jsx)(a,{label:`Large`,size:`lg`,placeholder:`Large input`})]}),parameters:{docs:{description:{story:`Comparison of all three available sizes — small, medium, and large.`}}}},h={render:()=>(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsx)(a,{label:`Default`,placeholder:`Normal state...`}),(0,s.jsx)(a,{label:`With Helper`,placeholder:`Has guidance...`,helperText:`This is helper text.`}),(0,s.jsx)(a,{label:`Error`,defaultValue:`invalid`,errorText:`This field has an error.`}),(0,s.jsx)(a,{label:`Disabled`,disabled:!0,value:`Cannot edit`}),(0,s.jsx)(a,{label:`With Icon`,leftAddon:(0,s.jsx)(t,{className:`h-4 w-4`}),placeholder:`email@example.com`})]}),parameters:{docs:{description:{story:`Overview of all input states in a single view.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    label: "Username"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We will never share your email."
  },
  parameters: {
    docs: {
      description: {
        story: "Helper text provides additional context below the field, linked via \`aria-describedby\`."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    defaultValue: "short",
    errorText: "Password must be at least 8 characters."
  },
  parameters: {
    docs: {
      description: {
        story: "When \`errorText\` is provided, the input border turns red and the error message is announced to screen readers."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    placeholder: "Search components...",
    leftAddon: <Search className="h-4 w-4" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "API Key",
    disabled: true,
    value: "sk-••••••••••••••••"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium (default)" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three available sizes — small, medium, and large."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Input label="Default" placeholder="Normal state..." />
      <Input label="With Helper" placeholder="Has guidance..." helperText="This is helper text." />
      <Input label="Error" defaultValue="invalid" errorText="This field has an error." />
      <Input label="Disabled" disabled value="Cannot edit" />
      <Input label="With Icon" leftAddon={<Mail className="h-4 w-4" />} placeholder="email@example.com" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Overview of all input states in a single view."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithHelper`,`WithError`,`WithIcons`,`Disabled`,`Sizes`,`AllStates`]}))();export{h as AllStates,l as Default,p as Disabled,m as Sizes,d as WithError,u as WithHelper,f as WithIcons,g as __namedExportsOrder,c as default};