import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,U as a,ln as o,r as s}from"./iframe-By8sOsRq.js";var c,l,u,d,f=e((()=>{c=t(o(),1),i(),s(),l=r(),u={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-8 w-8`,xl:`h-12 w-12`},d=c.forwardRef(({className:e,size:t=`md`,label:r,...i},o)=>(0,l.jsxs)(`div`,{ref:o,role:`status`,className:n(`flex flex-col items-center justify-center gap-2`,e),...i,children:[(0,l.jsx)(a,{className:n(`text-primary animate-spin`,u[t]),"aria-hidden":`true`}),r&&(0,l.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:r}),(0,l.jsx)(`span`,{className:`sr-only`,children:r||`Loading...`})]})),d.displayName=`Spinner`,d.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{defaultValue:{value:`"md"`,computed:!1},required:!1}}}})),p,m,h,g,_,v;e((()=>{f(),p=r(),m={title:`Composites/Spinner`,component:d,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]}}},h={args:{}},g={args:{label:`Loading data...`,size:`lg`}},_={render:()=>(0,p.jsxs)(`div`,{className:`flex items-end gap-8`,children:[(0,p.jsx)(d,{size:`sm`,label:`SM`}),(0,p.jsx)(d,{size:`md`,label:`MD`}),(0,p.jsx)(d,{size:`lg`,label:`LG`}),(0,p.jsx)(d,{size:`xl`,label:`XL`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading data...",
    size: "lg"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8">
      <Spinner size="sm" label="SM" />
      <Spinner size="md" label="MD" />
      <Spinner size="lg" label="LG" />
      <Spinner size="xl" label="XL" />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithLabel`,`AllSizes`]}))();export{_ as AllSizes,h as Default,g as WithLabel,v as __namedExportsOrder,m as default};