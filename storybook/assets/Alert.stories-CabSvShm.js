import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,Y as i,c as a,g as o,gn as s,ht as c,mt as l,r as u,zt as d}from"./iframe-zfMobaDd.js";import{a as f,t as p}from"./src-DjwHjl2X.js";var m,h,g,_,v,y=e((()=>{m=t(s(),1),r(),u(),h=n(),g={default:`bg-background text-foreground border-border`,success:`border-success/50 bg-success/10 text-success [&>svg]:text-success`,warning:`border-warning/50 bg-warning/10 text-warning-foreground [&>svg]:text-warning`,destructive:`border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive`,info:`border-info/50 bg-info/10 text-info [&>svg]:text-info`},_={default:i,success:l,warning:o,destructive:c,info:i},v=m.forwardRef(({className:e,variant:t=`default`,title:n,onClose:r,children:i,...o},s)=>{let c=_[t];return(0,h.jsxs)(`div`,{ref:s,role:`alert`,className:d(`relative flex w-full items-start gap-3 rounded-lg border p-4`,g[t],e),...o,children:[(0,h.jsx)(c,{className:`mt-0.5 h-4 w-4 shrink-0`}),(0,h.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[n&&(0,h.jsx)(`h5`,{className:`text-sm leading-none font-semibold tracking-tight`,children:n}),i&&(0,h.jsx)(`div`,{className:`text-sm opacity-90 [&_p]:leading-relaxed`,children:i})]}),r&&(0,h.jsx)(`button`,{onClick:r,className:`ring-offset-background focus:ring-ring absolute top-3 right-3 rounded-md p-0.5 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none`,"aria-label":`Close alert`,children:(0,h.jsx)(a,{className:`h-4 w-4`})})]})}),v.displayName=`Alert`,v.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"default" | "success" | "warning" | "destructive" | "info"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"destructive"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Show a close button`}}}})),b=e((()=>{y()})),x,S,C,w,T,E,D,O,k,A;e((()=>{b(),p(),x=n(),S={title:`Feedback/Alert`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`A contextual banner for displaying important messages to users. Supports five semantic variants, optional close buttons, and custom actions.`}}},argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`,`info`],description:`The semantic variant determining color and icon.`,table:{category:`Appearance`}},title:{description:`Bold title text for the alert.`,table:{category:`Content`}},children:{description:`The body content of the alert.`,table:{category:`Content`}},onClose:{description:`When provided, renders a close button. Called on dismiss.`,table:{category:`Events`}}}},C={args:{variant:`info`,title:`Heads up!`,children:`You can add components to your app using the CLI.`}},w={args:{variant:`success`,title:`Success`,children:`Your changes have been saved successfully.`}},T={args:{variant:`warning`,title:`Warning`,children:`Your session is about to expire. Please save your work.`}},E={args:{variant:`destructive`,title:`Error`,children:`Something went wrong. Please try again.`}},D={args:{variant:`info`,title:`Dismissable`,children:`Click the X to close this alert.`,onClose:()=>{}},parameters:{docs:{description:{story:"When the `onClose` callback is provided, a dismiss button appears in the top-right corner."}}}},O={render:()=>(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsx)(v,{variant:`default`,title:`Default`,children:`Neutral information with no specific semantic meaning.`}),(0,x.jsx)(v,{variant:`info`,title:`Info`,children:`Informational note — something the user should be aware of.`}),(0,x.jsx)(v,{variant:`success`,title:`Success`,children:`Operation completed successfully.`}),(0,x.jsx)(v,{variant:`warning`,title:`Warning`,children:`Proceed with caution — there may be side effects.`}),(0,x.jsx)(v,{variant:`destructive`,title:`Error`,children:`An error occurred and the action could not be completed.`})]}),parameters:{docs:{description:{story:`Side-by-side comparison of every available alert variant.`}}}},k={render:()=>(0,x.jsx)(v,{variant:`warning`,title:`Subscription Expiring`,children:(0,x.jsxs)(`div`,{className:`mt-2 flex flex-col gap-3`,children:[(0,x.jsx)(`p`,{className:`text-sm`,children:`Your Pro plan expires in 3 days. Upgrade now to avoid losing access to premium features.`}),(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(f,{size:`sm`,children:`Upgrade Now`}),(0,x.jsx)(f,{size:`sm`,variant:`ghost`,children:`Remind Later`})]})]})}),parameters:{docs:{description:{story:`An alert with embedded action buttons — common for upgrade prompts and calls to action.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Heads up!",
    children: "You can add components to your app using the CLI."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved successfully."
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Your session is about to expire. Please save your work."
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    title: "Error",
    children: "Something went wrong. Please try again."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissable",
    children: "Click the X to close this alert.",
    onClose: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: "When the \`onClose\` callback is provided, a dismiss button appears in the top-right corner."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="default" title="Default">
        Neutral information with no specific semantic meaning.
      </Alert>
      <Alert variant="info" title="Info">
        Informational note — something the user should be aware of.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Proceed with caution — there may be side effects.
      </Alert>
      <Alert variant="destructive" title="Error">
        An error occurred and the action could not be completed.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available alert variant."
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="warning" title="Subscription Expiring">
      <div className="mt-2 flex flex-col gap-3">
        <p className="text-sm">
          Your Pro plan expires in 3 days. Upgrade now to avoid losing access to
          premium features.
        </p>
        <div className="flex gap-2">
          <Button size="sm">Upgrade Now</Button>
          <Button size="sm" variant="ghost">
            Remind Later
          </Button>
        </div>
      </div>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "An alert with embedded action buttons — common for upgrade prompts and calls to action."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Info`,`Success`,`Warning`,`Destructive`,`Closable`,`AllVariants`,`WithActions`]}))();export{O as AllVariants,D as Closable,E as Destructive,C as Info,w as Success,T as Warning,k as WithActions,A as __namedExportsOrder,S as default};