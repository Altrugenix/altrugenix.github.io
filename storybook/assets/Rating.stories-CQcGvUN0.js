import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,r as a,w as o,zt as s}from"./iframe-zfMobaDd.js";var c,l,u,d=e((()=>{c=t(i(),1),a(),r(),l=n(),u=({value:e=0,max:t=5,readonly:n=!1,size:r=`md`,onChange:i,activeColor:a=`text-amber-400 fill-amber-400`,inactiveColor:u=`text-muted fill-muted`,className:d})=>{let[f,p]=(0,c.useState)(null),m={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-8 w-8`},h=f??e;return(0,l.jsx)(`div`,{className:s(`flex items-center gap-1`,d),children:Array.from({length:t}).map((e,t)=>{let c=t+1;return(0,l.jsx)(`button`,{type:`button`,disabled:n,className:s(`transition-transform focus:outline-none focus-visible:scale-125`,!n&&`cursor-pointer hover:scale-110 active:scale-95`,c<=h?a:u),onMouseEnter:()=>!n&&p(c),onMouseLeave:()=>!n&&p(null),onClick:()=>!n&&i?.(c),children:(0,l.jsx)(o,{className:s(m[r])})},t)})})},u.displayName=`Rating`,u.__docgenInfo={description:`An interactive star rating component for user feedback and reviews.`,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:`Current value`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Maximum number of stars`,defaultValue:{value:`5`,computed:!1}},readonly:{required:!1,tsType:{name:`boolean`},description:`Whether the rating is read-only`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Size multiplier`,defaultValue:{value:`"md"`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:`Callback for value changes`},activeColor:{required:!1,tsType:{name:`string`},description:`Custom icon colors`,defaultValue:{value:`"text-amber-400 fill-amber-400"`,computed:!1}},inactiveColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"text-muted fill-muted"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b,x,S;e((()=>{f(),p=t(i(),1),m=n(),h={title:`Forms/Rating`,component:u,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`An interactive star rating component for collecting user feedback. Supports controlled and uncontrolled modes, read-only display, and customizable sizes.`}}},argTypes:{value:{control:{type:`number`,min:0,max:10},description:`Current rating value.`,table:{category:`State`}},max:{control:{type:`number`,min:1,max:10},description:`Maximum number of stars.`,table:{category:`Appearance`}},size:{control:`select`,options:[`sm`,`md`,`lg`],description:`Size of the star icons.`,table:{category:`Appearance`}},readonly:{control:`boolean`,description:`When true, the rating is display-only.`,table:{category:`State`}},onChange:{description:`Callback triggered when the user selects a new value.`,table:{category:`Events`}}}},g={args:{value:3,max:5}},_={args:{value:4,readonly:!0},parameters:{docs:{description:{story:`A read-only rating for displaying existing scores.`}}}},v={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground w-16 text-sm`,children:`Small`}),(0,m.jsx)(u,{value:4,size:`sm`,readonly:!0})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground w-16 text-sm`,children:`Medium`}),(0,m.jsx)(u,{value:4,size:`md`,readonly:!0})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`span`,{className:`text-muted-foreground w-16 text-sm`,children:`Large`}),(0,m.jsx)(u,{value:4,size:`lg`,readonly:!0})]})]}),parameters:{docs:{description:{story:`Comparison of all three available size variants.`}}}},y={args:{value:7,max:10},parameters:{docs:{description:{story:`A 10-star rating scale for more granular feedback.`}}}},b=()=>{let[e,t]=(0,p.useState)(0);return(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(u,{value:e,onChange:t,size:`lg`}),(0,m.jsx)(`p`,{className:`text-muted-foreground text-sm`,children:e>0?`You rated: ${e} / 5`:`Click a star to rate`})]})},x={render:()=>(0,m.jsx)(b,{}),parameters:{docs:{description:{story:`A fully interactive rating with live feedback text showing the selected value.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: "A read-only rating for displaying existing scores."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Small</span>
        <Rating value={4} size="sm" readonly />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Medium</span>
        <Rating value={4} size="md" readonly />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Large</span>
        <Rating value={4} size="lg" readonly />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three available size variants."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 7,
    max: 10
  },
  parameters: {
    docs: {
      description: {
        story: "A 10-star rating scale for more granular feedback."
      }
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story: "A fully interactive rating with live feedback text showing the selected value."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`ReadOnly`,`Sizes`,`TenStars`,`Interactive`]}))();export{g as Default,x as Interactive,_ as ReadOnly,v as Sizes,y as TenStars,S as __namedExportsOrder,h as default};