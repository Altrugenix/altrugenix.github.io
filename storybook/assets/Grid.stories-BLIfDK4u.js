import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";var o,s,c,l,u,d=e((()=>{o=t(r(),1),i(),s=n(),c={1:`grid-cols-1`,2:`grid-cols-1 sm:grid-cols-2`,3:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`,4:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,5:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`,6:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`,12:`grid-cols-4 sm:grid-cols-6 lg:grid-cols-12`},l={none:`gap-0`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},u=o.forwardRef(({className:e,cols:t=3,gap:n=`md`,children:r,...i},o)=>(0,s.jsx)(`div`,{ref:o,className:a(`grid`,c[t],l[n],e),...i,children:r})),u.displayName=`Grid`,u.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{cols:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6 | 12`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`12`}]},description:`Number of columns`,defaultValue:{value:`3`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Gap between items`,defaultValue:{value:`"md"`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y;e((()=>{f(),p=n(),m={title:`Layout/Grid`,component:u,tags:[`autodocs`]},h=({n:e})=>(0,p.jsxs)(`div`,{className:`flex h-24 items-center justify-center rounded-lg border bg-card text-sm font-medium shadow-sm`,children:[`Item `,e]}),g={render:()=>(0,p.jsx)(u,{cols:3,gap:`md`,children:Array.from({length:6},(e,t)=>(0,p.jsx)(h,{n:t+1},t))})},_={render:()=>(0,p.jsx)(`div`,{className:`space-y-8`,children:[2,3,4].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`cols=`,e]}),(0,p.jsx)(u,{cols:e,gap:`sm`,children:Array.from({length:e*2},(e,t)=>(0,p.jsx)(h,{n:t+1},t))})]},e))})},v={render:()=>(0,p.jsx)(`div`,{className:`space-y-8`,children:[`none`,`sm`,`md`,`lg`,`xl`].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`gap="`,e,`"`]}),(0,p.jsx)(u,{cols:4,gap:e,children:Array.from({length:4},(e,t)=>(0,p.jsx)(h,{n:t+1},t))})]},e))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Grid cols={3} gap="md">
      {Array.from({
      length: 6
    }, (_, i) => <GridItem key={i} n={i + 1} />)}
    </Grid>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ColumnCounts`,`GapSizes`]}))();export{_ as ColumnCounts,g as Default,v as GapSizes,y as __namedExportsOrder,m as default};