import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{At as n,Mt as r,Pt as i,cn as a,i as o,jt as s,r as c}from"./iframe-CAjx62e_.js";var l,u,d,f=e((()=>{l=t(a(),1),n(),o(),u=i(),d=({children:e,width:t=`fit-content`,once:n=!0,delay:i=.25,duration:a=.5,direction:o=`up`,className:d})=>{let f=(0,l.useRef)(null),p=s(f,{once:n}),m={hidden:{opacity:0,y:o===`up`?30:o===`down`?-30:0,x:o===`left`?30:o===`right`?-30:0},visible:{opacity:1,y:0,x:0,transition:{duration:a,delay:i,ease:[.25,.1,.25,1]}}};return(0,u.jsx)(`div`,{ref:f,className:c(`relative overflow-hidden`,d),style:{width:t},children:(0,u.jsx)(r.div,{variants:m,initial:`hidden`,animate:p?`visible`:`hidden`,children:e})})},d.displayName=`Reveal`,d.__docgenInfo={description:"Reveal - High-level wrapper for `framer-motion` to easily add entry animations\nto any component as it enters the viewport.",methods:[],displayName:`Reveal`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to be revealed`},width:{required:!1,tsType:{name:`union`,raw:`"fit-content" | "100%"`,elements:[{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"100%"`}]},description:`Width of the container (default: "fit-content")`,defaultValue:{value:`"fit-content"`,computed:!1}},once:{required:!1,tsType:{name:`boolean`},description:`Whether to only reveal once (default: true)`,defaultValue:{value:`true`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Delay before the reveal animation starts in seconds (default: 0.25)`,defaultValue:{value:`0.25`,computed:!1}},duration:{required:!1,tsType:{name:`number`},description:`Duration of the reveal animation in seconds (default: 0.5)`,defaultValue:{value:`0.5`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"up" | "down" | "left" | "right" | "none"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`},{name:`literal`,value:`"none"`}]},description:`Direction from which the element enters (default: "up")`,defaultValue:{value:`"up"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`}}}})),p,m,h,g;e((()=>{f(),p=i(),m={title:`Components/Effects/Reveal`,component:d,tags:[`autodocs`]},h={render:()=>(0,p.jsxs)(`div`,{className:`mx-auto max-w-2xl space-y-[40vh] px-8 py-[20vh]`,children:[(0,p.jsx)(d,{direction:`up`,delay:.1,children:(0,p.jsx)(`h1`,{className:`text-4xl font-bold`,children:`Scroll Down to Reveal ✨`})}),(0,p.jsx)(d,{direction:`left`,delay:.2,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-blue-500 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from the left!`}),(0,p.jsx)(`p`,{className:`opacity-90`,children:`This component uses a premium cubic-bezier easing for a smooth entrance.`})]})}),(0,p.jsx)(d,{direction:`right`,delay:.3,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-purple-500 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from the right!`}),(0,p.jsx)(`p`,{className:`opacity-90`,children:`Notice how the movement is subtle and professional.`})]})}),(0,p.jsx)(d,{direction:`up`,delay:.4,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-slate-900 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from below!`}),(0,p.jsx)(`p`,{className:`underline decoration-indigo-500 decoration-2 underline-offset-4 opacity-90`,children:`Perfect for hero sections and feature lists.`})]})}),(0,p.jsx)(d,{direction:`none`,delay:.5,duration:1,children:(0,p.jsxs)(`div`,{className:`rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold text-slate-400`,children:`Fade In Only`}),(0,p.jsx)(`p`,{className:`italic text-slate-400`,children:`No movement, just a smooth fade.`})]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-2xl space-y-[40vh] px-8 py-[20vh]">
      <Reveal direction="up" delay={0.1}>
        <h1 className="text-4xl font-bold">Scroll Down to Reveal ✨</h1>
      </Reveal>

      <Reveal direction="left" delay={0.2} duration={0.8}>
        <div className="rounded-2xl bg-blue-500 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from the left!</h3>
          <p className="opacity-90">
            This component uses a premium cubic-bezier easing for a smooth
            entrance.
          </p>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.3} duration={0.8}>
        <div className="rounded-2xl bg-purple-500 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from the right!</h3>
          <p className="opacity-90">
            Notice how the movement is subtle and professional.
          </p>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.4} duration={0.8}>
        <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from below!</h3>
          <p className="underline decoration-indigo-500 decoration-2 underline-offset-4 opacity-90">
            Perfect for hero sections and feature lists.
          </p>
        </div>
      </Reveal>

      <Reveal direction="none" delay={0.5} duration={1}>
        <div className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-slate-400">
            Fade In Only
          </h3>
          <p className="italic text-slate-400">
            No movement, just a smooth fade.
          </p>
        </div>
      </Reveal>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Demo`]}))();export{h as Demo,g as __namedExportsOrder,m as default};