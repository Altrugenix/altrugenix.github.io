import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";import{a as o,t as s}from"./button-WWkxm_3b.js";import{t as c}from"./Input-BMgjnZAM.js";import{t as l}from"./input-C0FTRNRc.js";import{n as u,t as d}from"./textarea-BZ8iL72w.js";var f,p,m,h=e((()=>{f=t(r(),1),i(),p=n(),m=({label:e,helperText:t,error:n,required:r,className:i,children:o})=>{let s=(0,f.useId)(),c=o.props.id||s,l=`${c}-error`,u=`${c}-helper`,d=n?l:t?u:void 0,m=f.cloneElement(o,{id:c,"aria-invalid":!!n,"aria-describedby":d});return(0,p.jsxs)(`div`,{className:a(`w-full space-y-1.5`,i),children:[e&&(0,p.jsxs)(`label`,{htmlFor:c,className:`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:[e,r&&(0,p.jsx)(`span`,{className:`ml-1 text-destructive`,"aria-hidden":`true`,children:`*`})]}),m,(n||t)&&(0,p.jsx)(`p`,{id:n?l:u,className:a(`text-xs font-medium`,n?`text-destructive`:`text-muted-foreground`),children:n||t})]})},m.displayName=`FormField`,m.__docgenInfo={description:"FormField composes a label + input + error/helper text into a unified field.\nIt automatically wires up the `id`, `aria-describedby`, and `aria-invalid` props\nto the child input element.",methods:[],displayName:`FormField`,props:{label:{required:!1,tsType:{name:`string`},description:`Label text displayed above the input`},helperText:{required:!1,tsType:{name:`string`},description:`Helper text displayed below the input`},error:{required:!1,tsType:{name:`string`},description:`Error message — when set, field shows error styling`},required:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required (shows asterisk)`},className:{required:!1,tsType:{name:`string`},description:`Additional className for the wrapper`},children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:`The form control element`}}}})),g=e((()=>{h()})),_,v,y,b,x=e((()=>{_=t(r(),1),i(),v=n(),y={sm:`space-y-3`,md:`space-y-5`,lg:`space-y-8`},b=_.forwardRef(({className:e,spacing:t=`md`,children:n,...r},i)=>(0,v.jsx)(`form`,{ref:i,className:a(y[t],e),...r,children:n})),b.displayName=`FormGroup`,b.__docgenInfo={description:`FormGroup wraps a set of form fields and provides consistent vertical spacing.`,methods:[],displayName:`FormGroup`,props:{spacing:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Vertical spacing between form fields`,defaultValue:{value:`"md"`,computed:!1}}}}})),S=e((()=>{x()})),C,w,T,E,D,O;e((()=>{g(),S(),l(),d(),s(),C=n(),w={title:`Composites/FormField`,component:m,tags:[`autodocs`]},T={render:()=>(0,C.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,C.jsx)(m,{label:`Full Name`,required:!0,children:(0,C.jsx)(c,{placeholder:`Enter your name`})}),(0,C.jsx)(m,{label:`Email`,helperText:`We'll never share your email.`,children:(0,C.jsx)(c,{type:`email`,placeholder:`you@example.com`})})]})},E={render:()=>(0,C.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,C.jsx)(m,{label:`Username`,error:`Username is already taken.`,children:(0,C.jsx)(c,{placeholder:`your-username`})}),(0,C.jsx)(m,{label:`Password`,error:`Must be at least 8 characters.`,children:(0,C.jsx)(c,{type:`password`,placeholder:`••••••••`})})]})},D={render:()=>(0,C.jsxs)(b,{className:`max-w-md`,onSubmit:e=>e.preventDefault(),children:[(0,C.jsx)(m,{label:`Name`,required:!0,children:(0,C.jsx)(c,{placeholder:`Jane Doe`})}),(0,C.jsx)(m,{label:`Email`,required:!0,helperText:`Used for account recovery.`,children:(0,C.jsx)(c,{type:`email`,placeholder:`jane@example.com`})}),(0,C.jsx)(m,{label:`Bio`,children:(0,C.jsx)(u,{placeholder:`Tell us about yourself...`})}),(0,C.jsx)(o,{type:`submit`,variant:`primary`,children:`Create Account`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Full Name" required>
        <Input placeholder="Enter your name" />
      </FormField>
      <FormField label="Email" helperText="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Username" error="Username is already taken.">
        <Input placeholder="your-username" />
      </FormField>
      <FormField label="Password" error="Must be at least 8 characters.">
        <Input type="password" placeholder="••••••••" />
      </FormField>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    </FormGroup>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithError`,`WithFormGroup`]}))();export{T as Default,E as WithError,D as WithFormGroup,O as __namedExportsOrder,w as default};