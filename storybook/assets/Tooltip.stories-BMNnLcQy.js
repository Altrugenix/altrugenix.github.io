import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r,i,r as a}from"./iframe-CAjx62e_.js";import{a as o,t as s}from"./button-WWkxm_3b.js";var c,l,u,d,f=e((()=>{c=t(r(),1),i(),l=n(),u={top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`},d=({className:e,content:t,side:n=`top`,delay:r=300,children:i,...o})=>{let[s,d]=(0,c.useState)(!1),f=c.useRef(null),p=()=>{f.current=window.setTimeout(()=>d(!0),r)},m=()=>{f.current!==null&&window.clearTimeout(f.current),d(!1)};return(0,l.jsxs)(`div`,{className:`relative inline-flex`,onMouseEnter:p,onMouseLeave:m,onFocus:p,onBlur:m,...o,children:[i,s&&(0,l.jsx)(`div`,{role:`tooltip`,className:a(`absolute z-50 max-w-xs rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-md`,`animate-in fade-in-0 zoom-in-95`,u[n],e),children:t})]})},d.displayName=`Tooltip`,d.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to display in the tooltip`},side:{required:!1,tsType:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Side to show the tooltip`,defaultValue:{value:`"top"`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Delay before showing (ms)`,defaultValue:{value:`300`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`Omit`]}})),p=e((()=>{f()})),m,h,g,_,v,y,b,x;e((()=>{p(),s(),m=n(),h={title:`Overlays/Tooltip`,component:d,tags:[`autodocs`],argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]}}},g={args:{content:`Tooltip on top`,side:`top`,children:(0,m.jsx)(o,{variant:`outline`,children:`Hover me`})}},_={args:{content:`Tooltip on bottom`,side:`bottom`,children:(0,m.jsx)(o,{variant:`outline`,children:`Hover me`})}},v={args:{content:`Tooltip on right`,side:`right`,children:(0,m.jsx)(o,{variant:`outline`,children:`Hover me`})}},y={args:{content:`Tooltip on left`,side:`left`,children:(0,m.jsx)(o,{variant:`outline`,children:`Hover me`})}},b={render:()=>(0,m.jsxs)(`div`,{className:`flex items-center justify-center gap-8 py-16`,children:[(0,m.jsx)(d,{content:`Top`,side:`top`,children:(0,m.jsx)(o,{variant:`outline`,size:`sm`,children:`Top`})}),(0,m.jsx)(d,{content:`Bottom`,side:`bottom`,children:(0,m.jsx)(o,{variant:`outline`,size:`sm`,children:`Bottom`})}),(0,m.jsx)(d,{content:`Left`,side:`left`,children:(0,m.jsx)(o,{variant:`outline`,size:`sm`,children:`Left`})}),(0,m.jsx)(d,{content:`Right`,side:`right`,children:(0,m.jsx)(o,{variant:`outline`,size:`sm`,children:`Right`})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on top",
    side: "top",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
    children: <Button variant="outline">Hover me</Button>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on right",
    side: "right",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on left",
    side: "left",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Top`,`Bottom`,`Right`,`Left`,`AllSides`]}))();export{b as AllSides,_ as Bottom,y as Left,v as Right,g as Top,x as __namedExportsOrder,h as default};