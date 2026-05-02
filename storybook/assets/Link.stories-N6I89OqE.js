import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,it as a,kt as o,r as s,zt as c}from"./iframe-zfMobaDd.js";var l,u,d,f=e((()=>{l=t(i(),1),r(),u=n(),d=l.forwardRef(({className:e,...t},n)=>(0,u.jsx)(`a`,{ref:n,className:c(`text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors`,e),...t})),d.displayName=`Link`,d.__docgenInfo={description:``,methods:[],displayName:`Link`}})),p=e((()=>{f()})),m,h,g,_,v,y,b;e((()=>{p(),s(),m=n(),h={title:`Navigation/Link`,component:d,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A styled anchor element for navigation. Provides consistent link styling with hover and focus states across the design system.`}}},argTypes:{href:{description:`The URL or path the link points to.`,table:{category:`Navigation`}},children:{description:`Link text content.`,table:{category:`Content`}}}},g={args:{href:`#`,children:`This is a link`}},_={render:()=>(0,m.jsxs)(d,{href:`#`,className:`inline-flex items-center gap-1`,children:[`External documentation `,(0,m.jsx)(a,{className:`h-3 w-3`})]}),parameters:{docs:{description:{story:`A link with a trailing icon indicating an external destination.`}}}},v={render:()=>(0,m.jsxs)(`p`,{className:`text-foreground/80 max-w-md text-sm leading-relaxed`,children:[`By creating an account you agree to our`,` `,(0,m.jsx)(d,{href:`#`,children:`Terms of Service`}),` and`,` `,(0,m.jsx)(d,{href:`#`,children:`Privacy Policy`}),`. For questions, visit our`,` `,(0,m.jsx)(d,{href:`#`,children:`Help Center`}),`.`]}),parameters:{docs:{description:{story:`Links used inline within a paragraph of text — the most common usage pattern.`}}}},y={render:()=>(0,m.jsx)(`nav`,{className:`space-y-2`,children:[`Getting Started`,`Components`,`Theming`,`API Reference`,`Changelog`].map(e=>(0,m.jsxs)(d,{href:`#`,className:`hover:bg-muted flex items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors`,children:[e,(0,m.jsx)(o,{className:`text-muted-foreground h-4 w-4`})]},e))}),parameters:{docs:{description:{story:`Links styled as a navigation list — suitable for sidebars and documentation menus.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "This is a link"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Link href="#" className="inline-flex items-center gap-1">
      External documentation <ExternalLink className="h-3 w-3" />
    </Link>,
  parameters: {
    docs: {
      description: {
        story: "A link with a trailing icon indicating an external destination."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-foreground/80 max-w-md text-sm leading-relaxed">
      By creating an account you agree to our{" "}
      <Link href="#">Terms of Service</Link> and{" "}
      <Link href="#">Privacy Policy</Link>. For questions, visit our{" "}
      <Link href="#">Help Center</Link>.
    </p>,
  parameters: {
    docs: {
      description: {
        story: "Links used inline within a paragraph of text — the most common usage pattern."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <nav className="space-y-2">
      {["Getting Started", "Components", "Theming", "API Reference", "Changelog"].map(item => <Link key={item} href="#" className="hover:bg-muted flex items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors">
          {item}
          <ArrowRight className="text-muted-foreground h-4 w-4" />
        </Link>)}
    </nav>,
  parameters: {
    docs: {
      description: {
        story: "Links styled as a navigation list — suitable for sidebars and documentation menus."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithIcon`,`InParagraph`,`NavigationList`]}))();export{g as Default,v as InParagraph,y as NavigationList,_ as WithIcon,b as __namedExportsOrder,h as default};