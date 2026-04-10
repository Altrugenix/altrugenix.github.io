import{n as e}from"./chunk-zsgVPwQN.js";import{Pt as t}from"./iframe-CAjx62e_.js";import{n,t as r}from"./VirtualList-Z5ViOihL.js";var i=e((()=>{n()})),a,o,s,c,l,u;e((()=>{i(),a=t(),o={title:`UI/VirtualList`,component:r,tags:[`autodocs`]},s=Array.from({length:1e4},(e,t)=>({id:t,title:`Item ${t+1}`,description:`This is the description for item ${t+1}`,label:`Row ${t}`})),c={args:{items:s,height:400,rowHeight:60,renderRow:e=>(0,a.jsxs)(`div`,{className:`flex h-full flex-col justify-center border-b px-4 py-2 transition-colors hover:bg-muted/50`,children:[(0,a.jsx)(`span`,{className:`text-sm font-semibold`,children:e.title}),(0,a.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:e.description})]})}},l={args:{items:Array.from({length:1e5},(e,t)=>({id:t,title:`Item ${t+1}`,description:`This is the description for item ${t+1}`,label:`Row ${t}`})),height:500,rowHeight:40,renderRow:e=>(0,a.jsx)(`div`,{className:`flex h-full items-center border-b px-4 py-2 font-mono text-xs`,children:e.label})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: MOCK_ITEMS,
    height: 400,
    rowHeight: 60,
    renderRow: (item: Item) => <div className="flex h-full flex-col justify-center border-b px-4 py-2 transition-colors hover:bg-muted/50">
        <span className="text-sm font-semibold">{item.title}</span>
        <span className="text-xs text-muted-foreground">
          {item.description}
        </span>
      </div>
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`LargeDataset`]}))();export{c as Default,l as LargeDataset,u as __namedExportsOrder,o as default};