import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,bt as i,gn as a,r as o,zt as s}from"./iframe-zfMobaDd.js";var c,l,u,d=e((()=>{c=t(a(),1),r(),o(),l=n(),u=c.forwardRef(({className:e,items:t,type:n=`single`,defaultValue:r=[],...a},o)=>{let[u,d]=(0,c.useState)(r),f=e=>{d(n===`single`?t=>t.includes(e)?[]:[e]:t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsx)(`div`,{ref:o,className:s(`w-full`,e),...a,children:t.map(e=>{let t=u.includes(e.value);return(0,l.jsxs)(`div`,{className:`border-b`,children:[(0,l.jsxs)(`button`,{type:`button`,disabled:e.disabled,onClick:()=>f(e.value),className:s(`flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-expanded":t,children:[e.trigger,(0,l.jsx)(i,{className:s(`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200`,t&&`rotate-180`)})]}),(0,l.jsx)(`div`,{className:s(`overflow-hidden transition-all duration-200`,t?`max-h-96 pb-4`:`max-h-0`),children:(0,l.jsx)(`div`,{className:`text-muted-foreground text-sm`,children:e.content})})]},e.value)})})}),u.displayName=`Accordion`,u.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AccordionItem`}],raw:`AccordionItem[]`},description:``},type:{required:!1,tsType:{name:`union`,raw:`"single" | "multiple"`,elements:[{name:`literal`,value:`"single"`},{name:`literal`,value:`"multiple"`}]},description:`Allow multiple items open at once`,defaultValue:{value:`"single"`,computed:!1}},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Default open items`,defaultValue:{value:`[]`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b,x;e((()=>{f(),p=n(),m={title:`Data Display/Accordion`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A vertically stacked set of interactive headings that each reveal an associated panel of content. Supports single and multiple expansion modes with optional disabled items.`}}},argTypes:{type:{control:`select`,options:[`single`,`multiple`],description:`Controls whether only one or multiple items can be expanded simultaneously.`,table:{category:`Behavior`}},items:{description:`Array of accordion items containing value, trigger label, content, and optional disabled flag.`,table:{category:`Data`}},defaultValue:{description:`Array of values that should be expanded by default on initial render.`,table:{category:`Behavior`}}}},h=[{value:`1`,trigger:`Is it accessible?`,content:`Yes. It adheres to the WAI-ARIA design pattern.`},{value:`2`,trigger:`Is it styled?`,content:`Yes. It comes with default styles that match the Altrugenix design system.`},{value:`3`,trigger:`Is it animated?`,content:`Yes. It uses CSS transitions for smooth expand and collapse animations.`}],g={args:{items:h,type:`single`},parameters:{docs:{description:{story:`Only one item can be expanded at a time. Opening a new item automatically collapses the previous one.`}}}},_={args:{items:h,type:`multiple`,defaultValue:[`1`]},parameters:{docs:{description:{story:`Multiple items can be expanded simultaneously. The first item is expanded by default.`}}}},v={args:{items:h,type:`multiple`,defaultValue:[`1`,`2`,`3`]},parameters:{docs:{description:{story:"All items are expanded by default using the `defaultValue` prop with all item values."}}}},y={args:{items:[...h,{value:`4`,trigger:`Can I disable items?`,content:`This should not be visible.`,disabled:!0}],type:`single`},parameters:{docs:{description:{story:`Individual accordion items can be disabled to prevent interaction. Disabled items appear muted and cannot be toggled.`}}}},b={render:()=>(0,p.jsxs)(`div`,{className:`mx-auto max-w-2xl space-y-4`,children:[(0,p.jsx)(`h2`,{className:`text-foreground text-xl font-bold`,children:`Frequently Asked Questions`}),(0,p.jsx)(u,{type:`single`,items:[{value:`pricing`,trigger:`What plans are available?`,content:`We offer Free, Pro, and Enterprise plans. Each tier includes progressively more features, storage, and priority support options.`},{value:`trial`,trigger:`Is there a free trial?`,content:`Yes! Every new account starts with a 14-day free trial of our Pro plan. No credit card required.`},{value:`cancel`,trigger:`Can I cancel anytime?`,content:`Absolutely. You can cancel your subscription at any time from the billing settings. Your access continues until the end of the current billing period.`},{value:`support`,trigger:`How do I get support?`,content:`Free users have access to community forums. Pro and Enterprise users get priority email support and live chat during business hours.`}]})]}),parameters:{docs:{description:{story:`A real-world FAQ section demonstrating the accordion in a practical context with meaningful content.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: "single"
  },
  parameters: {
    docs: {
      description: {
        story: "Only one item can be expanded at a time. Opening a new item automatically collapses the previous one."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: "multiple",
    defaultValue: ["1"]
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple items can be expanded simultaneously. The first item is expanded by default."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    type: "multiple",
    defaultValue: ["1", "2", "3"]
  },
  parameters: {
    docs: {
      description: {
        story: "All items are expanded by default using the \`defaultValue\` prop with all item values."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...items, {
      value: "4",
      trigger: "Can I disable items?",
      content: "This should not be visible.",
      disabled: true
    }],
    type: "single"
  },
  parameters: {
    docs: {
      description: {
        story: "Individual accordion items can be disabled to prevent interaction. Disabled items appear muted and cannot be toggled."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-2xl space-y-4">
      <h2 className="text-foreground text-xl font-bold">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" items={[{
      value: "pricing",
      trigger: "What plans are available?",
      content: "We offer Free, Pro, and Enterprise plans. Each tier includes progressively more features, storage, and priority support options."
    }, {
      value: "trial",
      trigger: "Is there a free trial?",
      content: "Yes! Every new account starts with a 14-day free trial of our Pro plan. No credit card required."
    }, {
      value: "cancel",
      trigger: "Can I cancel anytime?",
      content: "Absolutely. You can cancel your subscription at any time from the billing settings. Your access continues until the end of the current billing period."
    }, {
      value: "support",
      trigger: "How do I get support?",
      content: "Free users have access to community forums. Pro and Enterprise users get priority email support and live chat during business hours."
    }]} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A real-world FAQ section demonstrating the accordion in a practical context with meaningful content."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Single`,`Multiple`,`AllExpanded`,`WithDisabled`,`FAQ`]}))();export{v as AllExpanded,b as FAQ,_ as Multiple,g as Single,y as WithDisabled,x as __namedExportsOrder,m as default};