import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";import{a as o,t as s}from"./button-WWkxm_3b.js";var c,l,u,d,f,p=e((()=>{c=t(r(),1),i(),l=n(),u={xs:{vertical:`space-y-1`,horizontal:`space-x-1`},sm:{vertical:`space-y-2`,horizontal:`space-x-2`},md:{vertical:`space-y-4`,horizontal:`space-x-4`},lg:{vertical:`space-y-6`,horizontal:`space-x-6`},xl:{vertical:`space-y-8`,horizontal:`space-x-8`}},d={start:`items-start`,center:`items-center`,end:`items-end`,stretch:`items-stretch`},f=c.forwardRef(({className:e,direction:t=`vertical`,spacing:n=`md`,align:r=`stretch`,children:i,...o},s)=>(0,l.jsx)(`div`,{ref:s,className:a(`flex`,t===`horizontal`?`flex-row`:`flex-col`,u[n][t],d[r],e),...o,children:i})),f.displayName=`Stack`,f.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{direction:{required:!1,tsType:{name:`union`,raw:`"vertical" | "horizontal"`,elements:[{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`}]},description:`Direction of the stack`,defaultValue:{value:`"vertical"`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:`Spacing between items`,defaultValue:{value:`"md"`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`"start" | "center" | "end" | "stretch"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"stretch"`}]},description:`Alignment of items along the cross axis`,defaultValue:{value:`"stretch"`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b;e((()=>{m(),s(),h=n(),g={title:`Layout/Stack`,component:f,tags:[`autodocs`]},_={render:()=>(0,h.jsxs)(f,{spacing:`md`,children:[(0,h.jsx)(`div`,{className:`rounded-lg border bg-card p-4 text-sm`,children:`First item`}),(0,h.jsx)(`div`,{className:`rounded-lg border bg-card p-4 text-sm`,children:`Second item`}),(0,h.jsx)(`div`,{className:`rounded-lg border bg-card p-4 text-sm`,children:`Third item`})]})},v={render:()=>(0,h.jsxs)(f,{direction:`horizontal`,spacing:`sm`,align:`center`,children:[(0,h.jsx)(o,{variant:`outline`,children:`Cancel`}),(0,h.jsx)(o,{variant:`primary`,children:`Submit`})]})},y={render:()=>(0,h.jsx)(`div`,{className:`space-y-8`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsxs)(`p`,{className:`mb-2 text-sm font-medium`,children:[`spacing="`,e,`"`]}),(0,h.jsxs)(f,{spacing:e,children:[(0,h.jsx)(`div`,{className:`rounded border bg-primary/5 p-2 text-xs`,children:`A`}),(0,h.jsx)(`div`,{className:`rounded border bg-primary/5 p-2 text-xs`,children:`B`}),(0,h.jsx)(`div`,{className:`rounded border bg-primary/5 p-2 text-xs`,children:`C`})]})]},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <div className="rounded-lg border bg-card p-4 text-sm">First item</div>
      <div className="rounded-lg border bg-card p-4 text-sm">Second item</div>
      <div className="rounded-lg border bg-card p-4 text-sm">Third item</div>
    </Stack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" spacing="sm" align="center">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(spacing => <div key={spacing}>
          <p className="mb-2 text-sm font-medium">
            spacing=&quot;{spacing}&quot;
          </p>
          <Stack spacing={spacing}>
            <div className="rounded border bg-primary/5 p-2 text-xs">A</div>
            <div className="rounded border bg-primary/5 p-2 text-xs">B</div>
            <div className="rounded border bg-primary/5 p-2 text-xs">C</div>
          </Stack>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Vertical`,`Horizontal`,`SpacingSizes`]}))();export{v as Horizontal,y as SpacingSizes,_ as Vertical,b as __namedExportsOrder,g as default};