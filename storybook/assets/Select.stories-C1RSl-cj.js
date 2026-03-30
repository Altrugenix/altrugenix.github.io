import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,i as r,r as i,s as a,tt as o,x as s}from"./iframe-B3RxNkLM.js";var c,l,u,d=e((()=>{c=t(o(),1),r(),a(),l=n(),u=c.forwardRef(({className:e,label:t,error:n,errorText:r,children:a,id:o,...u},d)=>{let f=(0,c.useId)(),p=o||f,m=`${p}-error`;return(0,l.jsxs)(`div`,{className:`w-full space-y-1.5`,children:[t&&(0,l.jsx)(`label`,{htmlFor:p,className:`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:t}),(0,l.jsxs)(`div`,{className:`relative`,children:[(0,l.jsx)(`select`,{className:i(`flex h-10 w-full appearance-none items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,(n||r)&&`border-destructive focus-visible:ring-destructive`,e),ref:d,id:p,"aria-invalid":!!n||!!r,"aria-describedby":r?m:void 0,...u,children:a}),(0,l.jsx)(s,{className:`pointer-events-none absolute right-3 top-3 h-4 w-4 opacity-50`})]}),r&&(0,l.jsx)(`p`,{id:m,className:`text-xs font-medium text-destructive`,children:r})]})}),u.displayName=`Select`,u.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`boolean`},description:``},errorText:{required:!1,tsType:{name:`string`},description:``}}}})),f=e((()=>{d()})),p,m,h,g,_,v;e((()=>{f(),p=n(),m={title:`UI/Select`,component:u,tags:[`autodocs`]},h={args:{label:`Country`,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`option`,{value:``,children:`Select a country...`}),(0,p.jsx)(`option`,{value:`us`,children:`United States`}),(0,p.jsx)(`option`,{value:`uk`,children:`United Kingdom`}),(0,p.jsx)(`option`,{value:`ca`,children:`Canada`}),(0,p.jsx)(`option`,{value:`au`,children:`Australia`})]})}},g={args:{label:`Role`,error:!0,errorText:`Please select a role.`,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`option`,{value:``,children:`Choose...`}),(0,p.jsx)(`option`,{value:`admin`,children:`Admin`}),(0,p.jsx)(`option`,{value:`user`,children:`User`})]})}},_={args:{label:`Plan`,disabled:!0,children:(0,p.jsx)(`option`,{children:`Enterprise`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Plan",
    disabled: true,
    children: <option>Enterprise</option>
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`Disabled`]}))();export{h as Default,_ as Disabled,g as WithError,v as __namedExportsOrder,m as default};