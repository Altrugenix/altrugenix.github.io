import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";import{n as o,t as s}from"./refs-CwIGsfPC.js";var c,l,u,d=e((()=>{c=t(r(),1),i(),s(),l=n(),u=c.forwardRef(({className:e,onChange:t,minRows:n=1,...r},i)=>{let s=(0,c.useRef)(null),u=o(s,i),d=()=>{let e=s.current;if(!e)return;e.style.height=`auto`;let t=e.scrollHeight;e.style.height=`${t}px`};return(0,c.useLayoutEffect)(()=>{d()},[r.value,r.defaultValue]),(0,l.jsx)(`textarea`,{ref:u,onChange:e=>{d(),t?.(e)},className:a(`flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,e),style:{height:`auto`},rows:n,...r})}),u.displayName=`TextareaAutosize`,u.__docgenInfo={description:`A specialized textarea component that automatically adjusts its height as the user types.`,methods:[],displayName:`TextareaAutosize`,props:{maxRows:{required:!1,tsType:{name:`number`},description:`Maximum number of rows to show`},minRows:{required:!1,tsType:{name:`number`},description:`Minimum number of rows to show`,defaultValue:{value:`1`,computed:!1}}}}})),f,p,m,h;e((()=>{d(),f={title:`Utilities/TextareaAutosize`,component:u,tags:[`autodocs`]},p={args:{placeholder:`Type something long to see me grow...`,minRows:3}},m={args:{defaultValue:`This is a pre-filled textarea.
It has multiple lines.
Watch it adjust its height automatically to fit all this content without showing a scrollbar.`,minRows:2}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something long to see me grow...",
    minRows: 3
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is a pre-filled textarea.\\nIt has multiple lines.\\nWatch it adjust its height automatically to fit all this content without showing a scrollbar.",
    minRows: 2
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithValue`]}))();export{p as Default,m as WithValue,h as __namedExportsOrder,f as default};