import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$ as n,Pt as r,cn as i,i as a,mt as o,pt as s,r as c,s as l}from"./iframe-CAjx62e_.js";var u,d,f,p,m=e((()=>{u=t(i(),1),a(),l(),d=r(),f={error:{icon:o,style:`text-destructive`},success:{icon:s,style:`text-success`},info:{icon:n,style:`text-info`}},p=u.forwardRef(({className:e,messages:t,...n},r)=>t.length===0?null:(0,d.jsx)(`div`,{ref:r,className:c(`space-y-1`,e),role:`alert`,"aria-live":`polite`,...n,children:t.map((e,t)=>{let{icon:n,style:r}=f[e.type];return(0,d.jsxs)(`div`,{className:c(`flex items-center gap-1.5 text-xs font-medium`,r),children:[(0,d.jsx)(n,{className:`h-3.5 w-3.5 shrink-0`}),(0,d.jsx)(`span`,{children:e.message})]},t)})})),p.displayName=`FormValidation`,p.__docgenInfo={description:`Displays a list of validation messages with corresponding icons.`,methods:[],displayName:`FormValidation`,props:{messages:{required:!0,tsType:{name:`Array`,elements:[{name:`ValidationMessage`}],raw:`ValidationMessage[]`},description:``}}}})),h=e((()=>{m()})),g,_,v,y,b;e((()=>{h(),g={title:`Composites/FormValidation`,component:p,tags:[`autodocs`]},_={args:{messages:[{message:`Password must be at least 8 characters.`,type:`error`},{message:`Username is available.`,type:`success`},{message:`You can change your username later.`,type:`info`}]}},v={args:{messages:[{message:`Email address is required.`,type:`error`},{message:`Password is too weak.`,type:`error`}]}},y={args:{messages:[{message:`Your profile has been updated.`,type:`success`},{message:`Email verified successfully.`,type:`success`}]}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`AllTypes`,`ErrorsOnly`,`SuccessOnly`]}))();export{_ as AllTypes,v as ErrorsOnly,y as SuccessOnly,b as __namedExportsOrder,g as default};