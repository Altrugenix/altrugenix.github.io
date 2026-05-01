import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{r as n,t as r}from"./src-CFy74fZe.js";import{n as i,t as a}from"./src-Bp5uj_4q.js";var o,s,c,l,u,d;e((()=>{a(),r(),o=t(),s={title:`Data Display/Table/DataGrid`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A high-performance virtualized data grid suitable for rendering thousands of rows. Uses `VirtualList` under the hood for 60fps scrolling."}}},argTypes:{columns:{description:`Array of column definitions with header, accessorKey, width, and optional custom cell renderer.`,table:{category:`Data`}},data:{description:`Array of raw data items.`,table:{category:`Data`}},height:{control:`number`,description:`Fixed height of the scrollable grid container.`,table:{category:`Layout`}}}},c=[{header:`ID`,accessorKey:`id`,width:80},{header:`Name`,accessorKey:`name`},{header:`Email`,accessorKey:`email`,width:250},{header:`Status`,accessorKey:`status`,width:120,cell:e=>(0,o.jsx)(n,{variant:e.status===`Active`?`success`:`warning`,children:e.status})}],l=Array.from({length:1e3}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,status:t%3==0?`Active`:`Pending`})),u={args:{columns:c,data:l,height:500},parameters:{docs:{description:{story:`A demonstration of 1,000 rows rendering smoothly thanks to DOM virtualization.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: COLUMNS,
    data: DATA,
    height: 500
  },
  parameters: {
    docs: {
      description: {
        story: "A demonstration of 1,000 rows rendering smoothly thanks to DOM virtualization."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Performance1000Rows`]}))();export{u as Performance1000Rows,d as __namedExportsOrder,s as default};