import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,_ as r,c as i,h as a,i as o,r as s,s as c,tt as l,u,v as d}from"./iframe-B3RxNkLM.js";var f,p,m,h,g,_=e((()=>{f=t(l(),1),o(),c(),p=n(),m={default:`bg-background text-foreground border-border`,success:`border-success/50 bg-success/10 text-success [&>svg]:text-success`,warning:`border-warning/50 bg-warning/10 text-warning-foreground [&>svg]:text-warning`,destructive:`border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive`,info:`border-info/50 bg-info/10 text-info [&>svg]:text-info`},h={default:a,success:r,warning:u,destructive:d,info:a},g=f.forwardRef(({className:e,variant:t=`default`,title:n,onClose:r,children:a,...o},c)=>{let l=h[t];return(0,p.jsxs)(`div`,{ref:c,role:`alert`,className:s(`relative flex w-full items-start gap-3 rounded-lg border p-4`,m[t],e),...o,children:[(0,p.jsx)(l,{className:`mt-0.5 h-4 w-4 shrink-0`}),(0,p.jsxs)(`div`,{className:`flex-1 space-y-1`,children:[n&&(0,p.jsx)(`h5`,{className:`text-sm font-semibold leading-none tracking-tight`,children:n}),a&&(0,p.jsx)(`div`,{className:`text-sm opacity-90 [&_p]:leading-relaxed`,children:a})]}),r&&(0,p.jsx)(`button`,{onClick:r,className:`absolute right-3 top-3 rounded-md p-0.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,"aria-label":`Close alert`,children:(0,p.jsx)(i,{className:`h-4 w-4`})})]})}),g.displayName=`Alert`,g.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"default" | "success" | "warning" | "destructive" | "info"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"destructive"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Show a close button`}}}})),v=e((()=>{_()})),y,b,x,S,C,w,T,E,D;e((()=>{v(),y=n(),b={title:`Composites/Alert`,component:g,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`,`info`]}}},x={args:{variant:`info`,title:`Heads up!`,children:`You can add components to your app using the CLI.`}},S={args:{variant:`success`,title:`Success`,children:`Your changes have been saved successfully.`}},C={args:{variant:`warning`,title:`Warning`,children:`Your session is about to expire. Please save your work.`}},w={args:{variant:`destructive`,title:`Error`,children:`Something went wrong. Please try again.`}},T={args:{variant:`info`,title:`Dismissable`,children:`Click the X to close this alert.`,onClose:()=>alert(`Closed!`)}},E={render:()=>(0,y.jsxs)(`div`,{className:`space-y-4`,children:[(0,y.jsx)(g,{variant:`default`,title:`Default`,children:`Neutral information.`}),(0,y.jsx)(g,{variant:`info`,title:`Info`,children:`Informational note.`}),(0,y.jsx)(g,{variant:`success`,title:`Success`,children:`Operation completed.`}),(0,y.jsx)(g,{variant:`warning`,title:`Warning`,children:`Proceed with caution.`}),(0,y.jsx)(g,{variant:`destructive`,title:`Error`,children:`Action failed.`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Heads up!",
    children: "You can add components to your app using the CLI."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved successfully."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    children: "Your session is about to expire. Please save your work."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    title: "Error",
    children: "Something went wrong. Please try again."
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Dismissable",
    children: "Click the X to close this alert.",
    onClose: () => alert("Closed!")
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert variant="default" title="Default">Neutral information.</Alert>
      <Alert variant="info" title="Info">Informational note.</Alert>
      <Alert variant="success" title="Success">Operation completed.</Alert>
      <Alert variant="warning" title="Warning">Proceed with caution.</Alert>
      <Alert variant="destructive" title="Error">Action failed.</Alert>
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Info`,`Success`,`Warning`,`Destructive`,`Closable`,`AllVariants`]}))();export{E as AllVariants,T as Closable,w as Destructive,x as Info,S as Success,C as Warning,D as __namedExportsOrder,b as default};