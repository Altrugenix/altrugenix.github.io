import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,i as r,r as i,tt as a}from"./iframe-B3RxNkLM.js";var o,s,c,l=e((()=>{o=t(a(),1),r(),s=n(),c=o.forwardRef(({className:e,variant:t=`text`,width:n,height:r,style:a,...o},c)=>(0,s.jsx)(`div`,{ref:c,className:i(`animate-pulse bg-muted`,{text:`h-4 w-full rounded-md`,circular:`rounded-full`,rectangular:`rounded-none`,rounded:`rounded-lg`}[t],e),style:{width:typeof n==`number`?`${n}px`:n,height:typeof r==`number`?`${r}px`:r,...a},"aria-hidden":`true`,...o})),c.displayName=`Skeleton`,c.__docgenInfo={description:`Skeleton loading placeholder with a shimmer animation.`,methods:[],displayName:`Skeleton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"text" | "circular" | "rectangular" | "rounded"`,elements:[{name:`literal`,value:`"text"`},{name:`literal`,value:`"circular"`},{name:`literal`,value:`"rectangular"`},{name:`literal`,value:`"rounded"`}]},description:`Shape variant`,defaultValue:{value:`"text"`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width — accepts any CSS value`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Height — accepts any CSS value`}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_;e((()=>{u(),d=n(),f={title:`Composites/Skeleton`,component:c,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`,`rounded`]}}},p={args:{variant:`text`,width:`80%`}},m={args:{variant:`circular`,width:48,height:48}},h={args:{variant:`rounded`,width:`100%`,height:120}},g={render:()=>(0,d.jsxs)(`div`,{className:`w-[300px] space-y-4 rounded-lg border p-4`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsx)(c,{variant:`circular`,width:40,height:40}),(0,d.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,d.jsx)(c,{variant:`text`,width:`60%`}),(0,d.jsx)(c,{variant:`text`,width:`40%`})]})]}),(0,d.jsx)(c,{variant:`rounded`,height:160,className:`w-full`}),(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(c,{variant:`text`}),(0,d.jsx)(c,{variant:`text`,width:`80%`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    width: "80%"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 48,
    height: 48
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    width: "100%",
    height: 120
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Text`,`Circular`,`Rounded`,`CardSkeleton`]}))();export{g as CardSkeleton,m as Circular,h as Rounded,p as Text,_ as __namedExportsOrder,f as default};