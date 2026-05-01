import{n as e}from"./chunk-jRWAZmH_.js";import{Ft as t,Ht as n,Lt as r,Nt as i,gn as a,zt as o}from"./iframe-coe0kFk0.js";var s,c,l=e((()=>{a(),i(),r(),s=n(),c=({children:e,direction:n=`left`,pauseOnHover:r=!0,speed:i=40,className:a,gap:c=`2rem`,vertical:l=!1})=>(0,s.jsx)(`div`,{className:o(`group flex overflow-hidden`,l?`h-full flex-col`:`w-full flex-row`,a),style:{gap:c},children:[...[,,]].map((a,u)=>(0,s.jsx)(t.div,{animate:{[l?`y`:`x`]:n===`left`&&!l?[`0%`,`-100%`]:n===`right`&&!l?[`-100%`,`0%`]:n===`left`&&l?[`0%`,`-100%`]:[`-100%`,`0%`]},transition:{duration:i,repeat:1/0,ease:`linear`},className:o(`flex shrink-0 items-center justify-around`,l?`min-h-full flex-col`:`min-w-full flex-row`,r&&`group-hover:[animation-play-state:paused]`),style:{gap:c},children:e},u))}),c.displayName=`Marquee`,c.__docgenInfo={description:`Marquee - A smooth, infinitely scrolling container for logos, reviews, or tickers.`,methods:[],displayName:`Marquee`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to be scrolled. It's best to have enough components to fill the width.`},direction:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Direction of movement (default: "left")`,defaultValue:{value:`"left"`,computed:!1}},pauseOnHover:{required:!1,tsType:{name:`boolean`},description:`Whether to pause the animation when the user hovers over the container (default: true)`,defaultValue:{value:`true`,computed:!1}},speed:{required:!1,tsType:{name:`number`},description:`Speed of the animation in seconds (default: 40)`,defaultValue:{value:`40`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`},gap:{required:!1,tsType:{name:`string`},description:`The gap between duplicated content blocks (default: "2rem")`,defaultValue:{value:`"2rem"`,computed:!1}},vertical:{required:!1,tsType:{name:`boolean`},description:`Vertical scrolling instead of horizontal (default: false)`,defaultValue:{value:`false`,computed:!1}}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_,v;e((()=>{u(),d=n(),f={title:`Animation/Marquee`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`A continuously scrolling content strip with configurable direction, speed, and pause-on-hover. Automatically duplicates children to create a seamless infinite loop.`}}},argTypes:{direction:{control:`select`,options:[`left`,`right`],description:`Scrolling direction.`,table:{category:`Behavior`}},speed:{control:{type:`number`,min:5,max:100},description:`Animation duration in seconds (lower = faster).`,table:{category:`Behavior`}},pauseOnHover:{control:`boolean`,description:`Pause animation when the user hovers.`,table:{category:`Behavior`}},vertical:{control:`boolean`,description:`Scroll vertically instead of horizontally.`,table:{category:`Behavior`}},gap:{description:`CSS gap between duplicated content blocks.`,table:{category:`Appearance`}}}},p=({name:e})=>(0,d.jsx)(`div`,{className:`bg-card flex h-16 w-32 items-center justify-center rounded-lg border px-4 text-sm font-medium shadow-sm`,children:e}),m={render:()=>(0,d.jsxs)(c,{children:[(0,d.jsx)(p,{name:`React`}),(0,d.jsx)(p,{name:`Vue`}),(0,d.jsx)(p,{name:`Angular`}),(0,d.jsx)(p,{name:`Svelte`}),(0,d.jsx)(p,{name:`Next.js`}),(0,d.jsx)(p,{name:`Nuxt`})]})},h={render:()=>(0,d.jsxs)(c,{direction:`right`,children:[(0,d.jsx)(p,{name:`TypeScript`}),(0,d.jsx)(p,{name:`JavaScript`}),(0,d.jsx)(p,{name:`Python`}),(0,d.jsx)(p,{name:`Rust`}),(0,d.jsx)(p,{name:`Go`})]}),parameters:{docs:{description:{story:`Scrolling from left to right instead of the default right to left.`}}}},g={render:()=>(0,d.jsxs)(c,{speed:10,children:[(0,d.jsx)(p,{name:`Fast`}),(0,d.jsx)(p,{name:`Speed`}),(0,d.jsx)(p,{name:`Quick`}),(0,d.jsx)(p,{name:`Rapid`}),(0,d.jsx)(p,{name:`Swift`})]}),parameters:{docs:{description:{story:"A fast-scrolling marquee with `speed={10}` (10 second loop)."}}}},_={render:()=>(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsxs)(c,{speed:30,children:[(0,d.jsx)(p,{name:`React`}),(0,d.jsx)(p,{name:`TypeScript`}),(0,d.jsx)(p,{name:`Tailwind`}),(0,d.jsx)(p,{name:`Vite`}),(0,d.jsx)(p,{name:`Storybook`}),(0,d.jsx)(p,{name:`Vitest`})]}),(0,d.jsxs)(c,{speed:30,direction:`right`,children:[(0,d.jsx)(p,{name:`Node.js`}),(0,d.jsx)(p,{name:`Docker`}),(0,d.jsx)(p,{name:`Prisma`}),(0,d.jsx)(p,{name:`Redis`}),(0,d.jsx)(p,{name:`PostgreSQL`}),(0,d.jsx)(p,{name:`Firebase`})]})]}),parameters:{docs:{description:{story:`A dual-row marquee with opposite directions — a common hero section pattern for showcasing partner logos or tech stacks.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Marquee>
      <LogoCard name="React" />
      <LogoCard name="Vue" />
      <LogoCard name="Angular" />
      <LogoCard name="Svelte" />
      <LogoCard name="Next.js" />
      <LogoCard name="Nuxt" />
    </Marquee>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Marquee direction="right">
      <LogoCard name="TypeScript" />
      <LogoCard name="JavaScript" />
      <LogoCard name="Python" />
      <LogoCard name="Rust" />
      <LogoCard name="Go" />
    </Marquee>,
  parameters: {
    docs: {
      description: {
        story: "Scrolling from left to right instead of the default right to left."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Marquee speed={10}>
      <LogoCard name="Fast" />
      <LogoCard name="Speed" />
      <LogoCard name="Quick" />
      <LogoCard name="Rapid" />
      <LogoCard name="Swift" />
    </Marquee>,
  parameters: {
    docs: {
      description: {
        story: "A fast-scrolling marquee with \`speed={10}\` (10 second loop)."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Marquee speed={30}>
        <LogoCard name="React" />
        <LogoCard name="TypeScript" />
        <LogoCard name="Tailwind" />
        <LogoCard name="Vite" />
        <LogoCard name="Storybook" />
        <LogoCard name="Vitest" />
      </Marquee>
      <Marquee speed={30} direction="right">
        <LogoCard name="Node.js" />
        <LogoCard name="Docker" />
        <LogoCard name="Prisma" />
        <LogoCard name="Redis" />
        <LogoCard name="PostgreSQL" />
        <LogoCard name="Firebase" />
      </Marquee>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A dual-row marquee with opposite directions — a common hero section pattern for showcasing partner logos or tech stacks."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`ReverseDirection`,`Fast`,`TechLogos`]}))();export{m as Default,g as Fast,h as ReverseDirection,_ as TechLogos,v as __namedExportsOrder,f as default};