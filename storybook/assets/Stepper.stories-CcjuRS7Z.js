import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,gt as a,ln as o,r as s}from"./iframe-BnAwTMlV.js";var c,l,u,d=e((()=>{c=t(o(),1),i(),s(),l=r(),u=c.forwardRef(({className:e,steps:t,activeStep:r,orientation:i=`horizontal`,...o},s)=>{let c=i===`horizontal`;return(0,l.jsx)(`div`,{ref:s,className:n(`flex w-full`,c?`items-start`:`flex-col`,e),role:`list`,"aria-label":`Progress`,...o,children:t.map((e,i)=>{let o=i<r,s=i===r;return(0,l.jsxs)(`div`,{role:`listitem`,className:n(`flex`,c?`flex-1 items-start`:`items-start gap-4`),children:[(0,l.jsxs)(`div`,{className:n(`flex`,c?`flex-col items-center`:`flex-row items-start gap-3`),children:[(0,l.jsxs)(`div`,{className:`flex items-center`,children:[(0,l.jsx)(`div`,{className:n(`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300`,o?`border-primary bg-primary text-primary-foreground`:s?`border-primary bg-background text-primary`:`border-muted-foreground/30 bg-background text-muted-foreground`),children:o?(0,l.jsx)(a,{className:`h-4 w-4`}):i+1}),c&&i<t.length-1&&(0,l.jsx)(`div`,{className:n(`mx-2 h-0.5 min-w-[2rem] flex-1 transition-colors duration-300`,o?`bg-primary`:`bg-muted-foreground/20`)})]}),(0,l.jsxs)(`div`,{className:n(c?`mt-2 text-center`:``),children:[(0,l.jsx)(`p`,{className:n(`text-sm font-medium`,s||o?`text-foreground`:`text-muted-foreground`),children:e.label}),e.description&&(0,l.jsx)(`p`,{className:`text-muted-foreground mt-0.5 text-xs`,children:e.description})]})]}),!c&&i<t.length-1&&(0,l.jsx)(`div`,{className:n(`mt-1 ml-4 h-8 w-0.5 transition-colors duration-300`,o?`bg-primary`:`bg-muted-foreground/20`)})]},i)})})}),u.displayName=`Stepper`,u.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{orientation:{defaultValue:{value:`"horizontal"`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v;e((()=>{d(),f={title:`Composites/Stepper`,component:u,tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},activeStep:{control:{type:`range`,min:0,max:3}}}},p=[{label:`Account`,description:`Create your account`},{label:`Profile`,description:`Set up your profile`},{label:`Review`,description:`Review your details`},{label:`Complete`,description:`All done!`}],m={args:{steps:p,activeStep:0}},h={args:{steps:p,activeStep:2}},g={args:{steps:p,activeStep:4}},_={args:{steps:p,activeStep:1,orientation:`vertical`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 0
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 2
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 4
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1,
    orientation: "vertical"
  }
}`,..._.parameters?.docs?.source}}},v=[`FirstStep`,`InProgress`,`Complete`,`Vertical`]}))();export{g as Complete,m as FirstStep,h as InProgress,_ as Vertical,v as __namedExportsOrder,f as default};