import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{n,t as r}from"./src-DF6BhqY0.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Navigation/Tabs`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A tabbed navigation component for switching between content panels. Supports default, pill, and underline visual variants, horizontal and vertical orientation, and scrollable overflow.`}}},argTypes:{value:{description:`Controlled active tab value.`,table:{category:`State`}},defaultValue:{description:`Default active tab (uncontrolled).`,table:{category:`State`}},onValueChange:{description:`Callback triggered when the active tab changes.`,table:{category:`Events`}},variant:{control:`select`,options:[`default`,`pills`,`underline`],description:`Visual style of the tab list.`,table:{category:`Appearance`}},orientation:{control:`select`,options:[`horizontal`,`vertical`],description:`Direction of the tab list.`,table:{category:`Appearance`}},scrollable:{control:`boolean`,description:`Whether the tab list scrolls on overflow.`,table:{category:`Behavior`}},items:{description:`Array of tab items with value, label, and content.`,table:{category:`Data`}}}},o=[{value:`overview`,label:`Overview`,content:(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h3`,{className:`font-semibold`,children:`Overview`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`A high-level summary of your project metrics and recent activity.`})]})},{value:`analytics`,label:`Analytics`,content:(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h3`,{className:`font-semibold`,children:`Analytics`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Detailed charts and metrics about usage, performance, and engagement.`})]})},{value:`settings`,label:`Settings`,content:(0,i.jsxs)(`div`,{className:`space-y-2`,children:[(0,i.jsx)(`h3`,{className:`font-semibold`,children:`Settings`}),(0,i.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:`Configure your project preferences and integrations.`})]})}],s={args:{items:o,defaultValue:`overview`}},c={args:{items:o,defaultValue:`overview`,variant:`pills`},parameters:{docs:{description:{story:`Pill-style tabs with rounded backgrounds for the active state.`}}}},l={args:{items:o,defaultValue:`overview`,variant:`underline`},parameters:{docs:{description:{story:`Underline-style tabs — a clean, minimal look for content-heavy pages.`}}}},u={args:{items:o,defaultValue:`overview`,orientation:`vertical`},parameters:{docs:{description:{story:`Vertical orientation — suitable for settings pages and sidepanel navigation.`}}}},d={render:()=>(0,i.jsxs)(`div`,{className:`space-y-8`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Default`}),(0,i.jsx)(n,{items:o,defaultValue:`overview`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Pills`}),(0,i.jsx)(n,{items:o,defaultValue:`analytics`,variant:`pills`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`p`,{className:`mb-2 text-sm font-medium`,children:`Underline`}),(0,i.jsx)(n,{items:o,defaultValue:`settings`,variant:`underline`})]})]}),parameters:{docs:{description:{story:`Side-by-side comparison of all three tab variants.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    defaultValue: "overview"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    defaultValue: "overview",
    variant: "pills"
  },
  parameters: {
    docs: {
      description: {
        story: "Pill-style tabs with rounded backgrounds for the active state."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    defaultValue: "overview",
    variant: "underline"
  },
  parameters: {
    docs: {
      description: {
        story: "Underline-style tabs — a clean, minimal look for content-heavy pages."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: tabItems,
    defaultValue: "overview",
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Vertical orientation — suitable for settings pages and sidepanel navigation."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <Tabs items={tabItems} defaultValue="overview" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Pills</p>
        <Tabs items={tabItems} defaultValue="analytics" variant="pills" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Underline</p>
        <Tabs items={tabItems} defaultValue="settings" variant="underline" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of all three tab variants."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Pills`,`Underline`,`Vertical`,`AllVariants`]}))();export{d as AllVariants,s as Default,c as Pills,l as Underline,u as Vertical,f as __namedExportsOrder,a as default};