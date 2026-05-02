import{n as e}from"./chunk-jRWAZmH_.js";import{Et as t,Ht as n,g as r,pt as i,r as a,w as o}from"./iframe-zfMobaDd.js";import{r as s,t as c}from"./src-D0-hy8Gr.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c(),a(),l=n(),u={title:`Data Display/Badge`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Small status labels used to highlight categories, counts, or statuses. Available in multiple semantic variants with optional dot indicators.`}}},argTypes:{variant:{control:`select`,options:[`default`,`secondary`,`outline`,`destructive`,`success`,`warning`],description:`The visual variant conveying semantic meaning.`,table:{category:`Appearance`}},children:{description:`The badge label content.`,table:{category:`Content`}}}},d={args:{children:`Default`}},f={args:{variant:`secondary`,children:`Secondary`}},p={args:{variant:`outline`,children:`Outline`}},m={args:{variant:`success`,children:`Success`}},h={args:{variant:`warning`,children:`Warning`}},g={args:{variant:`destructive`,children:`Destructive`}},_={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,l.jsx)(s,{children:`Default`}),(0,l.jsx)(s,{variant:`secondary`,children:`Secondary`}),(0,l.jsx)(s,{variant:`outline`,children:`Outline`}),(0,l.jsx)(s,{variant:`success`,children:`Success`}),(0,l.jsx)(s,{variant:`warning`,children:`Warning`}),(0,l.jsx)(s,{variant:`destructive`,children:`Destructive`})]}),parameters:{docs:{description:{story:`Side-by-side comparison of every available badge variant.`}}}},v={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,l.jsxs)(s,{variant:`success`,className:`gap-1`,children:[(0,l.jsx)(i,{className:`h-3 w-3`}),` Active`]}),(0,l.jsxs)(s,{variant:`warning`,className:`gap-1`,children:[(0,l.jsx)(r,{className:`h-3 w-3`}),` Pending`]}),(0,l.jsxs)(s,{variant:`default`,className:`gap-1`,children:[(0,l.jsx)(t,{className:`h-3 w-3`}),` 3 new`]}),(0,l.jsxs)(s,{variant:`outline`,className:`gap-1`,children:[(0,l.jsx)(o,{className:`h-3 w-3`}),` Featured`]})]}),parameters:{docs:{description:{story:`Badges can include small icons for additional visual context alongside the text label.`}}}},y={render:()=>(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(`span`,{className:`text-sm font-medium`,children:`Deployment Status:`}),(0,l.jsx)(s,{variant:`success`,children:`Live`}),(0,l.jsx)(`span`,{className:`text-muted-foreground text-sm`,children:`•`}),(0,l.jsx)(`span`,{className:`text-sm font-medium`,children:`Version:`}),(0,l.jsx)(s,{variant:`outline`,children:`v2.4.1`})]}),parameters:{docs:{description:{story:`Badges used inline with text to convey status and version information.`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Default"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    children: "Success"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    children: "Warning"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available badge variant."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="success" className="gap-1">
        <CheckCircle className="h-3 w-3" /> Active
      </Badge>
      <Badge variant="warning" className="gap-1">
        <AlertTriangle className="h-3 w-3" /> Pending
      </Badge>
      <Badge variant="default" className="gap-1">
        <Bell className="h-3 w-3" /> 3 new
      </Badge>
      <Badge variant="outline" className="gap-1">
        <Star className="h-3 w-3" /> Featured
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges can include small icons for additional visual context alongside the text label."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Deployment Status:</span>
      <Badge variant="success">Live</Badge>
      <span className="text-muted-foreground text-sm">•</span>
      <span className="text-sm font-medium">Version:</span>
      <Badge variant="outline">v2.4.1</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badges used inline with text to convey status and version information."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Secondary`,`Outline`,`Success`,`Warning`,`Destructive`,`AllVariants`,`WithIcons`,`InContext`]}))();export{_ as AllVariants,d as Default,g as Destructive,y as InContext,p as Outline,f as Secondary,m as Success,h as Warning,v as WithIcons,b as __namedExportsOrder,u as default};