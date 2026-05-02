import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{r as n,t as r}from"./src-D0-hy8Gr.js";import{a as i,c as a,i as o,l as s,o as c,s as l,t as u,u as d}from"./src-BHSUDaRz.js";var f,p,m,h;e((()=>{u(),r(),f=t(),p={title:`Data Display/Table/Standard`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A primitive HTML table component built with Tailwind classes for consistent styling. Use this for simple data display without sorting or pagination.`}}}},m={render:()=>(0,f.jsx)(`div`,{className:`rounded-md border`,children:(0,f.jsxs)(o,{children:[(0,f.jsx)(c,{children:`A list of recent invoices.`}),(0,f.jsx)(s,{children:(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{className:`w-[100px]`,children:`Invoice`}),(0,f.jsx)(a,{children:`Status`}),(0,f.jsx)(a,{children:`Method`}),(0,f.jsx)(a,{className:`text-right`,children:`Amount`})]})}),(0,f.jsxs)(i,{children:[(0,f.jsxs)(d,{children:[(0,f.jsx)(l,{className:`font-medium`,children:`INV001`}),(0,f.jsx)(l,{children:(0,f.jsx)(n,{variant:`success`,children:`Paid`})}),(0,f.jsx)(l,{children:`Credit Card`}),(0,f.jsx)(l,{className:`text-right`,children:`$250.00`})]}),(0,f.jsxs)(d,{children:[(0,f.jsx)(l,{className:`font-medium`,children:`INV002`}),(0,f.jsx)(l,{children:(0,f.jsx)(n,{variant:`warning`,children:`Pending`})}),(0,f.jsx)(l,{children:`PayPal`}),(0,f.jsx)(l,{className:`text-right`,children:`$150.00`})]}),(0,f.jsxs)(d,{children:[(0,f.jsx)(l,{className:`font-medium`,children:`INV003`}),(0,f.jsx)(l,{children:(0,f.jsx)(n,{variant:`destructive`,children:`Overdue`})}),(0,f.jsx)(l,{children:`Bank Transfer`}),(0,f.jsx)(l,{className:`text-right`,children:`$350.00`})]})]})]})}),parameters:{docs:{description:{story:`A basic table wrapped in a border. Features a caption, header, and body rows with badges.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rounded-md border">
      <Table>
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A basic table wrapped in a border. Features a caption, header, and body rows with badges."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};