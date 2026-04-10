import{n as e}from"./chunk-zsgVPwQN.js";import{Pt as t}from"./iframe-CAjx62e_.js";import{n,t as r}from"./progress-bar-CDFuDmoa.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),a={title:`Composites/ProgressBar`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},value:{control:{type:`range`,min:0,max:100}}}},o={args:{value:60,label:`Progress`,showValue:!0}},s={args:{value:100,label:`Complete`,showValue:!0,variant:`success`}},c={args:{value:80,label:`Storage Used`,showValue:!0,variant:`warning`,size:`lg`}},l={args:{value:45,size:`sm`}},u={render:()=>(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsx)(n,{value:25,label:`Default`,showValue:!0}),(0,i.jsx)(n,{value:50,label:`Success`,showValue:!0,variant:`success`}),(0,i.jsx)(n,{value:75,label:`Warning`,showValue:!0,variant:`warning`}),(0,i.jsx)(n,{value:90,label:`Destructive`,showValue:!0,variant:`destructive`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: "Progress",
    showValue: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: "Complete",
    showValue: true,
    variant: "success"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    label: "Storage Used",
    showValue: true,
    variant: "warning",
    size: "lg"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} label="Success" showValue variant="success" />
      <ProgressBar value={75} label="Warning" showValue variant="warning" />
      <ProgressBar value={90} label="Destructive" showValue variant="destructive" />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Complete`,`Warning`,`Small`,`AllVariants`]}))();export{u as AllVariants,s as Complete,o as Default,l as Small,c as Warning,d as __namedExportsOrder,a as default};