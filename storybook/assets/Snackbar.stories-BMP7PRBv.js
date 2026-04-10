import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Mt as r,Nt as i,Pt as a,cn as o,d as s,i as c,r as l,s as u}from"./iframe-CAjx62e_.js";import{a as d,t as f}from"./button-WWkxm_3b.js";var p,m,h,g,_,v=e((()=>{p=t(o(),1),n(),u(),c(),f(),m=a(),h={"bottom-left":`bottom-4 left-4`,"bottom-center":`bottom-4 left-1/2 -translate-x-1/2`,"bottom-right":`bottom-4 right-4`,"top-left":`top-4 left-4`,"top-center":`top-4 left-1/2 -translate-x-1/2`,"top-right":`top-4 right-4`},g={default:`bg-background border border-border text-foreground`,inverted:`bg-foreground text-background`,error:`bg-destructive text-destructive-foreground`,success:`bg-success text-success-foreground`},_=({open:e,message:t,actionLabel:n,onAction:a,onClose:o,autoHideDuration:c,position:u=`bottom-center`,variant:f=`inverted`,className:_,...v})=>(p.useEffect(()=>{if(e&&c&&o){let e=setTimeout(o,c);return()=>clearTimeout(e)}},[e,c,o]),(0,m.jsx)(i,{children:e&&(0,m.jsxs)(r.div,{initial:{opacity:0,scale:.9,y:u.startsWith(`bottom`)?20:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:u.startsWith(`bottom`)?20:-20},className:l(`fixed z-[9999] flex min-w-[320px] max-w-[500px] items-center justify-between gap-4 rounded-lg px-4 py-3 shadow-lg`,h[u],g[f],_),...v,children:[(0,m.jsx)(`span`,{className:`text-sm font-medium`,children:t}),(0,m.jsxs)(`div`,{className:`flex items-center gap-1`,children:[n&&(0,m.jsx)(d,{variant:`ghost`,size:`sm`,onClick:a,className:l(`h-8 px-2 text-xs font-bold uppercase tracking-wider`,f===`inverted`?`text-background hover:bg-background/10`:`text-primary hover:bg-primary/10`),children:n}),o&&(0,m.jsx)(`button`,{onClick:o,className:l(`rounded-full p-1 transition-opacity hover:opacity-100`,f===`inverted`?`text-background opacity-70`:`text-foreground opacity-50`),"aria-label":`Close`,children:(0,m.jsx)(s,{className:`h-4 w-4`})})]})]})})),_.displayName=`Snackbar`,_.__docgenInfo={description:`A specialized "Toast" variant for bottom/top persistent notifications.
Inspired by MUI and Joy UI.`,methods:[],displayName:`Snackbar`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Whether the snackbar is visible`},message:{required:!0,tsType:{name:`string`},description:`Message to display`},actionLabel:{required:!1,tsType:{name:`string`},description:`Action button text`},onAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback for action button click`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback for close button click`},autoHideDuration:{required:!1,tsType:{name:`number`},description:`Duration in ms before auto-closing (optional)`},position:{required:!1,tsType:{name:`union`,raw:`| "bottom-left"
| "bottom-center"
| "bottom-right"
| "top-left"
| "top-center"
| "top-right"`,elements:[{name:`literal`,value:`"bottom-left"`},{name:`literal`,value:`"bottom-center"`},{name:`literal`,value:`"bottom-right"`},{name:`literal`,value:`"top-left"`},{name:`literal`,value:`"top-center"`},{name:`literal`,value:`"top-right"`}]},description:`Anchor position`,defaultValue:{value:`"bottom-center"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "inverted" | "error" | "success"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"inverted"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"success"`}]},description:`Visual variant`,defaultValue:{value:`"inverted"`,computed:!1}}}}})),y=e((()=>{v()})),b,x,S,C,w,T,E;e((()=>{y(),b=t(o(),1),f(),x=a(),S={title:`UI/Snackbar`,component:_,tags:[`autodocs`]},C={render:()=>{let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{onClick:()=>t(!0),children:`Open Snackbar`}),(0,x.jsx)(_,{open:e,message:`Document archived successfully`,actionLabel:`Undo`,onAction:()=>t(!1),onClose:()=>t(!1),autoHideDuration:4e3})]})}},w={render:()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsxs)(`div`,{className:`flex gap-4`,children:[(0,x.jsx)(d,{onClick:()=>t(`success`),children:`Success`}),(0,x.jsx)(d,{onClick:()=>t(`error`),variant:`destructive`,children:`Error`}),(0,x.jsx)(d,{onClick:()=>t(`default`),variant:`outline`,children:`Default`}),(0,x.jsx)(_,{open:e===`success`,variant:`success`,message:`Data saved successfully!`,onClose:()=>t(null),autoHideDuration:3e3}),(0,x.jsx)(_,{open:e===`error`,variant:`error`,message:`Failed to update record.`,onClose:()=>t(null),autoHideDuration:3e3}),(0,x.jsx)(_,{open:e===`default`,variant:`default`,message:`System maintenance in 10 minutes.`,onClose:()=>t(null),autoHideDuration:3e3})]})}},T={render:()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsxs)(`div`,{className:`grid grid-cols-3 gap-4`,children:[(0,x.jsx)(d,{onClick:()=>t(`top-left`),children:`Top Left`}),(0,x.jsx)(d,{onClick:()=>t(`top-center`),children:`Top Center`}),(0,x.jsx)(d,{onClick:()=>t(`top-right`),children:`Top Right`}),(0,x.jsx)(d,{onClick:()=>t(`bottom-left`),children:`Bottom Left`}),(0,x.jsx)(d,{onClick:()=>t(`bottom-center`),children:`Bottom Center`}),(0,x.jsx)(d,{onClick:()=>t(`bottom-right`),children:`Bottom Right`}),(0,x.jsx)(_,{open:!!e,position:e,message:`Visible at ${e}`,onClose:()=>t(null),autoHideDuration:2e3})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
        <Snackbar open={open} message="Document archived successfully" actionLabel="Undo" onAction={() => setOpen(false)} onClose={() => setOpen(false)} autoHideDuration={4000} />
      </>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState<string | null>(null);
    return <div className="flex gap-4">
        <Button onClick={() => setOpen("success")}>Success</Button>
        <Button onClick={() => setOpen("error")} variant="destructive">
          Error
        </Button>
        <Button onClick={() => setOpen("default")} variant="outline">
          Default
        </Button>

        <Snackbar open={open === "success"} variant="success" message="Data saved successfully!" onClose={() => setOpen(null)} autoHideDuration={3000} />
        <Snackbar open={open === "error"} variant="error" message="Failed to update record." onClose={() => setOpen(null)} autoHideDuration={3000} />
        <Snackbar open={open === "default"} variant="default" message="System maintenance in 10 minutes." onClose={() => setOpen(null)} autoHideDuration={3000} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pos, setPos] = useState<"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | null>(null);
    return <div className="grid grid-cols-3 gap-4">
        <Button onClick={() => setPos("top-left")}>Top Left</Button>
        <Button onClick={() => setPos("top-center")}>Top Center</Button>
        <Button onClick={() => setPos("top-right")}>Top Right</Button>
        <Button onClick={() => setPos("bottom-left")}>Bottom Left</Button>
        <Button onClick={() => setPos("bottom-center")}>Bottom Center</Button>
        <Button onClick={() => setPos("bottom-right")}>Bottom Right</Button>

        <Snackbar open={Boolean(pos)} position={pos} message={\`Visible at \${pos}\`} onClose={() => setPos(null)} autoHideDuration={2000} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Variants`,`Positions`]}))();export{C as Default,T as Positions,w as Variants,E as __namedExportsOrder,S as default};