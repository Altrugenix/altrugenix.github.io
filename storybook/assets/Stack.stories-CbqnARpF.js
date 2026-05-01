import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";import{a as o,t as s}from"./src-CxQaJ0KN.js";var c,l,u,d,f,p=e((()=>{c=t(i(),1),r(),l=n(),u={xs:{vertical:`space-y-1`,horizontal:`space-x-1`},sm:{vertical:`space-y-2`,horizontal:`space-x-2`},md:{vertical:`space-y-4`,horizontal:`space-x-4`},lg:{vertical:`space-y-6`,horizontal:`space-x-6`},xl:{vertical:`space-y-8`,horizontal:`space-x-8`}},d={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`},f=c.forwardRef(({className:e,direction:t=`vertical`,spacing:n=`md`,align:r=`stretch`,children:i,...o},s)=>(0,l.jsx)(`div`,{ref:s,className:a(`flex`,t===`horizontal`?`flex-row`:`flex-col`,u[n][t],d[r],e),...o,children:i})),f.displayName=`Stack`,f.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{direction:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Direction of the stack`,defaultValue:{value:`"vertical"`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Spacing between items`,defaultValue:{value:`"md"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`}]},description:`Alignment of items along the cross axis`,defaultValue:{value:`"stretch"`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S;e((()=>{m(),s(),h=n(),g={title:`Layout/Stack`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A one-dimensional layout component for stacking elements vertically or horizontally with consistent spacing. A simpler alternative to Flex for linear layouts.`}}},argTypes:{direction:{control:`select`,options:[`vertical`,`horizontal`],description:`Stack direction.`,table:{category:`Layout`}},spacing:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`Gap between items.`,table:{category:`Layout`}},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`],description:`Cross-axis alignment.`,table:{category:`Layout`}}}},_=({children:e})=>(0,h.jsx)(`div`,{className:`bg-card rounded border p-3 text-sm`,children:e}),v={args:{spacing:`md`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{children:`Item 1`}),(0,h.jsx)(_,{children:`Item 2`}),(0,h.jsx)(_,{children:`Item 3`})]})}},y={args:{direction:`horizontal`,spacing:`md`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{children:`Item 1`}),(0,h.jsx)(_,{children:`Item 2`}),(0,h.jsx)(_,{children:`Item 3`})]})}},b={render:()=>(0,h.jsx)(`div`,{className:`space-y-8`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`spacing="`,e,`"`]}),(0,h.jsxs)(f,{direction:`horizontal`,spacing:e,children:[(0,h.jsx)(_,{children:`A`}),(0,h.jsx)(_,{children:`B`}),(0,h.jsx)(_,{children:`C`})]})]},e))}),parameters:{docs:{description:{story:`All five spacing values compared side by side.`}}}},x={render:()=>(0,h.jsxs)(f,{direction:`horizontal`,spacing:`sm`,align:`center`,children:[(0,h.jsx)(o,{children:`Save`}),(0,h.jsx)(o,{variant:`outline`,children:`Cancel`}),(0,h.jsx)(o,{variant:`ghost`,children:`Reset`})]}),parameters:{docs:{description:{story:`A horizontal button group — one of the most common Stack use cases.`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: "md",
    children: <>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    spacing: "md",
    children: <>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(spacing => <div key={spacing}>
          <p className="mb-2 text-sm font-medium">
            spacing=&quot;{spacing}&quot;
          </p>
          <Stack direction="horizontal" spacing={spacing}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Stack>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All five spacing values compared side by side."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="sm" align="center">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: "A horizontal button group — one of the most common Stack use cases."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Vertical`,`Horizontal`,`AllSpacings`,`ButtonGroup`]}))();export{b as AllSpacings,x as ButtonGroup,y as Horizontal,v as Vertical,S as __namedExportsOrder,g as default};