import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,q as a,r as o,s}from"./iframe-CAjx62e_.js";var c,l,u,d,f=e((()=>{c=t(r(),1),i(),s(),l=n(),u={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-8 w-8`,xl:`h-12 w-12`},d=c.forwardRef(({className:e,size:t=`md`,label:n,...r},i)=>(0,l.jsxs)(`div`,{ref:i,role:`status`,className:o(`flex flex-col items-center justify-center gap-2`,e),...r,children:[(0,l.jsx)(a,{className:o(`animate-spin text-primary`,u[t]),"aria-hidden":`true`}),n&&(0,l.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:n}),(0,l.jsx)(`span`,{className:`sr-only`,children:n||`Loading...`})]})),d.displayName=`Spinner`,d.__docgenInfo={description:`Spinner / Loader component using Lucide's Loader2 icon with a spin animation.`,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Size of the spinner`,defaultValue:{value:`"md"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Optional label displayed below the spinner`}}}})),p=e((()=>{f()})),m,h,g,_,v,y;e((()=>{p(),m=n(),h={title:`Composites/Spinner`,component:d,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]}}},g={args:{}},_={args:{label:`Loading data...`,size:`lg`}},v={render:()=>(0,m.jsxs)(`div`,{className:`flex items-end gap-8`,children:[(0,m.jsx)(d,{size:`sm`,label:`SM`}),(0,m.jsx)(d,{size:`md`,label:`MD`}),(0,m.jsx)(d,{size:`lg`,label:`LG`}),(0,m.jsx)(d,{size:`xl`,label:`XL`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading data...",
    size: "lg"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8">
      <Spinner size="sm" label="SM" />
      <Spinner size="md" label="MD" />
      <Spinner size="lg" label="LG" />
      <Spinner size="xl" label="XL" />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLabel`,`AllSizes`]}))();export{v as AllSizes,g as Default,_ as WithLabel,y as __namedExportsOrder,h as default};