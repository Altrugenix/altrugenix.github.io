import{n as e}from"./chunk-jRWAZmH_.js";import{D as t,Et as n,Ht as r,r as i}from"./iframe-coe0kFk0.js";import{a,t as o}from"./src-CxQaJ0KN.js";import{n as s,t as c}from"./src-CInzH1O5.js";import{r as l,t as u}from"./src-B4YWh67q.js";var d,f,p,m,h,g,_;e((()=>{c(),o(),i(),u(),d=r(),f={title:`Navigation/Navbar`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A responsive navigation bar with brand slot, action items, and automatic mobile hamburger menu. Supports sticky and static positioning.`}}},argTypes:{brand:{description:`Brand element — typically a logo and/or app name.`,table:{category:`Content`}},sticky:{control:`boolean`,description:`Whether the navbar sticks to the top on scroll.`,table:{category:`Behavior`}},children:{description:`Navigation items and action buttons on the right side.`,table:{category:`Content`}}}},p={args:{brand:(0,d.jsx)(`span`,{className:`text-xl font-bold tracking-tight`,children:`Altrugenix`}),children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{variant:`ghost`,children:`Features`}),(0,d.jsx)(a,{variant:`ghost`,children:`Pricing`}),(0,d.jsx)(a,{variant:`ghost`,children:`Documentation`}),(0,d.jsx)(a,{variant:`primary`,children:`Get Started`})]})}},m={args:{brand:(0,d.jsx)(`span`,{className:`text-xl font-bold tracking-tight`,children:`Altrugenix`}),children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{variant:`ghost`,size:`sm`,children:`Product`}),(0,d.jsx)(a,{variant:`ghost`,size:`sm`,children:`Company`}),(0,d.jsx)(`div`,{className:`bg-border mx-2 h-4 w-[1px]`}),(0,d.jsx)(a,{variant:`ghost`,size:`icon`,children:(0,d.jsx)(t,{className:`h-5 w-5`})}),(0,d.jsx)(a,{variant:`ghost`,size:`icon`,children:(0,d.jsx)(n,{className:`h-5 w-5`})})]})},parameters:{docs:{description:{story:`Nav links with icon-only buttons separated by a vertical divider.`}}}},h={args:{sticky:!1,brand:(0,d.jsx)(`span`,{className:`text-xl font-bold tracking-tight`,children:`Static Navbar`}),children:(0,d.jsx)(a,{variant:`outline`,children:`Sign In`})},parameters:{docs:{description:{story:`A non-sticky navbar that scrolls with the page content.`}}}},g={args:{brand:(0,d.jsx)(`span`,{className:`text-xl font-bold tracking-tight`,children:`Dashboard`}),children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{variant:`ghost`,size:`sm`,children:`Overview`}),(0,d.jsx)(a,{variant:`ghost`,size:`sm`,children:`Reports`}),(0,d.jsx)(a,{variant:`ghost`,size:`sm`,children:`Settings`}),(0,d.jsx)(`div`,{className:`bg-border mx-2 h-4 w-[1px]`}),(0,d.jsx)(l,{src:`https://github.com/shadcn.png`,fallback:`JD`,className:`h-8 w-8`})]})},parameters:{docs:{description:{story:`A dashboard navbar with user avatar — common for authenticated app headers.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Altrugenix</span>,
    children: <>
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">Documentation</Button>
        <Button variant="primary">Get Started</Button>
      </>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Altrugenix</span>,
    children: <>
        <Button variant="ghost" size="sm">
          Product
        </Button>
        <Button variant="ghost" size="sm">
          Company
        </Button>
        <div className="bg-border mx-2 h-4 w-[1px]" />
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "Nav links with icon-only buttons separated by a vertical divider."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    brand: <span className="text-xl font-bold tracking-tight">Static Navbar</span>,
    children: <Button variant="outline">Sign In</Button>
  },
  parameters: {
    docs: {
      description: {
        story: "A non-sticky navbar that scrolls with the page content."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Dashboard</span>,
    children: <>
        <Button variant="ghost" size="sm">
          Overview
        </Button>
        <Button variant="ghost" size="sm">
          Reports
        </Button>
        <Button variant="ghost" size="sm">
          Settings
        </Button>
        <div className="bg-border mx-2 h-4 w-[1px]" />
        <Avatar src="https://github.com/shadcn.png" fallback="JD" className="h-8 w-8" />
      </>
  },
  parameters: {
    docs: {
      description: {
        story: "A dashboard navbar with user avatar — common for authenticated app headers."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithIcons`,`NotSticky`,`WithAvatar`]}))();export{p as Default,h as NotSticky,g as WithAvatar,m as WithIcons,_ as __namedExportsOrder,f as default};