import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t,n,t as r}from"./iframe-zfMobaDd.js";import{a as i,t as a}from"./src-DjwHjl2X.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{r(),a(),o=t(),s={title:`Feedback/Toast`,tags:[`autodocs`],parameters:{docs:{description:{component:"Lightweight notification toasts that appear briefly to confirm actions. Supports success, error, warning, and info types via the `useToast` hook."}}}},c=()=>{let{toast:e}=n();return(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,o.jsx)(i,{onClick:()=>e({type:`success`,title:`Success`,description:`Your action was completed successfully.`}),children:`Success Toast`}),(0,o.jsx)(i,{variant:`destructive`,onClick:()=>e({type:`error`,title:`Error occurred`,description:`We could not save your settings at this time.`}),children:`Error Toast`}),(0,o.jsx)(i,{variant:`secondary`,onClick:()=>e({type:`warning`,title:`Connection reset`,description:`The connection was interrupted but we are retrying.`}),children:`Warning Toast`}),(0,o.jsx)(i,{variant:`outline`,onClick:()=>e({type:`info`,title:`Update available`,description:`A newer version of the library is available now.`}),children:`Info Toast`})]})},l={render:()=>(0,o.jsx)(c,{}),parameters:{docs:{description:{story:`All four toast types triggered by button clicks. Toasts appear briefly and auto-dismiss.`}}}},u=()=>{let{toast:e}=n();return(0,o.jsx)(i,{onClick:()=>e({type:`success`,title:`Saved!`,description:`Your changes have been saved to the database.`}),children:`Save Changes`})},d={render:()=>(0,o.jsx)(u,{}),parameters:{docs:{description:{story:`A success toast triggered after a save action.`}}}},f=()=>{let{toast:e}=n();return(0,o.jsx)(i,{variant:`destructive`,onClick:()=>e({type:`error`,title:`Deletion Failed`,description:`The resource could not be deleted. Please check your permissions.`}),children:`Delete Item`})},p={render:()=>(0,o.jsx)(f,{}),parameters:{docs:{description:{story:`An error toast triggered after a failed destructive action.`}}}},m=()=>{let{toast:e}=n();return(0,o.jsx)(i,{onClick:()=>{e({type:`info`,title:`Uploading...`,description:`Preparing your files.`}),setTimeout(()=>e({type:`success`,title:`Upload complete!`,description:`All files uploaded successfully.`}),1500)},children:`Trigger Sequential Toasts`})},h={render:()=>(0,o.jsx)(m,{}),parameters:{docs:{description:{story:`Multiple toasts fired sequentially — an info toast followed by a success toast after a delay, simulating a real async operation.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <DefaultToastStory />,
  parameters: {
    docs: {
      description: {
        story: "All four toast types triggered by button clicks. Toasts appear briefly and auto-dismiss."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SuccessToastStory />,
  parameters: {
    docs: {
      description: {
        story: "A success toast triggered after a save action."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorToastStory />,
  parameters: {
    docs: {
      description: {
        story: "An error toast triggered after a failed destructive action."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleToastsStory />,
  parameters: {
    docs: {
      description: {
        story: "Multiple toasts fired sequentially — an info toast followed by a success toast after a delay, simulating a real async operation."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SuccessOnly`,`ErrorOnly`,`Sequential`]}))();export{l as Default,p as ErrorOnly,h as Sequential,d as SuccessOnly,g as __namedExportsOrder,s as default};