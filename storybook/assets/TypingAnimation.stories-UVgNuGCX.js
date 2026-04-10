import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Mt as r,Pt as i,cn as a,i as o,r as s}from"./iframe-CAjx62e_.js";var c,l,u,d=e((()=>{c=t(a(),1),n(),o(),l=i(),u=({text:e,speed:t=100,className:n,repeat:i=!1,cursor:a=!0,delay:o=0})=>{let[u,d]=(0,c.useState)(``),[f,p]=(0,c.useState)(0),m=f>=e.length;return(0,c.useEffect)(()=>{let n;return o>0&&f===0&&!m?(n=setTimeout(()=>{p(0)},o),()=>clearTimeout(n)):(m?i&&(n=setTimeout(()=>{d(``),p(0)},2e3)):n=setTimeout(()=>{d(t=>t+e[f]),p(e=>e+1)},t),()=>clearTimeout(n))},[f,e,t,i,o,m]),(0,l.jsxs)(`div`,{className:s(`inline-flex items-center text-lg font-medium md:text-xl`,n),children:[(0,l.jsx)(`span`,{children:u}),a&&(!m||i)&&(0,l.jsx)(r.span,{animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0,ease:`easeInOut`},className:`ml-1 inline-block h-[1.1em] w-[2px] bg-primary align-middle`})]})},u.displayName=`TypingAnimation`,u.__docgenInfo={description:`TypingAnimation - A utility to simulate a typing effect for headings or hero sections.`,methods:[],displayName:`TypingAnimation`,props:{text:{required:!0,tsType:{name:`string`},description:`The text content to animate`},speed:{required:!1,tsType:{name:`number`},description:`Speed of typing in milliseconds per character (default: 100)`,defaultValue:{value:`100`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`},repeat:{required:!1,tsType:{name:`boolean`},description:`Whether to restart the animation once it finishes (default: false)`,defaultValue:{value:`false`,computed:!1}},cursor:{required:!1,tsType:{name:`boolean`},description:`Whether to show the blinking cursor (default: true)`,defaultValue:{value:`true`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Delay before starting the animation in milliseconds (default: 0)`,defaultValue:{value:`0`,computed:!1}}}}})),f,p,m,h,g;e((()=>{d(),f={title:`Components/Feedback/TypingAnimation`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},p={args:{text:`Building the future of digital experiences 🚀`,speed:80}},m={args:{text:`Altrugenix: The only UI library you'll ever need.`,speed:50,className:`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600`}},h={args:{text:`Type... Repeat... Type... Repeat...`,speed:30,repeat:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Building the future of digital experiences 🚀",
    speed: 80
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Altrugenix: The only UI library you'll ever need.",
    speed: 50,
    className: "text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Type... Repeat... Type... Repeat...",
    speed: 30,
    repeat: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`HeroSection`,`FastRepeating`]}))();export{p as Default,h as FastRepeating,m as HeroSection,g as __namedExportsOrder,f as default};