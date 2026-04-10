import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(r(),1),i(),s=n(),c={row:`flex-row`,col:`flex-col`,"row-reverse":`flex-row-reverse`,"col-reverse":`flex-col-reverse`},l={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`,baseline:`items-baseline`},u={start:`justify-start`,center:`justify-center`,end:`justify-end`,between:`justify-between`,around:`justify-around`,evenly:`justify-evenly`},d={none:`gap-0`,xs:`gap-1`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},f=o.forwardRef(({className:e,direction:t=`row`,align:n=`stretch`,justify:r=`start`,wrap:i=!1,gap:o=`none`,inline:f=!1,children:p,...m},h)=>(0,s.jsx)(`div`,{ref:h,className:a(f?`inline-flex`:`flex`,c[t],l[n],u[r],i&&`flex-wrap`,d[o],e),...m,children:p})),f.displayName=`Flex`,f.__docgenInfo={description:``,methods:[],displayName:`Flex`,props:{direction:{required:!1,tsType:{name:`union`,raw:`"row" | "col" | "row-reverse" | "col-reverse"`,elements:[{name:`literal`,value:`"row"`},{name:`literal`,value:`"col"`},{name:`literal`,value:`"row-reverse"`},{name:`literal`,value:`"col-reverse"`}]},description:``,defaultValue:{value:`"row"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch" | "baseline"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`},{name:`literal`,value:`"baseline"`}]},description:``,defaultValue:{value:`"stretch"`,computed:!1}},justify:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "between" | "around" | "evenly"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"between"`},{name:`literal`,value:`"around"`},{name:`literal`,value:`"evenly"`}]},description:``,defaultValue:{value:`"start"`,computed:!1}},wrap:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`"none" | "xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"none"`,computed:!1}},inline:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x;e((()=>{m(),h=n(),g={title:`Layout/Flex`,component:f,tags:[`autodocs`]},_=({label:e})=>(0,h.jsx)(`div`,{className:`flex h-16 w-16 items-center justify-center rounded-lg border bg-primary/10 text-xs font-medium`,children:e}),v={render:()=>(0,h.jsxs)(f,{gap:`md`,align:`center`,children:[(0,h.jsx)(_,{label:`A`}),(0,h.jsx)(_,{label:`B`}),(0,h.jsx)(_,{label:`C`})]})},y={render:()=>(0,h.jsxs)(`div`,{className:`space-y-6`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Row (default)`}),(0,h.jsxs)(f,{direction:`row`,gap:`sm`,children:[(0,h.jsx)(_,{label:`1`}),(0,h.jsx)(_,{label:`2`}),(0,h.jsx)(_,{label:`3`})]})]}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Column`}),(0,h.jsxs)(f,{direction:`col`,gap:`sm`,children:[(0,h.jsx)(_,{label:`1`}),(0,h.jsx)(_,{label:`2`}),(0,h.jsx)(_,{label:`3`})]})]})]})},b={render:()=>(0,h.jsx)(`div`,{className:`space-y-4`,children:[`start`,`center`,`end`,`between`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(`p`,{className:`mb-1 text-xs text-muted-foreground`,children:[`justify="`,e,`"`]}),(0,h.jsxs)(f,{justify:e,align:`center`,gap:`sm`,className:`rounded-lg border p-4`,children:[(0,h.jsx)(_,{label:`A`}),(0,h.jsx)(_,{label:`B`}),(0,h.jsx)(_,{label:`C`})]})]},e))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="md" align="center">
      <Swatch label="A" />
      <Swatch label="B" />
      <Swatch label="C" />
    </Flex>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">Row (default)</p>
        <Flex direction="row" gap="sm">
          <Swatch label="1" />
          <Swatch label="2" />
          <Swatch label="3" />
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Column</p>
        <Flex direction="col" gap="sm">
          <Swatch label="1" />
          <Swatch label="2" />
          <Swatch label="3" />
        </Flex>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["start", "center", "end", "between"] as const).map(justify => <div key={justify}>
          <p className="mb-1 text-xs text-muted-foreground">
            justify=&quot;{justify}&quot;
          </p>
          <Flex justify={justify} align="center" gap="sm" className="rounded-lg border p-4">
            <Swatch label="A" />
            <Swatch label="B" />
            <Swatch label="C" />
          </Flex>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Direction`,`JustifyAndAlign`]}))();export{v as Default,y as Direction,b as JustifyAndAlign,x as __namedExportsOrder,g as default};