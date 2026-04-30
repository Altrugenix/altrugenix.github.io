import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,Y as a,h as o,ln as s,lt as c,r as l,s as u,ut as d}from"./iframe-BnAwTMlV.js";var f,p,m,h,g,_=e((()=>{f=t(s(),1),i(),l(),p=r(),m={default:`bg-background text-foreground border-border`,success:`border-success/50 bg-success/10 text-success [&>svg]:text-success`,warning:`border-warning/50 bg-warning/10 text-warning-foreground [&>svg]:text-warning`,destructive:`border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive`,info:`border-info/50 bg-info/10 text-info [&>svg]:text-info`},h={default:a,success:c,warning:o,destructive:d,info:a},g=f.forwardRef(({className:e,variant:t=`default`,title:r,onClose:i,children:a,...o},s)=>{let c=h[t];return(0,p.jsxs)(`div`,{ref:s,role:`alert`,className:n(`relative flex w-full items-start gap-3 rounded-lg border p-4`,m[t],e),...o,children:[(0,p.jsx)(c,{className:`mt-0.5 h-4 w-4 shrink-0`}),(0,p.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[r&&(0,p.jsx)(`h5`,{className:`text-sm leading-none font-semibold tracking-tight`,children:r}),a&&(0,p.jsx)(`div`,{className:`text-sm opacity-90 [&_p]:leading-relaxed`,children:a})]}),i&&(0,p.jsx)(`button`,{onClick:i,className:`ring-offset-background focus:ring-ring absolute top-3 right-3 rounded-md p-0.5 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none`,"aria-label":`Close alert`,children:(0,p.jsx)(u,{className:`h-4 w-4`})})]})}),g.displayName=`Alert`,g.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{defaultValue:{value:`"default"`,computed:!1},required:!1}}}})),v,y,b,x,S,C,w,T,E;e((()=>{_(),v=r(),y={title:`Composites/Alert`,component:g,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`,`info`]}}},b={args:{variant:`info`,title:`Heads up!`,children:`You can add components to your app using the CLI.`}},x={args:{variant:`success`,title:`Success`,children:`Your changes have been saved successfully.`}},S={args:{variant:`warning`,title:`Warning`,children:`Your session is about to expire. Please save your work.`}},C={args:{variant:`destructive`,title:`Error`,children:`Something went wrong. Please try again.`}},w={args:{variant:`info`,title:`Dismissable`,children:`Click the X to close this alert.`,onClose:()=>alert(`Closed!`)}},T={render:()=>(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsx)(g,{variant:`default`,title:`Default`,children:`Neutral information.`}),(0,v.jsx)(g,{variant:`info`,title:`Info`,children:`Informational note.`}),(0,v.jsx)(g,{variant:`success`,title:`Success`,children:`Operation completed.`}),(0,v.jsx)(g,{variant:`warning`,title:`Warning`,children:`Proceed with caution.`}),(0,v.jsx)(g,{variant:`destructive`,title:`Error`,children:`Action failed.`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Heads up!",
    children: "You can add components to your app using the CLI."
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved successfully."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Your session is about to expire. Please save your work."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    title: "Error",
    children: "Something went wrong. Please try again."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissable",
    children: "Click the X to close this alert.",
    onClose: () => alert("Closed!")
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="default" title="Default">
        Neutral information.
      </Alert>
      <Alert variant="info" title="Info">
        Informational note.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed.
      </Alert>
      <Alert variant="warning" title="Warning">
        Proceed with caution.
      </Alert>
      <Alert variant="destructive" title="Error">
        Action failed.
      </Alert>
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Info`,`Success`,`Warning`,`Destructive`,`Closable`,`AllVariants`]}))();export{T as AllVariants,w as Closable,C as Destructive,b as Info,x as Success,S as Warning,E as __namedExportsOrder,y as default};