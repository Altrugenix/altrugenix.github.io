import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{D as n,Pt as r,cn as i,ct as a,i as o,k as s,r as c,s as l,x as u}from"./iframe-CAjx62e_.js";var d,f,p,m=e((()=>{d=t(i(),1),o(),f=r(),p=d.forwardRef(({className:e,children:t,menu:n,...r},i)=>{let[a,o]=(0,d.useState)(!1),[s,l]=(0,d.useState)({x:0,y:0}),u=(0,d.useRef)(null),p=(0,d.useCallback)(e=>{e.preventDefault(),l({x:e.clientX,y:e.clientY}),o(!0)},[]);return(0,d.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&o(!1)},t=e=>{e.key===`Escape`&&o(!1)};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[]),(0,f.jsxs)(`div`,{ref:i,onContextMenu:p,className:c(e),...r,children:[t,a&&(0,f.jsx)(`div`,{ref:u,className:`fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95`,style:{left:s.x,top:s.y},role:`menu`,onClick:()=>o(!1),children:n})]})}),p.displayName=`ContextMenu`,p.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},menu:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Menu items to display on right-click`}}}})),h,g,_,v,y;e((()=>{m(),l(),h=r(),g={title:`Overlays/ContextMenu`,component:p,tags:[`autodocs`]},_={render:()=>(0,h.jsx)(`div`,{className:`flex h-[300px] w-full items-center justify-center rounded-lg border-2 border-dashed`,children:(0,h.jsx)(p,{menu:(0,h.jsxs)(`div`,{className:`flex flex-col`,children:[(0,h.jsxs)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent`,children:[(0,h.jsx)(a,{size:14}),` Copy`]}),(0,h.jsxs)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent`,children:[(0,h.jsx)(n,{size:14}),` Edit`]}),(0,h.jsxs)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent`,children:[(0,h.jsx)(s,{size:14}),` Share`]}),(0,h.jsx)(`div`,{className:`my-1 h-[1px] bg-border`}),(0,h.jsxs)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-destructive/10`,children:[(0,h.jsx)(u,{size:14}),` Delete`]})]}),children:(0,h.jsx)(`div`,{className:`p-20 text-center text-muted-foreground`,children:`Right-click anywhere in this box to open the context menu.`})})})},v={render:()=>(0,h.jsx)(`div`,{className:`flex flex-wrap gap-4 p-8`,children:[1,2,3].map(e=>(0,h.jsx)(p,{menu:(0,h.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,h.jsxs)(`span`,{className:`px-3 py-1.5 text-xs font-semibold text-muted-foreground`,children:[`Item `,e,` Options`]}),(0,h.jsx)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent`,children:`View Details`}),(0,h.jsx)(`button`,{className:`flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-accent`,children:`Remove`})]}),children:(0,h.jsxs)(`div`,{className:`flex h-24 w-40 items-center justify-center rounded-lg border bg-card shadow-sm`,children:[`Card `,e]})},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-[300px] w-full items-center justify-center rounded-lg border-2 border-dashed">
      <ContextMenu menu={<div className="flex flex-col">
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Copy size={14} /> Copy
            </button>
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Edit size={14} /> Edit
            </button>
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Share size={14} /> Share
            </button>
            <div className="my-1 h-[1px] bg-border" />
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-destructive/10">
              <Trash size={14} /> Delete
            </button>
          </div>}>
        <div className="p-20 text-center text-muted-foreground">
          Right-click anywhere in this box to open the context menu.
        </div>
      </ContextMenu>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 p-8">
      {[1, 2, 3].map(id => <ContextMenu key={id} menu={<div className="flex flex-col p-1">
              <span className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                Item {id} Options
              </span>
              <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
                View Details
              </button>
              <button className="flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-accent">
                Remove
              </button>
            </div>}>
          <div className="flex h-24 w-40 items-center justify-center rounded-lg border bg-card shadow-sm">
            Card {id}
          </div>
        </ContextMenu>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`OnComponent`]}))();export{_ as Default,v as OnComponent,y as __namedExportsOrder,g as default};