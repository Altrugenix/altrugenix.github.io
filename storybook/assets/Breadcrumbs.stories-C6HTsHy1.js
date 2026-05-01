import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a,pt as o,r as s}from"./iframe-By8sOsRq.js";var c,l,u,d=e((()=>{c=t(a(),1),i(),s(),l=r(),u=c.forwardRef(({className:e,items:t,separator:r,...i},a)=>(0,l.jsx)(`nav`,{ref:a,"aria-label":`Breadcrumb`,className:n(e),...i,children:(0,l.jsx)(`ol`,{className:`flex items-center gap-1.5 text-sm`,children:t.map((e,i)=>{let a=i===t.length-1;return(0,l.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[e.href||e.onClick?(0,l.jsx)(`a`,{href:e.href||`#`,onClick:t=>{e.onClick&&(t.preventDefault(),e.onClick())},className:n(`hover:text-foreground transition-colors`,a?`text-foreground pointer-events-none font-medium`:`text-muted-foreground`),"aria-current":a?`page`:void 0,children:e.label}):(0,l.jsx)(`span`,{className:n(a?`text-foreground font-medium`:`text-muted-foreground`),"aria-current":a?`page`:void 0,children:e.label}),!a&&(0,l.jsx)(`span`,{className:`text-muted-foreground`,"aria-hidden":`true`,children:r||(0,l.jsx)(o,{className:`h-3.5 w-3.5`})})]},i)})})})),u.displayName=`Breadcrumbs`,u.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`}})),f,p,m,h,g;e((()=>{d(),f={title:`Composites/Breadcrumbs`,component:u,tags:[`autodocs`]},p={args:{items:[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Widget Pro`}]}},m={args:{items:[{label:`Dashboard`,href:`/`},{label:`Settings`}]}},h={args:{items:[{label:`Home`},{label:`Docs`},{label:`Components`}],separator:`/`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/"
    }, {
      label: "Settings"
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`TwoLevels`,`CustomSeparator`]}))();export{h as CustomSeparator,p as Default,m as TwoLevels,g as __namedExportsOrder,f as default};