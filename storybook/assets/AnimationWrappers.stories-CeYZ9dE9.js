import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,gn as r}from"./iframe-coe0kFk0.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./src-Dw9BL9DE.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{u=t(r(),1),l(),d=n(),f={title:`Utilities/AnimationWrappers`,tags:[`autodocs`],parameters:{docs:{description:{component:`A collection of easy-to-use animation wrapper components powered by Framer Motion. Wrap any component to animate its entrance/exit.`}}}},p=()=>(0,d.jsx)(`div`,{className:`bg-primary text-primary-foreground flex h-32 w-32 items-center justify-center rounded-xl p-4 text-center font-bold shadow-lg`,children:`Animated Element`}),m=()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`button`,{className:`bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium`,onClick:()=>t(!e),children:`Toggle Fade`}),(0,d.jsx)(`div`,{className:`h-40`,children:(0,d.jsx)(s,{in:e,children:(0,d.jsx)(p,{})})})]})},h={render:()=>(0,d.jsx)(m,{}),parameters:{docs:{description:{story:`Fades an element in and out by animating opacity.`}}}},g=()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`button`,{className:`bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium`,onClick:()=>t(!e),children:`Toggle Grow`}),(0,d.jsx)(`div`,{className:`h-40`,children:(0,d.jsx)(i,{in:e,children:(0,d.jsx)(p,{})})})]})},_={render:()=>(0,d.jsx)(g,{}),parameters:{docs:{description:{story:`Grows an element out from its center by animating scale and opacity.`}}}},v=()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`bg-muted/10 space-y-4 overflow-hidden rounded-xl border p-4`,children:[(0,d.jsx)(`button`,{className:`bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium`,onClick:()=>t(!e),children:`Toggle Slide (up)`}),(0,d.jsx)(`div`,{className:`relative h-40`,children:(0,d.jsx)(c,{in:e,direction:`up`,children:(0,d.jsx)(p,{})})})]})},y={render:()=>(0,d.jsx)(v,{}),parameters:{docs:{description:{story:"Slides an element from the edge of its container. Supports `up`, `down`, `left`, `right` directions."}}}},b=()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`button`,{className:`bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium`,onClick:()=>t(!e),children:`Toggle Zoom`}),(0,d.jsx)(`div`,{className:`h-40`,children:(0,d.jsx)(a,{in:e,children:(0,d.jsx)(p,{})})})]})},x={render:()=>(0,d.jsx)(b,{}),parameters:{docs:{description:{story:`A bouncy scale animation.`}}}},S=()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`max-w-sm space-y-4`,children:[(0,d.jsx)(`button`,{className:`bg-secondary text-secondary-foreground w-full rounded-md px-4 py-2 font-medium`,onClick:()=>t(!e),children:`Toggle Collapse`}),(0,d.jsx)(o,{in:e,children:(0,d.jsx)(`div`,{className:`bg-card text-card-foreground rounded-xl border p-6 shadow-sm`,children:(0,d.jsx)(`p`,{children:`This content is inside a collapse wrapper. It animates its height from 0 to auto seamlessly.`})})})]})},C={render:()=>(0,d.jsx)(S,{}),parameters:{docs:{description:{story:`Animates an element's height. Crucial for accordions and expandable menus.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FadeDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: "Fades an element in and out by animating opacity."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <GrowDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: "Grows an element out from its center by animating scale and opacity."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SlideDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: "Slides an element from the edge of its container. Supports \`up\`, \`down\`, \`left\`, \`right\` directions."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ZoomDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: "A bouncy scale animation."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <CollapseDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: "Animates an element's height. Crucial for accordions and expandable menus."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`FadeDemo`,`GrowDemo`,`SlideDemo`,`ZoomDemo`,`CollapseDemo`]}))();export{C as CollapseDemo,h as FadeDemo,_ as GrowDemo,y as SlideDemo,x as ZoomDemo,w as __namedExportsOrder,f as default};