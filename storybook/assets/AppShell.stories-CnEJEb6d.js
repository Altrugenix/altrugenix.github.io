import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{B as n,E as r,Et as i,Ht as a,L as o,Lt as s,f as c,gn as l,q as u,r as d,zt as f}from"./iframe-zfMobaDd.js";import{a as p,t as m}from"./src-DjwHjl2X.js";import{n as h,t as g}from"./src-B0Nokn7y.js";import{n as _,t as v}from"./src-pNkuxOXD.js";import{n as y,r as b,t as x}from"./src-0FIvwsys.js";function S({navbar:e,sidebar:t,children:n,drawerOpen:r,onDrawerToggle:i,mainClassName:a,className:s}){let[c,l]=(0,C.useState)(!1),u=r??c,d=()=>{let e=!u;i?i(e):l(e)};return(0,w.jsxs)(`div`,{className:f(`bg-background selection:bg-primary/10 relative flex min-h-screen flex-col`,s),children:[e&&(0,w.jsx)(`div`,{className:`z-40 h-auto`,children:e}),(0,w.jsxs)(`div`,{className:`flex flex-1 overflow-hidden`,children:[t&&(0,w.jsx)(`div`,{className:`bg-background/50 hidden border-r backdrop-blur-sm lg:block`,children:t}),t&&(0,w.jsx)(h,{isOpen:u,onClose:()=>d(),side:`left`,className:`overflow-hidden border-none p-0`,width:`280px`,children:(0,w.jsx)(`div`,{className:`h-full w-full`,children:t})}),(0,w.jsx)(`div`,{className:`flex flex-1 flex-col overflow-hidden`,children:(0,w.jsx)(`main`,{className:f(`flex-1 overflow-y-auto px-4 py-8 focus:outline-none md:px-8`,a),children:(0,w.jsx)(`div`,{className:`animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-[1200px] duration-500`,children:n})})})]}),t&&(0,w.jsx)(p,{variant:`outline`,size:`icon`,className:f(`border-primary/20 bg-background/80 fixed right-6 bottom-6 z-50 h-12 w-12 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 lg:hidden`,u&&`scale-0 opacity-0`),onClick:d,children:(0,w.jsx)(o,{className:`text-primary h-6 w-6`})})]})}var C,w,T=e((()=>{C=t(l(),1),s(),g(),d(),m(),w=a(),S.__docgenInfo={description:``,methods:[],displayName:`AppShell`,props:{navbar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The navigation bar (fixed or sticky)`},sidebar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The side navigation bar`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main content of the application`},drawerOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the mobile drawer is open (controlled)`},onDrawerToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback when drawer toggle is clicked`},mainClassName:{required:!1,tsType:{name:`string`},description:`Custom class for the main content area`},className:{required:!1,tsType:{name:`string`},description:`Custom class for the entire shell`}}}})),E=e((()=>{T()})),D,O,k,A,j;e((()=>{E(),v(),x(),m(),d(),D=a(),O={title:`Layout/AppShell`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:`The main application layout wrapper. Composes a Navbar and Sidebar together, managing the responsive behavior (mobile drawer toggle) and main content area layout.`}}},argTypes:{navbar:{description:`Navbar component to display at the top.`,table:{category:`Components`}},sidebar:{description:`Sidebar component to display on the left (or in a drawer on mobile).`,table:{category:`Components`}},children:{description:`The main page content.`,table:{category:`Content`}},drawerOpen:{description:`Controlled state of the mobile navigation drawer.`,table:{category:`State`}},onDrawerToggle:{description:`Callback when the hamburger menu is clicked.`,table:{category:`Events`}}}},k={render:()=>(0,D.jsx)(`div`,{className:`h-[500px] overflow-hidden rounded-lg border shadow-sm`,children:(0,D.jsx)(S,{navbar:(0,D.jsxs)(_,{brand:(0,D.jsx)(`span`,{className:`text-lg font-bold`,children:`Acme Corp`}),children:[(0,D.jsx)(p,{variant:`ghost`,size:`icon`,children:(0,D.jsx)(i,{className:`h-5 w-5`})}),(0,D.jsx)(p,{variant:`ghost`,size:`sm`,children:`Help`})]}),sidebar:(0,D.jsxs)(y,{children:[(0,D.jsxs)(`div`,{className:`flex-1 space-y-1 p-2`,children:[(0,D.jsx)(b,{icon:(0,D.jsx)(u,{size:18}),active:!0,children:`Dashboard`}),(0,D.jsx)(b,{icon:(0,D.jsx)(c,{size:18}),children:`Users`}),(0,D.jsx)(b,{icon:(0,D.jsx)(n,{size:18}),children:`Messages`})]}),(0,D.jsx)(`div`,{className:`border-t p-2`,children:(0,D.jsx)(b,{icon:(0,D.jsx)(r,{size:18}),children:`Settings`})})]}),children:(0,D.jsxs)(`div`,{className:`space-y-4`,children:[(0,D.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Welcome to the Dashboard`}),(0,D.jsx)(`p`,{className:`text-muted-foreground`,children:`This is the main content area inside AppShell. It automatically adapts to the available space alongside the sidebar and navbar. Try resizing your browser window.`}),(0,D.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[1,2,3].map(e=>(0,D.jsxs)(`div`,{className:`bg-card flex h-32 items-center justify-center rounded-lg border font-medium shadow-sm`,children:[`Metric Card `,e]},e))})]})})}),parameters:{docs:{description:{story:`A complete dashboard layout composing Navbar, Sidebar, and a main content area.`}}}},A={render:()=>(0,D.jsx)(`div`,{className:`h-[400px] overflow-hidden rounded-lg border shadow-sm`,children:(0,D.jsx)(S,{navbar:(0,D.jsxs)(_,{brand:(0,D.jsx)(`span`,{className:`text-lg font-bold`,children:`Marketing Site`}),children:[(0,D.jsx)(p,{variant:`ghost`,children:`About`}),(0,D.jsx)(p,{variant:`ghost`,children:`Pricing`}),(0,D.jsx)(p,{variant:`primary`,children:`Sign Up`})]}),children:(0,D.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center space-y-4 text-center`,children:[(0,D.jsx)(`h1`,{className:`text-3xl font-bold tracking-tight`,children:`Build Faster`}),(0,D.jsx)(`p`,{className:`text-muted-foreground max-w-md`,children:`AppShell without a sidebar renders only the navbar and centered content. Ideal for marketing pages or simple web apps.`}),(0,D.jsx)(p,{size:`lg`,children:`Get Started Today`})]})})}),parameters:{docs:{description:{story:`AppShell with only a Navbar, resulting in a full-width content area suitable for landing pages.`}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[500px] overflow-hidden rounded-lg border shadow-sm">
      <AppShell navbar={<Navbar brand={<span className="text-lg font-bold">Acme Corp</span>}>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              Help
            </Button>
          </Navbar>} sidebar={<Sidebar>
            <div className="flex-1 space-y-1 p-2">
              <SidebarItem icon={<LayoutDashboard size={18} />} active>
                Dashboard
              </SidebarItem>
              <SidebarItem icon={<Users size={18} />}>Users</SidebarItem>
              <SidebarItem icon={<Mail size={18} />}>Messages</SidebarItem>
            </div>
            <div className="border-t p-2">
              <SidebarItem icon={<Settings size={18} />}>Settings</SidebarItem>
            </div>
          </Sidebar>}>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-muted-foreground">
            This is the main content area inside AppShell. It automatically
            adapts to the available space alongside the sidebar and navbar. Try
            resizing your browser window.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map(n => <div key={n} className="bg-card flex h-32 items-center justify-center rounded-lg border font-medium shadow-sm">
                Metric Card {n}
              </div>)}
          </div>
        </div>
      </AppShell>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A complete dashboard layout composing Navbar, Sidebar, and a main content area."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[400px] overflow-hidden rounded-lg border shadow-sm">
      <AppShell navbar={<Navbar brand={<span className="text-lg font-bold">Marketing Site</span>}>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="primary">Sign Up</Button>
          </Navbar>}>
        <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Build Faster</h1>
          <p className="text-muted-foreground max-w-md">
            AppShell without a sidebar renders only the navbar and centered
            content. Ideal for marketing pages or simple web apps.
          </p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </AppShell>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "AppShell with only a Navbar, resulting in a full-width content area suitable for landing pages."
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`NavbarOnly`]}))();export{k as Default,A as NavbarOnly,j as __namedExportsOrder,O as default};