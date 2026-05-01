import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({className:e,label:t,id:n,...r},i)=>{let c=(0,o.useId)(),l=n||c;return(0,s.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,s.jsx)(`input`,{type:`radio`,id:l,ref:i,className:a(`border-primary bg-background text-primary ring-offset-background checked:border-primary focus-visible:ring-ring peer aspect-square h-4 w-4 appearance-none rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,`after:bg-primary relative after:absolute after:top-1/2 after:left-1/2 after:hidden after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] checked:after:block`,e),...r}),t&&(0,s.jsx)(`label`,{htmlFor:l,className:`text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,children:t})]})}),c.displayName=`Radio`,c.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h,g,_;e((()=>{u(),d=n(),f={title:`Forms/Radio`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A radio button for selecting a single option from a group. Includes label and description support with full keyboard navigation.`}}},argTypes:{label:{description:`Primary label text for the radio option.`,table:{category:`Content`}},disabled:{control:`boolean`,description:`Prevents interaction with the radio button.`,table:{category:`State`}}}},p={args:{label:`Option A`,name:`demo`,value:`a`}},m={args:{label:`Pro Plan ($29/month — unlimited projects and priority support)`,name:`plan`,value:`pro`}},h={args:{label:`Unavailable option`,name:`demo`,value:`unavailable`,disabled:!0}},g={render:()=>(0,d.jsxs)(`fieldset`,{className:`space-y-3`,children:[(0,d.jsx)(`legend`,{className:`text-foreground mb-2 text-sm font-semibold`,children:`Choose a plan`}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(c,{label:`Free`,name:`plan`,value:`free`}),(0,d.jsx)(`p`,{className:`text-muted-foreground pl-6 text-sm`,children:`Basic access with community support.`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(c,{label:`Pro`,name:`plan`,value:`pro`,defaultChecked:!0}),(0,d.jsx)(`p`,{className:`text-muted-foreground pl-6 text-sm`,children:`$29/month — unlimited projects and priority support.`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(c,{label:`Enterprise`,name:`plan`,value:`enterprise`}),(0,d.jsx)(`p`,{className:`text-muted-foreground pl-6 text-sm`,children:`Custom pricing — dedicated account manager and SLA.`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(c,{label:`Legacy`,name:`plan`,value:`legacy`,disabled:!0}),(0,d.jsx)(`p`,{className:`text-muted-foreground pl-6 text-sm`,children:`No longer available for new accounts.`})]})]}),parameters:{docs:{description:{story:`A group of radio buttons with descriptions, simulating a pricing plan selection. Includes a disabled option.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option A",
    name: "demo",
    value: "a"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pro Plan ($29/month — unlimited projects and priority support)",
    name: "plan",
    value: "pro"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Unavailable option",
    name: "demo",
    value: "unavailable",
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <fieldset className="space-y-3">
      <legend className="text-foreground mb-2 text-sm font-semibold">
        Choose a plan
      </legend>
      <div>
        <Radio label="Free" name="plan" value="free" />
        <p className="text-muted-foreground pl-6 text-sm">
          Basic access with community support.
        </p>
      </div>
      <div>
        <Radio label="Pro" name="plan" value="pro" defaultChecked />
        <p className="text-muted-foreground pl-6 text-sm">
          $29/month — unlimited projects and priority support.
        </p>
      </div>
      <div>
        <Radio label="Enterprise" name="plan" value="enterprise" />
        <p className="text-muted-foreground pl-6 text-sm">
          Custom pricing — dedicated account manager and SLA.
        </p>
      </div>
      <div>
        <Radio label="Legacy" name="plan" value="legacy" disabled />
        <p className="text-muted-foreground pl-6 text-sm">
          No longer available for new accounts.
        </p>
      </div>
    </fieldset>,
  parameters: {
    docs: {
      description: {
        story: "A group of radio buttons with descriptions, simulating a pricing plan selection. Includes a disabled option."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithDescription`,`Disabled`,`RadioGroup`]}))();export{p as Default,h as Disabled,g as RadioGroup,m as WithDescription,_ as __namedExportsOrder,f as default};