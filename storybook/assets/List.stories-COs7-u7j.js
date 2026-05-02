import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t,et as n,mt as r,r as i,rt as a}from"./iframe-zfMobaDd.js";import{n as o,r as s,t as c}from"./src-B6P1RTvq.js";var l,u,d,f,p,m,h;e((()=>{c(),i(),l=t(),u={title:`Data Display/List`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A vertical list container for displaying homogeneous data. Supports dividers, ordered/unordered modes, and rich items with leading/trailing elements.`}}},argTypes:{divided:{control:`boolean`,description:`Adds a border between list items.`,table:{category:`Appearance`}},ordered:{control:`boolean`,description:"Renders as an `<ol>` with numbered items.",table:{category:`Appearance`}}}},d={render:()=>(0,l.jsxs)(o,{className:`max-w-md`,children:[(0,l.jsx)(s,{children:`First item in the list`}),(0,l.jsx)(s,{children:`Second item in the list`}),(0,l.jsx)(s,{children:`Third item in the list`})]})},f={render:()=>(0,l.jsxs)(o,{divided:!0,className:`max-w-md rounded-lg border`,children:[(0,l.jsx)(s,{children:`First item in the list`}),(0,l.jsx)(s,{children:`Second item in the list`}),(0,l.jsx)(s,{children:`Third item in the list`})]}),parameters:{docs:{description:{story:`A divided list with a border between each item.`}}}},p={render:()=>(0,l.jsxs)(o,{ordered:!0,className:`max-w-md list-decimal pl-5`,children:[(0,l.jsx)(s,{children:`Install dependencies`}),(0,l.jsx)(s,{children:`Configure environment`}),(0,l.jsx)(s,{children:`Run development server`})]}),parameters:{docs:{description:{story:`An ordered list. Numbering is handled by CSS list styles.`}}}},m={render:()=>(0,l.jsxs)(o,{divided:!0,className:`max-w-md rounded-lg border`,children:[(0,l.jsx)(s,{leading:(0,l.jsx)(n,{className:`h-5 w-5 text-blue-500`}),trailing:(0,l.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Today`}),children:`Documents`}),(0,l.jsx)(s,{leading:(0,l.jsx)(a,{className:`h-5 w-5 text-amber-500`}),trailing:(0,l.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Yesterday`}),children:`Invoice_2026.pdf`}),(0,l.jsx)(s,{leading:(0,l.jsx)(r,{className:`h-5 w-5 text-emerald-500`}),trailing:(0,l.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Completed`}),children:`Task List`})]}),parameters:{docs:{description:{story:"List items using `leading` and `trailing` props for icons and metadata."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <List className="max-w-md">
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <List divided className="max-w-md rounded-lg border">
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>,
  parameters: {
    docs: {
      description: {
        story: "A divided list with a border between each item."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <List ordered className="max-w-md list-decimal pl-5">
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure environment</ListItem>
      <ListItem>Run development server</ListItem>
    </List>,
  parameters: {
    docs: {
      description: {
        story: "An ordered list. Numbering is handled by CSS list styles."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <List divided className="max-w-md rounded-lg border">
      <ListItem leading={<Folder className="h-5 w-5 text-blue-500" />} trailing={<span className="text-muted-foreground text-xs">Today</span>}>
        Documents
      </ListItem>
      <ListItem leading={<FileText className="h-5 w-5 text-amber-500" />} trailing={<span className="text-muted-foreground text-xs">Yesterday</span>}>
        Invoice_2026.pdf
      </ListItem>
      <ListItem leading={<CheckCircle2 className="h-5 w-5 text-emerald-500" />} trailing={<span className="text-muted-foreground text-xs">Completed</span>}>
        Task List
      </ListItem>
    </List>,
  parameters: {
    docs: {
      description: {
        story: "List items using \`leading\` and \`trailing\` props for icons and metadata."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Divided`,`Ordered`,`RichItems`]}))();export{d as Default,f as Divided,p as Ordered,m as RichItems,h as __namedExportsOrder,u as default};