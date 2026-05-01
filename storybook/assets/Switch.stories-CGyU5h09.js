import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({className:e,label:t,id:n,...r},i)=>{let c=(0,o.useId)(),l=n||c;return(0,s.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,s.jsx)(`input`,{type:`checkbox`,id:l,ref:i,className:a(`bg-input checked:bg-primary focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-6 w-11 shrink-0 cursor-pointer appearance-none items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,`after:bg-background relative after:pointer-events-none after:absolute after:block after:h-5 after:w-5 after:translate-x-0 after:rounded-full after:shadow-lg after:ring-0 after:transition-transform after:content-[''] checked:after:translate-x-5`,e),...r}),t&&(0,s.jsx)(`label`,{htmlFor:l,className:`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:t})]})}),c.displayName=`Switch`,c.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_,v;e((()=>{u(),d=n(),f={title:`Forms/Switch`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A toggle switch for boolean settings. Provides an alternative to checkboxes for on/off states with a more visual sliding interaction.`}}},argTypes:{label:{description:`Text label displayed next to the switch.`,table:{category:`Content`}},disabled:{control:`boolean`,description:`Disables the switch when true.`,table:{category:`State`}},defaultChecked:{control:`boolean`,description:`Initial checked state for uncontrolled usage.`,table:{category:`State`}}}},p={args:{label:`Enable notifications`}},m={args:{label:`Dark mode`,defaultChecked:!0},parameters:{docs:{description:{story:`Switch rendered in the checked/on state by default.`}}}},h={args:{label:`Feature locked`,disabled:!0}},g={args:{label:`Always on`,disabled:!0,defaultChecked:!0},parameters:{docs:{description:{story:`A disabled switch in the checked state — useful for indicating a locked-on feature.`}}}},_={render:()=>(0,d.jsxs)(`div`,{className:`w-[360px] space-y-5`,children:[(0,d.jsx)(`h3`,{className:`text-foreground text-base font-semibold`,children:`Notification Preferences`}),(0,d.jsxs)(`div`,{className:`border-border space-y-4 rounded-lg border p-4`,children:[(0,d.jsx)(c,{label:`Push notifications`,defaultChecked:!0}),(0,d.jsx)(c,{label:`Email digest`,defaultChecked:!0}),(0,d.jsx)(c,{label:`SMS alerts`}),(0,d.jsx)(c,{label:`Marketing emails`,disabled:!0})]})]}),parameters:{docs:{description:{story:`Multiple switches arranged in a realistic settings panel layout.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Dark mode",
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "Switch rendered in the checked/on state by default."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feature locked",
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Always on",
    disabled: true,
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled switch in the checked state — useful for indicating a locked-on feature."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[360px] space-y-5">
      <h3 className="text-foreground text-base font-semibold">
        Notification Preferences
      </h3>
      <div className="border-border space-y-4 rounded-lg border p-4">
        <Switch label="Push notifications" defaultChecked />
        <Switch label="Email digest" defaultChecked />
        <Switch label="SMS alerts" />
        <Switch label="Marketing emails" disabled />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Multiple switches arranged in a realistic settings panel layout."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`SettingsPanel`]}))();export{m as Checked,p as Default,h as Disabled,g as DisabledChecked,_ as SettingsPanel,v as __namedExportsOrder,f as default};