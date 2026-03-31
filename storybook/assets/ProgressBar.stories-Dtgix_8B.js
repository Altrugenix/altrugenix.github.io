import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,dt as r,i,r as a}from"./iframe-Zc9R2ftq.js";var o,s,c,l,u,d=e((()=>{o=t(r(),1),i(),s=n(),c={default:`bg-primary`,success:`bg-success`,warning:`bg-warning`,destructive:`bg-destructive`},l={sm:`h-1.5`,md:`h-2.5`,lg:`h-4`},u=o.forwardRef(({className:e,value:t=0,max:n=100,variant:r=`default`,size:i=`md`,label:o,showValue:u,...d},f)=>{let p=Math.min(100,Math.max(0,t/n*100));return(0,s.jsxs)(`div`,{ref:f,className:a(`w-full space-y-1.5`,e),...d,children:[(o||u)&&(0,s.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[o&&(0,s.jsx)(`span`,{className:`font-medium text-foreground`,children:o}),u&&(0,s.jsxs)(`span`,{className:`text-muted-foreground`,children:[Math.round(p),`%`]})]}),(0,s.jsx)(`div`,{className:a(`w-full overflow-hidden rounded-full bg-secondary`,l[i]),role:`progressbar`,"aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":n,children:(0,s.jsx)(`div`,{className:a(`h-full rounded-full transition-all duration-500 ease-out`,c[r]),style:{width:`${p}%`}})})]})}),u.displayName=`ProgressBar`,u.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{required:!1,tsType:{name:`number`},description:`Current progress value (0–100)`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Max value, defaults to 100`,defaultValue:{value:`100`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "success" | "warning" | "destructive"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"destructive"`}]},description:`Visual variant`,defaultValue:{value:`"default"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Height size`,defaultValue:{value:`"md"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Show label text above the bar`},showValue:{required:!1,tsType:{name:`boolean`},description:`Show percentage text`}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),p=n(),m={title:`Composites/ProgressBar`,component:u,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`success`,`warning`,`destructive`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},value:{control:{type:`range`,min:0,max:100}}}},h={args:{value:60,label:`Progress`,showValue:!0}},g={args:{value:100,label:`Complete`,showValue:!0,variant:`success`}},_={args:{value:80,label:`Storage Used`,showValue:!0,variant:`warning`,size:`lg`}},v={args:{value:45,size:`sm`}},y={render:()=>(0,p.jsxs)(`div`,{className:`space-y-6`,children:[(0,p.jsx)(u,{value:25,label:`Default`,showValue:!0}),(0,p.jsx)(u,{value:50,label:`Success`,showValue:!0,variant:`success`}),(0,p.jsx)(u,{value:75,label:`Warning`,showValue:!0,variant:`warning`}),(0,p.jsx)(u,{value:90,label:`Destructive`,showValue:!0,variant:`destructive`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: "Progress",
    showValue: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: "Complete",
    showValue: true,
    variant: "success"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    label: "Storage Used",
    showValue: true,
    variant: "warning",
    size: "lg"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: "sm"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} label="Success" showValue variant="success" />
      <ProgressBar value={75} label="Warning" showValue variant="warning" />
      <ProgressBar value={90} label="Destructive" showValue variant="destructive" />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Complete`,`Warning`,`Small`,`AllVariants`]}))();export{y as AllVariants,g as Complete,h as Default,v as Small,_ as Warning,b as __namedExportsOrder,m as default};