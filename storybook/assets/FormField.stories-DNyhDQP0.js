import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";import{r as o,t as s}from"./altrugenix-button-B6cD2NVL.js";import{n as c,t as l}from"./altrugenix-input-BecAsuUZ.js";import{n as u,t as d}from"./altrugenix-textarea-3iUPWzEF.js";var f,p,m,h=e((()=>{f=t(a(),1),i(),p=r(),m=({label:e,helperText:t,error:r,required:i,className:a,children:o})=>{let s=(0,f.useId)(),c=o.props.id||s,l=`${c}-error`,u=`${c}-helper`,d=r?l:t?u:void 0,m=f.cloneElement(o,{id:c,"aria-invalid":!!r,"aria-describedby":d});return(0,p.jsxs)(`div`,{className:n(`w-full space-y-1.5`,a),children:[e&&(0,p.jsxs)(`label`,{htmlFor:c,className:`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:[e,i&&(0,p.jsx)(`span`,{className:`text-destructive ml-1`,"aria-hidden":`true`,children:`*`})]}),m,(r||t)&&(0,p.jsx)(`p`,{id:r?l:u,className:n(`text-xs font-medium`,r?`text-destructive`:`text-muted-foreground`),children:r||t})]})},m.displayName=`FormField`})),g,_,v,y,b=e((()=>{g=t(a(),1),i(),_=r(),v={sm:`space-y-3`,md:`space-y-5`,lg:`space-y-8`},y=g.forwardRef(({className:e,spacing:t=`md`,children:r,...i},a)=>(0,_.jsx)(`form`,{ref:a,className:n(v[t],e),...i,children:r})),y.displayName=`FormGroup`,y.__docgenInfo={description:``,methods:[],displayName:`FormGroup`,props:{spacing:{defaultValue:{value:`"md"`,computed:!1},required:!1}}}})),x,S,C,w,T,E;e((()=>{h(),b(),l(),u(),o(),x=r(),S={title:`Composites/FormField`,component:m,tags:[`autodocs`]},C={render:()=>(0,x.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,x.jsx)(m,{label:`Full Name`,required:!0,children:(0,x.jsx)(c,{placeholder:`Enter your name`})}),(0,x.jsx)(m,{label:`Email`,helperText:`We'll never share your email.`,children:(0,x.jsx)(c,{type:`email`,placeholder:`you@example.com`})})]})},w={render:()=>(0,x.jsxs)(`div`,{className:`max-w-sm space-y-6`,children:[(0,x.jsx)(m,{label:`Username`,error:`Username is already taken.`,children:(0,x.jsx)(c,{placeholder:`your-username`})}),(0,x.jsx)(m,{label:`Password`,error:`Must be at least 8 characters.`,children:(0,x.jsx)(c,{type:`password`,placeholder:`••••••••`})})]})},T={render:()=>(0,x.jsxs)(y,{className:`max-w-md`,onSubmit:e=>e.preventDefault(),children:[(0,x.jsx)(m,{label:`Name`,required:!0,children:(0,x.jsx)(c,{placeholder:`Jane Doe`})}),(0,x.jsx)(m,{label:`Email`,required:!0,helperText:`Used for account recovery.`,children:(0,x.jsx)(c,{type:`email`,placeholder:`jane@example.com`})}),(0,x.jsx)(m,{label:`Bio`,children:(0,x.jsx)(d,{placeholder:`Tell us about yourself...`})}),(0,x.jsx)(s,{type:`submit`,variant:`primary`,children:`Create Account`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Full Name" required>
        <Input placeholder="Enter your name" />
      </FormField>
      <FormField label="Email" helperText="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-6">
      <FormField label="Username" error="Username is already taken.">
        <Input placeholder="your-username" />
      </FormField>
      <FormField label="Password" error="Must be at least 8 characters.">
        <Input type="password" placeholder="••••••••" />
      </FormField>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithError`,`WithFormGroup`]}))();export{C as Default,w as WithError,T as WithFormGroup,E as __namedExportsOrder,S as default};