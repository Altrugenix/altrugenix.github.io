import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,Y as i,gn as a,ht as o,mt as s,r as c,zt as l}from"./iframe-zfMobaDd.js";var u,d,f,p,m=e((()=>{u=t(a(),1),r(),c(),d=n(),f={error:{icon:o,style:`text-destructive`},success:{icon:s,style:`text-success`},info:{icon:i,style:`text-info`}},p=u.forwardRef(({className:e,messages:t,...n},r)=>t.length===0?null:(0,d.jsx)(`div`,{ref:r,className:l(`space-y-1`,e),role:`alert`,"aria-live":`polite`,...n,children:t.map((e,t)=>{let{icon:n,style:r}=f[e.type];return(0,d.jsxs)(`div`,{className:l(`flex items-center gap-1.5 text-xs font-medium`,r),children:[(0,d.jsx)(n,{className:`h-3.5 w-3.5 shrink-0`}),(0,d.jsx)(`span`,{children:e.message})]},t)})})),p.displayName=`FormValidation`,p.__docgenInfo={description:`Displays a list of validation messages with corresponding icons.`,methods:[],displayName:`FormValidation`,props:{messages:{required:!0,tsType:{name:`Array`,elements:[{name:`ValidationMessage`}],raw:`ValidationMessage[]`},description:``}}}})),h=e((()=>{m()})),g,_,v,y,b,x;e((()=>{h(),g={title:`Forms/FormValidation`,component:p,tags:[`autodocs`],parameters:{docs:{description:{component:`A validation message list that displays error, success, and info messages below a form or field. Each message type has a distinct color and icon.`}}},argTypes:{messages:{description:"Array of validation messages with `message` and `type` (error | success | info).",table:{category:`Data`}}}},_={args:{messages:[{message:`Password must be at least 8 characters.`,type:`error`},{message:`Username is available.`,type:`success`},{message:`You can change your username later.`,type:`info`}]},parameters:{docs:{description:{story:`All three message types displayed together — error, success, and info.`}}}},v={args:{messages:[{message:`Email address is required.`,type:`error`},{message:`Password is too weak.`,type:`error`}]}},y={args:{messages:[{message:`Your profile has been updated.`,type:`success`},{message:`Email verified successfully.`,type:`success`}]}},b={args:{messages:[{message:`At least 8 characters`,type:`success`},{message:`Contains a number`,type:`success`},{message:`Contains an uppercase letter`,type:`error`},{message:`Contains a special character`,type:`error`}]},parameters:{docs:{description:{story:`A password strength checklist — met requirements shown in green, unmet in red.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "Password must be at least 8 characters.",
      type: "error"
    }, {
      message: "Username is available.",
      type: "success"
    }, {
      message: "You can change your username later.",
      type: "info"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "All three message types displayed together — error, success, and info."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "Email address is required.",
      type: "error"
    }, {
      message: "Password is too weak.",
      type: "error"
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "Your profile has been updated.",
      type: "success"
    }, {
      message: "Email verified successfully.",
      type: "success"
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "At least 8 characters",
      type: "success"
    }, {
      message: "Contains a number",
      type: "success"
    }, {
      message: "Contains an uppercase letter",
      type: "error"
    }, {
      message: "Contains a special character",
      type: "error"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A password strength checklist — met requirements shown in green, unmet in red."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`AllTypes`,`ErrorsOnly`,`SuccessOnly`,`PasswordRequirements`]}))();export{_ as AllTypes,v as ErrorsOnly,b as PasswordRequirements,y as SuccessOnly,x as __namedExportsOrder,g as default};