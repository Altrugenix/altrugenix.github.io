import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(a(),1),i(),s=r(),c={row:`flex-row`,col:`flex-col`,"row-reverse":`flex-row-reverse`,"col-reverse":`flex-col-reverse`},l={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`,baseline:`items-baseline`},u={start:`justify-start`,center:`justify-center`,end:`justify-end`,between:`justify-between`,around:`justify-around`,evenly:`justify-evenly`},d={none:`gap-0`,xs:`gap-1`,sm:`gap-2`,md:`gap-4`,lg:`gap-6`,xl:`gap-8`},f=o.forwardRef(({className:e,direction:t=`row`,align:r=`stretch`,justify:i=`start`,wrap:a=!1,gap:o=`none`,inline:f=!1,children:p,...m},h)=>(0,s.jsx)(`div`,{ref:h,className:n(f?`inline-flex`:`flex`,c[t],l[r],u[i],a&&`flex-wrap`,d[o],e),...m,children:p})),f.displayName=`Flex`,f.__docgenInfo={description:``,methods:[],displayName:`Flex`,props:{direction:{defaultValue:{value:`"row"`,computed:!1},required:!1},align:{defaultValue:{value:`"stretch"`,computed:!1},required:!1},justify:{defaultValue:{value:`"start"`,computed:!1},required:!1},wrap:{defaultValue:{value:`!1`,computed:!1},required:!1},gap:{defaultValue:{value:`"none"`,computed:!1},required:!1},inline:{defaultValue:{value:`!1`,computed:!1},required:!1}}}})),m,h,g,_,v,y,b;e((()=>{p(),m=r(),h={title:`Layout/Flex`,component:f,tags:[`autodocs`]},g=({label:e})=>(0,m.jsx)(`div`,{className:`bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg border text-xs font-medium`,children:e}),_={render:()=>(0,m.jsxs)(f,{gap:`md`,align:`center`,children:[(0,m.jsx)(g,{label:`A`}),(0,m.jsx)(g,{label:`B`}),(0,m.jsx)(g,{label:`C`})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`space-y-6`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Row (default)`}),(0,m.jsxs)(f,{direction:`row`,gap:`sm`,children:[(0,m.jsx)(g,{label:`1`}),(0,m.jsx)(g,{label:`2`}),(0,m.jsx)(g,{label:`3`})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Column`}),(0,m.jsxs)(f,{direction:`col`,gap:`sm`,children:[(0,m.jsx)(g,{label:`1`}),(0,m.jsx)(g,{label:`2`}),(0,m.jsx)(g,{label:`3`})]})]})]})},y={render:()=>(0,m.jsx)(`div`,{className:`space-y-4`,children:[`start`,`center`,`end`,`between`].map(e=>(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`text-muted-foreground mb-1 text-xs`,children:[`justify="`,e,`"`]}),(0,m.jsxs)(f,{justify:e,align:`center`,gap:`sm`,className:`rounded-lg border p-4`,children:[(0,m.jsx)(g,{label:`A`}),(0,m.jsx)(g,{label:`B`}),(0,m.jsx)(g,{label:`C`})]})]},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="md" align="center">
      <Swatch label="A" />
      <Swatch label="B" />
      <Swatch label="C" />
    </Flex>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["start", "center", "end", "between"] as const).map(justify => <div key={justify}>
          <p className="text-muted-foreground mb-1 text-xs">
            justify=&quot;{justify}&quot;
          </p>
          <Flex justify={justify} align="center" gap="sm" className="rounded-lg border p-4">
            <Swatch label="A" />
            <Swatch label="B" />
            <Swatch label="C" />
          </Flex>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Direction`,`JustifyAndAlign`]}))();export{_ as Default,v as Direction,y as JustifyAndAlign,b as __namedExportsOrder,h as default};