import{n as e}from"./chunk-jRWAZmH_.js";import{At as t,Et as n,Ft as r,Mt as i,Ot as a,ln as o}from"./iframe-By8sOsRq.js";var s,c,l=e((()=>{o(),n(),i(),s=r(),c=({children:e,direction:n=`left`,pauseOnHover:r=!0,speed:i=40,className:o,gap:c=`2rem`,vertical:l=!1})=>(0,s.jsx)(`div`,{className:t(`group flex overflow-hidden`,l?`h-full flex-col`:`w-full flex-row`,o),style:{gap:c},children:[...[,,]].map((o,u)=>(0,s.jsx)(a.div,{animate:{[l?`y`:`x`]:n===`left`&&!l?[`0%`,`-100%`]:n===`right`&&!l?[`-100%`,`0%`]:n===`left`&&l?[`0%`,`-100%`]:[`-100%`,`0%`]},transition:{duration:i,repeat:1/0,ease:`linear`},className:t(`flex shrink-0 items-center justify-around`,l?`min-h-full flex-col`:`min-w-full flex-row`,r&&`group-hover:[animation-play-state:paused]`),style:{gap:c},children:e},u))}),c.displayName=`Marquee`})),u,d,f,p,m,h,g;e((()=>{l(),u=r(),d={title:`Components/Layout/Marquee`,component:c,parameters:{layout:`fullscreen`},tags:[`autodocs`]},f=[`Google`,`Microsoft`,`Amazon`,`Apple`,`Netflix`,`Meta`,`Tesla`,`Adobe`,`Logitech`,`Intel`,`NVIDIA`,`Advanced Micro Devices`],p={args:{speed:30,children:(0,u.jsx)(u.Fragment,{children:f.map(e=>(0,u.jsx)(`div`,{className:`mx-8 text-2xl font-bold whitespace-nowrap opacity-30 transition-opacity hover:opacity-100`,children:e},e))})}},m={args:{direction:`right`,speed:60,children:(0,u.jsx)(u.Fragment,{children:f.map(e=>(0,u.jsx)(`div`,{className:`text-primary mx-8 text-3xl font-black tracking-widest whitespace-nowrap uppercase italic opacity-20`,children:e},e))})}},h={decorators:[e=>(0,u.jsx)(`div`,{className:`flex h-[400px] items-center justify-center bg-slate-50`,children:(0,u.jsx)(e,{})})],args:{vertical:!0,speed:20,className:`h-full justify-center w-fit mx-auto border-x border-slate-200 px-4`,children:(0,u.jsx)(u.Fragment,{children:f.slice(0,6).map(e=>(0,u.jsx)(`div`,{className:`py-8 text-xl font-bold opacity-40`,children:e},e))})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 30,
    children: <>
        {logos.map(logo => <div key={logo} className="mx-8 text-2xl font-bold whitespace-nowrap opacity-30 transition-opacity hover:opacity-100">
            {logo}
          </div>)}
      </>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    speed: 60,
    children: <>
        {logos.map(logo => <div key={logo} className="text-primary mx-8 text-3xl font-black tracking-widest whitespace-nowrap uppercase italic opacity-20">
            {logo}
          </div>)}
      </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="flex h-[400px] items-center justify-center bg-slate-50">
        <Story />
      </div>],
  args: {
    vertical: true,
    speed: 20,
    className: "h-full justify-center w-fit mx-auto border-x border-slate-200 px-4",
    children: <>
        {logos.slice(0, 6).map(logo => <div key={logo} className="py-8 text-xl font-bold opacity-40">
            {logo}
          </div>)}
      </>
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SlowRight`,`Vertical`]}))();export{p as Default,m as SlowRight,h as Vertical,g as __namedExportsOrder,d as default};