import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{i as n,j as r,pt as i,r as a,s as o,z as s}from"./iframe-DM0JAH7r.js";var c,l,u,d=e((()=>{c=t(i(),1),n(),o(),l=s(),u=c.forwardRef(({className:e,items:t,type:n=`single`,defaultValue:i=[],...o},s)=>{let[u,d]=(0,c.useState)(i),f=e=>{d(n===`single`?t=>t.includes(e)?[]:[e]:t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsx)(`div`,{ref:s,className:a(`w-full`,e),...o,children:t.map(e=>{let t=u.includes(e.value);return(0,l.jsxs)(`div`,{className:`border-b`,children:[(0,l.jsxs)(`button`,{type:`button`,disabled:e.disabled,onClick:()=>f(e.value),className:a(`flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-expanded":t,children:[e.trigger,(0,l.jsx)(r,{className:a(`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200`,t&&`rotate-180`)})]}),(0,l.jsx)(`div`,{className:a(`overflow-hidden transition-all duration-200`,t?`max-h-96 pb-4`:`max-h-0`),children:(0,l.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:e.content})})]},e.value)})})}),u.displayName=`Accordion`,u.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AccordionItem`}],raw:`AccordionItem[]`},description:``},type:{required:!1,tsType:{name:`union`,raw:`"single" | "multiple"`,elements:[{name:`literal`,value:`"single"`},{name:`literal`,value:`"multiple"`}]},description:`Allow multiple items open at once`,defaultValue:{value:`"single"`,computed:!1}},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Default open items`,defaultValue:{value:`[]`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v;e((()=>{f(),p={title:`Data Display/Accordion`,component:u,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`single`,`multiple`]}}},m=[{value:`1`,trigger:`Is it accessible?`,content:`Yes. It adheres to the WAI-ARIA design pattern.`},{value:`2`,trigger:`Is it styled?`,content:`Yes. It comes with default styles that match the Altrugenix design system.`},{value:`3`,trigger:`Is it animated?`,content:`Yes. It uses CSS transitions for smooth expand and collapse animations.`}],h={args:{items:m,type:`single`}},g={args:{items:m,type:`multiple`,defaultValue:[`1`]}},_={args:{items:[...m,{value:`4`,trigger:`Can I disable items?`,content:`This should not be visible.`,disabled:!0}],type:`single`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: "single"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: "multiple",
    defaultValue: ["1"]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...items, {
      value: "4",
      trigger: "Can I disable items?",
      content: "This should not be visible.",
      disabled: true
    }],
    type: "single"
  }
}`,..._.parameters?.docs?.source}}},v=[`Single`,`Multiple`,`WithDisabled`]}))();export{g as Multiple,h as Single,_ as WithDisabled,v as __namedExportsOrder,p as default};