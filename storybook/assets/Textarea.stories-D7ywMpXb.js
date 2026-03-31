import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,dt as r,i,r as a}from"./iframe-CMmeXSus.js";var o,s,c,l=e((()=>{o=t(r(),1),i(),s=n(),c=o.forwardRef(({className:e,label:t,error:n,errorText:r,helperText:i,id:c,...l},u)=>{let d=(0,o.useId)(),f=c||d,p=`${f}-error`,m=`${f}-helper`;return(0,s.jsxs)(`div`,{className:`w-full space-y-1.5`,children:[t&&(0,s.jsx)(`label`,{htmlFor:f,className:`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:t}),(0,s.jsx)(`textarea`,{className:a(`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,(n||r)&&`border-destructive focus-visible:ring-destructive`,e),ref:u,id:f,"aria-invalid":!!n||!!r,"aria-describedby":r?p:i?m:void 0,...l}),(r||i)&&(0,s.jsx)(`p`,{id:r?p:m,className:a(`text-xs font-medium`,r?`text-destructive`:`text-muted-foreground`),children:r||i})]})}),c.displayName=`Textarea`,c.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`boolean`},description:``},errorText:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h,g;e((()=>{u(),d={title:`UI/Textarea`,component:c,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`}}},f={args:{label:`Message`,placeholder:`Type your message here...`}},p={args:{label:`Bio`,placeholder:`Tell us about yourself...`,helperText:`Maximum 500 characters.`}},m={args:{label:`Description`,defaultValue:`Hi`,error:!0,errorText:`Description must be at least 10 characters.`}},h={args:{label:`Notes`,disabled:!0,value:`This textarea is disabled.`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Message",
    placeholder: "Type your message here..."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    helperText: "Maximum 500 characters."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    defaultValue: "Hi",
    error: true,
    errorText: "Description must be at least 10 characters."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Notes",
    disabled: true,
    value: "This textarea is disabled."
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithHelper`,`WithError`,`Disabled`]}))();export{f as Default,h as Disabled,m as WithError,p as WithHelper,g as __namedExportsOrder,d as default};