import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Mt as r,Nt as i,Pt as a,cn as o,i as s,r as c}from"./iframe-CAjx62e_.js";import{a as l,t as u}from"./button-WWkxm_3b.js";import{n as d,t as f}from"./circular-progress-pN2yFfzV.js";var p,m,h=e((()=>{o(),n(),s(),p=a(),m=({open:e,invisible:t=!1,className:n,children:a,...o})=>(0,p.jsx)(i,{children:e&&(0,p.jsx)(r.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:c(`fixed inset-0 z-[50] flex items-center justify-center bg-black/50 backdrop-blur-sm`,t&&`bg-transparent backdrop-blur-none`,n),...o,children:a})}),m.displayName=`Backdrop`,m.__docgenInfo={description:`A standalone utility component for dimming the background behind active elements like Modals or Drawers.`,methods:[],displayName:`Backdrop`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Whether the backdrop is visible`},invisible:{required:!1,tsType:{name:`boolean`},description:`Whether the backdrop is transparent`,defaultValue:{value:`false`,computed:!1}}}}})),g=e((()=>{h()})),_,v,y,b,x;e((()=>{g(),_=t(o(),1),u(),f(),v=a(),y={title:`UI/Backdrop`,component:m,tags:[`autodocs`]},b={render:()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{className:`p-10`,children:[(0,v.jsx)(l,{onClick:()=>t(!0),children:`Show Backdrop`}),(0,v.jsx)(m,{open:e,onClick:()=>t(!1),children:(0,v.jsxs)(`div`,{className:`text-center text-white`,children:[(0,v.jsx)(d,{indeterminate:!0,className:`mb-4 text-white`}),(0,v.jsx)(`p`,{className:`font-bold`,children:`Loading... Click anywhere to close.`})]})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-10">
        <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <div className="text-center text-white">
            <CircularProgress indeterminate className="mb-4 text-white" />
            <p className="font-bold">Loading... Click anywhere to close.</p>
          </div>
        </Backdrop>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};