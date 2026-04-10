import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{E as n,Pt as r,cn as i,i as a,r as o,s}from"./iframe-CAjx62e_.js";var c,l,u,d=e((()=>{c=t(i(),1),s(),a(),l=r(),u=({value:e=0,max:t=5,readonly:r=!1,size:i=`md`,onChange:a,activeColor:s=`text-amber-400 fill-amber-400`,inactiveColor:u=`text-muted fill-muted`,className:d})=>{let[f,p]=(0,c.useState)(null),m={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-8 w-8`},h=f??e;return(0,l.jsx)(`div`,{className:o(`flex items-center gap-1`,d),children:Array.from({length:t}).map((e,t)=>{let c=t+1;return(0,l.jsx)(`button`,{type:`button`,disabled:r,className:o(`transition-transform focus:outline-none focus-visible:scale-125`,!r&&`cursor-pointer hover:scale-110 active:scale-95`,c<=h?s:u),onMouseEnter:()=>!r&&p(c),onMouseLeave:()=>!r&&p(null),onClick:()=>!r&&a?.(c),children:(0,l.jsx)(n,{className:o(m[i])})},t)})})},u.displayName=`Rating`,u.__docgenInfo={description:`An interactive star rating component for user feedback and reviews.`,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:`Current value`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`Maximum number of stars`,defaultValue:{value:`5`,computed:!1}},readonly:{required:!1,tsType:{name:`boolean`},description:`Whether the rating is read-only`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:`Size multiplier`,defaultValue:{value:`"md"`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:`Callback for value changes`},activeColor:{required:!1,tsType:{name:`string`},description:`Custom icon colors`,defaultValue:{value:`"text-amber-400 fill-amber-400"`,computed:!1}},inactiveColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"text-muted fill-muted"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),f=e((()=>{d()})),p,m,h,g,_,v,y,b;e((()=>{f(),p=t(i(),1),m=r(),h={title:`UI/Rating`,component:u,tags:[`autodocs`]},g={args:{value:3,max:5,size:`md`}},_={render:()=>{let[e,t]=(0,p.useState)(2);return(0,m.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,m.jsx)(u,{value:e,onChange:t,size:`lg`}),(0,m.jsxs)(`p`,{className:`text-sm font-medium`,children:[`Your rating: `,e,` stars`]})]})}},v={args:{value:4.5,readonly:!0,size:`sm`}},y={args:{value:4,activeColor:`text-rose-500 fill-rose-500`,inactiveColor:`text-muted fill-muted`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    size: "md"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(2);
    return <div className="flex flex-col gap-4">
        <Rating value={value} onChange={setValue} size="lg" />
        <p className="text-sm font-medium">Your rating: {value} stars</p>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4.5,
    readonly: true,
    size: "sm"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    activeColor: "text-rose-500 fill-rose-500",
    inactiveColor: "text-muted fill-muted"
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Interactive`,`ReadOnly`,`CustomColors`]}))();export{y as CustomColors,g as Default,_ as Interactive,v as ReadOnly,b as __namedExportsOrder,h as default};