import{n as e}from"./chunk-zsgVPwQN.js";import{F as t,L as n,i as r,pt as i,r as a,z as o}from"./iframe-DM0JAH7r.js";var s,c,l=e((()=>{i(),t(),r(),s=o(),c=({children:e,direction:t=`left`,pauseOnHover:r=!0,speed:i=40,className:o,gap:c=`2rem`,vertical:l=!1})=>(0,s.jsx)(`div`,{className:a(`group flex overflow-hidden`,l?`h-full flex-col`:`w-full flex-row`,o),style:{gap:c},children:[...[,,]].map((o,u)=>(0,s.jsx)(n.div,{animate:{[l?`y`:`x`]:t===`left`&&!l?[`0%`,`-100%`]:t===`right`&&!l?[`-100%`,`0%`]:t===`left`&&l?[`0%`,`-100%`]:[`-100%`,`0%`]},transition:{duration:i,repeat:1/0,ease:`linear`},className:a(`flex shrink-0 items-center justify-around`,l?`min-h-full flex-col`:`min-w-full flex-row`,r&&`group-hover:[animation-play-state:paused]`),style:{gap:c},children:e},u))}),c.displayName=`Marquee`,c.__docgenInfo={description:`Marquee - A smooth, infinitely scrolling container for logos, reviews, or tickers.`,methods:[],displayName:`Marquee`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to be scrolled. It's best to have enough components to fill the width.`},direction:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Direction of movement (default: "left")`,defaultValue:{value:`"left"`,computed:!1}},pauseOnHover:{required:!1,tsType:{name:`boolean`},description:`Whether to pause the animation when the user hovers over the container (default: true)`,defaultValue:{value:`true`,computed:!1}},speed:{required:!1,tsType:{name:`number`},description:`Speed of the animation in seconds (default: 40)`,defaultValue:{value:`40`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`},gap:{required:!1,tsType:{name:`string`},description:`The gap between duplicated content blocks (default: "2rem")`,defaultValue:{value:`"2rem"`,computed:!1}},vertical:{required:!1,tsType:{name:`boolean`},description:`Vertical scrolling instead of horizontal (default: false)`,defaultValue:{value:`false`,computed:!1}}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_;e((()=>{u(),d=o(),f={title:`Components/Layout/Marquee`,component:c,parameters:{layout:`fullscreen`},tags:[`autodocs`]},p=[`Google`,`Microsoft`,`Amazon`,`Apple`,`Netflix`,`Meta`,`Tesla`,`Adobe`,`Logitech`,`Intel`,`NVIDIA`,`Advanced Micro Devices`],m={args:{speed:30,children:(0,d.jsx)(d.Fragment,{children:p.map(e=>(0,d.jsx)(`div`,{className:`mx-8 whitespace-nowrap text-2xl font-bold opacity-30 transition-opacity hover:opacity-100`,children:e},e))})}},h={args:{direction:`right`,speed:60,children:(0,d.jsx)(d.Fragment,{children:p.map(e=>(0,d.jsx)(`div`,{className:`mx-8 whitespace-nowrap text-3xl font-black uppercase italic tracking-widest text-primary opacity-20`,children:e},e))})}},g={decorators:[e=>(0,d.jsx)(`div`,{className:`flex h-[400px] items-center justify-center bg-slate-50`,children:(0,d.jsx)(e,{})})],args:{vertical:!0,speed:20,className:`h-full justify-center w-fit mx-auto border-x border-slate-200 px-4`,children:(0,d.jsx)(d.Fragment,{children:p.slice(0,6).map(e=>(0,d.jsx)(`div`,{className:`py-8 text-xl font-bold opacity-40`,children:e},e))})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 30,
    children: <>
        {logos.map(logo => <div key={logo} className="mx-8 whitespace-nowrap text-2xl font-bold opacity-30 transition-opacity hover:opacity-100">
            {logo}
          </div>)}
      </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "right",
    speed: 60,
    children: <>
        {logos.map(logo => <div key={logo} className="mx-8 whitespace-nowrap text-3xl font-black uppercase italic tracking-widest text-primary opacity-20">
            {logo}
          </div>)}
      </>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`SlowRight`,`Vertical`]}))();export{m as Default,h as SlowRight,g as Vertical,_ as __namedExportsOrder,f as default};