import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,C as r,Ft as i,Mt as a,T as o,_ as s,it as c,ln as l,r as u}from"./iframe-By8sOsRq.js";var d,f,p,m=e((()=>{d=t(l(),1),a(),f=i(),p=d.forwardRef(({className:e,children:t,menu:r,...i},a)=>{let[o,s]=(0,d.useState)(!1),[c,l]=(0,d.useState)({x:0,y:0}),u=(0,d.useRef)(null),p=(0,d.useCallback)(e=>{e.preventDefault(),l({x:e.clientX,y:e.clientY}),s(!0)},[]);return(0,d.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&s(!1)},t=e=>{e.key===`Escape`&&s(!1)};return document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[]),(0,f.jsxs)(`div`,{ref:a,onContextMenu:p,className:n(e),...i,children:[t,o&&(0,f.jsx)(`div`,{ref:u,className:`bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 fixed z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md`,style:{left:c.x,top:c.y},role:`menu`,onClick:()=>s(!1),children:r})]})}),p.displayName=`ContextMenu`,p.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`}})),h,g,_,v,y;e((()=>{m(),u(),h=i(),g={title:`Overlays/ContextMenu`,component:p,tags:[`autodocs`]},_={render:()=>(0,h.jsx)(`div`,{className:`flex h-[300px] w-full items-center justify-center rounded-lg border-2 border-dashed`,children:(0,h.jsx)(p,{menu:(0,h.jsxs)(`div`,{className:`flex flex-col`,children:[(0,h.jsxs)(`button`,{className:`hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm`,children:[(0,h.jsx)(c,{size:14}),` Copy`]}),(0,h.jsxs)(`button`,{className:`hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm`,children:[(0,h.jsx)(r,{size:14}),` Edit`]}),(0,h.jsxs)(`button`,{className:`hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm`,children:[(0,h.jsx)(o,{size:14}),` Share`]}),(0,h.jsx)(`div`,{className:`bg-border my-1 h-[1px]`}),(0,h.jsxs)(`button`,{className:`text-destructive hover:bg-destructive/10 flex items-center gap-2 rounded px-3 py-2 text-sm`,children:[(0,h.jsx)(s,{size:14}),` Delete`]})]}),children:(0,h.jsx)(`div`,{className:`text-muted-foreground p-20 text-center`,children:`Right-click anywhere in this box to open the context menu.`})})})},v={render:()=>(0,h.jsx)(`div`,{className:`flex flex-wrap gap-4 p-8`,children:[1,2,3].map(e=>(0,h.jsx)(p,{menu:(0,h.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,h.jsxs)(`span`,{className:`text-muted-foreground px-3 py-1.5 text-xs font-semibold`,children:[`Item `,e,` Options`]}),(0,h.jsx)(`button`,{className:`hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm`,children:`View Details`}),(0,h.jsx)(`button`,{className:`text-destructive hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm`,children:`Remove`})]}),children:(0,h.jsxs)(`div`,{className:`bg-card flex h-24 w-40 items-center justify-center rounded-lg border shadow-sm`,children:[`Card `,e]})},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-[300px] w-full items-center justify-center rounded-lg border-2 border-dashed">
      <ContextMenu menu={<div className="flex flex-col">
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Copy size={14} /> Copy
            </button>
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Edit size={14} /> Edit
            </button>
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Share size={14} /> Share
            </button>
            <div className="bg-border my-1 h-[1px]" />
            <button className="text-destructive hover:bg-destructive/10 flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Trash size={14} /> Delete
            </button>
          </div>}>
        <div className="text-muted-foreground p-20 text-center">
          Right-click anywhere in this box to open the context menu.
        </div>
      </ContextMenu>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 p-8">
      {[1, 2, 3].map(id => <ContextMenu key={id} menu={<div className="flex flex-col p-1">
              <span className="text-muted-foreground px-3 py-1.5 text-xs font-semibold">
                Item {id} Options
              </span>
              <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
                View Details
              </button>
              <button className="text-destructive hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
                Remove
              </button>
            </div>}>
          <div className="bg-card flex h-24 w-40 items-center justify-center rounded-lg border shadow-sm">
            Card {id}
          </div>
        </ContextMenu>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`OnComponent`]}))();export{_ as Default,v as OnComponent,y as __namedExportsOrder,g as default};