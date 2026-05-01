import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(i(),1),r(),s=n(),c={row:`flex-row`,col:`flex-col`,"row-reverse":`flex-row-reverse`,"col-reverse":`flex-col-reverse`},l={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`,baseline:`items-baseline`},u={start:`justify-start`,center:`justify-center`,end:`justify-end`,between:`justify-between`,around:`justify-around`,evenly:`justify-evenly`},d={none:`gap-0`,xs:`gap-1`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},f=o.forwardRef(({className:e,direction:t=`row`,align:n=`stretch`,justify:r=`start`,wrap:i=!1,gap:o=`none`,inline:f=!1,children:p,...m},h)=>(0,s.jsx)(`div`,{ref:h,className:a(f?`inline-flex`:`flex`,c[t],l[n],u[r],i&&`flex-wrap`,d[o],e),...m,children:p})),f.displayName=`Flex`,f.__docgenInfo={description:``,methods:[],displayName:`Flex`,props:{direction:{required:!1,tsType:{name:`union`,raw:`"row" | "col" | "row-reverse" | "col-reverse"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"col"`},{name:`literal`,value:`"row-reverse"`},{name:`literal`,value:`"col-reverse"`}]},description:``,defaultValue:{value:`"row"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch" | "baseline"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`},{name:`literal`,value:`"baseline"`}]},description:``,defaultValue:{value:`"stretch"`,computed:!1}},justify:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "between" | "around" | "evenly"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"between"`},{name:`literal`,value:`"around"`},{name:`literal`,value:`"evenly"`}]},description:``,defaultValue:{value:`"start"`,computed:!1}},wrap:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`"none" | "xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},inline:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S,C;e((()=>{m(),h=n(),g=({children:e})=>(0,h.jsx)(`div`,{className:`bg-primary/10 text-primary border-primary/20 rounded border px-4 py-2 text-sm font-medium`,children:e}),_={title:`Layout/Flex`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A flexbox container with prop-driven direction, alignment, justification, gap, and wrap controls. Eliminates the need for repetitive flex utility classes.`}}},argTypes:{direction:{control:`select`,options:[`row`,`col`,`row-reverse`,`col-reverse`],description:`Flex direction.`,table:{category:`Layout`}},align:{control:`select`,options:[`start`,`center`,`end`,`stretch`,`baseline`],description:`Cross-axis alignment.`,table:{category:`Layout`}},justify:{control:`select`,options:[`start`,`center`,`end`,`between`,`around`,`evenly`],description:`Main-axis justification.`,table:{category:`Layout`}},wrap:{control:`boolean`,description:`Allow items to wrap to the next line.`,table:{category:`Layout`}},gap:{control:`select`,options:[`none`,`xs`,`sm`,`md`,`lg`,`xl`],description:`Gap between items.`,table:{category:`Layout`}},inline:{control:`boolean`,description:`Renders as inline-flex instead of flex.`,table:{category:`Layout`}}}},v={args:{gap:`md`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{children:`Item 1`}),(0,h.jsx)(g,{children:`Item 2`}),(0,h.jsx)(g,{children:`Item 3`})]})}},y={args:{justify:`between`,align:`center`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{children:`Left`}),(0,h.jsx)(g,{children:`Center`}),(0,h.jsx)(g,{children:`Right`})]})}},b={args:{direction:`col`,gap:`sm`,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{children:`Row 1`}),(0,h.jsx)(g,{children:`Row 2`}),(0,h.jsx)(g,{children:`Row 3`})]})}},x={render:()=>(0,h.jsx)(f,{gap:`sm`,wrap:!0,children:Array.from({length:12},(e,t)=>(0,h.jsxs)(g,{children:[`Item `,t+1]},t))}),parameters:{docs:{description:{story:`Wrapping flex — items flow to the next line when the container width is exceeded.`}}}},S={render:()=>(0,h.jsx)(f,{justify:`center`,align:`center`,className:`border-border h-48 rounded-lg border-2 border-dashed`,children:(0,h.jsx)(g,{children:`Centered content`})}),parameters:{docs:{description:{story:`Using justify and align to perfectly center content.`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    gap: "md",
    children: <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    justify: "between",
    align: "center",
    children: <>
        <Box>Left</Box>
        <Box>Center</Box>
        <Box>Right</Box>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "col",
    gap: "sm",
    children: <>
        <Box>Row 1</Box>
        <Box>Row 2</Box>
        <Box>Row 3</Box>
      </>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="sm" wrap>
      {Array.from({
      length: 12
    }, (_, i) => <Box key={i}>Item {i + 1}</Box>)}
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: "Wrapping flex — items flow to the next line when the container width is exceeded."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Flex justify="center" align="center" className="border-border h-48 rounded-lg border-2 border-dashed">
      <Box>Centered content</Box>
    </Flex>,
  parameters: {
    docs: {
      description: {
        story: "Using justify and align to perfectly center content."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`SpaceBetween`,`Column`,`WrapDemo`,`Centered`]}))();export{S as Centered,b as Column,v as Default,y as SpaceBetween,x as WrapDemo,C as __namedExportsOrder,_ as default};