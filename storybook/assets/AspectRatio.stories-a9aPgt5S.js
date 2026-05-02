import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({ratio:e=1,className:t,children:n,style:r,...i},o)=>(0,s.jsx)(`div`,{ref:o,className:a(`relative w-full overflow-hidden`,t),style:{...r,paddingBottom:`${100/e}%`},...i,children:(0,s.jsx)(`div`,{className:`absolute inset-0 [&>*]:h-full [&>*]:w-full`,children:n})})),c.displayName=`AspectRatio`,c.__docgenInfo={description:`A utility wrapper to force a specific ratio on its children.
Useful for images, videos, or map embeds.`,methods:[],displayName:`AspectRatio`,props:{ratio:{required:!1,tsType:{name:`number`},description:`The aspect ratio (e.g., 16/9)`,defaultValue:{value:`1`,computed:!1}}}}})),u=e((()=>{l()})),d,f,p,m,h,g;e((()=>{u(),d=n(),f={title:`Layout/AspectRatio`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`A utility wrapper that enforces a specific aspect ratio on its children. Useful for images, videos, and map embeds to prevent layout shift.`}}},argTypes:{ratio:{control:{type:`number`,min:.1,max:4,step:.1},description:`The aspect ratio (width / height). E.g. 16/9 = 1.778.`,table:{category:`Appearance`}}}},p={render:()=>(0,d.jsx)(`div`,{className:`max-w-md`,children:(0,d.jsx)(c,{ratio:16/9,children:(0,d.jsx)(`img`,{src:`https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop`,alt:`Landscape`,className:`h-full w-full rounded-lg object-cover`})})})},m={render:()=>(0,d.jsx)(`div`,{className:`max-w-64`,children:(0,d.jsx)(c,{ratio:1,children:(0,d.jsx)(`div`,{className:`flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 font-bold text-white`,children:`1:1`})})})},h={render:()=>(0,d.jsx)(`div`,{className:`grid max-w-2xl grid-cols-2 gap-6`,children:[{ratio:1,label:`1:1 Square`},{ratio:4/3,label:`4:3 Classic`},{ratio:16/9,label:`16:9 Widescreen`},{ratio:21/9,label:`21:9 Ultrawide`}].map(({ratio:e,label:t})=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:t}),(0,d.jsx)(c,{ratio:e,children:(0,d.jsx)(`div`,{className:`border-border bg-muted/30 text-muted-foreground flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed font-mono text-sm`,children:e.toFixed(2)})})]},t))}),parameters:{docs:{description:{story:`Comparison of four common aspect ratios — 1:1, 4:3, 16:9, and 21:9.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <AspectRatio ratio={16 / 9}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop" alt="Landscape" className="h-full w-full rounded-lg object-cover" />
      </AspectRatio>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-64">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 font-bold text-white">
          1:1
        </div>
      </AspectRatio>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-2xl grid-cols-2 gap-6">
      {[{
      ratio: 1,
      label: "1:1 Square"
    }, {
      ratio: 4 / 3,
      label: "4:3 Classic"
    }, {
      ratio: 16 / 9,
      label: "16:9 Widescreen"
    }, {
      ratio: 21 / 9,
      label: "21:9 Ultrawide"
    }].map(({
      ratio,
      label
    }) => <div key={label}>
          <p className="mb-2 text-sm font-medium">{label}</p>
          <AspectRatio ratio={ratio}>
            <div className="border-border bg-muted/30 text-muted-foreground flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed font-mono text-sm">
              {ratio.toFixed(2)}
            </div>
          </AspectRatio>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of four common aspect ratios — 1:1, 4:3, 16:9, and 21:9."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`SixteenNine`,`Square`,`CommonRatios`]}))();export{h as CommonRatios,p as SixteenNine,m as Square,g as __namedExportsOrder,f as default};