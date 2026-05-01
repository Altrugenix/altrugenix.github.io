import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-coe0kFk0.js";import{r as n,t as r}from"./src-B4YWh67q.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Data Display/Avatar`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A circular user avatar displaying an image with automatic fallback to initials when the image fails to load or is not provided.`}}},argTypes:{src:{description:`Image URL for the avatar.`,table:{category:`Content`}},alt:{description:"Alt text for the image. Also used for fallback initials if `fallback` is not provided.",table:{category:`Content`}},fallback:{description:`Initials or text to display when the image is unavailable.`,table:{category:`Content`}}}},o={args:{src:`https://github.com/shadcn.png`,fallback:`CN`}},s={args:{fallback:`AB`},parameters:{docs:{description:{story:"When no `src` is provided, the avatar falls back to displaying initials."}}}},c={args:{src:`https://broken-url.example/image.png`,fallback:`JD`},parameters:{docs:{description:{story:`When the image URL fails to load, the avatar gracefully falls back to initials.`}}}},l={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,fallback:`SM`,className:`h-8 w-8 text-xs`}),(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,fallback:`MD`}),(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,fallback:`LG`,className:`h-14 w-14 text-lg`}),(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,fallback:`XL`,className:`h-20 w-20 text-xl`})]}),parameters:{docs:{description:{story:`Avatar sizes can be customized via className. The default is 40×40px (h-10 w-10).`}}}},u={render:()=>(0,i.jsxs)(`div`,{className:`flex -space-x-3`,children:[(0,i.jsx)(n,{src:`https://github.com/shadcn.png`,fallback:`CN`,className:`border-background border-2`}),(0,i.jsx)(n,{fallback:`AB`,className:`border-background border-2`}),(0,i.jsx)(n,{fallback:`QR`,className:`border-background border-2`}),(0,i.jsx)(n,{fallback:`JK`,className:`border-background border-2`}),(0,i.jsx)(n,{fallback:`+3`,className:`border-background border-2 text-xs`})]}),parameters:{docs:{description:{story:`Avatars overlapped with negative spacing create a stacked group — common for showing collaborators or team members.`}}}},d={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(n,{fallback:`A`}),(0,i.jsx)(n,{fallback:`JD`}),(0,i.jsx)(n,{alt:`Jane Doe`}),(0,i.jsx)(n,{})]}),parameters:{docs:{description:{story:"Fallback uses the `fallback` prop first, then first 2 chars of `alt`, and finally 'U' as the ultimate default."}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: "AB"
  },
  parameters: {
    docs: {
      description: {
        story: "When no \`src\` is provided, the avatar falls back to displaying initials."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "JD"
  },
  parameters: {
    docs: {
      description: {
        story: "When the image URL fails to load, the avatar gracefully falls back to initials."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar src="https://github.com/shadcn.png" fallback="SM" className="h-8 w-8 text-xs" />
      <Avatar src="https://github.com/shadcn.png" fallback="MD" />
      <Avatar src="https://github.com/shadcn.png" fallback="LG" className="h-14 w-14 text-lg" />
      <Avatar src="https://github.com/shadcn.png" fallback="XL" className="h-20 w-20 text-xl" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Avatar sizes can be customized via className. The default is 40×40px (h-10 w-10)."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-3">
      <Avatar src="https://github.com/shadcn.png" fallback="CN" className="border-background border-2" />
      <Avatar fallback="AB" className="border-background border-2" />
      <Avatar fallback="QR" className="border-background border-2" />
      <Avatar fallback="JK" className="border-background border-2" />
      <Avatar fallback="+3" className="border-background border-2 text-xs" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Avatars overlapped with negative spacing create a stacked group — common for showing collaborators or team members."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar fallback="A" />
      <Avatar fallback="JD" />
      <Avatar alt="Jane Doe" />
      <Avatar />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Fallback uses the \`fallback\` prop first, then first 2 chars of \`alt\`, and finally 'U' as the ultimate default."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`WithImage`,`FallbackOnly`,`BrokenImage`,`Sizes`,`Group`,`FallbackVariations`]}))();export{c as BrokenImage,s as FallbackOnly,d as FallbackVariations,u as Group,l as Sizes,o as WithImage,f as __namedExportsOrder,a as default};