import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({className:e,as:t=`p`,...n},r)=>(0,s.jsx)(t,{ref:r,className:a(`leading-7 [&:not(:first-child)]:mt-6`,e),...n})),c.displayName=`Text`,c.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``,defaultValue:{value:`"p"`,computed:!1}}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_,v,y;e((()=>{u(),d=n(),f={title:`Typography/Text`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:"A polymorphic text component for body copy. Renders as `<p>` by default but can be changed to any element via the `as` prop. Provides consistent line-height and spacing."}}},argTypes:{as:{control:`select`,options:[`p`,`span`,`div`,`label`,`small`],description:`The HTML element to render as.`,table:{category:`Behavior`}},children:{description:`Text content.`,table:{category:`Content`}}}},p={args:{children:`The king had stay'd his hand. The sky was clear, and the world was young. In the silence of the night, a single star shone brighter than the rest.`}},m={args:{className:`text-muted-foreground`,children:`This is a muted text description.`},parameters:{docs:{description:{story:"Muted text using the `text-muted-foreground` utility for secondary content."}}}},h={args:{className:`text-lg font-semibold`,children:`This is large, semi-bold text.`}},g={args:{className:`text-sm leading-none`,children:`This is small text for fine print.`}},_={args:{as:`span`,children:`This renders as an inline <span> element.`,className:`text-primary font-medium`},parameters:{docs:{description:{story:"Using the `as` prop to render as an inline `<span>` instead of a block `<p>`."}}}},v={render:()=>(0,d.jsxs)(`article`,{className:`max-w-lg space-y-0`,children:[(0,d.jsx)(c,{className:`text-lg font-semibold`,children:`Introduction`}),(0,d.jsx)(c,{children:`The design system provides a set of reusable components and tokens that help teams build consistent, accessible, and beautiful user interfaces.`}),(0,d.jsx)(c,{children:`Each component is designed to be composable, themeable, and responsive out of the box. They follow WAI-ARIA guidelines for maximum accessibility.`}),(0,d.jsx)(c,{className:`text-muted-foreground text-sm`,children:`Last updated: May 2026`})]}),parameters:{docs:{description:{story:`Multiple Text components used together in an article layout — demonstrates automatic spacing between paragraphs.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: "The king had stay'd his hand. The sky was clear, and the world was young. In the silence of the night, a single star shone brighter than the rest."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    className: "text-muted-foreground",
    children: "This is a muted text description."
  },
  parameters: {
    docs: {
      description: {
        story: "Muted text using the \`text-muted-foreground\` utility for secondary content."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: "text-lg font-semibold",
    children: "This is large, semi-bold text."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    className: "text-sm leading-none",
    children: "This is small text for fine print."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    as: "span",
    children: "This renders as an inline <span> element.",
    className: "text-primary font-medium"
  },
  parameters: {
    docs: {
      description: {
        story: "Using the \`as\` prop to render as an inline \`<span>\` instead of a block \`<p>\`."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <article className="max-w-lg space-y-0">
      <Text className="text-lg font-semibold">Introduction</Text>
      <Text>
        The design system provides a set of reusable components and tokens that
        help teams build consistent, accessible, and beautiful user interfaces.
      </Text>
      <Text>
        Each component is designed to be composable, themeable, and responsive
        out of the box. They follow WAI-ARIA guidelines for maximum
        accessibility.
      </Text>
      <Text className="text-muted-foreground text-sm">
        Last updated: May 2026
      </Text>
    </article>,
  parameters: {
    docs: {
      description: {
        story: "Multiple Text components used together in an article layout — demonstrates automatic spacing between paragraphs."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Muted`,`Large`,`Small`,`AsSpan`,`Prose`]}))();export{_ as AsSpan,p as Default,h as Large,m as Muted,v as Prose,g as Small,y as __namedExportsOrder,f as default};