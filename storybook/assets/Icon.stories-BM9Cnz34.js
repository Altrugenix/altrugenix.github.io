import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,i as a,r as o,zt as s}from"./iframe-zfMobaDd.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),o(),l=n(),u=c.forwardRef(({className:e,name:t,size:n=24,...r},i)=>{let o=a[t];return o?(0,l.jsx)(o,{ref:i,className:s(`lucide`,e),size:n,...r}):null}),u.displayName=`Icon`,u.__docgenInfo={description:``,methods:[],displayName:`Icon`,props:{name:{required:!0,tsType:{name:`unknown`},description:``},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`24`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y;e((()=>{f(),p=n(),m={title:`Data Display/Icon`,component:u,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A wrapper around Lucide icons that renders any icon by name with configurable size. Uses the full Lucide icon library under the hood.`}}},argTypes:{name:{description:`The name of the Lucide icon (e.g. 'Home', 'Settings', 'User').`,table:{category:`Content`}},size:{control:{type:`number`,min:12,max:64},description:`Size of the icon in pixels.`,table:{category:`Appearance`}}}},h={args:{name:`Home`,size:24}},g={render:()=>(0,p.jsx)(`div`,{className:`flex items-end gap-6`,children:[16,20,24,32,48].map(e=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,p.jsx)(u,{name:`Heart`,size:e}),(0,p.jsxs)(`span`,{className:`text-muted-foreground text-xs`,children:[e,`px`]})]},e))}),parameters:{docs:{description:{story:`Icons at various sizes from 16px to 48px.`}}}},_={render:()=>(0,p.jsx)(`div`,{className:`grid grid-cols-6 gap-4`,children:[`Home`,`User`,`Settings`,`Search`,`Bell`,`Mail`,`Heart`,`Star`,`Trash2`,`Edit`,`Plus`,`X`,`Check`,`ChevronDown`,`ChevronRight`,`ArrowRight`,`Download`,`Upload`,`Share2`,`Copy`,`Eye`,`EyeOff`,`Lock`,`Unlock`].map(e=>(0,p.jsxs)(`div`,{className:`hover:bg-muted/50 flex flex-col items-center gap-2 rounded-lg border p-3 transition-colors`,children:[(0,p.jsx)(u,{name:e,size:24}),(0,p.jsx)(`span`,{className:`text-muted-foreground font-mono text-[10px]`,children:e})]},e))}),parameters:{docs:{description:{story:`A grid showing commonly used icons with their names. The full Lucide library is available.`}}}},v={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,p.jsx)(u,{name:`Heart`,size:24,className:`text-rose-500`}),(0,p.jsx)(u,{name:`Star`,size:24,className:`text-amber-500`}),(0,p.jsx)(u,{name:`Check`,size:24,className:`text-emerald-500`}),(0,p.jsx)(u,{name:`AlertTriangle`,size:24,className:`text-orange-500`}),(0,p.jsx)(u,{name:`Info`,size:24,className:`text-sky-500`})]}),parameters:{docs:{description:{story:`Icons colored with Tailwind text color utilities.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Home",
    size: 24
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {[16, 20, 24, 32, 48].map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="Heart" size={size} />
          <span className="text-muted-foreground text-xs">{size}px</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icons at various sizes from 16px to 48px."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const icons = ["Home", "User", "Settings", "Search", "Bell", "Mail", "Heart", "Star", "Trash2", "Edit", "Plus", "X", "Check", "ChevronDown", "ChevronRight", "ArrowRight", "Download", "Upload", "Share2", "Copy", "Eye", "EyeOff", "Lock", "Unlock"] as const;
    return <div className="grid grid-cols-6 gap-4">
        {icons.map(name => <div key={name} className="hover:bg-muted/50 flex flex-col items-center gap-2 rounded-lg border p-3 transition-colors">
            <Icon name={name} size={24} />
            <span className="text-muted-foreground font-mono text-[10px]">
              {name}
            </span>
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "A grid showing commonly used icons with their names. The full Lucide library is available."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Icon name="Heart" size={24} className="text-rose-500" />
      <Icon name="Star" size={24} className="text-amber-500" />
      <Icon name="Check" size={24} className="text-emerald-500" />
      <Icon name="AlertTriangle" size={24} className="text-orange-500" />
      <Icon name="Info" size={24} className="text-sky-500" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icons colored with Tailwind text color utilities."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Sizes`,`IconGrid`,`WithColor`]}))();export{h as Default,_ as IconGrid,g as Sizes,v as WithColor,y as __namedExportsOrder,m as default};