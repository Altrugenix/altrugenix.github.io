import{n as e}from"./chunk-jRWAZmH_.js";import{A as t,Ht as n,r}from"./iframe-zfMobaDd.js";import{a as i,t as a}from"./src-DjwHjl2X.js";import{l as o,t as s}from"./src-BRbcNIVu.js";var c,l,u,d;e((()=>{s(),a(),r(),c=n(),l={title:`Utilities/VisuallyHidden`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A utility component that visually hides its children while keeping them accessible to screen readers. Crucial for a11y when using icon-only buttons or inputs.`}}}},u={render:()=>(0,c.jsxs)(`div`,{className:`max-w-md space-y-4 p-10`,children:[(0,c.jsx)(`p`,{className:`text-sm`,children:`The button below contains an icon and a visually hidden label for screen readers.`}),(0,c.jsxs)(i,{children:[(0,c.jsx)(t,{className:`mr-2 h-4 w-4`}),(0,c.jsx)(o,{children:`Create new project`}),(0,c.jsx)(`span`,{children:`Add`})]}),(0,c.jsxs)(`div`,{className:`bg-muted/30 mt-8 rounded-lg border p-4`,children:[(0,c.jsx)(`h4`,{className:`mb-2 text-sm font-bold`,children:`Accessibility Check:`}),(0,c.jsxs)(`p`,{className:`text-muted-foreground text-sm`,children:[`A screen reader will announce`,` `,(0,c.jsx)(`strong`,{children:`"Add Create new project"`}),` or`,` `,(0,c.jsx)(`strong`,{children:`"Create new project Add"`}),` depending on the reader, providing essential context that isn't visually present.`]})]})]}),parameters:{docs:{description:{story:`A standard example showing VisuallyHidden providing context to an icon button.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4 p-10">
      <p className="text-sm">
        The button below contains an icon and a visually hidden label for screen
        readers.
      </p>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        <VisuallyHidden>Create new project</VisuallyHidden>
        <span>Add</span>
      </Button>

      <div className="bg-muted/30 mt-8 rounded-lg border p-4">
        <h4 className="mb-2 text-sm font-bold">Accessibility Check:</h4>
        <p className="text-muted-foreground text-sm">
          A screen reader will announce{" "}
          <strong>"Add Create new project"</strong> or{" "}
          <strong>"Create new project Add"</strong> depending on the reader,
          providing essential context that isn't visually present.
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A standard example showing VisuallyHidden providing context to an icon button."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};