import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{A as n,At as r,Mt as i,N as a,Nt as o,P as s,Pt as c,cn as l,ct as u,d,et as f,i as p,it as m,m as h,r as g,s as _}from"./iframe-CAjx62e_.js";import{i as v,t as y}from"./button-WWkxm_3b.js";var b,x,S,C=e((()=>{b=t(l(),1),_(),p(),y(),r(),x=c(),S=({icon:e=(0,x.jsx)(s,{className:`h-6 w-6`}),openIcon:t=(0,x.jsx)(d,{className:`h-6 w-6`}),actions:n,direction:r=`up`,className:a})=>{let[c,l]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:g(`relative inline-flex items-center justify-center`,a),children:[(0,x.jsx)(v,{size:`lg`,radius:`full`,onClick:()=>l(!c),className:g(`h-14 w-14 shadow-xl transition-transform duration-200`,c&&`rotate-0`),children:c?t:e}),(0,x.jsx)(o,{children:c&&(0,x.jsx)(i.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:g(`absolute flex items-center gap-3`,{up:`flex-col-reverse bottom-full mb-3`,down:`flex-col top-full mt-3`,left:`flex-row-reverse right-full mr-3`,right:`flex-row left-full ml-3`}[r]),children:n.map((e,t)=>(0,x.jsxs)(`div`,{className:`group relative flex items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`invisible absolute right-full mr-2 scale-75 whitespace-nowrap rounded bg-muted px-2 py-1 text-xs font-bold text-muted-foreground opacity-0 transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100`,children:e.label}),(0,x.jsx)(v,{size:`md`,radius:`full`,variant:`secondary`,onClick:()=>{e.onClick(),l(!1)},className:`shadow-md hover:shadow-lg`,children:e.icon})]},t))})})]})},S.displayName=`SpeedDial`,S.__docgenInfo={description:`A floating action button that displays a series of sub-actions when clicked.`,methods:[],displayName:`SpeedDial`,props:{icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The main icon when closed`,defaultValue:{value:`<Plus className="h-6 w-6" />`,computed:!1}},openIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The main icon when open`,defaultValue:{value:`<X className="h-6 w-6" />`,computed:!1}},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`SpeedDialAction`}],raw:`SpeedDialAction[]`},description:`List of sub-actions`},direction:{required:!1,tsType:{name:`union`,raw:`"up" | "down" | "left" | "right"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Direction of expansion`,defaultValue:{value:`"up"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),w=e((()=>{C()})),T,E,D,O,k;e((()=>{w(),_(),T=c(),E={title:`UI/SpeedDial`,component:S,tags:[`autodocs`],decorators:[e=>(0,T.jsx)(`div`,{className:`flex h-[400px] items-end justify-center pb-10`,children:(0,T.jsx)(e,{})})]},D={args:{actions:[{icon:(0,T.jsx)(u,{className:`h-5 w-5`}),label:`Copy`,onClick:()=>alert(`Copied!`)},{icon:(0,T.jsx)(a,{className:`h-5 w-5`}),label:`Print`,onClick:()=>alert(`Printing...`)},{icon:(0,T.jsx)(n,{className:`h-5 w-5`}),label:`Share`,onClick:()=>alert(`Sharing...`)}]}},O={args:{direction:`right`,actions:[{icon:(0,T.jsx)(m,{className:`h-5 w-5`}),label:`Document`,onClick:()=>{}},{icon:(0,T.jsx)(f,{className:`h-5 w-5`}),label:`Image`,onClick:()=>{}},{icon:(0,T.jsx)(h,{className:`h-5 w-5`}),label:`Video`,onClick:()=>{}}]}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`MediaActions`]}))();export{D as Default,O as MediaActions,k as __namedExportsOrder,E as default};