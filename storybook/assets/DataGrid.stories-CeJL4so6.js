import{n as e}from"./chunk-zsgVPwQN.js";import{Pt as t}from"./iframe-CAjx62e_.js";import{r as n,t as r}from"./badge-CVe4zhLK.js";import{n as i,t as a}from"./DataGrid-BpG6qRUR.js";var o,s,c,l,u,d;e((()=>{i(),r(),o=t(),s={title:`UI/Table/DataGrid`,component:a,tags:[`autodocs`]},c=[{header:`ID`,accessorKey:`id`,width:80},{header:`Name`,accessorKey:`name`},{header:`Email`,accessorKey:`email`,width:250},{header:`Status`,accessorKey:`status`,width:120,cell:e=>(0,o.jsx)(n,{variant:e.status===`Active`?`success`:`warning`,children:e.status})}],l=Array.from({length:1e3}).map((e,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,status:t%3==0?`Active`:`Pending`})),u={args:{columns:c,data:l,height:500}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: COLUMNS,
    data: DATA,
    height: 500
  }
}`,...u.parameters?.docs?.source}}},d=[`Performance1000Rows`]}))();export{u as Performance1000Rows,d as __namedExportsOrder,s as default};