import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ht as n,Lt as r,gn as i,zt as a}from"./iframe-coe0kFk0.js";var o,s,c,l=e((()=>{o=t(i(),1),r(),s=n(),c=o.forwardRef(({className:e,src:t,alt:n,fallback:r,onLoad:i,onError:c,...l},u)=>{let[d,f]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!0);return(0,s.jsx)(`img`,{ref:u,src:d?r:t,alt:n,className:a(`object-cover transition-opacity duration-300`,p&&`opacity-0`,e),onLoad:e=>{m(!1),i?.(e)},onError:e=>{f(!0),m(!1),c?.(e)},...l})}),c.displayName=`Image`,c.__docgenInfo={description:``,methods:[],displayName:`Image`,props:{fallback:{required:!1,tsType:{name:`string`},description:``}}}})),u=e((()=>{l()})),d,f,p,m,h;e((()=>{u(),d={title:`Data Display/Image`,component:c,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"An enhanced `<img>` element with loading fade-in animation and automatic fallback when the source fails to load."}}},argTypes:{src:{description:`Image source URL.`,table:{category:`Content`}},alt:{description:`Alternative text for accessibility.`,table:{category:`Content`}},fallback:{description:`Fallback image URL used when the primary source fails.`,table:{category:`Content`}}}},f={args:{src:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop`,alt:`Mountain landscape`,className:`w-80 rounded-lg`}},p={args:{src:`https://broken-url.example/image.png`,fallback:`https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=300&fit=crop`,alt:`Fallback demo`,className:`w-80 rounded-lg`},parameters:{docs:{description:{story:"When the primary `src` fails to load, the `fallback` image is displayed instead."}}}},m={args:{src:`https://github.com/shadcn.png`,alt:`User avatar`,className:`h-24 w-24 rounded-full`},parameters:{docs:{description:{story:"An image styled as a circular avatar with `rounded-full`."}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    alt: "Mountain landscape",
    className: "w-80 rounded-lg"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=300&fit=crop",
    alt: "Fallback demo",
    className: "w-80 rounded-lg"
  },
  parameters: {
    docs: {
      description: {
        story: "When the primary \`src\` fails to load, the \`fallback\` image is displayed instead."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://github.com/shadcn.png",
    alt: "User avatar",
    className: "h-24 w-24 rounded-full"
  },
  parameters: {
    docs: {
      description: {
        story: "An image styled as a circular avatar with \`rounded-full\`."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithFallback`,`Rounded`]}))();export{f as Default,m as Rounded,p as WithFallback,h as __namedExportsOrder,d as default};