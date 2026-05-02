import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{n,t as r}from"./src-Bi-FfPVL.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Feedback/CircularProgress`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A circular progress indicator supporting both determinate (0–100%) and indeterminate (spinning) modes. Customizable in size, thickness, and color.`}}},argTypes:{value:{control:{type:`range`,min:0,max:100},description:`Current progress value (0–100). Only applies in determinate mode.`,table:{category:`State`}},indeterminate:{control:`boolean`,description:`When true, displays a continuously spinning animation.`,table:{category:`State`}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Visual size of the circular indicator.`,table:{category:`Appearance`}},thickness:{control:{type:`number`,min:1,max:10},description:`Stroke width of the progress ring.`,table:{category:`Appearance`}}}},o={args:{value:65,size:`md`}},s={args:{indeterminate:!0,size:`md`},parameters:{docs:{description:{story:`A continuously spinning indicator for operations with unknown duration.`}}}},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(n,{indeterminate:!0,size:`sm`}),(0,i.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Small`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(n,{indeterminate:!0,size:`md`}),(0,i.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Medium`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(n,{indeterminate:!0,size:`lg`}),(0,i.jsx)(`span`,{className:`text-muted-foreground text-xs`,children:`Large`})]})]}),parameters:{docs:{description:{story:`Comparison of all three available sizes.`}}}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(n,{value:40,className:`text-emerald-500`}),(0,i.jsx)(n,{value:70,className:`text-rose-500`}),(0,i.jsx)(n,{value:90,className:`text-amber-500`}),(0,i.jsx)(n,{indeterminate:!0,className:`text-sky-500`})]}),parameters:{docs:{description:{story:"Custom colors applied via Tailwind text color classes — the ring inherits `currentColor`."}}}},u={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-6`,children:[0,25,50,75,100].map(e=>(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(n,{value:e,size:`lg`}),(0,i.jsxs)(`span`,{className:`text-muted-foreground font-mono text-xs`,children:[e,`%`]})]},e))}),parameters:{docs:{description:{story:`Determinate progress at various values, from 0% to 100%.`}}}},d={args:{value:75,size:`lg`,thickness:8},parameters:{docs:{description:{story:`A thicker ring for more visual weight.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    size: "md"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "A continuously spinning indicator for operations with unknown duration."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="sm" />
        <span className="text-muted-foreground text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="md" />
        <span className="text-muted-foreground text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress indeterminate size="lg" />
        <span className="text-muted-foreground text-xs">Large</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three available sizes."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <CircularProgress value={40} className="text-emerald-500" />
      <CircularProgress value={70} className="text-rose-500" />
      <CircularProgress value={90} className="text-amber-500" />
      <CircularProgress indeterminate className="text-sky-500" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Custom colors applied via Tailwind text color classes — the ring inherits \`currentColor\`."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {[0, 25, 50, 75, 100].map(val => <div key={val} className="flex flex-col items-center gap-2">
          <CircularProgress value={val} size="lg" />
          <span className="text-muted-foreground font-mono text-xs">
            {val}%
          </span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Determinate progress at various values, from 0% to 100%."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: "lg",
    thickness: 8
  },
  parameters: {
    docs: {
      description: {
        story: "A thicker ring for more visual weight."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Indeterminate`,`Sizes`,`CustomColors`,`ProgressValues`,`ThickRing`]}))();export{l as CustomColors,o as Default,s as Indeterminate,u as ProgressValues,c as Sizes,d as ThickRing,f as __namedExportsOrder,a as default};