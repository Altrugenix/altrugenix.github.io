import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ft as n,Ht as r,Lt as i,Nt as a,Pt as o,gn as s,zt as c}from"./iframe-coe0kFk0.js";var l,u,d,f=e((()=>{l=t(s(),1),a(),i(),u=r(),d=({children:e,width:t=`fit-content`,once:r=!0,delay:i=.25,duration:a=.5,direction:s=`up`,className:d})=>{let f=(0,l.useRef)(null),p=o(f,{once:r}),m={hidden:{opacity:0,y:s===`up`?30:s===`down`?-30:0,x:s===`left`?30:s===`right`?-30:0},visible:{opacity:1,y:0,x:0,transition:{duration:a,delay:i,ease:[.25,.1,.25,1]}}};return(0,u.jsx)(`div`,{ref:f,className:c(`relative overflow-hidden`,d),style:{width:t},children:(0,u.jsx)(n.div,{variants:m,initial:`hidden`,animate:p?`visible`:`hidden`,children:e})})},d.displayName=`Reveal`,d.__docgenInfo={description:"Reveal - High-level wrapper for `framer-motion` to easily add entry animations\nto any component as it enters the viewport.",methods:[],displayName:`Reveal`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to be revealed`},width:{required:!1,tsType:{name:`union`,raw:`"fit-content" | "100%"`,elements:[{name:`literal`,value:`"fit-content"`},{name:`literal`,value:`"100%"`}]},description:`Width of the container (default: "fit-content")`,defaultValue:{value:`"fit-content"`,computed:!1}},once:{required:!1,tsType:{name:`boolean`},description:`Whether to only reveal once (default: true)`,defaultValue:{value:`true`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Delay before the reveal animation starts in seconds (default: 0.25)`,defaultValue:{value:`0.25`,computed:!1}},duration:{required:!1,tsType:{name:`number`},description:`Duration of the reveal animation in seconds (default: 0.5)`,defaultValue:{value:`0.5`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"up" | "down" | "left" | "right" | "none"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`},{name:`literal`,value:`"none"`}]},description:`Direction from which the element enters (default: "up")`,defaultValue:{value:`"up"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`}}}})),p=e((()=>{f()})),m,h,g,_,v,y;e((()=>{p(),m=r(),h={title:`Animation/Reveal`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:`A scroll-triggered animation wrapper powered by Framer Motion. Elements slide and fade into view when they enter the viewport. Supports four directional variants and customizable timing.`}}},argTypes:{direction:{control:`select`,options:[`up`,`down`,`left`,`right`,`none`],description:`Direction from which the element enters.`,table:{category:`Animation`}},delay:{control:{type:`number`,min:0,max:2,step:.1},description:`Delay in seconds before the animation starts.`,table:{category:`Animation`}},duration:{control:{type:`number`,min:.1,max:2,step:.1},description:`Duration of the animation in seconds.`,table:{category:`Animation`}},once:{control:`boolean`,description:`Whether the animation only plays once (vs. every time it enters viewport).`,table:{category:`Behavior`}},width:{control:`select`,options:[`fit-content`,`100%`],description:`Container width.`,table:{category:`Appearance`}}}},g={render:()=>(0,m.jsx)(d,{children:(0,m.jsxs)(`div`,{className:`bg-card rounded-lg border p-8 text-center`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-semibold`,children:`Hello World`}),(0,m.jsx)(`p`,{className:`text-muted-foreground mt-1 text-sm`,children:`This element revealed from below.`})]})})},_={render:()=>(0,m.jsx)(`div`,{className:`grid grid-cols-2 gap-8`,children:[`up`,`down`,`left`,`right`].map(e=>(0,m.jsx)(d,{direction:e,once:!1,children:(0,m.jsxs)(`div`,{className:`bg-card flex h-32 items-center justify-center rounded-lg border font-mono text-sm`,children:[`direction="`,e,`"`]})},e))}),parameters:{docs:{description:{story:"All four directional variants — scroll down to trigger the animations. Set `once={false}` so they replay on re-entry."}}}},v={render:()=>(0,m.jsx)(`div`,{className:`max-w-md space-y-4`,children:[`Feature 1: Lightning Fast`,`Feature 2: Fully Accessible`,`Feature 3: Dark Mode Ready`,`Feature 4: Type-Safe`].map((e,t)=>(0,m.jsx)(d,{delay:.1*t,children:(0,m.jsx)(`div`,{className:`bg-card rounded-lg border p-4`,children:(0,m.jsx)(`p`,{className:`text-sm font-medium`,children:e})})},e))}),parameters:{docs:{description:{story:`Staggered reveal — each item has an incrementally longer delay, creating a cascade effect.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Reveal>
      <div className="bg-card rounded-lg border p-8 text-center">
        <h3 className="text-lg font-semibold">Hello World</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          This element revealed from below.
        </p>
      </div>
    </Reveal>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8">
      {(["up", "down", "left", "right"] as const).map(dir => <Reveal key={dir} direction={dir} once={false}>
          <div className="bg-card flex h-32 items-center justify-center rounded-lg border font-mono text-sm">
            direction=&quot;{dir}&quot;
          </div>
        </Reveal>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All four directional variants — scroll down to trigger the animations. Set \`once={false}\` so they replay on re-entry."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">
      {["Feature 1: Lightning Fast", "Feature 2: Fully Accessible", "Feature 3: Dark Mode Ready", "Feature 4: Type-Safe"].map((feature, i) => <Reveal key={feature} delay={0.1 * i}>
          <div className="bg-card rounded-lg border p-4">
            <p className="text-sm font-medium">{feature}</p>
          </div>
        </Reveal>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Staggered reveal — each item has an incrementally longer delay, creating a cascade effect."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`AllDirections`,`StaggeredList`]}))();export{_ as AllDirections,g as Default,v as StaggeredList,y as __namedExportsOrder,h as default};