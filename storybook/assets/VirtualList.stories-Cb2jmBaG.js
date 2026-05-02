import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,gn as r}from"./iframe-zfMobaDd.js";import{n as i,t as a}from"./src-BufCrEWw.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(r(),1),s=n(),c={title:`Data Display/VirtualList`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A high-performance virtualized list that only renders items currently visible in the scroll viewport. Crucial for rendering large datasets without freezing the browser.`}}},argTypes:{items:{description:`Array of data items to render.`,table:{category:`Data`}},height:{control:`number`,description:`Height of the scrollable container in pixels.`,table:{category:`Layout`}},rowHeight:{control:`number`,description:`Fixed height of each list row in pixels.`,table:{category:`Layout`}},renderRow:{description:"Render function for each row: `(item, index) => ReactNode`.",table:{category:`Rendering`}},overscan:{control:`number`,description:`Number of extra rows to render outside the viewport to prevent flickering.`,table:{category:`Rendering`}}}},l=Array.from({length:1e4}).map((e,t)=>({id:t,name:`User ${t+1}`,email:`user${t+1}@example.com`})),u={args:{items:l,height:400,rowHeight:60,renderRow:(e,t)=>(0,s.jsxs)(`div`,{className:`hover:bg-muted/30 flex h-full items-center border-b px-4`,children:[(0,s.jsx)(`div`,{className:`bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium`,children:e.id}),(0,s.jsxs)(`div`,{className:`ml-4 flex-1 overflow-hidden`,children:[(0,s.jsx)(`p`,{className:`truncate text-sm font-medium`,children:e.name}),(0,s.jsx)(`p`,{className:`text-muted-foreground truncate text-xs`,children:e.email})]})]},t)},parameters:{docs:{description:{story:`Rendering a list of 10,000 items at 60fps.`}}}},d=()=>{let[e,t]=(0,o.useState)(``),n=(0,o.useMemo)(()=>e?l.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())):l,[e]);return(0,s.jsxs)(`div`,{className:`bg-card w-[400px] overflow-hidden rounded-lg border shadow-sm`,children:[(0,s.jsx)(`div`,{className:`border-b p-3`,children:(0,s.jsx)(`input`,{type:`text`,placeholder:`Search contacts...`,className:`bg-muted/30 focus:ring-primary/20 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2`,value:e,onChange:e=>t(e.target.value)})}),(0,s.jsxs)(`div`,{className:`bg-muted/5 text-muted-foreground p-2 text-xs font-medium`,children:[n.length,` contacts found`]}),(0,s.jsx)(i,{items:n,height:350,rowHeight:50,renderRow:e=>(0,s.jsx)(`div`,{className:`hover:bg-muted/50 flex h-full cursor-pointer items-center px-4`,children:(0,s.jsx)(`span`,{className:`text-sm font-medium`,children:e.name})})})]})},f={render:()=>(0,s.jsx)(d,{}),parameters:{docs:{description:{story:`Virtual list combined with a search filter. Notice how fast it filters 10,000 items.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: MOCK_DATA,
    height: 400,
    rowHeight: 60,
    renderRow: (item: MockUser, index: number) => <div key={index} className="hover:bg-muted/30 flex h-full items-center border-b px-4">
        <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium">
          {item.id}
        </div>
        <div className="ml-4 flex-1 overflow-hidden">
          <p className="truncate text-sm font-medium">{item.name}</p>
          <p className="text-muted-foreground truncate text-xs">{item.email}</p>
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Rendering a list of 10,000 items at 60fps."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ContactListDemo />,
  parameters: {
    docs: {
      description: {
        story: "Virtual list combined with a search filter. Notice how fast it filters 10,000 items."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`ContactListSearch`]}))();export{f as ContactListSearch,u as Default,p as __namedExportsOrder,c as default};