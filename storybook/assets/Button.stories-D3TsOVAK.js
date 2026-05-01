import{n as e}from"./chunk-jRWAZmH_.js";import{B as t,Ht as n,Z as r,kt as i,r as a,y as o}from"./iframe-coe0kFk0.js";import{a as s,t as c}from"./src-CxQaJ0KN.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{c(),a(),l=n(),u={title:`UI/Button`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A versatile button component supporting multiple visual variants, sizes, loading states, and icon placement. Built with accessibility and keyboard navigation in mind.`}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`link`,`destructive`],description:`The visual style of the button.`,table:{category:`Appearance`}},size:{control:`select`,options:[`sm`,`md`,`lg`,`icon`],description:`Controls the padding and font size of the button.`,table:{category:`Appearance`}},isLoading:{control:`boolean`,description:`When true, displays a spinner and disables interaction.`,table:{category:`State`}},disabled:{control:`boolean`,description:`Prevents interaction and applies muted styling.`,table:{category:`State`}},leftIcon:{description:`Optional icon element rendered before the label.`,table:{category:`Content`}},rightIcon:{description:`Optional icon element rendered after the label.`,table:{category:`Content`}},children:{description:`Button label or content.`,table:{category:`Content`}}}},d={args:{variant:`primary`,children:`Primary Button`}},f={args:{variant:`secondary`,children:`Secondary Button`}},p={args:{variant:`outline`,children:`Outline Button`}},m={args:{variant:`ghost`,children:`Ghost Button`}},h={args:{variant:`destructive`,children:`Delete Account`,leftIcon:(0,l.jsx)(o,{className:`h-4 w-4`})},parameters:{docs:{description:{story:`Used for irreversible or dangerous actions. Styled with a red accent to signal caution.`}}}},g={args:{variant:`link`,children:`Link Button`},parameters:{docs:{description:{story:`Renders as an inline link with no background or border. Useful for navigation-style actions.`}}}},_={args:{isLoading:!0,children:`Saving...`},parameters:{docs:{description:{story:`Shows a spinner and disables interaction while an async operation is in progress.`}}}},v={args:{variant:`primary`,leftIcon:(0,l.jsx)(t,{className:`h-4 w-4`}),children:`Send Email`}},y={args:{variant:`primary`,rightIcon:(0,l.jsx)(i,{className:`h-4 w-4`}),children:`Continue`}},b={args:{variant:`outline`,size:`icon`,children:(0,l.jsx)(r,{className:`h-4 w-4 text-rose-500`})},parameters:{docs:{description:{story:"Icon-only button using the `icon` size. Ensure an `aria-label` is provided for accessibility."}}}},x={render:()=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsx)(s,{size:`sm`,children:`Small`}),(0,l.jsx)(s,{size:`md`,children:`Medium`}),(0,l.jsx)(s,{size:`lg`,children:`Large`})]}),parameters:{docs:{description:{story:`Comparison of all available size options.`}}}},S={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,l.jsx)(s,{variant:`primary`,children:`Primary`}),(0,l.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,l.jsx)(s,{variant:`outline`,children:`Outline`}),(0,l.jsx)(s,{variant:`ghost`,children:`Ghost`}),(0,l.jsx)(s,{variant:`link`,children:`Link`}),(0,l.jsx)(s,{variant:`destructive`,children:`Destructive`})]}),parameters:{docs:{description:{story:`Side-by-side comparison of every available variant.`}}}},C={args:{disabled:!0,children:`Can't click me`},parameters:{docs:{description:{story:`Disabled buttons have reduced opacity and prevent all pointer and keyboard interaction.`}}}},w={render:()=>(0,l.jsxs)(`div`,{className:`flex gap-0`,children:[(0,l.jsx)(s,{variant:`outline`,className:`rounded-r-none border-r-0`,children:`Left`}),(0,l.jsx)(s,{variant:`outline`,className:`rounded-none border-r-0`,children:`Center`}),(0,l.jsx)(s,{variant:`outline`,className:`rounded-l-none`,children:`Right`})]}),parameters:{docs:{description:{story:`Buttons can be visually grouped by removing border-radius and borders on adjacent edges.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete Account",
    leftIcon: <Trash2 className="h-4 w-4" />
  },
  parameters: {
    docs: {
      description: {
        story: "Used for irreversible or dangerous actions. Styled with a red accent to signal caution."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link Button"
  },
  parameters: {
    docs: {
      description: {
        story: "Renders as an inline link with no background or border. Useful for navigation-style actions."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: "Saving..."
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a spinner and disables interaction while an async operation is in progress."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    leftIcon: <Mail className="h-4 w-4" />,
    children: "Send Email"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: "Continue"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "icon",
    children: <Heart className="h-4 w-4 text-rose-500" />
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only button using the \`icon\` size. Ensure an \`aria-label\` is provided for accessibility."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all available size options."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available variant."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't click me"
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled buttons have reduced opacity and prevent all pointer and keyboard interaction."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-0">
      <Button variant="outline" className="rounded-r-none border-r-0">
        Left
      </Button>
      <Button variant="outline" className="rounded-none border-r-0">
        Center
      </Button>
      <Button variant="outline" className="rounded-l-none">
        Right
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Buttons can be visually grouped by removing border-radius and borders on adjacent edges."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Destructive`,`LinkVariant`,`Loading`,`WithLeftIcon`,`WithRightIcon`,`IconOnly`,`Sizes`,`AllVariants`,`Disabled`,`ButtonGroup`]}))();export{S as AllVariants,w as ButtonGroup,h as Destructive,C as Disabled,m as Ghost,b as IconOnly,g as LinkVariant,_ as Loading,p as Outline,d as Primary,f as Secondary,x as Sizes,v as WithLeftIcon,y as WithRightIcon,T as __namedExportsOrder,u as default};