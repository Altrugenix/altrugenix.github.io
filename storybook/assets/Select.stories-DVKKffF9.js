import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ht as a,ln as o,r as s}from"./iframe-BnAwTMlV.js";var c,l,u,d=e((()=>{c=t(o(),1),i(),s(),l=r(),u=c.forwardRef(({className:e,label:t,error:r,errorText:i,children:o,id:s,...u},d)=>{let f=(0,c.useId)(),p=s||f,m=`${p}-error`;return(0,l.jsxs)(`div`,{className:`w-full space-y-1.5`,children:[t&&(0,l.jsx)(`label`,{htmlFor:p,className:`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:t}),(0,l.jsxs)(`div`,{className:`relative`,children:[(0,l.jsx)(`select`,{className:n(`border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full appearance-none items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,(r||i)&&`border-destructive focus-visible:ring-destructive`,e),ref:d,id:p,"aria-invalid":!!r||!!i,"aria-describedby":i?m:void 0,...u,children:o}),(0,l.jsx)(a,{className:`pointer-events-none absolute top-3 right-3 h-4 w-4 opacity-50`})]}),i&&(0,l.jsx)(`p`,{id:m,className:`text-destructive text-xs font-medium`,children:i})]})}),u.displayName=`Select`,u.__docgenInfo={description:``,methods:[],displayName:`Select`}})),f,p,m,h,g,_;e((()=>{d(),f=r(),p={title:`UI/Select`,component:u,tags:[`autodocs`]},m={args:{label:`Country`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`option`,{value:``,children:`Select a country...`}),(0,f.jsx)(`option`,{value:`us`,children:`United States`}),(0,f.jsx)(`option`,{value:`uk`,children:`United Kingdom`}),(0,f.jsx)(`option`,{value:`ca`,children:`Canada`}),(0,f.jsx)(`option`,{value:`au`,children:`Australia`})]})}},h={args:{label:`Role`,error:!0,errorText:`Please select a role.`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`option`,{value:``,children:`Choose...`}),(0,f.jsx)(`option`,{value:`admin`,children:`Admin`}),(0,f.jsx)(`option`,{value:`user`,children:`User`})]})}},g={args:{label:`Plan`,disabled:!0,children:(0,f.jsx)(`option`,{children:`Enterprise`})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Country",
    children: <>
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Role",
    error: true,
    errorText: "Please select a role.",
    children: <>
        <option value="">Choose...</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Plan",
    disabled: true,
    children: <option>Enterprise</option>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithError`,`Disabled`]}))();export{m as Default,g as Disabled,h as WithError,_ as __namedExportsOrder,p as default};