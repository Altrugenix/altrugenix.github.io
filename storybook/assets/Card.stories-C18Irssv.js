import{n as e}from"./chunk-jRWAZmH_.js";import{Ht as t,St as n,_ as r,f as i,r as a}from"./iframe-zfMobaDd.js";import{a as o,t as s}from"./src-DjwHjl2X.js";import{r as c,t as l}from"./src-D0-hy8Gr.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./src-BASEkIBy.js";var _,v,y,b,x,S,C,w;e((()=>{g(),s(),l(),a(),_=t(),v={title:`Data Display/Card`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A versatile container for grouping related content and actions. Composed of Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components.`}}},argTypes:{hover:{control:`boolean`,description:`Enables a hover lift effect on the card.`,table:{category:`Behavior`}},variant:{control:`select`,options:[`default`,`secondary`],description:`Visual variant of the card surface.`,table:{category:`Appearance`}}}},y={render:()=>(0,_.jsxs)(f,{className:`w-[350px]`,children:[(0,_.jsxs)(p,{children:[(0,_.jsx)(h,{children:`Create project`}),(0,_.jsx)(d,{children:`Deploy your new project in one-click.`})]}),(0,_.jsx)(m,{children:(0,_.jsx)(`div`,{className:`flex flex-col space-y-4`,children:(0,_.jsx)(`p`,{className:`text-foreground/80 text-sm`,children:`This is a sample card content area where you can place anything.`})})}),(0,_.jsxs)(u,{className:`flex justify-between`,children:[(0,_.jsx)(o,{variant:`outline`,children:`Cancel`}),(0,_.jsx)(o,{children:`Deploy`})]})]})},b={render:()=>(0,_.jsxs)(f,{hover:!0,className:`w-[350px] cursor-pointer`,children:[(0,_.jsxs)(p,{children:[(0,_.jsx)(h,{children:`Interactive Card`}),(0,_.jsx)(d,{children:`This card has a hover effect.`})]}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{className:`text-sm`,children:`Hover over me to see the lift animation.`})})]}),parameters:{docs:{description:{story:"Cards with the `hover` prop get a subtle lift animation on hover, indicating interactivity."}}}},x={render:()=>(0,_.jsxs)(f,{variant:`secondary`,className:`w-[350px]`,children:[(0,_.jsx)(p,{children:(0,_.jsx)(h,{children:`Secondary Variant`})}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{className:`text-sm`,children:`Subtle background for less emphasis.`})})]})},S={render:()=>(0,_.jsxs)(`div`,{className:`grid grid-cols-3 gap-4`,children:[(0,_.jsxs)(f,{children:[(0,_.jsxs)(p,{className:`flex flex-row items-center justify-between pb-2`,children:[(0,_.jsx)(h,{className:`text-sm font-medium`,children:`Total Users`}),(0,_.jsx)(i,{className:`text-muted-foreground h-4 w-4`})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(`div`,{className:`text-2xl font-bold`,children:`12,489`}),(0,_.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`+20.1% from last month`})]})]}),(0,_.jsxs)(f,{children:[(0,_.jsxs)(p,{className:`flex flex-row items-center justify-between pb-2`,children:[(0,_.jsx)(h,{className:`text-sm font-medium`,children:`Revenue`}),(0,_.jsx)(r,{className:`text-muted-foreground h-4 w-4`})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(`div`,{className:`text-2xl font-bold`,children:`$45,231`}),(0,_.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`+15.3% from last month`})]})]}),(0,_.jsxs)(f,{children:[(0,_.jsxs)(p,{className:`flex flex-row items-center justify-between pb-2`,children:[(0,_.jsx)(h,{className:`text-sm font-medium`,children:`Active Now`}),(0,_.jsx)(n,{className:`text-muted-foreground h-4 w-4`})]}),(0,_.jsxs)(m,{children:[(0,_.jsx)(`div`,{className:`text-2xl font-bold`,children:`573`}),(0,_.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:`+201 since last hour`})]})]})]}),parameters:{docs:{description:{story:`A dashboard-style stats grid using Cards — a common pattern for admin and analytics interfaces.`}}}},C={render:()=>(0,_.jsxs)(f,{className:`w-[350px]`,children:[(0,_.jsxs)(p,{children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,_.jsx)(h,{children:`Feature Preview`}),(0,_.jsx)(c,{variant:`warning`,children:`Beta`})]}),(0,_.jsx)(d,{children:`This feature is currently in beta testing.`})]}),(0,_.jsx)(m,{children:(0,_.jsx)(`p`,{className:`text-foreground/80 text-sm`,children:`Try out the new analytics dashboard with real-time metrics and customizable widgets. Feedback is welcome!`})}),(0,_.jsx)(u,{children:(0,_.jsx)(o,{className:`w-full`,children:`Try it out`})})]}),parameters:{docs:{description:{story:`A card with a badge indicating feature status — useful for beta or preview features.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <p className="text-foreground/80 text-sm">
            This is a sample card content area where you can place anything.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Card hover className="w-[350px] cursor-pointer">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has a hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Hover over me to see the lift animation.</p>
      </CardContent>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Cards with the \`hover\` prop get a subtle lift animation on hover, indicating interactivity."
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="secondary" className="w-[350px]">
      <CardHeader>
        <CardTitle>Secondary Variant</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Subtle background for less emphasis.</p>
      </CardContent>
    </Card>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,489</div>
          <p className="text-muted-foreground text-xs">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <TrendingUp className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-muted-foreground text-xs">
            +15.3% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <p className="text-muted-foreground text-xs">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A dashboard-style stats grid using Cards — a common pattern for admin and analytics interfaces."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Feature Preview</CardTitle>
          <Badge variant="warning">Beta</Badge>
        </div>
        <CardDescription>
          This feature is currently in beta testing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 text-sm">
          Try out the new analytics dashboard with real-time metrics and
          customizable widgets. Feedback is welcome!
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Try it out</Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "A card with a badge indicating feature status — useful for beta or preview features."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithHover`,`Secondary`,`StatsCards`,`WithBadge`]}))();export{y as Default,x as Secondary,S as StatsCards,C as WithBadge,b as WithHover,w as __namedExportsOrder,v as default};