import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,dt as r,i,j as a,r as o,s}from"./iframe-Zc9R2ftq.js";var c,l,u,d=e((()=>{c=t(r(),1),i(),s(),l=n(),u=c.forwardRef(({className:e,steps:t,activeStep:n,orientation:r=`horizontal`,...i},s)=>{let c=r===`horizontal`;return(0,l.jsx)(`div`,{ref:s,className:o(`flex w-full`,c?`items-start`:`flex-col`,e),role:`list`,"aria-label":`Progress`,...i,children:t.map((e,r)=>{let i=r<n,s=r===n;return(0,l.jsxs)(`div`,{role:`listitem`,className:o(`flex`,c?`flex-1 items-start`:`items-start gap-4`),children:[(0,l.jsxs)(`div`,{className:o(`flex`,c?`flex-col items-center`:`flex-row items-start gap-3`),children:[(0,l.jsxs)(`div`,{className:`flex items-center`,children:[(0,l.jsx)(`div`,{className:o(`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300`,i?`border-primary bg-primary text-primary-foreground`:s?`border-primary bg-background text-primary`:`border-muted-foreground/30 bg-background text-muted-foreground`),children:i?(0,l.jsx)(a,{className:`h-4 w-4`}):r+1}),c&&r<t.length-1&&(0,l.jsx)(`div`,{className:o(`mx-2 h-0.5 min-w-[2rem] flex-1 transition-colors duration-300`,i?`bg-primary`:`bg-muted-foreground/20`)})]}),(0,l.jsxs)(`div`,{className:o(c?`mt-2 text-center`:``),children:[(0,l.jsx)(`p`,{className:o(`text-sm font-medium`,s||i?`text-foreground`:`text-muted-foreground`),children:e.label}),e.description&&(0,l.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:e.description})]})]}),!c&&r<t.length-1&&(0,l.jsx)(`div`,{className:o(`ml-4 mt-1 h-8 w-0.5 transition-colors duration-300`,i?`bg-primary`:`bg-muted-foreground/20`)})]},r)})})}),u.displayName=`Stepper`,u.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`StepItem`}],raw:`StepItem[]`},description:``},activeStep:{required:!0,tsType:{name:`number`},description:`Current active step (0-indexed)`},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation`,defaultValue:{value:`"horizontal"`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y;e((()=>{f(),p={title:`Composites/Stepper`,component:u,tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},activeStep:{control:{type:`range`,min:0,max:3}}}},m=[{label:`Account`,description:`Create your account`},{label:`Profile`,description:`Set up your profile`},{label:`Review`,description:`Review your details`},{label:`Complete`,description:`All done!`}],h={args:{steps:m,activeStep:0}},g={args:{steps:m,activeStep:2}},_={args:{steps:m,activeStep:4}},v={args:{steps:m,activeStep:1,orientation:`vertical`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 0
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 2
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 4
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1,
    orientation: "vertical"
  }
}`,...v.parameters?.docs?.source}}},y=[`FirstStep`,`InProgress`,`Complete`,`Vertical`]}))();export{_ as Complete,h as FirstStep,g as InProgress,v as Vertical,y as __namedExportsOrder,p as default};