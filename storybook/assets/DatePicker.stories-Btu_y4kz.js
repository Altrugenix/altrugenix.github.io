import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r}from"./iframe-CAjx62e_.js";import{i,t as a}from"./date-picker-Dmw5XhsU.js";var o,s,c,l,u,d;e((()=>{a(),o=t(r(),1),s=n(),c={title:`UI/DatePicker`,component:i,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{className:`h-[500px] max-w-[400px] p-10`,children:(0,s.jsx)(e,{})})]},l={render:e=>{let[t,n]=(0,o.useState)(new Date);return(0,s.jsx)(i,{...e,value:t,onChange:n})}},u={render:e=>{let[t,n]=(0,o.useState)();return(0,s.jsx)(i,{...e,value:t,onChange:n,placeholder:`Select your birthday`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <DatePicker {...args} value={date} onChange={setDate} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>();
    return <DatePicker {...args} value={date} onChange={setDate} placeholder="Select your birthday" />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithPlaceholder`]}))();export{l as Default,u as WithPlaceholder,d as __namedExportsOrder,c as default};