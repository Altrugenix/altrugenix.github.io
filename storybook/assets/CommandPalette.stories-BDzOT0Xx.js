import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{C as n,F as r,L as i,P as a,R as o,S as s,f as c,g as l,h as u,i as d,l as f,m as p,p as m,pt as h,r as g,s as _,w as v,x as y,z as b}from"./iframe-DM0JAH7r.js";import{t as x}from"./react-dom-D6bCX4p-.js";import{r as S,t as C}from"./button-CDpz39Wf.js";var w,T,E,D,O=e((()=>{w=t(h(),1),T=t(x(),1),r(),_(),d(),E=b(),D=({isOpen:e,onClose:t,items:r,placeholder:a=`Search components, docs, or actions...`})=>{let[s,c]=(0,w.useState)(``),[l,u]=(0,w.useState)(0),d=(0,w.useRef)(null),f=w.useMemo(()=>r.filter(e=>e.label.toLowerCase().includes(s.toLowerCase())||e.group&&e.group.toLowerCase().includes(s.toLowerCase())),[r,s]),p=w.useMemo(()=>f.reduce((e,t)=>{let n=t.group||`Other`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),[f]),h=w.useMemo(()=>Object.values(p).flat(),[p]),_=e=>{c(e.target.value),u(0)},v=(0,w.useCallback)(n=>{e&&(n.key===`Escape`?t():n.key===`ArrowDown`?(n.preventDefault(),u(e=>(e+1)%h.length)):n.key===`ArrowUp`?(n.preventDefault(),u(e=>(e-1+h.length)%h.length)):n.key===`Enter`&&(n.preventDefault(),h[l]&&(h[l].onSelect(),t())))},[e,h,l,t]);(0,w.useEffect)(()=>(window.addEventListener(`keydown`,v),()=>window.removeEventListener(`keydown`,v)),[v]),(0,w.useEffect)(()=>{if(d.current&&d.current.children[l]){let e=d.current.querySelector(`[data-active="true"]`);e&&e.scrollIntoView({block:`nearest`})}},[l]);let y=(0,E.jsx)(o,{children:e&&(0,E.jsxs)(`div`,{className:`fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]`,children:[(0,E.jsx)(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed inset-0 bg-background/60 backdrop-blur-md`,onClick:t}),(0,E.jsxs)(i.div,{initial:{opacity:0,scale:.95,y:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-20},transition:{type:`spring`,damping:25,stiffness:300},className:`relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-background/80 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:ring-white/10`,children:[(0,E.jsxs)(`div`,{className:`flex items-center border-b px-4`,children:[(0,E.jsx)(m,{className:`h-5 w-5 text-muted-foreground`}),(0,E.jsx)(`input`,{autoFocus:!0,className:`flex h-14 w-full bg-transparent px-4 py-3 text-lg outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,placeholder:a,value:s,onChange:_}),(0,E.jsx)(`div`,{className:`hidden items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground opacity-100 sm:flex`,children:(0,E.jsx)(`span`,{className:`text-xs`,children:`ESC`})})]}),(0,E.jsx)(`div`,{ref:d,className:`scrollbar-thin scrollbar-thumb-muted-foreground/20 max-h-[50vh] overflow-y-auto p-2`,children:h.length===0?(0,E.jsxs)(`div`,{className:`p-8 text-center text-muted-foreground`,children:[`No results found for`,` `,(0,E.jsxs)(`span`,{className:`font-semibold text-foreground`,children:[`"`,s,`"`]})]}):Object.entries(p).map(([e,r])=>(0,E.jsxs)(`div`,{className:`mb-2 last:mb-0`,children:[(0,E.jsx)(`h3`,{className:`px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground`,children:e}),r.map(e=>{let r=l===h.indexOf(e);return(0,E.jsxs)(`div`,{"data-active":r,onClick:()=>{e.onSelect(),t()},className:g(`group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-all`,r?`bg-primary text-primary-foreground shadow-lg shadow-primary/20`:`hover:bg-accent hover:text-accent-foreground`),children:[(0,E.jsx)(`div`,{className:g(`flex h-8 w-8 items-center justify-center rounded-md border text-lg transition-colors`,r?`border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground`:`border-border bg-muted group-hover:border-accent-foreground/20 group-hover:bg-accent-foreground/5`),children:e.icon||(0,E.jsx)(n,{className:`h-4 w-4`})}),(0,E.jsxs)(`div`,{className:`flex flex-1 items-center justify-between`,children:[(0,E.jsx)(`span`,{className:`font-medium`,children:e.label}),e.shortcut&&(0,E.jsx)(`div`,{className:`flex items-center gap-1`,children:e.shortcut.map((e,t)=>(0,E.jsx)(`kbd`,{className:g(`min-w-[1.25rem] rounded border px-1 text-center text-[10px] font-semibold uppercase transition-colors`,r?`border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground`:`border-border bg-muted text-muted-foreground`),children:e},t))})]})]},e.id)})]},e))}),(0,E.jsxs)(`div`,{className:`flex items-center justify-between border-t bg-muted/30 px-4 py-3 text-xs text-muted-foreground`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsxs)(`span`,{className:`flex items-center gap-1 italic`,children:[(0,E.jsx)(`kbd`,{className:`rounded border bg-background px-1 not-italic`,children:`↑↓`}),` `,`Navigate`]}),(0,E.jsxs)(`span`,{className:`flex items-center gap-1 italic`,children:[(0,E.jsx)(`kbd`,{className:`rounded border bg-background px-1 not-italic`,children:`Enter`}),` `,`Select`]})]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[`Powered by`,` `,(0,E.jsx)(`span`,{className:`font-bold text-foreground/80`,children:`Altrugenix`})]})]})]})]})});return typeof document>`u`?null:T.createPortal(y,document.body)},D.displayName=`CommandPalette`})),k=e((()=>{O()})),A,j,M,N,P,F;e((()=>{k(),C(),A=t(h(),1),_(),j=b(),M={title:`Navigation/CommandPalette`,component:D,tags:[`autodocs`]},N={render:()=>{let[e,t]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=e=>{e.key===`k`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t(e=>!e))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[]),(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-6 p-20`,children:[(0,j.jsxs)(`div`,{className:`space-y-4 text-center`,children:[(0,j.jsx)(`h2`,{className:`text-2xl font-bold`,children:`Command Palette`}),(0,j.jsxs)(`p`,{className:`text-muted-foreground`,children:[`Press`,` `,(0,j.jsx)(`kbd`,{className:`rounded border bg-muted px-1.5 font-sans font-medium text-muted-foreground opacity-100`,children:`⌘K`}),` `,`to open the command palette.`]})]}),(0,j.jsx)(S,{size:`lg`,onClick:()=>t(!0),className:`rounded-full px-8`,children:`Open Palette`}),(0,j.jsx)(D,{isOpen:e,onClose:()=>t(!1),items:[{id:`new-project`,label:`Create New Project`,group:`Actions`,icon:(0,j.jsx)(p,{className:`h-4 w-4`}),shortcut:[`⌘`,`N`],onSelect:()=>alert(`Creating new project...`)},{id:`search-docs`,label:`Search Documentation`,group:`Actions`,icon:(0,j.jsx)(m,{className:`h-4 w-4`}),shortcut:[`⌘`,`D`],onSelect:()=>alert(`Opening docs...`)},{id:`profile`,label:`View Profile`,group:`Account`,icon:(0,j.jsx)(f,{className:`h-4 w-4`}),onSelect:()=>alert(`Viewing profile...`)},{id:`settings`,label:`Settings`,group:`Account`,icon:(0,j.jsx)(c,{className:`h-4 w-4`}),shortcut:[`⌘`,`,`],onSelect:()=>alert(`Opening settings...`)},{id:`dashboard`,label:`Dashboard`,group:`Pages`,icon:(0,j.jsx)(u,{className:`h-4 w-4`}),onSelect:()=>alert(`Navigating to Dashboard`)},{id:`components`,label:`Components Library`,group:`Pages`,icon:(0,j.jsx)(v,{className:`h-4 w-4`}),onSelect:()=>alert(`Navigating to Components`)},{id:`github`,label:`GitHub Repository`,group:`Social`,icon:(0,j.jsx)(s,{className:`h-4 w-4`}),onSelect:()=>window.open(`https://github.com/altrugenix/ui`,`_blank`)},{id:`twitter`,label:`Twitter / X`,group:`Social`,icon:(0,j.jsx)(s,{className:`h-4 w-4`}),onSelect:()=>alert(`Opening Twitter...`)}]})]})}},P={render:()=>{let[e,t]=(0,A.useState)(!1),n=Array.from({length:50}).map((e,t)=>({id:`item-${t}`,label:`Result Item ${t+1}`,group:t<25?`Group A`:`Group B`,icon:t%3==0?(0,j.jsx)(y,{className:`h-4 w-4`}):t%3==1?(0,j.jsx)(l,{className:`h-4 w-4`}):(0,j.jsx)(a,{className:`h-4 w-4`}),onSelect:()=>alert(`Selected item ${t+1}`)}));return(0,j.jsxs)(`div`,{className:`flex flex-col items-center justify-center gap-6 p-20`,children:[(0,j.jsx)(S,{onClick:()=>t(!0),children:`Open with 50 Items`}),(0,j.jsx)(D,{isOpen:e,onClose:()=>t(!1),items:n,placeholder:`Filter 50+ items...`})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen(open => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);
    const items = [{
      id: "new-project",
      label: "Create New Project",
      group: "Actions",
      icon: <Plus className="h-4 w-4" />,
      shortcut: ["⌘", "N"],
      onSelect: () => alert("Creating new project...")
    }, {
      id: "search-docs",
      label: "Search Documentation",
      group: "Actions",
      icon: <Search className="h-4 w-4" />,
      shortcut: ["⌘", "D"],
      onSelect: () => alert("Opening docs...")
    }, {
      id: "profile",
      label: "View Profile",
      group: "Account",
      icon: <User className="h-4 w-4" />,
      onSelect: () => alert("Viewing profile...")
    }, {
      id: "settings",
      label: "Settings",
      group: "Account",
      icon: <Settings className="h-4 w-4" />,
      shortcut: ["⌘", ","],
      onSelect: () => alert("Opening settings...")
    }, {
      id: "dashboard",
      label: "Dashboard",
      group: "Pages",
      icon: <Layout className="h-4 w-4" />,
      onSelect: () => alert("Navigating to Dashboard")
    }, {
      id: "components",
      label: "Components Library",
      group: "Pages",
      icon: <Code className="h-4 w-4" />,
      onSelect: () => alert("Navigating to Components")
    }, {
      id: "github",
      label: "GitHub Repository",
      group: "Social",
      icon: <ExternalLink className="h-4 w-4" />,
      onSelect: () => window.open("https://github.com/altrugenix/ui", "_blank")
    }, {
      id: "twitter",
      label: "Twitter / X",
      group: "Social",
      icon: <ExternalLink className="h-4 w-4" />,
      onSelect: () => alert("Opening Twitter...")
    }];
    return <div className="flex flex-col items-center justify-center gap-6 p-20">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Command Palette</h2>
          <p className="text-muted-foreground">
            Press{" "}
            <kbd className="rounded border bg-muted px-1.5 font-sans font-medium text-muted-foreground opacity-100">
              ⌘K
            </kbd>{" "}
            to open the command palette.
          </p>
        </div>
        <Button size="lg" onClick={() => setIsOpen(true)} className="rounded-full px-8">
          Open Palette
        </Button>
        <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} items={items} />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const items = Array.from({
      length: 50
    }).map((_, i) => ({
      id: \`item-\${i}\`,
      label: \`Result Item \${i + 1}\`,
      group: i < 25 ? "Group A" : "Group B",
      icon: i % 3 === 0 ? <FileText className="h-4 w-4" /> : i % 3 === 1 ? <Mail className="h-4 w-4" /> : <Calendar className="h-4 w-4" />,
      onSelect: () => alert(\`Selected item \${i + 1}\`)
    }));
    return <div className="flex flex-col items-center justify-center gap-6 p-20">
        <Button onClick={() => setIsOpen(true)}>Open with 50 Items</Button>
        <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} items={items} placeholder="Filter 50+ items..." />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`LargeDataSet`]}))();export{N as Default,P as LargeDataSet,F as __namedExportsOrder,M as default};