import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,ln as a}from"./iframe-By8sOsRq.js";import{r as o,t as s}from"./altrugenix-button-BIia6M8K.js";var c,l,u,d,f=e((()=>{c=t(a(),1),i(),l=r(),u={top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`},d=({className:e,content:t,side:r=`top`,delay:i=300,children:a,...o})=>{let[s,d]=(0,c.useState)(!1),f=c.useRef(null),p=()=>{f.current=window.setTimeout(()=>d(!0),i)},m=()=>{f.current!==null&&window.clearTimeout(f.current),d(!1)};return(0,l.jsxs)(`div`,{className:`relative inline-flex`,onMouseEnter:p,onMouseLeave:m,onFocus:p,onBlur:m,...o,children:[a,s&&(0,l.jsx)(`div`,{role:`tooltip`,className:n(`bg-primary text-primary-foreground absolute z-50 max-w-xs rounded-md px-3 py-1.5 text-xs shadow-md`,`animate-in fade-in-0 zoom-in-95`,u[r],e),children:t})]})},d.displayName=`Tooltip`})),p,m,h,g,_,v,y,b;e((()=>{f(),o(),p=r(),m={title:`Overlays/Tooltip`,component:d,tags:[`autodocs`],argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]}}},h={args:{content:`Tooltip on top`,side:`top`,children:(0,p.jsx)(s,{variant:`outline`,children:`Hover me`})}},g={args:{content:`Tooltip on bottom`,side:`bottom`,children:(0,p.jsx)(s,{variant:`outline`,children:`Hover me`})}},_={args:{content:`Tooltip on right`,side:`right`,children:(0,p.jsx)(s,{variant:`outline`,children:`Hover me`})}},v={args:{content:`Tooltip on left`,side:`left`,children:(0,p.jsx)(s,{variant:`outline`,children:`Hover me`})}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex items-center justify-center gap-8 py-16`,children:[(0,p.jsx)(d,{content:`Top`,side:`top`,children:(0,p.jsx)(s,{variant:`outline`,size:`sm`,children:`Top`})}),(0,p.jsx)(d,{content:`Bottom`,side:`bottom`,children:(0,p.jsx)(s,{variant:`outline`,size:`sm`,children:`Bottom`})}),(0,p.jsx)(d,{content:`Left`,side:`left`,children:(0,p.jsx)(s,{variant:`outline`,size:`sm`,children:`Left`})}),(0,p.jsx)(d,{content:`Right`,side:`right`,children:(0,p.jsx)(s,{variant:`outline`,size:`sm`,children:`Right`})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on top",
    side: "top",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on right",
    side: "right",
    children: <Button variant="outline">Hover me</Button>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on left",
    side: "left",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-8 py-16">
      <Tooltip content="Top" side="top">
        <Button variant="outline" size="sm">
          Top
        </Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="outline" size="sm">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="Left" side="left">
        <Button variant="outline" size="sm">
          Left
        </Button>
      </Tooltip>
      <Tooltip content="Right" side="right">
        <Button variant="outline" size="sm">
          Right
        </Button>
      </Tooltip>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Top`,`Bottom`,`Right`,`Left`,`AllSides`]}))();export{y as AllSides,g as Bottom,v as Left,_ as Right,h as Top,b as __namedExportsOrder,m as default};