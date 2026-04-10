import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";import{t as o}from"./Input-BMgjnZAM.js";import{t as s}from"./input-C0FTRNRc.js";var c,l,u,d=e((()=>{c=t(r(),1),i(),s(),l=n(),u=({length:e=6,value:t=``,onChange:n,onComplete:r,disabled:i=!1,className:s,inputClassName:u})=>{let d=(0,c.useRef)([]),[f,p]=(0,c.useState)(t),m=t||f;(0,c.useEffect)(()=>{p(t)},[t]);let h=(t,a)=>{if(i)return;let o=a.slice(-1),s=m.split(``);for(;s.length<e;)s.push(``);s[t]=o;let c=s.join(``).slice(0,e);n?n(c):p(c),o&&t<e-1&&d.current[t+1]?.focus(),c.length===e&&!s.slice(0,e).includes(``)&&r&&r(c)},g=(e,t)=>{i||t.key===`Backspace`&&!m[e]&&e>0&&d.current[e-1]?.focus()};return(0,l.jsx)(`div`,{className:a(`flex flex-wrap items-center justify-center gap-2 md:gap-3`,s),onPaste:t=>{if(i)return;t.preventDefault();let a=t.clipboardData.getData(`text`).trim().slice(0,e);n?n(a):p(a);let o=Math.min(a.length,e-1);d.current[o]?.focus(),a.length===e&&r&&r(a)},children:Array.from({length:e}).map((e,t)=>(0,l.jsx)(o,{ref:e=>{d.current[t]=e},type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,maxLength:1,value:m[t]||``,onChange:e=>h(t,e.target.value),onKeyDown:e=>g(t,e),disabled:i,className:a(`h-12 w-10 px-0 text-center text-xl font-bold selection:bg-transparent md:h-14 md:w-12`,`border-2 transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10`,m[t]?`border-primary/50 bg-primary/5 shadow-soft`:`border-muted/50 bg-muted/20`,u)},t))})},u.__docgenInfo={description:`A specialized multi-digit input for One-Time Passwords (OTP).
Features automatic focus management, backspace handling, and paste support.`,methods:[],displayName:`InputOTP`,props:{length:{required:!1,tsType:{name:`number`},description:`Number of total digits (default: 6)`,defaultValue:{value:`6`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Current OTP value (for controlled usage)`,defaultValue:{value:`""`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback triggered on every digit change`},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback triggered when the OTP is completely filled`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the inputs are interactable`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class for the container`},inputClassName:{required:!1,tsType:{name:`string`},description:`Custom class for individual digit inputs`}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),p=t(r(),1),m=n(),h={title:`UI/InputOTP`,component:u,tags:[`autodocs`]},g={render:e=>{let[t,n]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-10`,children:[(0,m.jsx)(u,{...e,value:t,onChange:n,onComplete:e=>alert(`Completed: ${e}`)}),(0,m.jsxs)(`p`,{className:`text-sm text-muted-foreground`,children:[`Current Value: `,t]})]})}},_={args:{length:4}},v={args:{length:8}},y={args:{length:6,disabled:!0,value:`123456`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [otp, setOtp] = useState("");
    return <div className="flex flex-col items-center gap-4 p-10">
        <InputOTP {...args} value={otp} onChange={setOtp} onComplete={val => alert(\`Completed: \${val}\`)} />
        <p className="text-sm text-muted-foreground">Current Value: {otp}</p>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 8
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: "123456"
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Short`,`Long`,`Disabled`]}))();export{g as Default,y as Disabled,v as Long,_ as Short,b as __namedExportsOrder,h as default};