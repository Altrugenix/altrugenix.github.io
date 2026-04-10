import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r}from"./iframe-CAjx62e_.js";import{t as i}from"./react-dom-sz1atpL0.js";import{a,t as o}from"./button-WWkxm_3b.js";import{n as s,t as c}from"./typography-Mis0eL9b.js";var l,u,d,f,p=e((()=>{l=t(r(),1),u=t(i(),1),d=n(),f=({children:e,container:t,disabled:n=!1})=>{let[r,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{i(!0)},[]),n?(0,d.jsx)(d.Fragment,{children:e}):r?(0,u.createPortal)(e,t||document.body):null},f.displayName=`Portal`,f.__docgenInfo={description:`A utility to render component children into a DOM node at the end of document.body.`,methods:[],displayName:`Portal`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The children to render in the portal`},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:`The container to render the portal into (defaults to document.body)`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the portal is disabled`,defaultValue:{value:`false`,computed:!1}}}}})),m,h,g,_,v;e((()=>{p(),m=t(r(),1),o(),h=n(),c(),g={title:`Utilities/Portal`,component:f,tags:[`autodocs`]},_={render:()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border bg-muted/20 p-10`,children:[(0,h.jsxs)(s,{variant:`body2`,className:`mb-4`,children:[`This container has `,(0,h.jsx)(`code`,{children:`overflow: hidden`}),`. Click the button to see the portal in action.`]}),(0,h.jsx)(a,{onClick:()=>t(!e),children:e?`Hide Portal`:`Show Portal`}),(0,h.jsx)(f,{children:e&&(0,h.jsx)(`div`,{className:`fixed left-1/2 top-20 z-[100] -translate-x-1/2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-2xl`,children:`I am rendered at the end of document.body!`})})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div className="relative overflow-hidden rounded-xl border bg-muted/20 p-10">
        <Typography variant="body2" className="mb-4">
          This container has <code>overflow: hidden</code>. Click the button to
          see the portal in action.
        </Typography>
        <Button onClick={() => setShow(!show)}>
          {show ? "Hide Portal" : "Show Portal"}
        </Button>

        <Portal>
          {show && <div className="fixed left-1/2 top-20 z-[100] -translate-x-1/2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-2xl">
              I am rendered at the end of document.body!
            </div>}
        </Portal>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};