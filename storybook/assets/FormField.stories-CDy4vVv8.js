import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";import{a as o,t as s}from"./src-CxQaJ0KN.js";import{n as c,t as l}from"./src-CuQaqhm9.js";import{n as u,t as d}from"./src-CriXKkdF.js";import{n as f,t as p}from"./src-fAYbfGOy.js";var m,h,g,_=e((()=>{m=t(i(),1),r(),h=n(),g=({label:e,helperText:t,error:n,required:r,className:i,children:o})=>{let s=(0,m.useId)(),c=o.props.id||s,l=`${c}-error`,u=`${c}-helper`,d=n?l:t?u:void 0,f=m.cloneElement(o,{id:c,"aria-invalid":!!n,"aria-describedby":d});return(0,h.jsxs)(`div`,{className:a(`w-full space-y-1.5`,i),children:[e&&(0,h.jsxs)(`label`,{htmlFor:c,className:`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:[e,r&&(0,h.jsx)(`span`,{className:`text-destructive ml-1`,"aria-hidden":`true`,children:`*`})]}),f,(n||t)&&(0,h.jsx)(`p`,{id:n?l:u,className:a(`text-xs font-medium`,n?`text-destructive`:`text-muted-foreground`),children:n||t})]})},g.displayName=`FormField`,g.__docgenInfo={description:"FormField composes a label + input + error/helper text into a unified field.\nIt automatically wires up the `id`, `aria-describedby`, and `aria-invalid` props\nto the child input element.",methods:[],displayName:`FormField`,props:{label:{required:!1,tsType:{name:`string`},description:`Label text displayed above the input`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the input`},error:{required:!1,tsType:{name:`string`},description:`Error message — when set, field shows error styling`},required:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required (shows asterisk)`},className:{required:!1,tsType:{name:`string`},description:`Additional className for the wrapper`},children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:`The form control element`}}}})),v=e((()=>{_()})),y,b,x,S,C=e((()=>{y=t(i(),1),r(),b=n(),x={sm:`space-y-3`,md:`space-y-5`,lg:`space-y-8`},S=y.forwardRef(({className:e,spacing:t=`md`,children:n,...r},i)=>(0,b.jsx)(`form`,{ref:i,className:a(x[t],e),...r,children:n})),S.displayName=`FormGroup`,S.__docgenInfo={description:`FormGroup wraps a set of form fields and provides consistent vertical spacing.`,methods:[],displayName:`FormGroup`,props:{spacing:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Vertical spacing between form fields`,defaultValue:{value:`"md"`,computed:!1}}}}})),w=e((()=>{C()})),T,E,D,O,k,A,j;e((()=>{v(),w(),l(),d(),p(),s(),T=n(),E={title:`Forms/FormField`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:"Composes a label, input, and error/helper text into a unified form field. Automatically wires `id`, `aria-describedby`, and `aria-invalid` props to the child input element."}}},argTypes:{label:{description:`Label text displayed above the input.`,table:{category:`Content`}},helperText:{description:`Informational text below the input.`,table:{category:`Validation`}},error:{description:`Error message — triggers error styling when set.`,table:{category:`Validation`}},required:{control:`boolean`,description:`Shows a red asterisk next to the label.`,table:{category:`Validation`}}}},D={render:()=>(0,T.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,T.jsx)(g,{label:`Full Name`,required:!0,children:(0,T.jsx)(c,{placeholder:`Enter your name`})}),(0,T.jsx)(g,{label:`Email`,helperText:`We'll never share your email.`,children:(0,T.jsx)(c,{type:`email`,placeholder:`you@example.com`})})]})},O={render:()=>(0,T.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,T.jsx)(g,{label:`Username`,error:`Username is already taken.`,children:(0,T.jsx)(c,{placeholder:`your-username`})}),(0,T.jsx)(g,{label:`Password`,error:`Must be at least 8 characters.`,children:(0,T.jsx)(c,{type:`password`,placeholder:`••••••••`})})]}),parameters:{docs:{description:{story:"Error messages displayed below each field with red styling and `aria-invalid` set on the inputs."}}}},k={render:()=>(0,T.jsxs)(S,{className:`max-w-md`,onSubmit:e=>e.preventDefault(),children:[(0,T.jsx)(g,{label:`Name`,required:!0,children:(0,T.jsx)(c,{placeholder:`Jane Doe`})}),(0,T.jsx)(g,{label:`Email`,required:!0,helperText:`Used for account recovery.`,children:(0,T.jsx)(c,{type:`email`,placeholder:`jane@example.com`})}),(0,T.jsx)(g,{label:`Bio`,children:(0,T.jsx)(u,{placeholder:`Tell us about yourself...`})}),(0,T.jsx)(o,{type:`submit`,variant:`primary`,children:`Create Account`})]}),parameters:{docs:{description:{story:`A complete registration form composing FormField with FormGroup, mixing Input, Textarea, and a submit button.`}}}},A={render:()=>(0,T.jsxs)(`div`,{className:`max-w-md space-y-6`,children:[(0,T.jsx)(g,{label:`Project Name`,required:!0,children:(0,T.jsx)(c,{placeholder:`My Awesome Project`})}),(0,T.jsx)(g,{label:`Category`,required:!0,children:(0,T.jsxs)(f,{children:[(0,T.jsx)(`option`,{value:``,children:`Select a category...`}),(0,T.jsx)(`option`,{value:`web`,children:`Web Application`}),(0,T.jsx)(`option`,{value:`mobile`,children:`Mobile App`}),(0,T.jsx)(`option`,{value:`api`,children:`API / Backend`})]})}),(0,T.jsx)(g,{label:`Description`,helperText:`Max 500 characters.`,children:(0,T.jsx)(u,{placeholder:`Describe your project...`,rows:4})})]}),parameters:{docs:{description:{story:`FormField works with any input-like child component — Input, Select, and Textarea are all supported.`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Full Name" required>
        <Input placeholder="Enter your name" />
      </FormField>
      <FormField label="Email" helperText="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Username" error="Username is already taken.">
        <Input placeholder="your-username" />
      </FormField>
      <FormField label="Password" error="Must be at least 8 characters.">
        <Input type="password" placeholder="••••••••" />
      </FormField>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Error messages displayed below each field with red styling and \`aria-invalid\` set on the inputs."
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup className="max-w-md" onSubmit={e => e.preventDefault()}>
      <FormField label="Name" required>
        <Input placeholder="Jane Doe" />
      </FormField>
      <FormField label="Email" required helperText="Used for account recovery.">
        <Input type="email" placeholder="jane@example.com" />
      </FormField>
      <FormField label="Bio">
        <Textarea placeholder="Tell us about yourself..." />
      </FormField>
      <Button type="submit" variant="primary">
        Create Account
      </Button>
    </FormGroup>,
  parameters: {
    docs: {
      description: {
        story: "A complete registration form composing FormField with FormGroup, mixing Input, Textarea, and a submit button."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-6">
      <FormField label="Project Name" required>
        <Input placeholder="My Awesome Project" />
      </FormField>
      <FormField label="Category" required>
        <Select>
          <option value="">Select a category...</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="api">API / Backend</option>
        </Select>
      </FormField>
      <FormField label="Description" helperText="Max 500 characters.">
        <Textarea placeholder="Describe your project..." rows={4} />
      </FormField>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "FormField works with any input-like child component — Input, Select, and Textarea are all supported."
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithError`,`WithFormGroup`,`MixedInputTypes`]}))();export{D as Default,A as MixedInputTypes,O as WithError,k as WithFormGroup,j as __namedExportsOrder,E as default};