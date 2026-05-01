import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ft as n,Ht as r,It as i,Lt as a,Nt as o,gn as s,zt as c}from"./iframe-coe0kFk0.js";import{a as l,t as u}from"./src-CxQaJ0KN.js";import{n as d,t as f}from"./src-vS6N9XN7.js";import{n as p,t as m}from"./src-CQCRIOpb.js";var h,g,_=e((()=>{s(),o(),a(),h=r(),g=({open:e,invisible:t=!1,className:r,children:a,...o})=>(0,h.jsx)(i,{children:e&&(0,h.jsx)(n.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:c(`fixed inset-0 z-[50] flex items-center justify-center bg-black/50 backdrop-blur-sm`,t&&`bg-transparent backdrop-blur-none`,r),...o,children:a})}),g.displayName=`Backdrop`,g.__docgenInfo={description:`A standalone utility component for dimming the background behind active elements like Modals or Drawers.`,methods:[],displayName:`Backdrop`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Whether the backdrop is visible`},invisible:{required:!1,tsType:{name:`boolean`},description:`Whether the backdrop is transparent`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E,D,O;e((()=>{v(),y=t(s(),1),u(),f(),m(),b=r(),x={title:`Overlays/Backdrop`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`A full-screen overlay that dims the background behind active elements like modals and drawers. Supports blur, invisible mode, and animated enter/exit transitions via Framer Motion.`}}},argTypes:{open:{description:`Controls the visibility of the backdrop.`,table:{category:`State`}},invisible:{control:`boolean`,description:`When true, the backdrop is fully transparent with no blur.`,table:{category:`Appearance`}},onClick:{description:`Click handler — typically used to dismiss the overlay.`,table:{category:`Events`}}}},S=()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(`div`,{className:`p-10`,children:[(0,b.jsx)(l,{onClick:()=>t(!0),children:`Show Backdrop`}),(0,b.jsx)(g,{open:e,onClick:()=>t(!1),children:(0,b.jsxs)(`div`,{className:`text-center text-white`,children:[(0,b.jsx)(d,{indeterminate:!0,className:`mb-4 text-white`}),(0,b.jsx)(`p`,{className:`font-bold`,children:`Loading... Click anywhere to close.`})]})})]})},C={render:()=>(0,b.jsx)(S,{}),parameters:{docs:{description:{story:`A loading overlay with a circular progress indicator. Click anywhere on the backdrop to dismiss.`}}}},w=()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(`div`,{className:`p-10`,children:[(0,b.jsx)(l,{variant:`outline`,onClick:()=>t(!0),children:`Show Invisible Backdrop`}),(0,b.jsx)(g,{open:e,invisible:!0,onClick:()=>t(!1),children:(0,b.jsxs)(`div`,{className:`rounded-lg bg-white p-8 shadow-2xl`,children:[(0,b.jsx)(`p`,{className:`text-foreground mb-4 font-medium`,children:`The backdrop is invisible but still captures clicks.`}),(0,b.jsx)(l,{onClick:()=>t(!1),children:`Close`})]})})]})},T={render:()=>(0,b.jsx)(w,{}),parameters:{docs:{description:{story:`An invisible backdrop that captures clicks without dimming or blurring the background.`}}}},E=()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(`div`,{className:`p-10`,children:[(0,b.jsx)(l,{onClick:()=>t(!0),children:`Show Loading State`}),(0,b.jsx)(g,{open:e,onClick:()=>t(!1),children:(0,b.jsx)(p,{size:`xl`,label:`Please wait...`,className:`text-white`})})]})},D={render:()=>(0,b.jsx)(E,{}),parameters:{docs:{description:{story:`Backdrop composed with the Spinner component for a simple full-screen loading state.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <DefaultStory />,
  parameters: {
    docs: {
      description: {
        story: "A loading overlay with a circular progress indicator. Click anywhere on the backdrop to dismiss."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <InvisibleStory />,
  parameters: {
    docs: {
      description: {
        story: "An invisible backdrop that captures clicks without dimming or blurring the background."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <WithSpinnerStory />,
  parameters: {
    docs: {
      description: {
        story: "Backdrop composed with the Spinner component for a simple full-screen loading state."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Invisible`,`WithSpinner`]}))();export{C as Default,T as Invisible,D as WithSpinner,O as __namedExportsOrder,x as default};