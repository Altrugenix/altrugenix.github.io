import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,Ft as r,Mt as i,S as a,ln as o,r as s}from"./iframe-By8sOsRq.js";var c,l,u,d=e((()=>{c=t(o(),1),s(),i(),l=r(),u=({value:e=0,max:t=5,readonly:r=!1,size:i=`md`,onChange:o,activeColor:s=`text-amber-400 fill-amber-400`,inactiveColor:u=`text-muted fill-muted`,className:d})=>{let[f,p]=(0,c.useState)(null),m={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-8 w-8`},h=f??e;return(0,l.jsx)(`div`,{className:n(`flex items-center gap-1`,d),children:Array.from({length:t}).map((e,t)=>{let c=t+1;return(0,l.jsx)(`button`,{type:`button`,disabled:r,className:n(`transition-transform focus:outline-none focus-visible:scale-125`,!r&&`cursor-pointer hover:scale-110 active:scale-95`,c<=h?s:u),onMouseEnter:()=>!r&&p(c),onMouseLeave:()=>!r&&p(null),onClick:()=>!r&&o?.(c),children:(0,l.jsx)(a,{className:n(m[i])})},t)})})},u.displayName=`Rating`})),f,p,m,h,g,_,v,y,b;e((()=>{d(),f=t(o(),1),p=r(),m={title:`UI/Rating`,component:u,tags:[`autodocs`]},h={args:{value:3,max:5,size:`md`}},g=()=>{let[e,t]=(0,f.useState)(2);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,p.jsx)(u,{value:e,onChange:t,size:`lg`}),(0,p.jsxs)(`p`,{className:`text-sm font-medium`,children:[`Your rating: `,e,` stars`]})]})},_={render:()=>(0,p.jsx)(g,{})},v={args:{value:4.5,readonly:!0,size:`sm`}},y={args:{value:4,activeColor:`text-rose-500 fill-rose-500`,inactiveColor:`text-muted fill-muted`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    size: "md"
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RatingStory1Render />
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Interactive`,`ReadOnly`,`CustomColors`]}))();export{y as CustomColors,h as Default,_ as Interactive,v as ReadOnly,b as __namedExportsOrder,m as default};