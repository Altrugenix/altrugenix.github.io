import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";import{n as o,t as s}from"./dist-C2GwZUMa.js";var c,l,u,d,f=e((()=>{c=t(i(),1),o(),r(),l=n(),u=s(`transition-colors duration-200`,{variants:{variant:{h1:`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading`,h2:`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading`,h3:`scroll-m-20 text-2xl font-semibold tracking-tight font-heading`,h4:`scroll-m-20 text-xl font-semibold tracking-tight font-heading`,h5:`scroll-m-20 text-lg font-semibold tracking-tight font-heading`,h6:`scroll-m-20 text-base font-semibold tracking-tight font-heading`,body1:`text-base leading-7 [&:not(:first-child)]:mt-6`,body2:`text-sm leading-6 [&:not(:first-child)]:mt-4`,caption:`text-xs font-medium leading-none text-muted-foreground`,overline:`text-xs font-bold uppercase tracking-widest text-muted-foreground/80`},weight:{thin:`font-thin`,light:`font-light`,normal:`font-normal`,medium:`font-medium`,semibold:`font-semibold`,bold:`font-bold`,black:`font-black`},align:{left:`text-left`,center:`text-center`,right:`text-right`,justify:`text-justify`},noWrap:{true:`truncate`},gutter:{true:`mb-4`}},defaultVariants:{variant:`body1`,weight:`normal`,align:`left`}}),d=c.forwardRef(({className:e,variant:t,weight:n,align:r,noWrap:i,gutter:o,as:s,...c},d)=>(0,l.jsx)(s||(t&&[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(t)?t:t===`caption`||t===`overline`?`span`:`p`),{ref:d,className:a(u({variant:t,weight:n,align:r,noWrap:i,gutter:o,className:e})),...c})),d.displayName=`Typography`,d.__docgenInfo={description:`A high-level component to manage consistent text styles (Size, Weight, Color) across the app.
Inspired by Joy UI and MUI Typography.`,methods:[],displayName:`Typography`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``}},composes:[`VariantProps`]}})),p=e((()=>{f()})),m,h,g,_,v,y;e((()=>{p(),m=n(),h={title:`Typography/Typography`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:"A unified Typography component for handling headings, body text, and metadata. Automatically renders the appropriate semantic HTML tag (e.g. `<h1>` for `variant='h1'`)."}}},argTypes:{variant:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`body1`,`body2`,`caption`,`overline`],description:`Semantic text style variant.`,table:{category:`Appearance`}},weight:{control:`select`,options:[`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],description:`Font weight override.`,table:{category:`Appearance`}},align:{control:`select`,options:[`left`,`center`,`right`,`justify`],description:`Text alignment.`,table:{category:`Appearance`}},noWrap:{control:`boolean`,description:`Truncate text with an ellipsis when it overflows.`,table:{category:`Appearance`}},gutter:{control:`boolean`,description:`Add bottom margin to the element.`,table:{category:`Layout`}},as:{control:`text`,description:`HTML element override (e.g. 'span', 'div').`,table:{category:`Behavior`}}}},g={args:{variant:`body1`,children:`The quick brown fox jumps over the lazy dog.`}},_={render:()=>(0,m.jsxs)(`div`,{className:`space-y-6`,children:[(0,m.jsxs)(`div`,{className:`space-y-1`,children:[(0,m.jsx)(d,{variant:`overline`,className:`text-muted-foreground`,children:`Headings`}),(0,m.jsx)(d,{variant:`h1`,children:`Heading 1`}),(0,m.jsx)(d,{variant:`h2`,children:`Heading 2`}),(0,m.jsx)(d,{variant:`h3`,children:`Heading 3`}),(0,m.jsx)(d,{variant:`h4`,children:`Heading 4`}),(0,m.jsx)(d,{variant:`h5`,children:`Heading 5`}),(0,m.jsx)(d,{variant:`h6`,children:`Heading 6`})]}),(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(d,{variant:`overline`,className:`text-muted-foreground`,children:`Body Text`}),(0,m.jsx)(d,{variant:`body1`,children:`Body 1: The quick brown fox jumps over the lazy dog. This is the default text style for paragraphs and long-form content.`}),(0,m.jsx)(d,{variant:`body2`,children:`Body 2: The quick brown fox jumps over the lazy dog. This is a slightly smaller text style for supporting content.`})]}),(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsx)(d,{variant:`overline`,className:`text-muted-foreground`,children:`Metadata`}),(0,m.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,m.jsx)(d,{variant:`caption`,children:`Caption: Last updated 2 minutes ago`}),(0,m.jsx)(d,{variant:`overline`,children:`Overline: Premium Component`})]})]})]}),parameters:{docs:{description:{story:`A comprehensive showcase of all typography variants.`}}}},v={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(d,{variant:`h2`,weight:`black`,align:`center`,className:`text-primary italic`,children:`Bold Center Italic`}),(0,m.jsx)(d,{variant:`body1`,noWrap:!0,className:`max-w-[200px] border p-2`,children:`This is a very long text that will eventually be truncated because noWrap is set to true and there is a max width.`}),(0,m.jsx)(d,{variant:`h4`,gutter:!0,children:`With Gutter Bottom`}),(0,m.jsx)(d,{variant:`body1`,children:`The text above has a margin bottom because gutter is set to true.`})]}),parameters:{docs:{description:{story:"Demonstrates weight overrides, text truncation (`noWrap`), and bottom margins (`gutter`)."}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "body1",
    children: "The quick brown fox jumps over the lazy dog."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-1">
        <Typography variant="overline" className="text-muted-foreground">
          Headings
        </Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline" className="text-muted-foreground">
          Body Text
        </Typography>
        <Typography variant="body1">
          Body 1: The quick brown fox jumps over the lazy dog. This is the
          default text style for paragraphs and long-form content.
        </Typography>
        <Typography variant="body2">
          Body 2: The quick brown fox jumps over the lazy dog. This is a
          slightly smaller text style for supporting content.
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline" className="text-muted-foreground">
          Metadata
        </Typography>
        <div className="flex flex-col gap-1">
          <Typography variant="caption">
            Caption: Last updated 2 minutes ago
          </Typography>
          <Typography variant="overline">
            Overline: Premium Component
          </Typography>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A comprehensive showcase of all typography variants."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h2" weight="black" align="center" className="text-primary italic">
        Bold Center Italic
      </Typography>
      <Typography variant="body1" noWrap className="max-w-[200px] border p-2">
        This is a very long text that will eventually be truncated because
        noWrap is set to true and there is a max width.
      </Typography>
      <Typography variant="h4" gutter>
        With Gutter Bottom
      </Typography>
      <Typography variant="body1">
        The text above has a margin bottom because gutter is set to true.
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates weight overrides, text truncation (\`noWrap\`), and bottom margins (\`gutter\`)."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Variants`,`Customization`]}))();export{v as Customization,g as Default,_ as Variants,y as __namedExportsOrder,h as default};