import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,At as r,E as i,Et as a,Ft as o,Mt as s,Ot as c,X as l,et as u,it as d,k as f,kt as p,ln as m,r as h,s as g,u as _}from"./iframe-By8sOsRq.js";import{i as v,r as y}from"./altrugenix-button-BIia6M8K.js";var b,x,S,C=e((()=>{b=t(m(),1),h(),s(),y(),a(),x=o(),S=({icon:e=(0,x.jsx)(n,{className:`h-6 w-6`}),openIcon:t=(0,x.jsx)(g,{className:`h-6 w-6`}),actions:i,direction:a=`up`,className:o})=>{let[s,l]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:r(`relative inline-flex items-center justify-center`,o),children:[(0,x.jsx)(v,{size:`lg`,radius:`full`,onClick:()=>l(!s),className:r(`h-14 w-14 shadow-xl transition-transform duration-200`,s&&`rotate-0`),children:s?t:e}),(0,x.jsx)(p,{children:s&&(0,x.jsx)(c.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:r(`absolute flex items-center gap-3`,{up:`flex-col-reverse bottom-full mb-3`,down:`flex-col top-full mt-3`,left:`flex-row-reverse right-full mr-3`,right:`flex-row left-full ml-3`}[a]),children:i.map((e,t)=>(0,x.jsxs)(`div`,{className:`group relative flex items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`bg-muted text-muted-foreground invisible absolute right-full mr-2 scale-75 rounded px-2 py-1 text-xs font-bold whitespace-nowrap opacity-0 transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100`,children:e.label}),(0,x.jsx)(v,{size:`md`,radius:`full`,variant:`secondary`,onClick:()=>{e.onClick(),l(!1)},className:`shadow-md hover:shadow-lg`,children:e.icon})]},t))})})]})},S.displayName=`SpeedDial`})),w,T,E,D,O;e((()=>{C(),h(),w=o(),T={title:`UI/SpeedDial`,component:S,tags:[`autodocs`],decorators:[e=>(0,w.jsx)(`div`,{className:`flex h-[400px] items-end justify-center pb-10`,children:(0,w.jsx)(e,{})})]},E={args:{actions:[{icon:(0,w.jsx)(d,{className:`h-5 w-5`}),label:`Copy`,onClick:()=>alert(`Copied!`)},{icon:(0,w.jsx)(f,{className:`h-5 w-5`}),label:`Print`,onClick:()=>alert(`Printing...`)},{icon:(0,w.jsx)(i,{className:`h-5 w-5`}),label:`Share`,onClick:()=>alert(`Sharing...`)}]}},D={args:{direction:`right`,actions:[{icon:(0,w.jsx)(u,{className:`h-5 w-5`}),label:`Document`,onClick:()=>{}},{icon:(0,w.jsx)(l,{className:`h-5 w-5`}),label:`Image`,onClick:()=>{}},{icon:(0,w.jsx)(_,{className:`h-5 w-5`}),label:`Video`,onClick:()=>{}}]}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      icon: <Copy className="h-5 w-5" />,
      label: "Copy",
      onClick: () => alert("Copied!")
    }, {
      icon: <Printer className="h-5 w-5" />,
      label: "Print",
      onClick: () => alert("Printing...")
    }, {
      icon: <Share2 className="h-5 w-5" />,
      label: "Share",
      onClick: () => alert("Sharing...")
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    actions: [{
      icon: <FileText className="h-5 w-5" />,
      label: "Document",
      onClick: () => {}
    }, {
      icon: <ImageIcon className="h-5 w-5" />,
      label: "Image",
      onClick: () => {}
    }, {
      icon: <Video className="h-5 w-5" />,
      label: "Video",
      onClick: () => {}
    }]
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`MediaActions`]}))();export{E as Default,D as MediaActions,O as __namedExportsOrder,T as default};