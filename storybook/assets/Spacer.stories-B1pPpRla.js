import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";var o,s,c,l,u=e((()=>{o=t(r(),1),i(),s=n(),c={xs:{vertical:`h-1`,horizontal:`w-1`},sm:{vertical:`h-2`,horizontal:`w-2`},md:{vertical:`h-4`,horizontal:`w-4`},lg:{vertical:`h-8`,horizontal:`w-8`},xl:{vertical:`h-12`,horizontal:`w-12`},"2xl":{vertical:`h-16`,horizontal:`w-16`}},l=o.forwardRef(({className:e,size:t=`md`,axis:n=`vertical`,...r},i)=>(0,s.jsx)(`div`,{ref:i,className:a(c[t][n],e),"aria-hidden":`true`,...r})),l.displayName=`Spacer`,l.__docgenInfo={description:``,methods:[],displayName:`Spacer`,props:{size:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`}]},description:`Size of the spacer`,defaultValue:{value:`"md"`,computed:!1}},axis:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Axis — vertical adds height, horizontal adds width`,defaultValue:{value:`"vertical"`,computed:!1}}}}})),d=e((()=>{u()})),f,p,m,h,g;e((()=>{d(),f=n(),p={title:`Layout/Spacer`,component:l,tags:[`autodocs`]},m={render:()=>(0,f.jsx)(`div`,{children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{className:`rounded border bg-card p-2 text-xs`,children:[`Content above (size="`,e,`")`]}),(0,f.jsx)(l,{size:e,className:`bg-primary/10`}),(0,f.jsx)(`div`,{className:`rounded border bg-card p-2 text-xs`,children:`Content below`}),(0,f.jsx)(l,{size:`lg`})]},e))})},h={render:()=>(0,f.jsxs)(`div`,{className:`flex items-center`,children:[(0,f.jsx)(`div`,{className:`rounded border bg-card p-3 text-xs`,children:`Left`}),(0,f.jsx)(l,{axis:`horizontal`,size:`xl`,className:`bg-primary/10`}),(0,f.jsx)(`div`,{className:`rounded border bg-card p-3 text-xs`,children:`Right`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(size => <div key={size}>
          <div className="rounded border bg-card p-2 text-xs">
            Content above (size=&quot;{size}&quot;)
          </div>
          <Spacer size={size} className="bg-primary/10" />
          <div className="rounded border bg-card p-2 text-xs">
            Content below
          </div>
          <Spacer size="lg" />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center">
      <div className="rounded border bg-card p-3 text-xs">Left</div>
      <Spacer axis="horizontal" size="xl" className="bg-primary/10" />
      <div className="rounded border bg-card p-3 text-xs">Right</div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VerticalSizes`,`Horizontal`]}))();export{h as Horizontal,m as VerticalSizes,g as __namedExportsOrder,p as default};