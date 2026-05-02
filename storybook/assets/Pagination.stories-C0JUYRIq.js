import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,r as a,vt as o,yt as s,zt as c}from"./iframe-zfMobaDd.js";function l(e,t,n){if(t<=n*2+5)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-n,1),i=Math.min(e+n,t),a=r>2,o=i<t-1;return!a&&o?[...Array.from({length:3+2*n},(e,t)=>t+1),`...`,t]:a&&!o?[1,`...`,...Array.from({length:3+2*n},(e,r)=>t-(3+2*n)+r+1)]:[1,`...`,...Array.from({length:i-r+1},(e,t)=>r+t),`...`,t]}var u,d,f,p=e((()=>{u=t(i(),1),r(),a(),d=n(),f=u.forwardRef(({className:e,currentPage:t,totalPages:n,onPageChange:r,siblingCount:i=1,...a},u)=>{let f=l(t,n,i);return(0,d.jsxs)(`nav`,{ref:u,role:`navigation`,"aria-label":`Pagination`,className:c(`flex items-center justify-center gap-1`,e),...a,children:[(0,d.jsx)(`button`,{onClick:()=>r(t-1),disabled:t<=1,className:`border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50`,"aria-label":`Previous page`,children:(0,d.jsx)(s,{className:`h-4 w-4`})}),f.map((e,n)=>e===`...`?(0,d.jsx)(`span`,{className:`text-muted-foreground flex h-9 w-9 items-center justify-center text-sm`,children:`…`},`dots-${n}`):(0,d.jsx)(`button`,{onClick:()=>r(e),className:c(`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors`,t===e?`bg-primary text-primary-foreground shadow-sm`:`border-input bg-background hover:bg-accent hover:text-accent-foreground border`),"aria-current":t===e?`page`:void 0,children:e},e)),(0,d.jsx)(`button`,{onClick:()=>r(t+1),disabled:t>=n,className:`border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50`,"aria-label":`Next page`,children:(0,d.jsx)(o,{className:`h-4 w-4`})})]})}),f.displayName=`Pagination`,f.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{currentPage:{required:!0,tsType:{name:`number`},description:`Current active page (1-indexed)`},totalPages:{required:!0,tsType:{name:`number`},description:`Total number of pages`},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:`Callback when page changes`},siblingCount:{required:!1,tsType:{name:`number`},description:`Number of sibling pages to show on each side of current`,defaultValue:{value:`1`,computed:!1}}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S,C;e((()=>{m(),h=t(i(),1),g=n(),_={title:`Navigation/Pagination`,component:f,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"A page navigation component with previous/next buttons, numbered pages, and ellipsis truncation. Fully controlled via `currentPage` and `onPageChange`."}}},argTypes:{currentPage:{control:{type:`number`,min:1},description:`The current active page (1-indexed).`,table:{category:`State`}},totalPages:{control:{type:`number`,min:1},description:`Total number of pages.`,table:{category:`State`}},onPageChange:{description:`Callback triggered when a page button is clicked.`,table:{category:`Events`}},siblingCount:{control:{type:`number`,min:0,max:3},description:`Number of sibling pages shown on each side of the current page.`,table:{category:`Appearance`}}}},v=({totalPages:e=10,siblingCount:t})=>{let[n,r]=(0,h.useState)(1);return(0,g.jsxs)(`div`,{className:`space-y-4`,children:[(0,g.jsx)(f,{currentPage:n,totalPages:e,onPageChange:r,siblingCount:t}),(0,g.jsxs)(`p`,{className:`text-muted-foreground text-center text-sm`,children:[`Page `,(0,g.jsx)(`span`,{className:`font-mono font-semibold`,children:n}),` of`,` `,(0,g.jsx)(`span`,{className:`font-mono font-semibold`,children:e})]})]})},y={render:()=>(0,g.jsx)(v,{})},b={render:()=>(0,g.jsx)(v,{totalPages:5}),parameters:{docs:{description:{story:`A compact pagination with only 5 pages — no truncation needed.`}}}},x={render:()=>(0,g.jsx)(v,{totalPages:50}),parameters:{docs:{description:{story:`50 pages with automatic ellipsis truncation to keep the control compact.`}}}},S={render:()=>(0,g.jsx)(v,{totalPages:30,siblingCount:2}),parameters:{docs:{description:{story:"With `siblingCount={2}`, more page numbers are visible around the current page."}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination totalPages={5} />,
  parameters: {
    docs: {
      description: {
        story: "A compact pagination with only 5 pages — no truncation needed."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination totalPages={50} />,
  parameters: {
    docs: {
      description: {
        story: "50 pages with automatic ellipsis truncation to keep the control compact."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePagination totalPages={30} siblingCount={2} />,
  parameters: {
    docs: {
      description: {
        story: "With \`siblingCount={2}\`, more page numbers are visible around the current page."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`FewPages`,`ManyPages`,`WideSiblings`]}))();export{y as Default,b as FewPages,x as ManyPages,S as WideSiblings,C as __namedExportsOrder,_ as default};