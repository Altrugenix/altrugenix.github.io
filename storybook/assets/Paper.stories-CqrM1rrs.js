import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";import{n as o,t as s}from"./dist-C2GwZUMa.js";var c,l=e((()=>{o(),c=s(`bg-surface text-surface-foreground transition-shadow duration-200`,{variants:{elevation:{0:`shadow-none`,1:`shadow-sm`,2:`shadow`,3:`shadow-md`,4:`shadow-lg`,5:`shadow-xl`,6:`shadow-2xl`},variant:{elevation:`border-transparent`,outlined:`border border-border shadow-none`},square:{true:`rounded-none`,false:`rounded-xl`}},defaultVariants:{elevation:1,variant:`elevation`,square:!1}})})),u,d,f,p=e((()=>{u=t(i(),1),r(),l(),d=n(),f=u.forwardRef(({className:e,elevation:t,variant:n,square:r,as:i=`div`,...o},s)=>(0,d.jsx)(i,{ref:s,className:a(c({elevation:t,variant:n,square:r}),e),...o})),f.displayName=`Paper`,f.__docgenInfo={description:``,methods:[],displayName:`Paper`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:`Render as a different HTML element`,defaultValue:{value:`"div"`,computed:!1}}},composes:[`VariantProps`]}})),m=e((()=>{p()})),h,g,_,v,y,b,x,S;e((()=>{m(),h=n(),g={title:`Layout/Paper`,component:f,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A surface component that provides elevation (shadow) or outlined visual depth. Use it as a base container for cards, dialogs, and other elevated content.`}}},argTypes:{elevation:{control:{type:`number`,min:0,max:6},description:"Shadow depth level (0–6). Only applies to the `elevation` variant.",table:{category:`Appearance`}},variant:{control:`radio`,options:[`elevation`,`outlined`],description:`Whether to use shadow elevation or a border outline.`,table:{category:`Appearance`}},square:{control:`boolean`,description:`When true, removes border-radius for sharp corners.`,table:{category:`Appearance`}}}},_={args:{elevation:3,variant:`elevation`,square:!1,className:`p-8`,children:`This is a Paper component`}},v={args:{variant:`outlined`,className:`p-8`,children:`Outlined paper — uses a border instead of shadow.`},parameters:{docs:{description:{story:"The `outlined` variant replaces shadow elevation with a subtle border."}}}},y={args:{elevation:2,square:!0,className:`p-8`,children:`Square paper with no border-radius.`}},b={render:()=>(0,h.jsx)(`div`,{className:`flex flex-wrap items-center gap-6`,children:[0,1,2,3,4,5,6].map(e=>(0,h.jsx)(f,{elevation:e,className:`flex h-24 w-24 items-center justify-center`,children:(0,h.jsx)(`span`,{className:`text-muted-foreground text-sm font-medium`,children:e})},e))}),parameters:{docs:{description:{story:`All seven elevation levels displayed side by side — from flat (0) to deeply elevated (6).`}}}},x={render:()=>(0,h.jsxs)(f,{elevation:1,className:`p-6`,children:[(0,h.jsx)(`p`,{className:`mb-4 text-sm`,children:`Outer paper (elevation 1)`}),(0,h.jsx)(f,{elevation:3,className:`p-4`,children:(0,h.jsx)(`p`,{className:`text-sm`,children:`Inner paper (elevation 3) — nested containers create visual hierarchy.`})})]}),parameters:{docs:{description:{story:`Papers can be nested to create layered visual depth.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 3,
    variant: "elevation",
    square: false,
    className: "p-8",
    children: "This is a Paper component"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    className: "p-8",
    children: "Outlined paper — uses a border instead of shadow."
  },
  parameters: {
    docs: {
      description: {
        story: "The \`outlined\` variant replaces shadow elevation with a subtle border."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 2,
    square: true,
    className: "p-8",
    children: "Square paper with no border-radius."
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-6">
      {([0, 1, 2, 3, 4, 5, 6] as const).map(level => <Paper key={level} elevation={level} className="flex h-24 w-24 items-center justify-center">
          <span className="text-muted-foreground text-sm font-medium">
            {level}
          </span>
        </Paper>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All seven elevation levels displayed side by side — from flat (0) to deeply elevated (6)."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Paper elevation={1} className="p-6">
      <p className="mb-4 text-sm">Outer paper (elevation 1)</p>
      <Paper elevation={3} className="p-4">
        <p className="text-sm">
          Inner paper (elevation 3) — nested containers create visual hierarchy.
        </p>
      </Paper>
    </Paper>,
  parameters: {
    docs: {
      description: {
        story: "Papers can be nested to create layered visual depth."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Outlined`,`Square`,`ElevationLevels`,`Nested`]}))();export{_ as Default,b as ElevationLevels,x as Nested,v as Outlined,y as Square,S as __namedExportsOrder,g as default};