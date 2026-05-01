import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{G as n,Ht as r,J as i,Lt as a,S as o,Tt as s,W as c,b as l,gn as u,h as d,r as f,x as p,zt as m}from"./iframe-coe0kFk0.js";import{n as h,t as g}from"./dist-C2GwZUMa.js";var _,v,y,b,x=e((()=>{_=t(u(),1),a(),h(),v=r(),y=g(`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95`,{variants:{variant:{default:`bg-transparent`,outline:`border border-input bg-transparent hover:bg-accent hover:text-accent-foreground`},size:{default:`h-10 px-3`,sm:`h-9 px-2.5`,lg:`h-11 px-5`},pressed:{true:`bg-muted text-muted-foreground shadow-inner`,false:``}},defaultVariants:{variant:`default`,size:`default`,pressed:!1}}),b=_.forwardRef(({className:e,variant:t,size:n,pressed:r,...i},a)=>(0,v.jsx)(`button`,{ref:a,"aria-pressed":r,className:m(y({variant:t,size:n,pressed:r,className:e})),...i})),b.displayName=`Toggle`,b.__docgenInfo={description:`A toggle button component for switching between two states.`,methods:[],displayName:`Toggle`,props:{pressed:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`VariantProps`]}})),S,C,w,T=e((()=>{S=t(u(),1),a(),C=r(),w=S.forwardRef(({className:e,orientation:t=`horizontal`,type:n=`single`,value:r,onValueChange:i,children:a,...o},s)=>{let c=e=>{if(n===`single`)i?.(r===e?``:e);else{let t=Array.isArray(r)?r:[];t.includes(e)?i?.(t.filter(t=>t!==e)):i?.([...t,e])}};return(0,C.jsx)(`div`,{ref:s,className:m(`bg-background inline-flex items-center justify-center rounded-md border p-1 shadow-sm`,t===`vertical`?`flex-col`:`flex-row`,e),...o,children:S.Children.map(a,e=>{if(S.isValidElement(e)){let t=e.props.value,i=n===`single`?r===t:Array.isArray(r)&&r.includes(t);return S.cloneElement(e,{pressed:i,onClick:()=>c(t)})}return e})})}),w.displayName=`ToggleGroup`,w.__docgenInfo={description:`A container for grouping multiple toggle buttons into a selection set.`,methods:[],displayName:`ToggleGroup`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:`Orientation of the group`,defaultValue:{value:`"horizontal"`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`"single" | "multiple"`,elements:[{name:`literal`,value:`"single"`},{name:`literal`,value:`"multiple"`}]},description:`Type of selection`,defaultValue:{value:`"single"`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Current value(s)`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | string[]) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},name:`value`}],return:{name:`void`}}},description:`Callback for value changes`}}}})),E=e((()=>{x(),T()})),D,O,k,A,j,M,N,P,F,I,L;e((()=>{E(),f(),D=t(u(),1),O=r(),k={title:`Forms/Toggle`,component:b,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"A two-state button that can be toggled on or off. Use `ToggleGroup` to create mutually exclusive or multi-select toggle groups."}}},argTypes:{pressed:{control:`boolean`,description:`Controlled pressed state.`,table:{category:`State`}},variant:{control:`select`,options:[`default`,`outline`],description:`Visual style of the toggle.`,table:{category:`Appearance`}},value:{description:`Value used by ToggleGroup to track selection.`,table:{category:`Data`}}}},A=()=>{let[e,t]=(0,D.useState)(!1);return(0,O.jsxs)(b,{pressed:e,onClick:()=>t(!e),variant:`outline`,children:[(0,O.jsx)(s,{className:`mr-2 h-4 w-4`}),`Bold`]})},j={render:()=>(0,O.jsx)(A,{}),parameters:{docs:{description:{story:`A standalone toggle button with controlled pressed state.`}}}},M=()=>{let[e,t]=(0,D.useState)(`left`);return(0,O.jsxs)(`div`,{className:`space-y-4`,children:[(0,O.jsxs)(w,{value:e,onValueChange:e=>t(e),children:[(0,O.jsx)(b,{value:`left`,"aria-label":`Align left`,children:(0,O.jsx)(l,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`center`,"aria-label":`Align center`,children:(0,O.jsx)(o,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`right`,"aria-label":`Align right`,children:(0,O.jsx)(p,{className:`h-4 w-4`})})]}),(0,O.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`Active: `,(0,O.jsx)(`span`,{className:`font-mono font-semibold`,children:e})]})]})},N={render:()=>(0,O.jsx)(M,{}),parameters:{docs:{description:{story:`A single-select toggle group — only one option can be active at a time (like radio buttons).`}}}},P=()=>{let[e,t]=(0,D.useState)([`bold`]);return(0,O.jsxs)(`div`,{className:`space-y-4`,children:[(0,O.jsxs)(w,{type:`multiple`,value:e,onValueChange:e=>t(e),children:[(0,O.jsx)(b,{value:`bold`,"aria-label":`Bold`,children:(0,O.jsx)(s,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`italic`,"aria-label":`Italic`,children:(0,O.jsx)(i,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`underline`,"aria-label":`Underline`,children:(0,O.jsx)(d,{className:`h-4 w-4`})})]}),(0,O.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`Active:`,` `,(0,O.jsx)(`span`,{className:`font-mono font-semibold`,children:Array.isArray(e)?e.join(`, `):e||`None`})]})]})},F={render:()=>(0,O.jsx)(P,{}),parameters:{docs:{description:{story:`A multi-select toggle group — multiple options can be active simultaneously (like checkboxes).`}}}},I={render:()=>(0,O.jsxs)(`div`,{className:`border-border inline-flex items-center gap-1 rounded-lg border p-1`,children:[(0,O.jsxs)(w,{type:`multiple`,value:[`bold`],children:[(0,O.jsx)(b,{value:`bold`,"aria-label":`Bold`,variant:`outline`,children:(0,O.jsx)(s,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`italic`,"aria-label":`Italic`,variant:`outline`,children:(0,O.jsx)(i,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`underline`,"aria-label":`Underline`,variant:`outline`,children:(0,O.jsx)(d,{className:`h-4 w-4`})})]}),(0,O.jsx)(`div`,{className:`bg-border mx-1 h-6 w-px`}),(0,O.jsxs)(w,{value:`unordered`,children:[(0,O.jsx)(b,{value:`unordered`,"aria-label":`Bullet list`,variant:`outline`,children:(0,O.jsx)(c,{className:`h-4 w-4`})}),(0,O.jsx)(b,{value:`ordered`,"aria-label":`Numbered list`,variant:`outline`,children:(0,O.jsx)(n,{className:`h-4 w-4`})})]})]}),parameters:{docs:{description:{story:`A text editor toolbar composing multiple toggle groups with a separator — a common pattern for rich text editors.`}}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <SingleToggleDemo />,
  parameters: {
    docs: {
      description: {
        story: "A standalone toggle button with controlled pressed state."
      }
    }
  }
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <SingleGroupDemo />,
  parameters: {
    docs: {
      description: {
        story: "A single-select toggle group — only one option can be active at a time (like radio buttons)."
      }
    }
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleGroupDemo />,
  parameters: {
    docs: {
      description: {
        story: "A multi-select toggle group — multiple options can be active simultaneously (like checkboxes)."
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border-border inline-flex items-center gap-1 rounded-lg border p-1">
      <ToggleGroup type="multiple" value={["bold"]}>
        <Toggle value="bold" aria-label="Bold" variant="outline">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" aria-label="Italic" variant="outline">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" aria-label="Underline" variant="outline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
      <div className="bg-border mx-1 h-6 w-px" />
      <ToggleGroup value="unordered">
        <Toggle value="unordered" aria-label="Bullet list" variant="outline">
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle value="ordered" aria-label="Numbered list" variant="outline">
          <ListOrdered className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A text editor toolbar composing multiple toggle groups with a separator — a common pattern for rich text editors."
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L=[`SingleToggle`,`SingleGroup`,`MultipleGroup`,`TextEditorToolbar`]}))();export{F as MultipleGroup,N as SingleGroup,j as SingleToggle,I as TextEditorToolbar,L as __namedExportsOrder,k as default};