import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ft as n,Ht as r,It as i,Lt as a,Nt as o,gn as s,r as c,vt as l,yt as u,zt as d}from"./iframe-zfMobaDd.js";import{a as f,t as p}from"./src-DjwHjl2X.js";var m,h,g,_=e((()=>{m=t(s(),1),o(),c(),a(),p(),h=r(),g=({items:e,autoPlayInterval:t=5e3,showArrows:r=!0,showDots:a=!0,className:o,itemClassName:s})=>{let[c,p]=(0,m.useState)(0),[g,_]=(0,m.useState)(0),v=(0,m.useCallback)(()=>{e.length<=1||(_(1),p(t=>(t+1)%e.length))},[e.length]),y=(0,m.useCallback)(()=>{e.length<=1||(_(-1),p(t=>(t-1+e.length)%e.length))},[e.length]);return(0,m.useEffect)(()=>{if(t<=0||e.length<=1)return;let n=setInterval(v,t);return()=>clearInterval(n)},[v,t,e.length]),!e||e.length===0?null:(0,h.jsxs)(`div`,{className:d(`group relative h-full w-full overflow-hidden rounded-xl`,o),children:[(0,h.jsx)(i,{initial:!1,custom:g,children:(0,h.jsx)(n.div,{custom:g,variants:{enter:e=>({x:e>0?`100%`:`-100%`,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?`100%`:`-100%`,opacity:0})},initial:`enter`,animate:`center`,exit:`exit`,transition:{x:{type:`spring`,stiffness:300,damping:30},opacity:{duration:.2}},className:d(`absolute flex h-full w-full items-center justify-center`,s),children:e[c]},c)}),r&&e.length>1&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{variant:`outline`,size:`icon`,className:`absolute top-1/2 left-4 z-10 -translate-y-1/2 scale-90 rounded-full border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:scale-100 hover:bg-black/40 dark:bg-white/10 dark:hover:bg-white/20`,onClick:e=>{e.stopPropagation(),y()},"aria-label":`Previous slide`,children:(0,h.jsx)(u,{className:`h-6 w-6`})}),(0,h.jsx)(f,{variant:`outline`,size:`icon`,className:`absolute top-1/2 right-4 z-10 -translate-y-1/2 scale-90 rounded-full border-white/20 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 hover:scale-100 hover:bg-black/40 dark:bg-white/10 dark:hover:bg-white/20`,onClick:e=>{e.stopPropagation(),v()},"aria-label":`Next slide`,children:(0,h.jsx)(l,{className:`h-6 w-6`})})]}),a&&e.length>1&&(0,h.jsx)(`div`,{className:`absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2`,children:e.map((e,t)=>(0,h.jsx)(`button`,{className:d(`h-2 w-2 rounded-full transition-all duration-300`,t===c?`shadow-glow w-6 bg-white`:`bg-white/40 hover:bg-white/60`),onClick:e=>{e.stopPropagation(),_(t>c?1:-1),p(t)},"aria-label":`Go to slide ${t+1}`},t))})]})},g.__docgenInfo={description:`A premium Carousel component with smooth Framer Motion transitions,
auto-play support, and dot indicators.`,methods:[],displayName:`Carousel`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:`Items to display (images or any components)`},autoPlayInterval:{required:!1,tsType:{name:`number`},description:`Auto-play interval in ms (default: 5000)`,defaultValue:{value:`5000`,computed:!1}},showArrows:{required:!1,tsType:{name:`boolean`},description:`Whether to show navigation buttons`,defaultValue:{value:`true`,computed:!1}},showDots:{required:!1,tsType:{name:`boolean`},description:`Whether to show dot indicators`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class for the items container`},itemClassName:{required:!1,tsType:{name:`string`},description:`Custom class for the item wrapper`}}}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E;e((()=>{v(),y=r(),b=[(0,y.jsx)(`div`,{className:`flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white`,children:`Slide 1 — Welcome`},`1`),(0,y.jsx)(`div`,{className:`flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-2xl font-bold text-white`,children:`Slide 2 — Features`},`2`),(0,y.jsx)(`div`,{className:`flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-2xl font-bold text-white`,children:`Slide 3 — Pricing`},`3`),(0,y.jsx)(`div`,{className:`flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-2xl font-bold text-white`,children:`Slide 4 — Get Started`},`4`)],x={title:`Data Display/Carousel`,component:g,tags:[`autodocs`],decorators:[e=>(0,y.jsx)(`div`,{className:`max-w-[700px] p-6`,children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:`A smooth-sliding carousel with Framer Motion transitions, auto-play support, navigation arrows, and dot indicators. Supports any React nodes as slide content.`}}},argTypes:{items:{description:`Array of React nodes to display as slides.`,table:{category:`Data`}},autoPlayInterval:{control:{type:`number`,min:1e3,max:1e4},description:`Auto-play interval in milliseconds (default: 5000).`,table:{category:`Behavior`}},showArrows:{control:`boolean`,description:`Whether to show previous/next navigation arrows.`,table:{category:`Appearance`}},showDots:{control:`boolean`,description:`Whether to show dot indicators.`,table:{category:`Appearance`}}}},S={args:{items:b}},C={args:{items:b,showArrows:!1},parameters:{docs:{description:{story:`Navigation arrows hidden — only dots are used for navigation.`}}}},w={args:{items:b,showDots:!1},parameters:{docs:{description:{story:`Dot indicators hidden — only arrows are used for navigation.`}}}},T={args:{items:b,autoPlayInterval:2e3},parameters:{docs:{description:{story:`Fast auto-play cycling every 2 seconds.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: slides
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: slides,
    showArrows: false
  },
  parameters: {
    docs: {
      description: {
        story: "Navigation arrows hidden — only dots are used for navigation."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: slides,
    showDots: false
  },
  parameters: {
    docs: {
      description: {
        story: "Dot indicators hidden — only arrows are used for navigation."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: slides,
    autoPlayInterval: 2000
  },
  parameters: {
    docs: {
      description: {
        story: "Fast auto-play cycling every 2 seconds."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`NoArrows`,`NoDots`,`FastAutoPlay`]}))();export{S as Default,T as FastAutoPlay,C as NoArrows,w as NoDots,E as __namedExportsOrder,x as default};