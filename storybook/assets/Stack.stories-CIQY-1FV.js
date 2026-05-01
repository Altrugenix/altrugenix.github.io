import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";import{r as o,t as s}from"./altrugenix-button-BIia6M8K.js";var c,l,u,d,f,p=e((()=>{c=t(a(),1),i(),l=r(),u={xs:{vertical:`space-y-1`,horizontal:`space-x-1`},sm:{vertical:`space-y-2`,horizontal:`space-x-2`},md:{vertical:`space-y-4`,horizontal:`space-x-4`},lg:{vertical:`space-y-6`,horizontal:`space-x-6`},xl:{vertical:`space-y-8`,horizontal:`space-x-8`}},d={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`},f=c.forwardRef(({className:e,direction:t=`vertical`,spacing:r=`md`,align:i=`stretch`,children:a,...o},s)=>(0,l.jsx)(`div`,{ref:s,className:n(`flex`,t===`horizontal`?`flex-row`:`flex-col`,u[r][t],d[i],e),...o,children:a})),f.displayName=`Stack`,f.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{direction:{defaultValue:{value:`"vertical"`,computed:!1},required:!1},spacing:{defaultValue:{value:`"md"`,computed:!1},required:!1},align:{defaultValue:{value:`"stretch"`,computed:!1},required:!1}}}})),m,h,g,_,v,y;e((()=>{p(),o(),m=r(),h={title:`Layout/Stack`,component:f,tags:[`autodocs`]},g={render:()=>(0,m.jsxs)(f,{spacing:`md`,children:[(0,m.jsx)(`div`,{className:`bg-card rounded-lg border p-4 text-sm`,children:`First item`}),(0,m.jsx)(`div`,{className:`bg-card rounded-lg border p-4 text-sm`,children:`Second item`}),(0,m.jsx)(`div`,{className:`bg-card rounded-lg border p-4 text-sm`,children:`Third item`})]})},_={render:()=>(0,m.jsxs)(f,{direction:`horizontal`,spacing:`sm`,align:`center`,children:[(0,m.jsx)(s,{variant:`outline`,children:`Cancel`}),(0,m.jsx)(s,{variant:`primary`,children:`Submit`})]})},v={render:()=>(0,m.jsx)(`div`,{className:`space-y-8`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`spacing="`,e,`"`]}),(0,m.jsxs)(f,{spacing:e,children:[(0,m.jsx)(`div`,{className:`bg-primary/5 rounded border p-2 text-xs`,children:`A`}),(0,m.jsx)(`div`,{className:`bg-primary/5 rounded border p-2 text-xs`,children:`B`}),(0,m.jsx)(`div`,{className:`bg-primary/5 rounded border p-2 text-xs`,children:`C`})]})]},e))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <div className="bg-card rounded-lg border p-4 text-sm">First item</div>
      <div className="bg-card rounded-lg border p-4 text-sm">Second item</div>
      <div className="bg-card rounded-lg border p-4 text-sm">Third item</div>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="sm" align="center">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </Stack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(spacing => <div key={spacing}>
          <p className="mb-2 text-sm font-medium">
            spacing=&quot;{spacing}&quot;
          </p>
          <Stack spacing={spacing}>
            <div className="bg-primary/5 rounded border p-2 text-xs">A</div>
            <div className="bg-primary/5 rounded border p-2 text-xs">B</div>
            <div className="bg-primary/5 rounded border p-2 text-xs">C</div>
          </Stack>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Vertical`,`Horizontal`,`SpacingSizes`]}))();export{_ as Horizontal,v as SpacingSizes,g as Vertical,y as __namedExportsOrder,h as default};