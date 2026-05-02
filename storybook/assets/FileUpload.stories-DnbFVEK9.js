import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,X as i,c as a,gn as o,m as s,nt as c,r as l,zt as u}from"./iframe-zfMobaDd.js";import{a as d,t as f}from"./src-DjwHjl2X.js";import{n as p,t as m}from"./src-CKqxpGo4.js";var h,g,_,v=e((()=>{h=t(o(),1),r(),l(),f(),m(),g=n(),_=({onFilesSelected:e,multiple:t=!1,maxSize:n=10,accept:r,className:o})=>{let[l,f]=(0,h.useState)([]),[m,_]=(0,h.useState)(!1),v=(0,h.useRef)(null),y=(0,h.useCallback)(r=>{if(!r)return;let i=Array.from(r).filter(e=>!(e.size>n*1024*1024)),a=i.map(e=>({file:e,status:`completed`,progress:100}));f(e=>t?[...e,...a]:a),e?.(i)},[t,n,e]),b=e=>{e.preventDefault(),_(!0)},x=()=>{_(!1)},S=e=>{e.preventDefault(),_(!1),y(e.dataTransfer.files)},C=e=>{f(t=>t.filter((t,n)=>n!==e))},w=e=>e.type.startsWith(`image/`);return(0,g.jsxs)(`div`,{className:u(`space-y-4`,o),children:[(0,g.jsxs)(`div`,{onDragOver:b,onDragLeave:x,onDrop:S,onClick:()=>v.current?.click(),className:u(`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 transition-all`,m?`border-primary bg-primary/5 scale-[0.99]`:`border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50`),children:[(0,g.jsx)(`input`,{ref:v,type:`file`,className:`hidden`,multiple:t,accept:r,onChange:e=>y(e.target.files)}),(0,g.jsx)(`div`,{className:`bg-primary/10 rounded-full p-4`,children:(0,g.jsx)(s,{className:`text-primary h-6 w-6`})}),(0,g.jsxs)(`div`,{className:`text-center`,children:[(0,g.jsx)(`p`,{className:`font-semibold`,children:`Click or drag to upload`}),(0,g.jsxs)(`p`,{className:`text-muted-foreground mt-1 text-sm`,children:[`Maximum file size `,n,`MB`]})]})]}),l.length>0&&(0,g.jsx)(`div`,{className:`grid gap-4`,children:l.map((e,t)=>(0,g.jsxs)(`div`,{className:`bg-card flex items-center gap-4 rounded-lg border p-3`,children:[(0,g.jsx)(`div`,{className:`bg-muted shrink-0 rounded-md p-2`,children:w(e.file)?(0,g.jsx)(i,{className:`h-5 w-5 text-sky-500`}):(0,g.jsx)(c,{className:`text-primary h-5 w-5`})}),(0,g.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,g.jsx)(`p`,{className:`truncate text-sm font-medium`,children:e.file.name}),(0,g.jsxs)(`p`,{className:`text-muted-foreground text-xs`,children:[(e.file.size/1024/1024).toFixed(2),` MB`]}),e.status===`uploading`&&(0,g.jsx)(p,{value:e.progress,size:`sm`,className:`mt-2`})]}),(0,g.jsx)(d,{variant:`ghost`,size:`icon`,className:`hover:text-destructive h-8 w-8`,onClick:()=>C(t),children:(0,g.jsx)(a,{className:`h-4 w-4`})})]},t))})]})},_.__docgenInfo={description:``,methods:[],displayName:`FileUpload`,props:{onFilesSelected:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},accept:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),y=e((()=>{v()})),b,x,S,C,w,T,E,D;e((()=>{y(),b=n(),x={title:`Forms/FileUpload`,component:_,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-[500px] p-6`,children:(0,b.jsx)(e,{})})],parameters:{docs:{description:{component:`A drag-and-drop file upload component with progress tracking. Supports single/multiple files, file type filtering via accept, and max file size validation.`}}},argTypes:{multiple:{control:`boolean`,description:`Allow selecting multiple files.`,table:{category:`Behavior`}},maxSize:{control:`number`,description:`Maximum file size in MB.`,table:{category:`Validation`}},accept:{description:`MIME type filter (e.g. 'image/*', '.pdf,.doc').`,table:{category:`Validation`}},onFilesSelected:{description:`Callback triggered when files are selected.`,table:{category:`Events`}}}},S={args:{multiple:!0}},C={args:{multiple:!1},parameters:{docs:{description:{story:`Restricts upload to a single file at a time.`}}}},w={args:{accept:`image/*`,multiple:!0},parameters:{docs:{description:{story:`Filters the file picker to only show image files (JPEG, PNG, GIF, etc.).`}}}},T={args:{maxSize:1},parameters:{docs:{description:{story:`A 1MB file size limit — files exceeding this will be rejected during selection.`}}}},E={args:{accept:`.pdf,.doc,.docx,.txt`,multiple:!0,maxSize:5},parameters:{docs:{description:{story:`Configured for document uploads — accepts PDF, Word, and text files up to 5MB each.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false
  },
  parameters: {
    docs: {
      description: {
        story: "Restricts upload to a single file at a time."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    accept: "image/*",
    multiple: true
  },
  parameters: {
    docs: {
      description: {
        story: "Filters the file picker to only show image files (JPEG, PNG, GIF, etc.)."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    maxSize: 1
  },
  parameters: {
    docs: {
      description: {
        story: "A 1MB file size limit — files exceeding this will be rejected during selection."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    multiple: true,
    maxSize: 5
  },
  parameters: {
    docs: {
      description: {
        story: "Configured for document uploads — accepts PDF, Word, and text files up to 5MB each."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`SingleFile`,`ImageOnly`,`SmallLimit`,`DocumentUpload`]}))();export{S as Default,E as DocumentUpload,w as ImageOnly,C as SingleFile,T as SmallLimit,D as __namedExportsOrder,x as default};