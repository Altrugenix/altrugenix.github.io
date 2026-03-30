import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,i as r,r as i,s as a,tt as o,y as s}from"./iframe-B3RxNkLM.js";var c,l,u,d=e((()=>{c=t(o(),1),r(),a(),l=n(),u=c.forwardRef(({className:e,items:t,separator:n,...r},a)=>(0,l.jsx)(`nav`,{ref:a,"aria-label":`Breadcrumb`,className:i(e),...r,children:(0,l.jsx)(`ol`,{className:`flex items-center gap-1.5 text-sm`,children:t.map((e,r)=>{let a=r===t.length-1;return(0,l.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[e.href||e.onClick?(0,l.jsx)(`a`,{href:e.href||`#`,onClick:t=>{e.onClick&&(t.preventDefault(),e.onClick())},className:i(`transition-colors hover:text-foreground`,a?`font-medium text-foreground pointer-events-none`:`text-muted-foreground`),"aria-current":a?`page`:void 0,children:e.label}):(0,l.jsx)(`span`,{className:i(a?`font-medium text-foreground`:`text-muted-foreground`),"aria-current":a?`page`:void 0,children:e.label}),!a&&(0,l.jsx)(`span`,{className:`text-muted-foreground`,"aria-hidden":`true`,children:n||(0,l.jsx)(s,{className:`h-3.5 w-3.5`})})]},r)})})})),u.displayName=`Breadcrumbs`,u.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},separator:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Separator between items — defaults to ChevronRight icon`}}}})),f=e((()=>{d()})),p,m,h,g,_;e((()=>{f(),p={title:`Composites/Breadcrumbs`,component:u,tags:[`autodocs`]},m={args:{items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Widget Pro`}]}},h={args:{items:[{label:`Dashboard`,href:`/`},{label:`Settings`}]}},g={args:{items:[{label:`Home`},{label:`Docs`},{label:`Components`}],separator:`/`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`TwoLevels`,`CustomSeparator`]}))();export{g as CustomSeparator,m as Default,h as TwoLevels,_ as __namedExportsOrder,p as default};