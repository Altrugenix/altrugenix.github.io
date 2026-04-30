import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-BnAwTMlV.js";var o,s,c,l,u,d=e((()=>{o=t(a(),1),i(),s=r(),c={1:`grid-cols-1`,2:`grid-cols-1 sm:grid-cols-2`,3:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`,4:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,5:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`,6:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`,12:`grid-cols-4 sm:grid-cols-6 lg:grid-cols-12`},l={none:`gap-0`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},u=o.forwardRef(({className:e,cols:t=3,gap:r=`md`,children:i,...a},o)=>(0,s.jsx)(`div`,{ref:o,className:n(`grid`,c[t],l[r],e),...a,children:i})),u.displayName=`Grid`,u.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{cols:{defaultValue:{value:`3`,computed:!1},required:!1},gap:{defaultValue:{value:`"md"`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v;e((()=>{d(),f=r(),p={title:`Layout/Grid`,component:u,tags:[`autodocs`]},m=({n:e})=>(0,f.jsxs)(`div`,{className:`bg-card flex h-24 items-center justify-center rounded-lg border text-sm font-medium shadow-sm`,children:[`Item `,e]}),h={render:()=>(0,f.jsx)(u,{cols:3,gap:`md`,children:Array.from({length:6},(e,t)=>(0,f.jsx)(m,{n:t+1},t))})},g={render:()=>(0,f.jsx)(`div`,{className:`space-y-8`,children:[2,3,4].map(e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`cols=`,e]}),(0,f.jsx)(u,{cols:e,gap:`sm`,children:Array.from({length:e*2},(e,t)=>(0,f.jsx)(m,{n:t+1},t))})]},e))})},_={render:()=>(0,f.jsx)(`div`,{className:`space-y-8`,children:[`none`,`sm`,`md`,`lg`,`xl`].map(e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`gap="`,e,`"`]}),(0,f.jsx)(u,{cols:4,gap:e,children:Array.from({length:4},(e,t)=>(0,f.jsx)(m,{n:t+1},t))})]},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Grid cols={3} gap="md">
      {Array.from({
      length: 6
    }, (_, i) => <GridItem key={i} n={i + 1} />)}
    </Grid>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {([2, 3, 4] as const).map(cols => <div key={cols}>
          <p className="mb-2 text-sm font-medium">cols={cols}</p>
          <Grid cols={cols} gap="sm">
            {Array.from({
          length: cols * 2
        }, (_, i) => <GridItem key={i} n={i + 1} />)}
          </Grid>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(["none", "sm", "md", "lg", "xl"] as const).map(gap => <div key={gap}>
          <p className="mb-2 text-sm font-medium">gap=&quot;{gap}&quot;</p>
          <Grid cols={4} gap={gap}>
            {Array.from({
          length: 4
        }, (_, i) => <GridItem key={i} n={i + 1} />)}
          </Grid>
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`ColumnCounts`,`GapSizes`]}))();export{g as ColumnCounts,h as Default,_ as GapSizes,v as __namedExportsOrder,p as default};