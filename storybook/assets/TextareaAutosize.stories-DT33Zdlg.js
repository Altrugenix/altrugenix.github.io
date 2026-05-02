import{n as e}from"./chunk-jRWAZmH_.js";import{c as t,t as n}from"./src-BRbcNIVu.js";var r,i,a,o;e((()=>{n(),r={title:`Utilities/TextareaAutosize`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`A textarea component that automatically adjusts its height based on the content entered by the user. Prevents ugly internal scrollbars while typing long messages.`}}},argTypes:{minRows:{control:`number`,description:`Minimum number of rows to display.`,table:{category:`Appearance`}},maxRows:{control:`number`,description:`Maximum number of rows before a scrollbar appears.`,table:{category:`Appearance`}}}},i={args:{placeholder:`Type something long to see me grow vertically...`,minRows:3,className:`w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`},parameters:{docs:{description:{story:`Start typing multiple lines and watch the textarea expand.`}}}},a={args:{defaultValue:`This is a pre-filled textarea.
It has multiple lines.
Watch it adjust its height automatically to fit all this content without showing a scrollbar.`,minRows:2,className:`w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`},parameters:{docs:{description:{story:`Automatically calculates height for pre-filled defaultValue content.`}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something long to see me grow vertically...",
    minRows: 3,
    className: "w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  },
  parameters: {
    docs: {
      description: {
        story: "Start typing multiple lines and watch the textarea expand."
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is a pre-filled textarea.\\nIt has multiple lines.\\nWatch it adjust its height automatically to fit all this content without showing a scrollbar.",
    minRows: 2,
    className: "w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
  },
  parameters: {
    docs: {
      description: {
        story: "Automatically calculates height for pre-filled defaultValue content."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Default`,`WithValue`]}))();export{i as Default,a as WithValue,o as __namedExportsOrder,r as default};