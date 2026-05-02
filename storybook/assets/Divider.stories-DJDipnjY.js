import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-zfMobaDd.js";import{a as o,t as s}from"./src-DjwHjl2X.js";var c,l,u,d=e((()=>{c=t(i(),1),r(),l=n(),u=c.forwardRef(({className:e,orientation:t=`horizontal`,label:n,...r},i)=>n&&t===`horizontal`?(0,l.jsxs)(`div`,{ref:i,className:a(`flex items-center gap-3`,e),role:`separator`,...r,children:[(0,l.jsx)(`div`,{className:`bg-border h-px flex-1`}),(0,l.jsx)(`span`,{className:`text-muted-foreground text-xs font-medium`,children:n}),(0,l.jsx)(`div`,{className:`bg-border h-px flex-1`})]}):(0,l.jsx)(`div`,{ref:i,role:`separator`,className:a(t===`horizontal`?`bg-border h-px w-full`:`bg-border inline-block h-full w-px`,e),...r})),u.displayName=`Divider`,u.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation`,defaultValue:{value:`"horizontal"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Optional label displayed in the center`}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),s(),p=n(),m={title:`Layout/Divider`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A visual separator for creating distinct content sections. Supports horizontal and vertical orientations, with an optional centered label.`}}},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Direction of the divider line.`,table:{category:`Appearance`}},label:{description:`Text label displayed in the center (horizontal only).`,table:{category:`Content`}}}},h={render:()=>(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(`p`,{className:`text-sm`,children:`Content above`}),(0,p.jsx)(u,{}),(0,p.jsx)(`p`,{className:`text-sm`,children:`Content below`})]})},g={render:()=>(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(`p`,{className:`text-sm`,children:`Section 1`}),(0,p.jsx)(u,{label:`OR`}),(0,p.jsx)(`p`,{className:`text-sm`,children:`Section 2`})]}),parameters:{docs:{description:{story:`A labeled divider with centered text — common for login forms (e.g. 'OR' between auth methods).`}}}},_={render:()=>(0,p.jsxs)(`div`,{className:`flex h-8 items-center gap-4`,children:[(0,p.jsx)(`span`,{className:`text-sm`,children:`Left`}),(0,p.jsx)(u,{orientation:`vertical`}),(0,p.jsx)(`span`,{className:`text-sm`,children:`Right`})]}),parameters:{docs:{description:{story:`A vertical divider for separating inline elements like toolbar buttons or nav items.`}}}},v={render:()=>(0,p.jsxs)(`div`,{className:`mx-auto max-w-sm space-y-4`,children:[(0,p.jsx)(o,{className:`w-full`,variant:`outline`,children:`Continue with Google`}),(0,p.jsx)(o,{className:`w-full`,variant:`outline`,children:`Continue with GitHub`}),(0,p.jsx)(u,{label:`or continue with email`}),(0,p.jsx)(o,{className:`w-full`,children:`Sign in with Email`})]}),parameters:{docs:{description:{story:`A real-world login form using a labeled divider between OAuth and email sign-in options.`}}}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(o,{variant:`ghost`,size:`sm`,children:`Cut`}),(0,p.jsx)(o,{variant:`ghost`,size:`sm`,children:`Copy`}),(0,p.jsx)(o,{variant:`ghost`,size:`sm`,children:`Paste`}),(0,p.jsx)(u,{orientation:`vertical`,className:`h-6`}),(0,p.jsx)(o,{variant:`ghost`,size:`sm`,children:`Undo`}),(0,p.jsx)(o,{variant:`ghost`,size:`sm`,children:`Redo`})]}),parameters:{docs:{description:{story:`Vertical dividers used as toolbar separators between action groups.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm">Section 1</p>
      <Divider label="OR" />
      <p className="text-sm">Section 2</p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A labeled divider with centered text — common for login forms (e.g. 'OR' between auth methods)."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A vertical divider for separating inline elements like toolbar buttons or nav items."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-sm space-y-4">
      <Button className="w-full" variant="outline">
        Continue with Google
      </Button>
      <Button className="w-full" variant="outline">
        Continue with GitHub
      </Button>
      <Divider label="or continue with email" />
      <Button className="w-full">Sign in with Email</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A real-world login form using a labeled divider between OAuth and email sign-in options."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm">
        Cut
      </Button>
      <Button variant="ghost" size="sm">
        Copy
      </Button>
      <Button variant="ghost" size="sm">
        Paste
      </Button>
      <Divider orientation="vertical" className="h-6" />
      <Button variant="ghost" size="sm">
        Undo
      </Button>
      <Button variant="ghost" size="sm">
        Redo
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Vertical dividers used as toolbar separators between action groups."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Horizontal`,`WithLabel`,`Vertical`,`LoginDivider`,`ToolbarSeparator`]}))();export{h as Horizontal,v as LoginDivider,y as ToolbarSeparator,_ as Vertical,g as WithLabel,b as __namedExportsOrder,m as default};