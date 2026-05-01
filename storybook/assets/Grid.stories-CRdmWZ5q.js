import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l,u,d=e((()=>{o=t(i(),1),r(),s=n(),c={1:`grid-cols-1`,2:`grid-cols-1 sm:grid-cols-2`,3:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`,4:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,5:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`,6:`grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`,12:`grid-cols-4 sm:grid-cols-6 lg:grid-cols-12`},l={none:`gap-0`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},u=o.forwardRef(({className:e,cols:t=3,gap:n=`md`,children:r,...i},o)=>(0,s.jsx)(`div`,{ref:o,className:a(`grid`,c[t],l[n],e),...i,children:r})),u.displayName=`Grid`,u.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{cols:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6 | 12`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`12`}]},description:`Number of columns`,defaultValue:{value:`3`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Gap between items`,defaultValue:{value:`"md"`,computed:!1}}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),p=n(),m=({children:e})=>(0,p.jsx)(`div`,{className:`bg-primary/10 text-primary border-primary/20 flex items-center justify-center rounded border p-4 text-sm font-medium`,children:e}),h={title:`Layout/Grid`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`A responsive CSS grid container with prop-based column count and gap sizing. Automatically adds responsive breakpoints (1 col on mobile → N cols on desktop).`}}},argTypes:{cols:{control:`select`,options:[1,2,3,4,5,6,12],description:`Number of columns (auto-responsive).`,table:{category:`Layout`}},gap:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`xl`],description:`Gap between grid items.`,table:{category:`Layout`}}}},g={args:{cols:3,gap:`md`,children:Array.from({length:6},(e,t)=>(0,p.jsxs)(m,{children:[`Cell `,t+1]},t))}},_={args:{cols:4,gap:`md`,children:Array.from({length:8},(e,t)=>(0,p.jsxs)(m,{children:[`Cell `,t+1]},t))}},v={args:{cols:2,gap:`lg`,children:Array.from({length:4},(e,t)=>(0,p.jsxs)(m,{children:[`Cell `,t+1]},t))}},y={render:()=>(0,p.jsx)(`div`,{className:`space-y-8`,children:[2,3,4,6].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`cols=`,e]}),(0,p.jsx)(u,{cols:e,gap:`sm`,children:Array.from({length:e*2},(e,t)=>(0,p.jsx)(m,{children:t+1},t))})]},e))}),parameters:{docs:{description:{story:`Grid at 2, 3, 4, and 6 column counts. Resize the browser to see responsive breakpoints.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: "md",
    children: Array.from({
      length: 6
    }, (_, i) => <Cell key={i}>Cell {i + 1}</Cell>)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    gap: "md",
    children: Array.from({
      length: 8
    }, (_, i) => <Cell key={i}>Cell {i + 1}</Cell>)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 2,
    gap: "lg",
    children: Array.from({
      length: 4
    }, (_, i) => <Cell key={i}>Cell {i + 1}</Cell>)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {([2, 3, 4, 6] as const).map(cols => <div key={cols}>
          <p className="mb-2 text-sm font-medium">cols={cols}</p>
          <Grid cols={cols} gap="sm">
            {Array.from({
          length: cols * 2
        }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
          </Grid>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Grid at 2, 3, 4, and 6 column counts. Resize the browser to see responsive breakpoints."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`ThreeColumns`,`FourColumns`,`TwoColumns`,`AllColumnCounts`]}))();export{y as AllColumnCounts,_ as FourColumns,g as ThreeColumns,v as TwoColumns,b as __namedExportsOrder,h as default};