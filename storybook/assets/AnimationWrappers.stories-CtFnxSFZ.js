import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Mt as r,Nt as i,Pt as a,cn as o}from"./iframe-CAjx62e_.js";var s,c,l,u=e((()=>{s=t(o(),1),n(),c=a(),l=s.forwardRef(({in:e=!0,timeout:t=300,children:n,...a},o)=>(0,c.jsx)(i,{children:e&&(0,c.jsx)(r.div,{ref:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:t/1e3},...a,children:n})})),l.displayName=`Fade`,l.__docgenInfo={description:``,methods:[],displayName:`Fade`,props:{in:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}}},composes:[`Omit`]}})),d,f,p,m=e((()=>{d=t(o(),1),n(),f=a(),p=d.forwardRef(({in:e=!0,timeout:t=300,origin:n=`center`,children:a,...o},s)=>(0,f.jsx)(i,{children:e&&(0,f.jsx)(r.div,{ref:s,style:{transformOrigin:n},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:t/1e3,type:`spring`,bounce:.1},...o,children:a})})),p.displayName=`Grow`,p.__docgenInfo={description:``,methods:[],displayName:`Grow`,props:{in:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}},origin:{required:!1,tsType:{name:`union`,raw:`"center" | "top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"center"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"center"`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v=e((()=>{h=t(o(),1),n(),g=a(),_=h.forwardRef(({in:e=!0,timeout:t=300,children:n,...a},o)=>(0,g.jsx)(i,{children:e&&(0,g.jsx)(r.div,{ref:o,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{duration:t/1e3},...a,children:n})})),_.displayName=`Zoom`,_.__docgenInfo={description:``,methods:[],displayName:`Zoom`,props:{in:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}}},composes:[`Omit`]}})),y,b,x,S,C=e((()=>{y=t(o(),1),n(),b=a(),x={up:{y:100,x:0},down:{y:-100,x:0},left:{x:100,y:0},right:{x:-100,y:0}},S=y.forwardRef(({in:e=!0,timeout:t=300,direction:n=`up`,children:a,...o},s)=>(0,b.jsx)(i,{children:e&&(0,b.jsx)(r.div,{ref:s,initial:{opacity:0,...x[n]},animate:{opacity:1,x:0,y:0},exit:{opacity:0,...x[n]},transition:{duration:t/1e3},...o,children:a})})),S.displayName=`Slide`,S.__docgenInfo={description:``,methods:[],displayName:`Slide`,props:{in:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"up" | "down" | "left" | "right"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"up"`,computed:!1}}},composes:[`Omit`]}})),w,T,E,D=e((()=>{w=t(o(),1),n(),T=a(),E=w.forwardRef(({in:e=!0,timeout:t=300,children:n,...a},o)=>(0,T.jsx)(i,{children:e&&(0,T.jsx)(r.div,{ref:o,initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:t/1e3},style:{overflow:`hidden`},...a,children:n})})),E.displayName=`Collapse`,E.__docgenInfo={description:``,methods:[],displayName:`Collapse`,props:{in:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`300`,computed:!1}}},composes:[`Omit`]}})),O=e((()=>{u(),m(),v(),C(),D()})),k,A,j,M,N,P,F,I,L,R;e((()=>{k=t(o(),1),O(),A=a(),j={title:`Utilities/AnimationWrappers`,tags:[`autodocs`]},M=()=>(0,A.jsx)(`div`,{className:`rounded bg-primary p-8 text-center font-bold text-primary-foreground shadow-lg`,children:`Animated Element`}),N={render:()=>{let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{className:`space-y-4`,children:[(0,A.jsx)(`button`,{className:`rounded bg-secondary px-4 py-2 text-secondary-foreground`,onClick:()=>t(!e),children:`Toggle Fade`}),(0,A.jsx)(l,{in:e,children:(0,A.jsx)(M,{})})]})}},P={render:()=>{let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{className:`space-y-4`,children:[(0,A.jsx)(`button`,{className:`rounded bg-secondary px-4 py-2 text-secondary-foreground`,onClick:()=>t(!e),children:`Toggle Grow`}),(0,A.jsx)(p,{in:e,children:(0,A.jsx)(M,{})})]})}},F={render:()=>{let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{className:`space-y-4`,children:[(0,A.jsx)(`button`,{className:`rounded bg-secondary px-4 py-2 text-secondary-foreground`,onClick:()=>t(!e),children:`Toggle Slide (up)`}),(0,A.jsx)(S,{in:e,direction:`up`,children:(0,A.jsx)(M,{})})]})}},I={render:()=>{let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{className:`space-y-4`,children:[(0,A.jsx)(`button`,{className:`rounded bg-secondary px-4 py-2 text-secondary-foreground`,onClick:()=>t(!e),children:`Toggle Zoom`}),(0,A.jsx)(_,{in:e,children:(0,A.jsx)(M,{})})]})}},L={render:()=>{let[e,t]=(0,k.useState)(!0);return(0,A.jsxs)(`div`,{className:`space-y-4`,children:[(0,A.jsx)(`button`,{className:`rounded bg-secondary px-4 py-2 text-secondary-foreground`,onClick:()=>t(!e),children:`Toggle Collapse`}),(0,A.jsx)(E,{in:e,children:(0,A.jsx)(M,{})})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [inProp, setInProp] = useState(true);
    return <div className="space-y-4">
        <button className="rounded bg-secondary px-4 py-2 text-secondary-foreground" onClick={() => setInProp(!inProp)}>
          Toggle Fade
        </button>
        <Fade in={inProp}>
          <DemoBox />
        </Fade>
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [inProp, setInProp] = useState(true);
    return <div className="space-y-4">
        <button className="rounded bg-secondary px-4 py-2 text-secondary-foreground" onClick={() => setInProp(!inProp)}>
          Toggle Grow
        </button>
        <Grow in={inProp}>
          <DemoBox />
        </Grow>
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [inProp, setInProp] = useState(true);
    return <div className="space-y-4">
        <button className="rounded bg-secondary px-4 py-2 text-secondary-foreground" onClick={() => setInProp(!inProp)}>
          Toggle Slide (up)
        </button>
        <Slide in={inProp} direction="up">
          <DemoBox />
        </Slide>
      </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [inProp, setInProp] = useState(true);
    return <div className="space-y-4">
        <button className="rounded bg-secondary px-4 py-2 text-secondary-foreground" onClick={() => setInProp(!inProp)}>
          Toggle Zoom
        </button>
        <Zoom in={inProp}>
          <DemoBox />
        </Zoom>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [inProp, setInProp] = useState(true);
    return <div className="space-y-4">
        <button className="rounded bg-secondary px-4 py-2 text-secondary-foreground" onClick={() => setInProp(!inProp)}>
          Toggle Collapse
        </button>
        <Collapse in={inProp}>
          <DemoBox />
        </Collapse>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R=[`FadeDemo`,`GrowDemo`,`SlideDemo`,`ZoomDemo`,`CollapseDemo`]}))();export{L as CollapseDemo,N as FadeDemo,P as GrowDemo,F as SlideDemo,I as ZoomDemo,R as __namedExportsOrder,j as default};