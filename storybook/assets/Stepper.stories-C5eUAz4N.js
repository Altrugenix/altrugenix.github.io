import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,r as a,xt as o,zt as s}from"./iframe-coe0kFk0.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),a(),l=n(),u=c.forwardRef(({className:e,steps:t,activeStep:n,orientation:r=`horizontal`,...i},a)=>{let c=r===`horizontal`;return(0,l.jsx)(`div`,{ref:a,className:s(`flex w-full`,c?`items-start`:`flex-col`,e),role:`list`,"aria-label":`Progress`,...i,children:t.map((e,r)=>{let i=r<n,a=r===n;return(0,l.jsxs)(`div`,{role:`listitem`,className:s(`flex`,c?`flex-1 items-start`:`items-start gap-4`),children:[(0,l.jsxs)(`div`,{className:s(`flex`,c?`flex-col items-center`:`flex-row items-start gap-3`),children:[(0,l.jsxs)(`div`,{className:`flex items-center`,children:[(0,l.jsx)(`div`,{className:s(`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300`,i?`border-primary bg-primary text-primary-foreground`:a?`border-primary bg-background text-primary`:`border-muted-foreground/30 bg-background text-muted-foreground`),children:i?(0,l.jsx)(o,{className:`h-4 w-4`}):r+1}),c&&r<t.length-1&&(0,l.jsx)(`div`,{className:s(`mx-2 h-0.5 min-w-[2rem] flex-1 transition-colors duration-300`,i?`bg-primary`:`bg-muted-foreground/20`)})]}),(0,l.jsxs)(`div`,{className:s(c?`mt-2 text-center`:``),children:[(0,l.jsx)(`p`,{className:s(`text-sm font-medium`,a||i?`text-foreground`:`text-muted-foreground`),children:e.label}),e.description&&(0,l.jsx)(`p`,{className:`text-muted-foreground mt-0.5 text-xs`,children:e.description})]})]}),!c&&r<t.length-1&&(0,l.jsx)(`div`,{className:s(`mt-1 ml-4 h-8 w-0.5 transition-colors duration-300`,i?`bg-primary`:`bg-muted-foreground/20`)})]},r)})})}),u.displayName=`Stepper`,u.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`StepItem`}],raw:`StepItem[]`},description:``},activeStep:{required:!0,tsType:{name:`number`},description:`Current active step (0-indexed)`},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation`,defaultValue:{value:`"horizontal"`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),p={title:`Navigation/Stepper`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A multi-step progress indicator showing the user's position in a linear workflow. Supports horizontal and vertical orientations with completed, active, and upcoming states.`}}},argTypes:{activeStep:{control:{type:`number`,min:0},description:`The current active step (0-indexed).`,table:{category:`State`}},orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Layout direction of the stepper.`,table:{category:`Appearance`}},steps:{description:`Array of step items with label and optional description.`,table:{category:`Data`}}}},m=[{label:`Account`,description:`Create your account`},{label:`Profile`,description:`Fill in your details`},{label:`Review`,description:`Verify your information`},{label:`Complete`,description:`You're all set!`}],h={args:{steps:m,activeStep:1}},g={args:{steps:m,activeStep:0}},_={args:{steps:m,activeStep:4},parameters:{docs:{description:{story:"All steps completed — `activeStep` exceeds the step count."}}}},v={args:{steps:m,activeStep:2,orientation:`vertical`},parameters:{docs:{description:{story:`Vertical layout suitable for sidebar navigation or mobile flows.`}}}},y={args:{steps:[{label:`Cart`,description:`Review your items`},{label:`Shipping`,description:`Enter your address`},{label:`Payment`,description:`Choose payment method`},{label:`Confirmation`,description:`Order placed!`}],activeStep:2},parameters:{docs:{description:{story:`An e-commerce checkout flow showing the payment step as active.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 1
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 0
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 4
  },
  parameters: {
    docs: {
      description: {
        story: "All steps completed — \`activeStep\` exceeds the step count."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 2,
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Vertical layout suitable for sidebar navigation or mobile flows."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: "Cart",
      description: "Review your items"
    }, {
      label: "Shipping",
      description: "Enter your address"
    }, {
      label: "Payment",
      description: "Choose payment method"
    }, {
      label: "Confirmation",
      description: "Order placed!"
    }],
    activeStep: 2
  },
  parameters: {
    docs: {
      description: {
        story: "An e-commerce checkout flow showing the payment step as active."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`FirstStep`,`AllComplete`,`Vertical`,`CheckoutFlow`]}))();export{_ as AllComplete,y as CheckoutFlow,h as Default,g as FirstStep,v as Vertical,b as __namedExportsOrder,p as default};