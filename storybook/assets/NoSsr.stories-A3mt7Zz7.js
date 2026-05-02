import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t}from"./iframe-zfMobaDd.js";import{s as n,t as r}from"./src-BRbcNIVu.js";var i,a,o,s;e((()=>{r(),i=t(),a={title:`Utilities/NoSsr`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:"A utility component that prevents its children from being rendered during Server-Side Rendering (SSR). It only mounts the children on the client, useful for components that rely on `window` or `document`."}}},argTypes:{fallback:{description:`Optional content to render on the server while waiting for the client to mount.`,table:{category:`Appearance`}}}},o={args:{children:(0,i.jsx)(`div`,{className:`bg-primary/10 text-primary border-primary/20 rounded-md border p-4 font-medium`,children:`This content is only rendered on the client.`}),fallback:(0,i.jsx)(`div`,{className:`bg-muted text-muted-foreground rounded-md p-4 text-sm`,children:`Loading on the server...`})},parameters:{docs:{description:{story:`Basic usage showing how a fallback can be provided before hydration.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="bg-primary/10 text-primary border-primary/20 rounded-md border p-4 font-medium">
        This content is only rendered on the client.
      </div>,
    fallback: <div className="bg-muted text-muted-foreground rounded-md p-4 text-sm">
        Loading on the server...
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Basic usage showing how a fallback can be provided before hydration."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`]}))();export{o as Default,s as __namedExportsOrder,a as default};