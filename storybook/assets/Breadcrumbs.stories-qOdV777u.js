import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,r as a,vt as o,zt as s}from"./iframe-coe0kFk0.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),a(),l=n(),u=c.forwardRef(({className:e,items:t,separator:n,...r},i)=>(0,l.jsx)(`nav`,{ref:i,"aria-label":`Breadcrumb`,className:s(e),...r,children:(0,l.jsx)(`ol`,{className:`flex items-center gap-1.5 text-sm`,children:t.map((e,r)=>{let i=r===t.length-1;return(0,l.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[e.href||e.onClick?(0,l.jsx)(`a`,{href:e.href||`#`,onClick:t=>{e.onClick&&(t.preventDefault(),e.onClick())},className:s(`hover:text-foreground transition-colors`,i?`text-foreground pointer-events-none font-medium`:`text-muted-foreground`),"aria-current":i?`page`:void 0,children:e.label}):(0,l.jsx)(`span`,{className:s(i?`text-foreground font-medium`:`text-muted-foreground`),"aria-current":i?`page`:void 0,children:e.label}),!i&&(0,l.jsx)(`span`,{className:`text-muted-foreground`,"aria-hidden":`true`,children:n||(0,l.jsx)(o,{className:`h-3.5 w-3.5`})})]},r)})})})),u.displayName=`Breadcrumbs`,u.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},separator:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Separator between items — defaults to ChevronRight icon`}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y;e((()=>{f(),p={title:`Navigation/Breadcrumbs`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A navigation aid showing the user's current location within a site hierarchy. Supports custom separators and clickable parent links.`}}},argTypes:{items:{description:`Array of breadcrumb items with label and optional href. The last item is treated as the current page.`,table:{category:`Data`}},separator:{description:`Custom separator character between breadcrumb items.`,table:{category:`Appearance`}}}},m={args:{items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Widget Pro`}]}},h={args:{items:[{label:`Dashboard`,href:`/`},{label:`Settings`}]}},g={args:{items:[{label:`Home`},{label:`Docs`},{label:`Components`}],separator:`/`},parameters:{docs:{description:{story:`A custom separator character (/) replaces the default chevron between items.`}}}},_={args:{items:[{label:`Home`,href:`/`},{label:`Documentation`,href:`/docs`},{label:`Components`,href:`/docs/components`},{label:`Forms`,href:`/docs/components/forms`},{label:`Input`}]},parameters:{docs:{description:{story:`A deeply nested breadcrumb trail with five levels — common in documentation sites.`}}}},v={args:{items:[{label:`Home`}]},parameters:{docs:{description:{story:`A breadcrumb with a single item (root page) — no separators are rendered.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Products",
      href: "/products"
    }, {
      label: "Widget Pro"
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/"
    }, {
      label: "Settings"
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home"
    }, {
      label: "Docs"
    }, {
      label: "Components"
    }],
    separator: "/"
  },
  parameters: {
    docs: {
      description: {
        story: "A custom separator character (/) replaces the default chevron between items."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Documentation",
      href: "/docs"
    }, {
      label: "Components",
      href: "/docs/components"
    }, {
      label: "Forms",
      href: "/docs/components/forms"
    }, {
      label: "Input"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A deeply nested breadcrumb trail with five levels — common in documentation sites."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "A breadcrumb with a single item (root page) — no separators are rendered."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`TwoLevels`,`CustomSeparator`,`DeepHierarchy`,`SingleItem`]}))();export{g as CustomSeparator,_ as DeepHierarchy,m as Default,v as SingleItem,h as TwoLevels,y as __namedExportsOrder,p as default};