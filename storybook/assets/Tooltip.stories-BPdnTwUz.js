import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,Ht as r,Lt as i,Y as a,ft as o,gn as s,r as c,zt as l}from"./iframe-coe0kFk0.js";import{a as u,t as d}from"./src-CxQaJ0KN.js";var f,p,m,h,g=e((()=>{f=t(s(),1),i(),p=r(),m={top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`},h=({className:e,content:t,side:n=`top`,delay:r=300,children:i,...a})=>{let[o,s]=(0,f.useState)(!1),c=f.useRef(null),u=()=>{c.current=window.setTimeout(()=>s(!0),r)},d=()=>{c.current!==null&&window.clearTimeout(c.current),s(!1)};return(0,p.jsxs)(`div`,{className:`relative inline-flex`,onMouseEnter:u,onMouseLeave:d,onFocus:u,onBlur:d,...a,children:[i,o&&(0,p.jsx)(`div`,{role:`tooltip`,className:l(`bg-primary text-primary-foreground absolute z-50 max-w-xs rounded-md px-3 py-1.5 text-xs shadow-md`,`animate-in fade-in-0 zoom-in-95`,m[n],e),children:t})]})},h.displayName=`Tooltip`,h.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to display in the tooltip`},side:{required:!1,tsType:{name:`union`,raw:`"top" | "bottom" | "left" | "right"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Side to show the tooltip`,defaultValue:{value:`"top"`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Delay before showing (ms)`,defaultValue:{value:`300`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`Omit`]}})),_=e((()=>{g()})),v,y,b,x,S,C,w,T,E,D;e((()=>{_(),d(),c(),v=r(),y={title:`Overlays/Tooltip`,component:h,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A small popup that displays descriptive text when hovering over or focusing an element. Supports four placement sides and customizable delay.`}}},argTypes:{content:{description:`The tooltip text content.`,table:{category:`Content`}},side:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`Preferred side of the anchor to render the tooltip.`,table:{category:`Placement`}},children:{description:`The trigger element that activates the tooltip on hover.`,table:{category:`Content`}}}},b={args:{content:`Tooltip on top`,side:`top`,children:(0,v.jsx)(u,{variant:`outline`,children:`Hover me`})}},x={args:{content:`Tooltip on bottom`,side:`bottom`,children:(0,v.jsx)(u,{variant:`outline`,children:`Hover me`})}},S={args:{content:`Tooltip on right`,side:`right`,children:(0,v.jsx)(u,{variant:`outline`,children:`Hover me`})}},C={args:{content:`Tooltip on left`,side:`left`,children:(0,v.jsx)(u,{variant:`outline`,children:`Hover me`})}},w={render:()=>(0,v.jsxs)(`div`,{className:`flex items-center justify-center gap-8 py-16`,children:[(0,v.jsx)(h,{content:`Top`,side:`top`,children:(0,v.jsx)(u,{variant:`outline`,size:`sm`,children:`Top`})}),(0,v.jsx)(h,{content:`Bottom`,side:`bottom`,children:(0,v.jsx)(u,{variant:`outline`,size:`sm`,children:`Bottom`})}),(0,v.jsx)(h,{content:`Left`,side:`left`,children:(0,v.jsx)(u,{variant:`outline`,size:`sm`,children:`Left`})}),(0,v.jsx)(h,{content:`Right`,side:`right`,children:(0,v.jsx)(u,{variant:`outline`,size:`sm`,children:`Right`})})]}),parameters:{docs:{description:{story:`Comparison of all four placement sides in a single view.`}}}},T={render:()=>(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,v.jsx)(h,{content:`Help & documentation`,children:(0,v.jsx)(u,{variant:`ghost`,size:`icon`,"aria-label":`Help`,children:(0,v.jsx)(o,{className:`h-5 w-5`})})}),(0,v.jsx)(h,{content:`Application settings`,children:(0,v.jsx)(u,{variant:`ghost`,size:`icon`,"aria-label":`Settings`,children:(0,v.jsx)(n,{className:`h-5 w-5`})})}),(0,v.jsx)(h,{content:`More info`,children:(0,v.jsx)(u,{variant:`ghost`,size:`icon`,"aria-label":`Info`,children:(0,v.jsx)(a,{className:`h-5 w-5`})})})]}),parameters:{docs:{description:{story:`Tooltips on icon-only buttons provide essential labeling for accessibility and discoverability.`}}}},E={args:{content:`This tooltip contains a longer description to test wrapping behavior and readability at wider widths.`,side:`top`,children:(0,v.jsx)(u,{variant:`outline`,children:`Hover for details`})},parameters:{docs:{description:{story:`A tooltip with longer text content to verify wrapping behavior.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on top",
    side: "top",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on right",
    side: "right",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Tooltip on left",
    side: "left",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all four placement sides in a single view."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tooltip content="Help & documentation">
        <Button variant="ghost" size="icon" aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </Tooltip>
      <Tooltip content="Application settings">
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </Tooltip>
      <Tooltip content="More info">
        <Button variant="ghost" size="icon" aria-label="Info">
          <Info className="h-5 w-5" />
        </Button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tooltips on icon-only buttons provide essential labeling for accessibility and discoverability."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    content: "This tooltip contains a longer description to test wrapping behavior and readability at wider widths.",
    side: "top",
    children: <Button variant="outline">Hover for details</Button>
  },
  parameters: {
    docs: {
      description: {
        story: "A tooltip with longer text content to verify wrapping behavior."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Top`,`Bottom`,`Right`,`Left`,`AllSides`,`OnIconButton`,`LongContent`]}))();export{w as AllSides,x as Bottom,C as Left,E as LongContent,T as OnIconButton,S as Right,b as Top,D as __namedExportsOrder,y as default};