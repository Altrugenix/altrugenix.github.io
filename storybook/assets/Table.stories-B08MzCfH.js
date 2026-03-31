import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{A as n,D as r,E as i,L as a,dt as o,i as s,r as c,s as l}from"./iframe-CMmeXSus.js";import{n as u,t as d}from"./badge-r7dk6fwI.js";var f,p,m,h,g,_,v,y,b,x,S=e((()=>{f=t(o(),1),s(),p=a(),m=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`div`,{className:`relative w-full overflow-auto`,children:(0,p.jsx)(`table`,{ref:n,className:c(`w-full caption-bottom text-sm`,e),...t})})),m.displayName=`Table`,h=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`thead`,{ref:n,className:c(`[&_tr]:border-b`,e),...t})),h.displayName=`TableHeader`,g=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`tbody`,{ref:n,className:c(`[&_tr:last-child]:border-0`,e),...t})),g.displayName=`TableBody`,_=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`tfoot`,{ref:n,className:c(`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0`,e),...t})),_.displayName=`TableFooter`,v=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`tr`,{ref:n,className:c(`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`,e),...t})),v.displayName=`TableRow`,y=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`th`,{ref:n,className:c(`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0`,e),...t})),y.displayName=`TableHead`,b=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`td`,{ref:n,className:c(`p-4 align-middle [&:has([role=checkbox])]:pr-0`,e),...t})),b.displayName=`TableCell`,x=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(`caption`,{ref:n,className:c(`mt-4 text-sm text-muted-foreground`,e),...t})),x.displayName=`TableCaption`,m.__docgenInfo={description:``,methods:[],displayName:`Table`},h.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},g.__docgenInfo={description:``,methods:[],displayName:`TableBody`},_.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},v.__docgenInfo={description:``,methods:[],displayName:`TableRow`},y.__docgenInfo={description:``,methods:[],displayName:`TableHead`},b.__docgenInfo={description:``,methods:[],displayName:`TableCell`},x.__docgenInfo={description:``,methods:[],displayName:`TableCaption`}}));function C({columns:e,data:t,className:a,onRowClick:o,emptyMessage:s=`No data available.`}){let[l,u]=(0,w.useState)(null),[d,f]=(0,w.useState)(`asc`),p=e=>{l===e?f(d===`asc`?`desc`:`asc`):(u(e),f(`asc`))},_=(0,w.useMemo)(()=>l?[...t].sort((e,t)=>{let n=e[l],r=t[l];if(n===r)return 0;let i=n>r?1:-1;return d===`asc`?i:-i}):t,[t,l,d]);return(0,T.jsx)(`div`,{className:c(`rounded-md border`,a),children:(0,T.jsxs)(m,{children:[(0,T.jsx)(h,{children:(0,T.jsx)(v,{children:e.map(e=>(0,T.jsx)(y,{style:{width:e.width},className:c(e.sortable&&`cursor-pointer select-none transition-colors hover:bg-muted/50`,e.align===`center`&&`text-center`,e.align===`right`&&`text-right`),onClick:()=>e.sortable&&p(e.key),children:(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.header,e.sortable&&(0,T.jsx)(`div`,{className:`h-4 w-4`,children:l===e.key?d===`asc`?(0,T.jsx)(r,{className:`h-4 w-4`}):(0,T.jsx)(n,{className:`h-4 w-4`}):(0,T.jsx)(i,{className:`h-3 w-3 text-muted-foreground/50`})})]})},e.key))})}),(0,T.jsx)(g,{children:_.length>0?_.map((t,n)=>(0,T.jsx)(v,{onClick:()=>o?.(t),className:c(o&&`cursor-pointer`),children:e.map(e=>(0,T.jsx)(b,{className:c(e.align===`center`&&`text-center`,e.align===`right`&&`text-right`),children:e.render?e.render(t):t[e.key]},e.key))},n)):(0,T.jsx)(v,{children:(0,T.jsx)(b,{colSpan:e.length,className:`h-24 text-center italic text-muted-foreground`,children:s})})})]})})}var w,T,E=e((()=>{w=t(o(),1),s(),S(),l(),T=a(),C.__docgenInfo={description:``,methods:[],displayName:`DataGrid`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`Column`,elements:[{name:`T`}],raw:`Column<T>`}],raw:`Column<T>[]`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onRowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T) => void`,signature:{arguments:[{type:{name:`T`},name:`item`}],return:{name:`void`}}},description:``},emptyMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"No data available."`,computed:!1}}}}})),D=e((()=>{S(),E()})),O,k,A,j;e((()=>{D(),d(),O=a(),k={title:`Data Display/Table`,component:m,tags:[`autodocs`]},A={render:()=>(0,O.jsxs)(m,{children:[(0,O.jsx)(x,{children:`A list of recent invoices.`}),(0,O.jsx)(h,{children:(0,O.jsxs)(v,{children:[(0,O.jsx)(y,{className:`w-[100px]`,children:`Invoice`}),(0,O.jsx)(y,{children:`Status`}),(0,O.jsx)(y,{children:`Method`}),(0,O.jsx)(y,{className:`text-right`,children:`Amount`})]})}),(0,O.jsxs)(g,{children:[(0,O.jsxs)(v,{children:[(0,O.jsx)(b,{className:`font-medium`,children:`INV001`}),(0,O.jsx)(b,{children:(0,O.jsx)(u,{variant:`success`,children:`Paid`})}),(0,O.jsx)(b,{children:`Credit Card`}),(0,O.jsx)(b,{className:`text-right`,children:`$250.00`})]}),(0,O.jsxs)(v,{children:[(0,O.jsx)(b,{className:`font-medium`,children:`INV002`}),(0,O.jsx)(b,{children:(0,O.jsx)(u,{variant:`warning`,children:`Pending`})}),(0,O.jsx)(b,{children:`PayPal`}),(0,O.jsx)(b,{className:`text-right`,children:`$150.00`})]}),(0,O.jsxs)(v,{children:[(0,O.jsx)(b,{className:`font-medium`,children:`INV003`}),(0,O.jsx)(b,{children:(0,O.jsx)(u,{variant:`destructive`,children:`Overdue`})}),(0,O.jsx)(b,{children:`Bank Transfer`}),(0,O.jsx)(b,{className:`text-right`,children:`$350.00`})]})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>
            <Badge variant="success">Paid</Badge>
          </TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>
            <Badge variant="warning">Pending</Badge>
          </TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>
            <Badge variant="destructive">Overdue</Badge>
          </TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...A.parameters?.docs?.source}}},j=[`Default`]}))();export{A as Default,j as __namedExportsOrder,k as default};