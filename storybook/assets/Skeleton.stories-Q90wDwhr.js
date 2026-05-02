import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-B5gth2N2.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Feedback/Skeleton`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A placeholder loading state component that shows a pulsing animation. Useful for indicating that content is loading without causing layout shifts.`}}},argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`,`rounded`],description:`Visual shape of the skeleton.`,table:{category:`Appearance`}},width:{control:`text`,description:`Width of the skeleton (px or string like '100%').`,table:{category:`Appearance`}},height:{control:`text`,description:`Height of the skeleton (px or string like '100%').`,table:{category:`Appearance`}},animation:{control:`select`,options:[`pulse`,`wave`,`none`],description:`Animation style.`,table:{category:`Appearance`}}}},o={args:{variant:`text`,width:`80%`}},s={args:{variant:`text`,width:`100%`},parameters:{docs:{description:{story:`A standard text skeleton line.`}}}},c={args:{variant:`circular`,width:48,height:48},parameters:{docs:{description:{story:`A circular skeleton, typically used for avatars.`}}}},l={args:{variant:`rounded`,width:`100%`,height:120},parameters:{docs:{description:{story:`A rounded rectangle skeleton, typically used for cards or images.`}}}},u={render:()=>(0,i.jsxs)(`div`,{className:`w-[300px] space-y-4 rounded-lg border p-4`,children:[(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(n,{variant:`circular`,width:40,height:40}),(0,i.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,i.jsx)(n,{variant:`text`,width:`60%`}),(0,i.jsx)(n,{variant:`text`,width:`40%`})]})]}),(0,i.jsx)(n,{variant:`rounded`,height:160,className:`w-full`}),(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(n,{variant:`text`}),(0,i.jsx)(n,{variant:`text`,width:`80%`})]})]}),parameters:{docs:{description:{story:`A complete card skeleton composed of multiple skeleton variants.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    width: "80%"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    width: "100%"
  },
  parameters: {
    docs: {
      description: {
        story: "A standard text skeleton line."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 48,
    height: 48
  },
  parameters: {
    docs: {
      description: {
        story: "A circular skeleton, typically used for avatars."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    width: "100%",
    height: 120
  },
  parameters: {
    docs: {
      description: {
        story: "A rounded rectangle skeleton, typically used for cards or images."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4 rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" height={160} className="w-full" />
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A complete card skeleton composed of multiple skeleton variants."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Text`,`Circular`,`Rounded`,`CardSkeleton`]}))();export{u as CardSkeleton,c as Circular,o as Default,l as Rounded,s as Text,d as __namedExportsOrder,a as default};