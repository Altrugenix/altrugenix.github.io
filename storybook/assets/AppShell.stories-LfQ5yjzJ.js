import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,B as r,D as i,Ft as a,L as o,Mt as s,d as c,ln as l,q as u,r as d,s as f}from"./iframe-By8sOsRq.js";import{r as p,t as m}from"./altrugenix-button-BIia6M8K.js";import{n as h,t as g}from"./altrugenix-navbar-2u3wiOa0.js";import{n as _,r as v,t as y}from"./altrugenix-sidebar-DZkXsj3J.js";function b({navbar:e,sidebar:t,children:r,drawerOpen:i,onDrawerToggle:a,mainClassName:s,className:c}){let[l,u]=(0,x.useState)(!1),d=i??l,f=()=>{let e=!d;a?a(e):u(e)};return(0,S.jsxs)(`div`,{className:n(`bg-background selection:bg-primary/10 relative flex min-h-screen flex-col`,c),children:[e&&(0,S.jsx)(`div`,{className:`z-40 h-auto`,children:e}),(0,S.jsxs)(`div`,{className:`flex flex-1 overflow-hidden`,children:[t&&(0,S.jsx)(`div`,{className:`bg-background/50 hidden border-r backdrop-blur-sm lg:block`,children:t}),t&&(0,S.jsx)(C,{isOpen:d,onClose:()=>f(),side:`left`,className:`overflow-hidden border-none p-0`,width:`280px`,children:(0,S.jsx)(`div`,{className:`h-full w-full`,children:t})}),(0,S.jsx)(`div`,{className:`flex flex-1 flex-col overflow-hidden`,children:(0,S.jsx)(`main`,{className:n(`flex-1 overflow-y-auto px-4 py-8 focus:outline-none md:px-8`,s),children:(0,S.jsx)(`div`,{className:`animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-[1200px] duration-500`,children:r})})})]}),t&&(0,S.jsx)(m,{variant:`outline`,size:`icon`,className:n(`border-primary/20 bg-background/80 fixed right-6 bottom-6 z-50 h-12 w-12 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 lg:hidden`,d&&`scale-0 opacity-0`),onClick:f,children:(0,S.jsx)(o,{className:`text-primary h-6 w-6`})})]})}var x,S,C,w=e((()=>{x=t(l(),1),s(),d(),S=a(),p(),C=x.forwardRef(({className:e,isOpen:t,onClose:r,side:i=`right`,title:a,width:o=`24rem`,children:s,...c},l)=>(x.useEffect(()=>{let e=e=>{e.key===`Escape`&&r()};return t&&(document.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=``}},[t,r]),t?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity`,onClick:r,"aria-hidden":`true`}),(0,S.jsxs)(`div`,{ref:l,className:n(`bg-background fixed inset-y-0 z-50 flex flex-col shadow-xl transition-transform duration-300`,i===`right`?`animate-in slide-in-from-right right-0`:`animate-in slide-in-from-left left-0`,e),style:{width:o},role:`dialog`,"aria-modal":`true`,...c,children:[(0,S.jsxs)(`div`,{className:`flex items-center justify-between border-b px-6 py-4`,children:[a&&(0,S.jsx)(`h2`,{className:`text-lg font-semibold`,children:a}),(0,S.jsx)(`button`,{onClick:r,className:`ring-offset-background focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none`,"aria-label":`Close drawer`,children:(0,S.jsx)(f,{className:`h-4 w-4`})})]}),(0,S.jsx)(`div`,{className:`flex-1 overflow-y-auto px-6 py-4`,children:s})]})]}):null)),C.displayName=`Drawer`})),T,E,D,O,k;e((()=>{w(),g(),v(),p(),d(),T=a(),E={title:`Layout/AppShell`,component:b,tags:[`autodocs`]},D={render:()=>(0,T.jsx)(`div`,{className:`h-[500px] overflow-hidden rounded-lg border`,children:(0,T.jsxs)(b,{navbar:(0,T.jsxs)(h,{brand:(0,T.jsx)(`span`,{className:`text-lg font-bold`,children:`My App`}),children:[(0,T.jsx)(m,{variant:`ghost`,size:`sm`,children:`Docs`}),(0,T.jsx)(m,{variant:`ghost`,size:`sm`,children:`Support`})]}),sidebar:(0,T.jsxs)(_,{children:[(0,T.jsxs)(`div`,{className:`flex-1 space-y-1 p-2`,children:[(0,T.jsx)(y,{icon:(0,T.jsx)(u,{size:18}),active:!0,children:`Dashboard`}),(0,T.jsx)(y,{icon:(0,T.jsx)(c,{size:18}),children:`Users`}),(0,T.jsx)(y,{icon:(0,T.jsx)(r,{size:18}),children:`Messages`})]}),(0,T.jsx)(`div`,{className:`border-t p-2`,children:(0,T.jsx)(y,{icon:(0,T.jsx)(i,{size:18}),children:`Settings`})})]}),children:[(0,T.jsx)(`h1`,{className:`text-2xl font-bold`,children:`Welcome to the Dashboard`}),(0,T.jsx)(`p`,{className:`text-muted-foreground my-4`,children:`This is the main content area inside AppShell. It automatically adapts to the available space alongside the sidebar and navbar.`}),(0,T.jsx)(`div`,{className:`grid grid-cols-3 gap-4`,children:[1,2,3].map(e=>(0,T.jsxs)(`div`,{className:`bg-card h-32 rounded-lg border p-4 shadow-sm`,children:[`Card `,e]},e))})]})})},O={render:()=>(0,T.jsx)(`div`,{className:`h-[400px] overflow-hidden rounded-lg border`,children:(0,T.jsxs)(b,{navbar:(0,T.jsx)(h,{brand:(0,T.jsx)(`span`,{className:`text-lg font-bold`,children:`Simple App`}),children:(0,T.jsx)(m,{variant:`outline`,size:`sm`,children:`Sign In`})}),children:[(0,T.jsx)(`h1`,{className:`text-2xl font-bold`,children:`No Sidebar Layout`}),(0,T.jsx)(`p`,{className:`text-muted-foreground mt-4`,children:`AppShell without a sidebar renders only the navbar and content.`})]})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <p className="text-muted-foreground my-4">
          This is the main content area inside AppShell. It automatically adapts
          to the available space alongside the sidebar and navbar.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(n => <div key={n} className="bg-card h-32 rounded-lg border p-4 shadow-sm">
              Card {n}
            </div>)}
        </div>
      </AppShell>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[400px] overflow-hidden rounded-lg border">
      <AppShell navbar={<Navbar brand={<span className="text-lg font-bold">Simple App</span>}>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Navbar>}>
        <h1 className="text-2xl font-bold">No Sidebar Layout</h1>
        <p className="text-muted-foreground mt-4">
          AppShell without a sidebar renders only the navbar and content.
        </p>
      </AppShell>
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`NavbarOnly`]}))();export{D as Default,O as NavbarOnly,k as __namedExportsOrder,E as default};