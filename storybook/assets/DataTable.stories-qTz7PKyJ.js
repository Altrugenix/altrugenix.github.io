import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t,Ot as n,at as r,r as i}from"./iframe-coe0kFk0.js";import{a,t as o}from"./src-CxQaJ0KN.js";import{r as s,t as c}from"./src-Bp5uj_4q.js";var l,u,d,f,p,m,h,g;e((()=>{c(),i(),o(),l=t(),u=[{accessorKey:`id`,header:`Transaction ID`},{accessorKey:`status`,header:`Status`,cell:({row:e})=>{let t=e.getValue(`status`);return(0,l.jsx)(`span`,{className:`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium capitalize ${{pending:`text-amber-500 bg-amber-500/10`,processing:`text-blue-500 bg-blue-500/10`,success:`text-emerald-500 bg-emerald-500/10`,failed:`text-destructive bg-destructive/10`}[t]||``}`,children:t})}},{accessorKey:`email`,header:({column:e})=>(0,l.jsxs)(a,{variant:`ghost`,onClick:()=>e.toggleSorting(e.getIsSorted()===`asc`),className:`data-[state=open]:bg-accent -ml-4 h-8`,children:[`Email`,(0,l.jsx)(n,{className:`ml-2 h-4 w-4`})]})},{accessorKey:`amount`,header:()=>(0,l.jsx)(`div`,{className:`text-right`,children:`Amount`}),cell:({row:e})=>{let t=parseFloat(e.getValue(`amount`));return(0,l.jsx)(`div`,{className:`text-right font-medium`,children:new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(t)})}},{id:`actions`,cell:()=>(0,l.jsx)(`div`,{className:`text-right`,children:(0,l.jsx)(a,{variant:`ghost`,size:`icon`,className:`h-8 w-8`,children:(0,l.jsx)(r,{className:`h-4 w-4`})})})}],d=[{id:`INV001`,amount:316,status:`success`,email:`alice@example.com`},{id:`INV002`,amount:242,status:`pending`,email:`bob@example.com`},{id:`INV003`,amount:837,status:`processing`,email:`carol@example.com`},{id:`INV004`,amount:874,status:`failed`,email:`dave@example.com`},{id:`INV005`,amount:721,status:`success`,email:`eve@example.com`},{id:`INV006`,amount:120.5,status:`success`,email:`frank@example.com`},{id:`INV007`,amount:450,status:`pending`,email:`grace@example.com`},{id:`INV008`,amount:99.99,status:`processing`,email:`hank@example.com`}],f={title:`Data Display/DataTable`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:"A powerful data table component built on top of `@tanstack/react-table`. Supports client-side sorting, filtering, column visibility toggling, and pagination out of the box."}}},argTypes:{columns:{description:`Array of TanStack Table column definitions.`,table:{category:`Data`}},data:{description:`Array of data rows to display.`,table:{category:`Data`}},searchKey:{control:`text`,description:`The object key (column) to use for global search filtering.`,table:{category:`Features`}},searchPlaceholder:{control:`text`,description:`Placeholder text for the search input field.`,table:{category:`Features`}},enableColumnVisibility:{control:`boolean`,description:`Whether to show the column visibility dropdown.`,table:{category:`Features`}}}},p={render:()=>(0,l.jsx)(s,{columns:u,data:d}),parameters:{docs:{description:{story:`A basic data table with custom cell rendering for status badges and formatted currency.`}}}},m={render:()=>(0,l.jsx)(s,{columns:u,data:d,searchKey:`email`,searchPlaceholder:`Filter by email address...`}),parameters:{docs:{description:{story:"Data table with a search input attached to a specific column (`email`), allowing quick client-side filtering."}}}},h={render:()=>(0,l.jsx)(s,{columns:u,data:d,enableColumnVisibility:!1,searchKey:`email`}),parameters:{docs:{description:{story:"The 'Columns' dropdown button is disabled via `enableColumnVisibility={false}`."}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable columns={columns} data={data} />,
  parameters: {
    docs: {
      description: {
        story: "A basic data table with custom cell rendering for status badges and formatted currency."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable columns={columns} data={data} searchKey="email" searchPlaceholder="Filter by email address..." />,
  parameters: {
    docs: {
      description: {
        story: "Data table with a search input attached to a specific column (\`email\`), allowing quick client-side filtering."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable columns={columns} data={data} enableColumnVisibility={false} searchKey="email" />,
  parameters: {
    docs: {
      description: {
        story: "The 'Columns' dropdown button is disabled via \`enableColumnVisibility={false}\`."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithSearch`,`NoColumnVisibility`]}))();export{p as Default,h as NoColumnVisibility,m as WithSearch,g as __namedExportsOrder,f as default};