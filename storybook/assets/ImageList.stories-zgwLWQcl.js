import{n as e}from"./chunk-jRWAZmH_.js";import{At as t,Ft as n,Mt as r,ln as i}from"./iframe-By8sOsRq.js";var a,o,s,c=e((()=>{i(),r(),a=n(),o=({cols:e=1,rows:n=1,className:r,children:i,...o})=>(0,a.jsx)(`div`,{className:t(`group relative overflow-hidden`,r),style:{gridColumn:`span ${e}`,gridRow:`span ${n}`},...o,children:i}),s=({cols:e=2,gap:n=4,variant:r=`standard`,className:i,children:o,...s})=>(0,a.jsx)(`div`,{className:t(`grid`,r===`masonry`?`columns-2 md:columns-3`:``,i),style:{gridTemplateColumns:r===`masonry`?void 0:`repeat(${e}, minmax(0, 1fr))`,gap:`${n}px`},...s,children:o}),s.displayName=`ImageList`,o.displayName=`ImageListItem`})),l,u,d,f,p,m;e((()=>{c(),l=n(),u={title:`UI/ImageList`,component:s,tags:[`autodocs`]},d=[`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,`https://images.unsplash.com/photo-1522770179533-24471fcdba45`,`https://images.unsplash.com/photo-1444412667106-455200c7ee33`,`https://images.unsplash.com/photo-1533827432537-70133748f5c8`,`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62`],f={render:()=>(0,l.jsx)(s,{cols:3,gap:8,children:d.map((e,t)=>(0,l.jsx)(o,{children:(0,l.jsx)(`img`,{src:`${e}?w=248&fit=crop&auto=format`,alt:`Item ${t}`,className:`h-full w-full object-cover`})},t))})},p={render:()=>(0,l.jsxs)(s,{cols:4,gap:8,children:[(0,l.jsx)(o,{cols:2,rows:2,children:(0,l.jsx)(`img`,{src:`${d[0]}?w=500&fit=crop&auto=format`,alt:`Big`,className:`h-full w-full object-cover`})}),d.slice(1).map((e,t)=>(0,l.jsx)(o,{children:(0,l.jsx)(`img`,{src:`${e}?w=248&fit=crop&auto=format`,alt:`Item ${t}`,className:`h-full w-full object-cover`})},t))]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ImageList cols={3} gap={8}>
      {IMAGES.map((img, i) => <ImageListItem key={i}>
          <img src={\`\${img}?w=248&fit=crop&auto=format\`} alt={\`Item \${i}\`} className="h-full w-full object-cover" />
        </ImageListItem>)}
    </ImageList>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ImageList cols={4} gap={8}>
      <ImageListItem cols={2} rows={2}>
        <img src={\`\${IMAGES[0]}?w=500&fit=crop&auto=format\`} alt="Big" className="h-full w-full object-cover" />
      </ImageListItem>
      {IMAGES.slice(1).map((img, i) => <ImageListItem key={i}>
          <img src={\`\${img}?w=248&fit=crop&auto=format\`} alt={\`Item \${i}\`} className="h-full w-full object-cover" />
        </ImageListItem>)}
    </ImageList>
}`,...p.parameters?.docs?.source}}},m=[`Standard`,`Quilted`]}))();export{p as Quilted,f as Standard,m as __namedExportsOrder,u as default};