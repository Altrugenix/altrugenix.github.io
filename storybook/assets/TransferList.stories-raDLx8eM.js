import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,r as a,vt as o,yt as s,zt as c}from"./iframe-coe0kFk0.js";import{a as l,t as u}from"./src-CxQaJ0KN.js";import{n as d,t as f}from"./src-O5Ec0FJG.js";import{n as p,t as m}from"./src-DZ5M2IK_2.js";import{n as h,r as g,t as _}from"./src-eZEzacXe.js";var v,y,b,x=e((()=>{v=t(i(),1),a(),r(),u(),m(),f(),_(),y=n(),b=({items:e,initialSelected:t=[],titles:n=[`Available`,`Selected`],onChange:r,className:i})=>{let[a,u]=(0,v.useState)(e.filter(e=>!t.includes(e))),[f,m]=(0,v.useState)(t),[_,b]=(0,v.useState)([]),x=a.filter(e=>_.indexOf(e)!==-1),S=f.filter(e=>_.indexOf(e)!==-1),C=e=>()=>{let t=_.indexOf(e),n=[..._];t===-1?n.push(e):n.splice(t,1),b(n)},w=()=>{let e=f.concat(x),t=a.filter(e=>!x.includes(e));m(e),u(t),b(_.filter(e=>!x.includes(e))),r?.(t,e)},T=()=>{let e=a.concat(S),t=f.filter(e=>!S.includes(e));u(e),m(t),b(_.filter(e=>!S.includes(e))),r?.(e,t)},E=(e,t)=>(0,y.jsxs)(d,{className:`flex h-64 w-full flex-col overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`bg-muted/50 flex items-center justify-between border-b px-4 py-2`,children:[(0,y.jsx)(`span`,{className:`text-sm font-bold`,children:e}),(0,y.jsxs)(`span`,{className:`text-muted-foreground text-xs`,children:[t.length,` items`]})]}),(0,y.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:(0,y.jsx)(h,{children:t.map(e=>(0,y.jsx)(g,{onClick:C(e),leading:(0,y.jsx)(p,{checked:_.indexOf(e)!==-1,readOnly:!0}),className:`hover:bg-muted/50 cursor-pointer py-1.5 transition-colors`,children:(0,y.jsx)(`span`,{className:`text-sm`,children:e})},e))})})]});return(0,y.jsxs)(`div`,{className:c(`flex flex-col items-center gap-4 sm:flex-row`,i),children:[E(n[0],a),(0,y.jsxs)(`div`,{className:`flex flex-row gap-2 sm:flex-col`,children:[(0,y.jsx)(l,{variant:`outline`,size:`sm`,onClick:w,disabled:x.length===0,"aria-label":`move selected right`,children:(0,y.jsx)(o,{className:`h-4 w-4`})}),(0,y.jsx)(l,{variant:`outline`,size:`sm`,onClick:T,disabled:S.length===0,"aria-label":`move selected left`,children:(0,y.jsx)(s,{className:`h-4 w-4`})})]}),E(n[1],f)]})},b.displayName=`TransferList`,b.__docgenInfo={description:`A dual-list selection component for moving items between two sets (Available vs Selected).`,methods:[],displayName:`TransferList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Items available to be selected`},initialSelected:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Initially selected items`,defaultValue:{value:`[]`,computed:!1}},titles:{required:!1,tsType:{name:`tuple`,raw:`[string, string]`,elements:[{name:`string`},{name:`string`}]},description:`Labels for the two panels`,defaultValue:{value:`["Available", "Selected"]`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(left: string[], right: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`left`},{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`right`}],return:{name:`void`}}},description:`Callback when selection changes`},className:{required:!1,tsType:{name:`string`},description:``}}}})),S=e((()=>{x()})),C,w,T,E,D,O;e((()=>{S(),C={title:`Composites/TransferList`,component:b,tags:[`autodocs`],parameters:{docs:{description:{component:`A dual-panel selection component for moving items between 'Available' and 'Selected' lists. Uses checkboxes for multi-selection with chevron buttons to transfer items.`}}},argTypes:{items:{description:`Array of string items available for selection.`,table:{category:`Data`}},initialSelected:{description:`Items that start in the right (selected) panel.`,table:{category:`Data`}},titles:{description:`Labels for the two panels as a tuple [left, right].`,table:{category:`Content`}},onChange:{description:`Callback triggered when items are moved between panels.`,table:{category:`Events`}}}},w={args:{items:[`Task A`,`Task B`,`Task C`,`Task D`,`Task E`,`Task F`],initialSelected:[`Task B`],titles:[`Available Tasks`,`Assigned Tasks`]},parameters:{docs:{description:{story:`A task assignment interface with one item pre-assigned to the right panel.`}}}},T={args:{items:[`Item 1`,`Item 2`,`Item 3`,`Item 4`],initialSelected:[],titles:[`Available`,`Selected`]},parameters:{docs:{description:{story:`All items start in the available panel with nothing pre-selected.`}}}},E={args:{items:[`Alice Chen`,`Bob Martinez`,`Carol Johnson`,`David Kim`,`Eve Williams`,`Frank Brown`,`Grace Lee`,`Henry Davis`],initialSelected:[`Alice Chen`,`David Kim`],titles:[`Team Members`,`Project Team`]},parameters:{docs:{description:{story:`A real-world team assignment scenario with people names and two pre-assigned members.`}}}},D={args:{items:[`Read`,`Write`,`Delete`,`Admin`,`Billing`,`Invite Members`,`Manage Roles`,`View Analytics`,`Export Data`],initialSelected:[`Read`,`Write`],titles:[`Available Permissions`,`Granted Permissions`]},parameters:{docs:{description:{story:`A permissions management interface — a common pattern for RBAC admin panels.`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: ["Task A", "Task B", "Task C", "Task D", "Task E", "Task F"],
    initialSelected: ["Task B"],
    titles: ["Available Tasks", "Assigned Tasks"]
  },
  parameters: {
    docs: {
      description: {
        story: "A task assignment interface with one item pre-assigned to the right panel."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    initialSelected: [],
    titles: ["Available", "Selected"]
  },
  parameters: {
    docs: {
      description: {
        story: "All items start in the available panel with nothing pre-selected."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: ["Alice Chen", "Bob Martinez", "Carol Johnson", "David Kim", "Eve Williams", "Frank Brown", "Grace Lee", "Henry Davis"],
    initialSelected: ["Alice Chen", "David Kim"],
    titles: ["Team Members", "Project Team"]
  },
  parameters: {
    docs: {
      description: {
        story: "A real-world team assignment scenario with people names and two pre-assigned members."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: ["Read", "Write", "Delete", "Admin", "Billing", "Invite Members", "Manage Roles", "View Analytics", "Export Data"],
    initialSelected: ["Read", "Write"],
    titles: ["Available Permissions", "Granted Permissions"]
  },
  parameters: {
    docs: {
      description: {
        story: "A permissions management interface — a common pattern for RBAC admin panels."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Empty`,`TeamAssignment`,`Permissions`]}))();export{w as Default,T as Empty,D as Permissions,E as TeamAssignment,O as __namedExportsOrder,C as default};