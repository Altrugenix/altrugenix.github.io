import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{C as n,Ct as r,Pt as i,Q as a,S as o,cn as s,i as c,r as l,s as u,v as d,w as f}from"./iframe-CAjx62e_.js";import{n as p,t as m}from"./dist-CWM4ALlg.js";var h,g,_,v,y=e((()=>{h=t(s(),1),c(),p(),g=i(),_=m(`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95`,{variants:{variant:{default:`bg-transparent`,outline:`border border-input bg-transparent hover:bg-accent hover:text-accent-foreground`},size:{default:`h-10 px-3`,sm:`h-9 px-2.5`,lg:`h-11 px-5`},pressed:{true:`bg-muted text-muted-foreground shadow-inner`,false:``}},defaultVariants:{variant:`default`,size:`default`,pressed:!1}}),v=h.forwardRef(({className:e,variant:t,size:n,pressed:r,...i},a)=>(0,g.jsx)(`button`,{ref:a,"aria-pressed":r,className:l(_({variant:t,size:n,pressed:r,className:e})),...i})),v.displayName=`Toggle`,v.__docgenInfo={description:`A toggle button component for switching between two states.`,methods:[],displayName:`Toggle`,props:{pressed:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`VariantProps`]}})),b,x,S,C=e((()=>{b=t(s(),1),c(),x=i(),S=b.forwardRef(({className:e,orientation:t=`horizontal`,type:n=`single`,value:r,onValueChange:i,children:a,...o},s)=>{let c=e=>{if(n===`single`)i?.(r===e?``:e);else{let t=Array.isArray(r)?r:[];t.includes(e)?i?.(t.filter(t=>t!==e)):i?.([...t,e])}};return(0,x.jsx)(`div`,{ref:s,className:l(`inline-flex items-center justify-center rounded-md border bg-background p-1 shadow-sm`,t===`vertical`?`flex-col`:`flex-row`,e),...o,children:b.Children.map(a,e=>{if(b.isValidElement(e)){let t=e.props.value,i=n===`single`?r===t:Array.isArray(r)&&r.includes(t);return b.cloneElement(e,{pressed:i,onClick:()=>c(t)})}return e})})}),S.displayName=`ToggleGroup`,S.__docgenInfo={description:`A container for grouping multiple toggle buttons into a selection set.`,methods:[],displayName:`ToggleGroup`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation of the group`,defaultValue:{value:`"horizontal"`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"single" | "multiple"`,elements:[{name:`literal`,value:`"single"`},{name:`literal`,value:`"multiple"`}]},description:`Type of selection`,defaultValue:{value:`"single"`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Current value(s)`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | string[]) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},name:`value`}],return:{name:`void`}}},description:`Callback for value changes`}}}})),w=e((()=>{y(),C()})),T,E,D,O,k,A,j;e((()=>{w(),u(),T=t(s(),1),E=i(),D={title:`UI/Toggle`,component:v,tags:[`autodocs`]},O={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(v,{pressed:e,onClick:()=>t(!e),variant:`outline`,children:[(0,E.jsx)(r,{className:`mr-2 h-4 w-4`}),`Bold`]})}},k={render:()=>{let[e,t]=(0,T.useState)(`left`);return(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsxs)(S,{value:e,onValueChange:e=>e&&t(e),children:[(0,E.jsx)(v,{value:`left`,"aria-label":`Align left`,children:(0,E.jsx)(o,{className:`h-4 w-4`})}),(0,E.jsx)(v,{value:`center`,"aria-label":`Align center`,children:(0,E.jsx)(f,{className:`h-4 w-4`})}),(0,E.jsx)(v,{value:`right`,"aria-label":`Align right`,children:(0,E.jsx)(n,{className:`h-4 w-4`})})]}),(0,E.jsxs)(`p`,{className:`text-sm`,children:[`Active alignment: `,e]})]})}},A={render:()=>{let[e,t]=(0,T.useState)([`bold`]);return(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsxs)(S,{type:`multiple`,value:e,onValueChange:t,children:[(0,E.jsx)(v,{value:`bold`,"aria-label":`Bold`,children:(0,E.jsx)(r,{className:`h-4 w-4`})}),(0,E.jsx)(v,{value:`italic`,"aria-label":`Italic`,children:(0,E.jsx)(a,{className:`h-4 w-4`})}),(0,E.jsx)(v,{value:`underline`,"aria-label":`Underline`,children:(0,E.jsx)(d,{className:`h-4 w-4`})})]}),(0,E.jsxs)(`p`,{className:`text-sm`,children:[`Active formats: `,e.join(`, `)||`None`]})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onClick={() => setPressed(!pressed)} variant="outline">
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </Toggle>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState("left");
    return <div className="space-y-4">
        <ToggleGroup value={alignment} onValueChange={val => val && setAlignment(val)}>
          <Toggle value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
        <p className="text-sm">Active alignment: {alignment}</p>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formats, setFormats] = useState(["bold"]);
    return <div className="space-y-4">
        <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
          <Toggle value="bold" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle value="italic" aria-label="Italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle value="underline" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
        <p className="text-sm">
          Active formats: {formats.join(", ") || "None"}
        </p>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j=[`SingleToggle`,`SingleGroup`,`MultipleGroup`]}))();export{A as MultipleGroup,k as SingleGroup,O as SingleToggle,j as __namedExportsOrder,D as default};