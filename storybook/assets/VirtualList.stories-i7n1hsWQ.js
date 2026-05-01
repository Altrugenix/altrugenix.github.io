import{n as e}from"./chunk-jRWAZmH_.js";import{Ft as t}from"./iframe-By8sOsRq.js";import{n,t as r}from"./altrugenix-virtual-list-ByfMs13k.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`UI/VirtualList`,component:n,tags:[`autodocs`]},o=Array.from({length:1e4},(e,t)=>({id:t,title:`Item ${t+1}`,description:`This is the description for item ${t+1}`,label:`Row ${t}`})),s={args:{items:o,height:400,rowHeight:60,renderRow:e=>(0,i.jsxs)(`div`,{className:`hover:bg-muted/50 flex h-full flex-col justify-center border-b px-4 py-2 transition-colors`,children:[(0,i.jsx)(`span`,{className:`text-sm font-semibold`,children:e.title}),(0,i.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:e.description})]})}},c={args:{items:Array.from({length:1e5},(e,t)=>({id:t,title:`Item ${t+1}`,description:`This is the description for item ${t+1}`,label:`Row ${t}`})),height:500,rowHeight:40,renderRow:e=>(0,i.jsx)(`div`,{className:`flex h-full items-center border-b px-4 py-2 font-mono text-xs`,children:e.label})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: MOCK_ITEMS,
    height: 400,
    rowHeight: 60,
    renderRow: (item: Item) => <div className="hover:bg-muted/50 flex h-full flex-col justify-center border-b px-4 py-2 transition-colors">
        <span className="text-sm font-semibold">{item.title}</span>
        <span className="text-muted-foreground text-xs">
          {item.description}
        </span>
      </div>
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 100000
    }, (_, i) => ({
      id: i,
      title: \`Item \${i + 1}\`,
      description: \`This is the description for item \${i + 1}\`,
      label: \`Row \${i}\`
    })),
    height: 500,
    rowHeight: 40,
    renderRow: (item: Item) => <div className="flex h-full items-center border-b px-4 py-2 font-mono text-xs">
        {item.label}
      </div>
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`LargeDataset`]}))();export{s as Default,c as LargeDataset,l as __namedExportsOrder,a as default};