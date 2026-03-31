import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{L as n,M as r,dt as i,f as a,i as o,l as s,r as c,s as l}from"./iframe-CMmeXSus.js";var u,d,f,p=e((()=>{u=t(i(),1),o(),d=n(),f=u.forwardRef(({className:e,items:t,value:n,defaultValue:r,onValueChange:i,variant:a=`default`,...o},s)=>{let[l,f]=(0,u.useState)(r||t[0]?.value||``),p=n??l,m=e=>{n===void 0&&f(e),i?.(e)},h=t.find(e=>e.value===p)?.content,g={default:`inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground`,pills:`inline-flex h-10 items-center justify-start gap-1 text-muted-foreground`,underline:`inline-flex h-10 items-center justify-start gap-4 border-b text-muted-foreground`},_={default:`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,pills:`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,underline:`inline-flex items-center justify-center whitespace-nowrap pb-2.5 pt-1.5 px-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 -mb-px`},v={default:`bg-background text-foreground shadow-sm`,pills:`bg-primary text-primary-foreground shadow-sm`,underline:`border-primary text-foreground`},y={default:``,pills:`hover:bg-muted hover:text-foreground`,underline:`border-transparent hover:text-foreground`};return(0,d.jsxs)(`div`,{ref:s,className:c(`w-full`,e),...o,children:[(0,d.jsx)(`div`,{className:c(g[a]),role:`tablist`,children:t.map(e=>(0,d.jsxs)(`button`,{role:`tab`,"aria-selected":p===e.value,"aria-controls":`tabpanel-${e.value}`,disabled:e.disabled,onClick:()=>m(e.value),className:c(_[a],p===e.value?v[a]:y[a]),children:[e.icon&&(0,d.jsx)(`span`,{className:`mr-2 inline-flex`,children:e.icon}),e.label]},e.value))}),(0,d.jsx)(`div`,{role:`tabpanel`,id:`tabpanel-${p}`,className:`mt-4`,children:h})]})}),f.displayName=`Tabs`,f.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},value:{required:!1,tsType:{name:`string`},description:`Controlled value — the currently active tab value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default active tab value (uncontrolled)`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Callback when the active tab changes`},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "pills" | "underline"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"pills"`},{name:`literal`,value:`"underline"`}]},description:`Visual variant of the tab list`,defaultValue:{value:`"default"`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S,C;e((()=>{m(),l(),h=n(),g={title:`Composites/Tabs`,component:f,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`pills`,`underline`]}}},_=[{label:`Overview`,value:`overview`,content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Overview content panel.`})},{label:`Analytics`,value:`analytics`,content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Analytics content panel.`})},{label:`Settings`,value:`settings`,content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Settings content panel.`})}],v={args:{items:_,variant:`default`}},y={args:{items:_,variant:`pills`}},b={args:{items:_,variant:`underline`}},x={args:{variant:`default`,items:[{label:`Profile`,value:`profile`,icon:(0,h.jsx)(s,{className:`h-4 w-4`}),content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Profile settings.`})},{label:`Analytics`,value:`analytics`,icon:(0,h.jsx)(r,{className:`h-4 w-4`}),content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Analytics data.`})},{label:`Settings`,value:`settings`,icon:(0,h.jsx)(a,{className:`h-4 w-4`}),content:(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`App settings.`})}]}},S={args:{variant:`default`,items:[..._,{label:`Billing`,value:`billing`,disabled:!0,content:(0,h.jsx)(`p`,{children:`Billing (disabled)`})}]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "default"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "pills"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    variant: "underline"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    items: [{
      label: "Profile",
      value: "profile",
      icon: <User className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">Profile settings.</p>
    }, {
      label: "Analytics",
      value: "analytics",
      icon: <BarChart className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">Analytics data.</p>
    }, {
      label: "Settings",
      value: "settings",
      icon: <Settings className="h-4 w-4" />,
      content: <p className="text-sm text-muted-foreground">App settings.</p>
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    items: [...tabItems, {
      label: "Billing",
      value: "billing",
      disabled: true,
      content: <p>Billing (disabled)</p>
    }]
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Pills`,`Underline`,`WithIcons`,`WithDisabled`]}))();export{v as Default,y as Pills,b as Underline,S as WithDisabled,x as WithIcons,C as __namedExportsOrder,g as default};