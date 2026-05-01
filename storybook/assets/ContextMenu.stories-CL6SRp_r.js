import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,O as i,dt as a,gn as o,k as s,r as c,rt as l,st as u,y as d,zt as f}from"./iframe-coe0kFk0.js";var p,m,h,g=e((()=>{p=t(o(),1),r(),m=n(),h=p.forwardRef(({className:e,children:t,menu:n,...r},i)=>{let[a,o]=(0,p.useState)(!1),[s,c]=(0,p.useState)({x:0,y:0}),l=(0,p.useRef)(null),u=(0,p.useCallback)(e=>{e.preventDefault(),c({x:e.clientX,y:e.clientY}),o(!0)},[]);return(0,p.useEffect)(()=>{let e=e=>{l.current&&!l.current.contains(e.target)&&o(!1)},t=e=>{e.key===`Escape`&&o(!1)};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[]),(0,m.jsxs)(`div`,{ref:i,onContextMenu:u,className:f(e),...r,children:[t,a&&(0,m.jsx)(`div`,{ref:l,className:`bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 fixed z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md`,style:{left:s.x,top:s.y},role:`menu`,onClick:()=>o(!1),children:n})]})}),h.displayName=`ContextMenu`,h.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},menu:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Menu items to display on right-click`}}}})),_=e((()=>{g()})),v,y,b,x,S,C;e((()=>{_(),c(),v=n(),y={title:`Overlays/ContextMenu`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:"A right-click context menu that appears at the cursor position. Wraps a trigger area and renders a floating menu on `contextmenu` events with click-away dismissal."}}},argTypes:{children:{description:`The trigger area — the menu appears on right-click within this region.`,table:{category:`Content`}},menu:{description:`The menu content.`,table:{category:`Content`}}}},b={render:()=>(0,v.jsx)(h,{menu:(0,v.jsxs)(`div`,{className:`py-1`,children:[(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Cut`}),(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Copy`}),(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Paste`}),(0,v.jsx)(`div`,{className:`bg-border my-1 h-px`}),(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Delete`})]}),children:(0,v.jsx)(`div`,{className:`border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Right-click this area`})})})},x={render:()=>(0,v.jsx)(h,{menu:(0,v.jsxs)(`div`,{className:`py-1`,children:[(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(i,{className:`mr-2 h-4 w-4`}),` Cut`]}),(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(u,{className:`mr-2 h-4 w-4`}),` Copy`]}),(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(a,{className:`mr-2 h-4 w-4`}),` Paste`]}),(0,v.jsx)(`div`,{className:`bg-border my-1 h-px`}),(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(s,{className:`mr-2 h-4 w-4`}),` Undo`]}),(0,v.jsx)(`div`,{className:`bg-border my-1 h-px`}),(0,v.jsxs)(`div`,{className:`hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(d,{className:`mr-2 h-4 w-4`}),` Delete`]})]}),children:(0,v.jsx)(`div`,{className:`border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Right-click for icon menu`})})}),parameters:{docs:{description:{story:`Menu items with leading icons for a richer visual experience.`}}}},S={render:()=>(0,v.jsx)(h,{menu:(0,v.jsxs)(`div`,{className:`min-w-[160px] py-1`,children:[(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(l,{className:`mr-2 h-4 w-4`}),` Open`]}),(0,v.jsxs)(`div`,{className:`hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(u,{className:`mr-2 h-4 w-4`}),` Duplicate`]}),(0,v.jsx)(`div`,{className:`bg-border my-1 h-px`}),(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Rename`}),(0,v.jsx)(`div`,{className:`hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm`,children:`Move to...`}),(0,v.jsx)(`div`,{className:`bg-border my-1 h-px`}),(0,v.jsxs)(`div`,{className:`hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm`,children:[(0,v.jsx)(d,{className:`mr-2 h-4 w-4`}),` Move to Trash`]})]}),children:(0,v.jsxs)(`div`,{className:`bg-card flex items-center gap-3 rounded-lg border p-4`,children:[(0,v.jsx)(l,{className:`text-muted-foreground h-8 w-8`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{className:`text-sm font-medium`,children:`Project Proposal.pdf`}),(0,v.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`2.4 MB — Modified today`})]})]})}),parameters:{docs:{description:{story:`A file manager context menu on a document card — right-click to see file operations.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menu={<div className="py-1">
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Cut
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Copy
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Paste
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Delete
          </div>
        </div>}>
      <div className="border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">Right-click this area</p>
      </div>
    </ContextMenu>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menu={<div className="py-1">
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Scissors className="mr-2 h-4 w-4" /> Cut
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Copy className="mr-2 h-4 w-4" /> Copy
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <ClipboardPaste className="mr-2 h-4 w-4" /> Paste
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <RotateCcw className="mr-2 h-4 w-4" /> Undo
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </div>
        </div>}>
      <div className="border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">
          Right-click for icon menu
        </p>
      </div>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "Menu items with leading icons for a richer visual experience."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menu={<div className="min-w-[160px] py-1">
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <FileText className="mr-2 h-4 w-4" /> Open
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Copy className="mr-2 h-4 w-4" /> Duplicate
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Rename
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Move to...
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Trash2 className="mr-2 h-4 w-4" /> Move to Trash
          </div>
        </div>}>
      <div className="bg-card flex items-center gap-3 rounded-lg border p-4">
        <FileText className="text-muted-foreground h-8 w-8" />
        <div>
          <p className="text-sm font-medium">Project Proposal.pdf</p>
          <p className="text-muted-foreground text-xs">
            2.4 MB — Modified today
          </p>
        </div>
      </div>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "A file manager context menu on a document card — right-click to see file operations."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithIcons`,`FileManager`]}))();export{b as Default,S as FileManager,x as WithIcons,C as __namedExportsOrder,y as default};