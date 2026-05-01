import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Dt as r,Et as i,Ft as a,Mt as o,Ot as s,ln as c}from"./iframe-By8sOsRq.js";var l,u,d,f=e((()=>{l=t(c(),1),i(),o(),u=a(),d=({children:e,width:t=`fit-content`,once:i=!0,delay:a=.25,duration:o=.5,direction:c=`up`,className:d})=>{let f=(0,l.useRef)(null),p=r(f,{once:i}),m={hidden:{opacity:0,y:c===`up`?30:c===`down`?-30:0,x:c===`left`?30:c===`right`?-30:0},visible:{opacity:1,y:0,x:0,transition:{duration:o,delay:a,ease:[.25,.1,.25,1]}}};return(0,u.jsx)(`div`,{ref:f,className:n(`relative overflow-hidden`,d),style:{width:t},children:(0,u.jsx)(s.div,{variants:m,initial:`hidden`,animate:p?`visible`:`hidden`,children:e})})},d.displayName=`Reveal`})),p,m,h,g;e((()=>{f(),p=a(),m={title:`Components/Effects/Reveal`,component:d,tags:[`autodocs`]},h={render:()=>(0,p.jsxs)(`div`,{className:`mx-auto max-w-2xl space-y-[40vh] px-8 py-[20vh]`,children:[(0,p.jsx)(d,{direction:`up`,delay:.1,children:(0,p.jsx)(`h1`,{className:`text-4xl font-bold`,children:`Scroll Down to Reveal ✨`})}),(0,p.jsx)(d,{direction:`left`,delay:.2,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-blue-500 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from the left!`}),(0,p.jsx)(`p`,{className:`opacity-90`,children:`This component uses a premium cubic-bezier easing for a smooth entrance.`})]})}),(0,p.jsx)(d,{direction:`right`,delay:.3,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-purple-500 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from the right!`}),(0,p.jsx)(`p`,{className:`opacity-90`,children:`Notice how the movement is subtle and professional.`})]})}),(0,p.jsx)(d,{direction:`up`,delay:.4,duration:.8,children:(0,p.jsxs)(`div`,{className:`rounded-2xl bg-slate-900 p-8 text-white shadow-xl`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold`,children:`Entering from below!`}),(0,p.jsx)(`p`,{className:`underline decoration-indigo-500 decoration-2 underline-offset-4 opacity-90`,children:`Perfect for hero sections and feature lists.`})]})}),(0,p.jsx)(d,{direction:`none`,delay:.5,duration:1,children:(0,p.jsxs)(`div`,{className:`rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center`,children:[(0,p.jsx)(`h3`,{className:`mb-2 text-xl font-bold text-slate-400`,children:`Fade In Only`}),(0,p.jsx)(`p`,{className:`text-slate-400 italic`,children:`No movement, just a smooth fade.`})]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
          <p className="text-slate-400 italic">
            No movement, just a smooth fade.
          </p>
        </div>
      </Reveal>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Demo`]}))();export{h as Demo,g as __namedExportsOrder,m as default};