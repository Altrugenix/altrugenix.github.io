import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,V as r,W as i,Z as a,cn as o,h as s,i as c,j as l,r as u,s as d}from"./iframe-CAjx62e_.js";import{n as f,t as p}from"./Drawer-DKnNK_A6.js";import{a as m,t as h}from"./button-WWkxm_3b.js";import{n as g,t as _}from"./Navbar-ChmEVa0-.js";import{n as v,r as y,t as b}from"./Sidebar-CXVE2Z5C.js";function x({navbar:e,sidebar:t,children:n,drawerOpen:i,onDrawerToggle:a,mainClassName:o,className:s}){let[c,l]=(0,S.useState)(!1),d=i??c,f=()=>{let e=!d;a?a(e):l(e)};return(0,C.jsxs)(`div`,{className:u(`relative flex min-h-screen flex-col bg-background selection:bg-primary/10`,s),children:[e&&(0,C.jsx)(`div`,{className:`z-40 h-auto`,children:e}),(0,C.jsxs)(`div`,{className:`flex flex-1 overflow-hidden`,children:[t&&(0,C.jsx)(`div`,{className:`hidden border-r bg-background/50 backdrop-blur-sm lg:block`,children:t}),t&&(0,C.jsx)(p,{isOpen:d,onClose:()=>f(),side:`left`,className:`overflow-hidden border-none p-0`,width:`280px`,children:(0,C.jsx)(`div`,{className:`h-full w-full`,children:t})}),(0,C.jsx)(`div`,{className:`flex flex-1 flex-col overflow-hidden`,children:(0,C.jsx)(`main`,{className:u(`flex-1 overflow-y-auto px-4 py-8 focus:outline-none md:px-8`,o),children:(0,C.jsx)(`div`,{className:`mx-auto max-w-[1200px] duration-500 animate-in fade-in slide-in-from-bottom-4`,children:n})})})]}),t&&(0,C.jsx)(m,{variant:`outline`,size:`icon`,className:u(`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border-primary/20 bg-background/80 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 lg:hidden`,d&&`scale-0 opacity-0`),onClick:f,children:(0,C.jsx)(r,{className:`h-6 w-6 text-primary`})})]})}var S,C,w=e((()=>{S=t(o(),1),c(),f(),d(),h(),C=n(),x.__docgenInfo={description:``,methods:[],displayName:`AppShell`,props:{navbar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The navigation bar (fixed or sticky)`},sidebar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The side navigation bar`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main content of the application`},drawerOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the mobile drawer is open (controlled)`},onDrawerToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback when drawer toggle is clicked`},mainClassName:{required:!1,tsType:{name:`string`},description:`Custom class for the main content area`},className:{required:!1,tsType:{name:`string`},description:`Custom class for the entire shell`}}}})),T=e((()=>{w()})),E,D,O,k,A;e((()=>{T(),g(),y(),h(),d(),E=n(),D={title:`Layout/AppShell`,component:x,tags:[`autodocs`]},O={render:()=>(0,E.jsx)(`div`,{className:`h-[500px] overflow-hidden rounded-lg border`,children:(0,E.jsxs)(x,{navbar:(0,E.jsxs)(_,{brand:(0,E.jsx)(`span`,{className:`text-lg font-bold`,children:`My App`}),children:[(0,E.jsx)(m,{variant:`ghost`,size:`sm`,children:`Docs`}),(0,E.jsx)(m,{variant:`ghost`,size:`sm`,children:`Support`})]}),sidebar:(0,E.jsxs)(b,{children:[(0,E.jsxs)(`div`,{className:`flex-1 space-y-1 p-2`,children:[(0,E.jsx)(v,{icon:(0,E.jsx)(a,{size:18}),active:!0,children:`Dashboard`}),(0,E.jsx)(v,{icon:(0,E.jsx)(s,{size:18}),children:`Users`}),(0,E.jsx)(v,{icon:(0,E.jsx)(i,{size:18}),children:`Messages`})]}),(0,E.jsx)(`div`,{className:`border-t p-2`,children:(0,E.jsx)(v,{icon:(0,E.jsx)(l,{size:18}),children:`Settings`})})]}),children:[(0,E.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Welcome to the Dashboard`}),(0,E.jsx)(`p`,{className:`my-4 text-muted-foreground`,children:`This is the main content area inside AppShell. It automatically adapts to the available space alongside the sidebar and navbar.`}),(0,E.jsx)(`div`,{className:`grid grid-cols-3 gap-4`,children:[1,2,3].map(e=>(0,E.jsxs)(`div`,{className:`h-32 rounded-lg border bg-card p-4 shadow-sm`,children:[`Card `,e]},e))})]})})},k={render:()=>(0,E.jsx)(`div`,{className:`h-[400px] overflow-hidden rounded-lg border`,children:(0,E.jsxs)(x,{navbar:(0,E.jsx)(_,{brand:(0,E.jsx)(`span`,{className:`text-lg font-bold`,children:`Simple App`}),children:(0,E.jsx)(m,{variant:`outline`,size:`sm`,children:`Sign In`})}),children:[(0,E.jsx)(`h1`,{className:`text-2xl font-bold`,children:`No Sidebar Layout`}),(0,E.jsx)(`p`,{className:`mt-4 text-muted-foreground`,children:`AppShell without a sidebar renders only the navbar and content.`})]})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[500px] overflow-hidden rounded-lg border">
      <AppShell navbar={<Navbar brand={<span className="text-lg font-bold">My App</span>}>
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              Support
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
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="my-4 text-muted-foreground">
          This is the main content area inside AppShell. It automatically adapts
          to the available space alongside the sidebar and navbar.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(n => <div key={n} className="h-32 rounded-lg border bg-card p-4 shadow-sm">
              Card {n}
            </div>)}
        </div>
      </AppShell>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[400px] overflow-hidden rounded-lg border">
      <AppShell navbar={<Navbar brand={<span className="text-lg font-bold">Simple App</span>}>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Navbar>}>
        <h1 className="text-2xl font-bold">No Sidebar Layout</h1>
        <p className="mt-4 text-muted-foreground">
          AppShell without a sidebar renders only the navbar and content.
        </p>
      </AppShell>
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`NavbarOnly`]}))();export{O as Default,k as NavbarOnly,A as __namedExportsOrder,D as default};