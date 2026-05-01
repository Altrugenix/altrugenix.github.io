import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,Y as a,ln as o,lt as s,r as c,ut as l}from"./iframe-By8sOsRq.js";var u,d,f,p,m=e((()=>{u=t(o(),1),i(),c(),d=r(),f={error:{icon:l,style:`text-destructive`},success:{icon:s,style:`text-success`},info:{icon:a,style:`text-info`}},p=u.forwardRef(({className:e,messages:t,...r},i)=>t.length===0?null:(0,d.jsx)(`div`,{ref:i,className:n(`space-y-1`,e),role:`alert`,"aria-live":`polite`,...r,children:t.map((e,t)=>{let{icon:r,style:i}=f[e.type];return(0,d.jsxs)(`div`,{className:n(`flex items-center gap-1.5 text-xs font-medium`,i),children:[(0,d.jsx)(r,{className:`h-3.5 w-3.5 shrink-0`}),(0,d.jsx)(`span`,{children:e.message})]},t)})})),p.displayName=`FormValidation`,p.__docgenInfo={description:``,methods:[],displayName:`FormValidation`}})),h,g,_,v,y;e((()=>{m(),h={title:`Composites/FormValidation`,component:p,tags:[`autodocs`]},g={args:{messages:[{message:`Password must be at least 8 characters.`,type:`error`},{message:`Username is available.`,type:`success`},{message:`You can change your username later.`,type:`info`}]}},_={args:{messages:[{message:`Email address is required.`,type:`error`},{message:`Password is too weak.`,type:`error`}]}},v={args:{messages:[{message:`Your profile has been updated.`,type:`success`},{message:`Email verified successfully.`,type:`success`}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "Email address is required.",
      type: "error"
    }, {
      message: "Password is too weak.",
      type: "error"
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      message: "Your profile has been updated.",
      type: "success"
    }, {
      message: "Email verified successfully.",
      type: "success"
    }]
  }
}`,...v.parameters?.docs?.source}}},y=[`AllTypes`,`ErrorsOnly`,`SuccessOnly`]}))();export{g as AllTypes,_ as ErrorsOnly,v as SuccessOnly,y as __namedExportsOrder,h as default};