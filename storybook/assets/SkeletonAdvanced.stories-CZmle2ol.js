import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{n,t as r}from"./src-C7NJeRD_.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`Feedback/Skeleton/Advanced`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Advanced compositions and animation variations for the Skeleton component.`}}}},o={render:()=>(0,i.jsxs)(`div`,{className:`max-w-sm space-y-8`,children:[(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h4`,{className:`text-muted-foreground text-sm font-bold uppercase`,children:`Pulse (Default)`}),(0,i.jsx)(n,{variant:`text`}),(0,i.jsx)(n,{variant:`rectangular`,height:100})]}),(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h4`,{className:`text-muted-foreground text-sm font-bold uppercase`,children:`Wave (Shimmer)`}),(0,i.jsx)(n,{variant:`text`,animation:`wave`}),(0,i.jsx)(n,{variant:`rectangular`,height:100,animation:`wave`})]}),(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h4`,{className:`text-muted-foreground text-sm font-bold uppercase`,children:`None (Static)`}),(0,i.jsx)(n,{variant:`text`,animation:`none`}),(0,i.jsx)(n,{variant:`rectangular`,height:100,animation:`none`})]})]}),parameters:{docs:{description:{story:"Skeleton supports three animation modes: `pulse`, `wave`, and `none`."}}}},s={render:()=>(0,i.jsxs)(`div`,{className:`bg-card flex max-w-sm items-start gap-4 overflow-hidden rounded-xl border p-4 shadow-sm`,children:[(0,i.jsx)(n,{variant:`circular`,width:48,height:48,animation:`wave`}),(0,i.jsxs)(`div`,{className:`flex-1 space-y-3`,children:[(0,i.jsxs)(`div`,{className:`space-y-1`,children:[(0,i.jsx)(n,{variant:`text`,width:`60%`,animation:`wave`}),(0,i.jsx)(n,{variant:`text`,width:`40%`,height:10,animation:`wave`})]}),(0,i.jsx)(n,{variant:`rounded`,height:120,animation:`wave`}),(0,i.jsxs)(`div`,{className:`flex gap-2`,children:[(0,i.jsx)(n,{variant:`rounded`,width:80,height:32,animation:`wave`}),(0,i.jsx)(n,{variant:`rounded`,width:80,height:32,animation:`wave`})]})]})]}),parameters:{docs:{description:{story:"A complex dashboard card loading state using the `wave` animation."}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-8">
      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Pulse (Default)
        </h4>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={100} />
      </div>

      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Wave (Shimmer)
        </h4>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="rectangular" height={100} animation="wave" />
      </div>

      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          None (Static)
        </h4>
        <Skeleton variant="text" animation="none" />
        <Skeleton variant="rectangular" height={100} animation="none" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Skeleton supports three animation modes: \`pulse\`, \`wave\`, and \`none\`."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-card flex max-w-sm items-start gap-4 overflow-hidden rounded-xl border p-4 shadow-sm">
      <Skeleton variant="circular" width={48} height={48} animation="wave" />
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" height={10} animation="wave" />
        </div>
        <Skeleton variant="rounded" height={120} animation="wave" />
        <div className="flex gap-2">
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A complex dashboard card loading state using the \`wave\` animation."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`AnimationVariants`,`ComplexLoading`]}))();export{o as AnimationVariants,s as ComplexLoading,c as __namedExportsOrder,a as default};