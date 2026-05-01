import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{n,r,t as i}from"./src-C3SWDwQx2.js";var a,o,s,c,l;e((()=>{i(),a=t(),o={title:`Forms/DatePicker/TimeAndDateTime`,tags:[`autodocs`],parameters:{docs:{description:{component:`Additional picker variants for selecting time and both date/time simultaneously.`}}}},s={render:()=>(0,a.jsxs)(`div`,{className:`max-w-xs space-y-6`,children:[(0,a.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,a.jsx)(`label`,{className:`text-sm font-medium`,children:`Pick a time`}),(0,a.jsx)(r,{})]}),(0,a.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,a.jsx)(`label`,{className:`text-sm font-medium`,children:`Pre-filled Time`}),(0,a.jsx)(r,{value:`14:30`})]})]}),parameters:{docs:{description:{story:`A native time picker input.`}}}},c={render:()=>(0,a.jsx)(`div`,{className:`max-w-xs space-y-4`,children:(0,a.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,a.jsx)(`label`,{className:`text-sm font-medium`,children:`Schedule Meeting`}),(0,a.jsx)(n,{})]})}),parameters:{docs:{description:{story:`A native datetime-local picker input.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs space-y-6">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Pick a time</label>
        <TimePicker />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Pre-filled Time</label>
        <TimePicker value="14:30" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A native time picker input."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Schedule Meeting</label>
        <DateTimePicker />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A native datetime-local picker input."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`TimeSelection`,`DateTimeSelection`]}))();export{c as DateTimeSelection,s as TimeSelection,l as __namedExportsOrder,o as default};