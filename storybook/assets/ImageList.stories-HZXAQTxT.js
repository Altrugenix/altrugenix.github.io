import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t,Lt as n,gn as r,zt as i}from"./iframe-coe0kFk0.js";var a,o,s,c=e((()=>{r(),n(),a=t(),o=({cols:e=1,rows:t=1,className:n,children:r,...o})=>(0,a.jsx)(`div`,{className:i(`group relative overflow-hidden`,n),style:{gridColumn:`span ${e}`,gridRow:`span ${t}`},...o,children:r}),s=({cols:e=2,gap:t=4,variant:n=`standard`,className:r,children:o,...s})=>(0,a.jsx)(`div`,{className:i(`grid`,n===`masonry`?`columns-2 md:columns-3`:``,r),style:{gridTemplateColumns:n===`masonry`?void 0:`repeat(${e}, minmax(0, 1fr))`,gap:`${t}px`},...s,children:o}),s.displayName=`ImageList`,o.displayName=`ImageListItem`,o.__docgenInfo={description:``,methods:[],displayName:`ImageListItem`,props:{cols:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}}}},s.__docgenInfo={description:`A specialized grid layout optimized for displaying collections of images with captions and hover effects.`,methods:[],displayName:`ImageList`,props:{cols:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},gap:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"standard" | "quilted" | "woven" | "masonry"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"quilted"`},{name:`literal`,value:`"woven"`},{name:`literal`,value:`"masonry"`}]},description:``,defaultValue:{value:`"standard"`,computed:!1}}}}})),l=e((()=>{c()})),u,d,f,p,m,h,g;e((()=>{l(),u=t(),d={title:`Data Display/ImageList`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A CSS grid-based layout for displaying collections of images. Supports configuring total columns and gap, with individual items spanning multiple columns or rows to create varied quilt-like patterns.`}}},argTypes:{cols:{control:`number`,description:`Total number of grid columns.`,table:{category:`Layout`}},gap:{control:`number`,description:`Gap between images in pixels.`,table:{category:`Layout`}}}},f=[{img:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=200&h=200&fit=crop`,title:`Breakfast`},{img:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop`,title:`Burger`},{img:`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=200&h=200&fit=crop`,title:`Camera`},{img:`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=200&h=200&fit=crop`,title:`Coffee`},{img:`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=200&h=200&fit=crop`,title:`Hats`},{img:`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop`,title:`Honey`}],p={render:()=>(0,u.jsx)(`div`,{className:`max-w-[500px]`,children:(0,u.jsx)(s,{cols:3,gap:8,children:f.map(e=>(0,u.jsx)(o,{children:(0,u.jsx)(`img`,{src:e.img,alt:e.title,className:`h-full w-full object-cover`})},e.img))})}),parameters:{docs:{description:{story:`A standard uniform grid image list.`}}}},m=[{img:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop`,title:`Breakfast`,rows:2,cols:2},{img:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop`,title:`Burger`,rows:1,cols:1},{img:`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=200&h=200&fit=crop`,title:`Camera`,rows:1,cols:1},{img:`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=400&h=200&fit=crop`,title:`Coffee`,rows:1,cols:2},{img:`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=200&h=200&fit=crop`,title:`Hats`,rows:1,cols:1},{img:`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop`,title:`Honey`,rows:1,cols:1}],h={render:()=>(0,u.jsx)(`div`,{className:`max-w-[600px]`,children:(0,u.jsx)(s,{cols:4,gap:8,children:m.map(e=>(0,u.jsx)(o,{cols:e.cols,rows:e.rows,children:(0,u.jsx)(`img`,{src:e.img,alt:e.title,className:`h-full w-full rounded-md object-cover`})},e.img))})}),parameters:{docs:{description:{story:`A quilted image list where individual items span multiple columns and rows to create emphasis.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[500px]">
      <ImageList cols={3} gap={8}>
        {itemData.map(item => <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
          </ImageListItem>)}
      </ImageList>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A standard uniform grid image list."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[600px]">
      <ImageList cols={4} gap={8}>
        {quiltedData.map(item => <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
            <img src={item.img} alt={item.title} className="h-full w-full rounded-md object-cover" />
          </ImageListItem>)}
      </ImageList>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A quilted image list where individual items span multiple columns and rows to create emphasis."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Standard`,`Quilted`]}))();export{h as Quilted,p as Standard,g as __namedExportsOrder,d as default};