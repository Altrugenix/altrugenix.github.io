import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";import{n as o,t as s}from"./src-CbP_nypd.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),s(),l=n(),u=({length:e=6,value:t=``,onChange:n,onComplete:r,disabled:i=!1,className:s,inputClassName:u})=>{let d=(0,c.useRef)([]),[f,p]=(0,c.useState)(t),[m,h]=(0,c.useState)(t);t!==m&&(p(t),h(t));let g=t||f,_=(t,a)=>{if(i)return;let o=a.slice(-1),s=g.split(``);for(;s.length<e;)s.push(``);s[t]=o;let c=s.join(``).slice(0,e);n?n(c):p(c),o&&t<e-1&&d.current[t+1]?.focus(),c.length===e&&!s.slice(0,e).includes(``)&&r&&r(c)},v=(e,t)=>{i||t.key===`Backspace`&&!g[e]&&e>0&&d.current[e-1]?.focus()};return(0,l.jsx)(`div`,{className:a(`flex flex-wrap items-center justify-center gap-2 md:gap-3`,s),onPaste:t=>{if(i)return;t.preventDefault();let a=t.clipboardData.getData(`text`).trim().slice(0,e);n?n(a):p(a);let o=Math.min(a.length,e-1);d.current[o]?.focus(),a.length===e&&r&&r(a)},children:Array.from({length:e}).map((e,t)=>(0,l.jsx)(o,{ref:e=>{d.current[t]=e},type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,maxLength:1,value:g[t]||``,onChange:e=>_(t,e.target.value),onKeyDown:e=>v(t,e),disabled:i,className:a(`h-12 w-10 px-0 text-center text-xl font-bold selection:bg-transparent md:h-14 md:w-12`,`focus:border-primary focus:ring-primary/10 border-2 transition-all duration-200 focus:ring-4`,g[t]?`border-primary/50 bg-primary/5 shadow-soft`:`border-muted/50 bg-muted/20`,u)},t))})},u.__docgenInfo={description:`A specialized multi-digit input for One-Time Passwords (OTP).
Features automatic focus management, backspace handling, and paste support.`,methods:[],displayName:`InputOTP`,props:{length:{required:!1,tsType:{name:`number`},description:`Number of total digits (default: 6)`,defaultValue:{value:`6`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Current OTP value (for controlled usage)`,defaultValue:{value:`""`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback triggered on every digit change`},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback triggered when the OTP is completely filled`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the inputs are interactable`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class for the container`},inputClassName:{required:!1,tsType:{name:`string`},description:`Custom class for individual digit inputs`}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b,x,S,C;e((()=>{f(),p=t(i(),1),m=n(),h={title:`Forms/InputOTP`,component:u,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A specialized multi-digit input for One-Time Passwords (OTP). Features automatic focus management between digits, backspace handling, and clipboard paste support.`}}},argTypes:{length:{control:{type:`number`,min:3,max:10},description:`Number of digit inputs (default: 6).`,table:{category:`Appearance`}},value:{description:`Controlled OTP value string.`,table:{category:`State`}},onChange:{description:`Callback triggered on every digit change.`,table:{category:`Events`}},onComplete:{description:`Callback triggered when all digits are filled.`,table:{category:`Events`}},disabled:{control:`boolean`,description:`Prevents all input interaction.`,table:{category:`State`}}}},g=e=>{let[t,n]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-10`,children:[(0,m.jsx)(u,{...e,value:t,onChange:n,onComplete:e=>alert(`Completed: ${e}`)}),(0,m.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`Current Value:`,` `,(0,m.jsx)(`span`,{className:`font-mono font-semibold`,children:t||`—`})]})]})},_={render:e=>(0,m.jsx)(g,{...e}),parameters:{docs:{description:{story:`A 6-digit OTP input with live value display. An alert fires when all digits are entered.`}}}},v={args:{length:4},render:e=>(0,m.jsx)(g,{...e}),parameters:{docs:{description:{story:`A shorter 4-digit OTP — common for SMS verification codes.`}}}},y={args:{length:8},render:e=>(0,m.jsx)(g,{...e}),parameters:{docs:{description:{story:`An 8-digit OTP for higher-security verification flows.`}}}},b={args:{length:6,disabled:!0,value:`123456`},parameters:{docs:{description:{story:`A disabled OTP input with pre-filled digits — useful for display-only confirmation states.`}}}},x=()=>{let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-10`,children:[(0,m.jsx)(`h3`,{className:`text-foreground text-lg font-semibold`,children:`Verify Your Email`}),(0,m.jsx)(`p`,{className:`text-muted-foreground max-w-xs text-center text-sm`,children:`We sent a 6-digit code to your email. Enter it below to verify your account.`}),(0,m.jsx)(u,{value:e,onChange:t,onComplete:()=>r(!0),disabled:n}),n&&(0,m.jsx)(`p`,{className:`text-sm font-medium text-emerald-600`,children:`✓ Email verified successfully!`})]})},S={render:()=>(0,m.jsx)(x,{}),parameters:{docs:{description:{story:`A complete email verification flow with instructional text and a success confirmation state.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story: "A 6-digit OTP input with live value display. An alert fires when all digits are entered."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  },
  render: args => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story: "A shorter 4-digit OTP — common for SMS verification codes."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    length: 8
  },
  render: args => <DefaultRender {...args} />,
  parameters: {
    docs: {
      description: {
        story: "An 8-digit OTP for higher-security verification flows."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: "123456"
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled OTP input with pre-filled digits — useful for display-only confirmation states."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <VerificationFlowDemo />,
  parameters: {
    docs: {
      description: {
        story: "A complete email verification flow with instructional text and a success confirmation state."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`FourDigit`,`EightDigit`,`Disabled`,`VerificationFlow`]}))();export{_ as Default,b as Disabled,y as EightDigit,v as FourDigit,S as VerificationFlow,C as __namedExportsOrder,h as default};