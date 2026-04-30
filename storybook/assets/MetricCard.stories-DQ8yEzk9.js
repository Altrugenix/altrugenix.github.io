import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{At as n,F as r,Ft as i,Mt as a,Tt as o,d as s,g as c,ln as l,r as u,rt as d,wt as f,xt as p}from"./iframe-BnAwTMlV.js";import{n as m,t as h}from"./dist-CTrRvc0e.js";import{r as g,t as _}from"./altrugenix-card-BDcrdmlc.js";var v,y,b,x,S,C=e((()=>{v=t(l(),1),a(),g(),y=i(),m(),u(),b=({data:e,width:t=100,height:n=40,color:r=`currentColor`,strokeWidth:i=2,className:a})=>{if(!e||e.length<2)return null;let o=Math.min(...e),s=Math.max(...e)-o||1,c=e.map((r,i)=>`${i/(e.length-1)*t},${n-(r-o)/s*n}`);return(0,y.jsx)(`svg`,{viewBox:`0 0 ${t} ${n}`,width:t,height:n,preserveAspectRatio:`none`,className:a,children:(0,y.jsx)(`path`,{d:`M ${c.join(` L `)}`,fill:`none`,stroke:r,strokeWidth:i,strokeLinecap:`round`,strokeLinejoin:`round`})})},x=h(`relative overflow-hidden transition-all duration-300`,{variants:{variant:{default:`bg-card text-card-foreground`,glass:`glass`,outline:`border border-border bg-transparent`,primary:`bg-primary text-primary-foreground`},size:{default:`p-6`,sm:`p-4`,lg:`p-8`},status:{neutral:``,success:`border-l-4 border-l-success`,warning:`border-l-4 border-l-warning`,destructive:`border-l-4 border-l-destructive`}},defaultVariants:{variant:`default`,size:`default`,status:`neutral`}}),S=v.forwardRef(({className:e,variant:t,size:i,status:a,title:o,value:s,description:c,trend:l,icon:u,chartData:d,chartColor:m,...h},g)=>{let v=l?.direction===`up`?`text-success`:l?.direction===`down`?`text-destructive`:`text-muted-foreground`,S=l?.direction===`up`?p:l?.direction===`down`?f:r;return(0,y.jsxs)(_,{ref:g,className:n(x({variant:t,size:i,status:a,className:e})),...h,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,y.jsxs)(`div`,{className:`space-y-1`,children:[(0,y.jsx)(`p`,{className:`text-muted-foreground text-sm font-medium`,children:o}),(0,y.jsx)(`h3`,{className:`text-2xl font-bold tracking-tight`,children:s})]}),u&&(0,y.jsx)(`div`,{className:`bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground rounded-full p-2 transition-colors`,children:u})]}),(l||c||d)&&(0,y.jsxs)(`div`,{className:`mt-4 flex items-end justify-between gap-4`,children:[(0,y.jsxs)(`div`,{className:`space-y-1.5`,children:[l&&(0,y.jsxs)(`div`,{className:n(`flex items-center text-xs font-semibold`,v),children:[(0,y.jsx)(S,{className:`mr-1 h-3.5 w-3.5`}),(0,y.jsx)(`span`,{children:l.value}),l.label&&(0,y.jsx)(`span`,{className:`text-muted-foreground ml-1 font-normal`,children:l.label})]}),c&&(0,y.jsx)(`p`,{className:`text-muted-foreground line-clamp-1 text-xs`,children:c})]}),d&&(0,y.jsx)(`div`,{className:`max-w-[120px] flex-1`,children:(0,y.jsx)(b,{data:d,color:m||(l?.direction===`up`?`hsl(var(--success))`:l?.direction===`down`?`hsl(var(--destructive))`:`hsl(var(--primary))`),strokeWidth:2,className:`w-full opacity-80`})})]})]})}),S.displayName=`MetricCard`,S.__docgenInfo={description:``,methods:[],displayName:`MetricCard`}})),w,T,E,D,O,k,A;e((()=>{C(),u(),w=i(),T={title:`UI/MetricCard`,component:S,tags:[`autodocs`],decorators:[e=>(0,w.jsx)(`div`,{className:`bg-muted/20 max-w-[350px] p-6`,children:(0,w.jsx)(e,{})})]},E={args:{title:`Total Revenue`,value:`$45,231.89`,description:`+20.1% from last month`,icon:(0,w.jsx)(d,{className:`h-4 w-4`}),trend:{value:`+20.1%`,direction:`up`,label:`vs last month`}}},D={args:{title:`Active Users`,value:`2,350`,description:`Average 120 per hour`,icon:(0,w.jsx)(s,{className:`h-4 w-4`}),trend:{value:`+12.5%`,direction:`up`},chartData:[20,45,28,80,99,43,65,50,85,100]}},O={args:{title:`Churn Rate`,value:`2.4%`,icon:(0,w.jsx)(o,{className:`h-4 w-4`}),trend:{value:`-0.5%`,direction:`down`,label:`reduction`},chartData:[45,40,42,38,35,30,32,28,25,24],chartColor:`hsl(var(--destructive))`}},k={args:{variant:`glass`,title:`Server Load`,value:`42%`,icon:(0,w.jsx)(c,{className:`h-4 w-4`}),trend:{value:`Stable`,direction:`neutral`},chartData:[40,42,41,43,42,42,41,42,43,42]}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: <DollarSign className="h-4 w-4" />,
    trend: {
      value: "+20.1%",
      direction: "up",
      label: "vs last month"
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: "2,350",
    description: "Average 120 per hour",
    icon: <Users className="h-4 w-4" />,
    trend: {
      value: "+12.5%",
      direction: "up"
    },
    chartData: [20, 45, 28, 80, 99, 43, 65, 50, 85, 100]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Churn Rate",
    value: "2.4%",
    icon: <Activity className="h-4 w-4" />,
    trend: {
      value: "-0.5%",
      direction: "down",
      label: "reduction"
    },
    chartData: [45, 40, 42, 38, 35, 30, 32, 28, 25, 24],
    chartColor: "hsl(var(--destructive))"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "glass",
    title: "Server Load",
    value: "42%",
    icon: <TrendingUp className="h-4 w-4" />,
    trend: {
      value: "Stable",
      direction: "neutral"
    },
    chartData: [40, 42, 41, 43, 42, 42, 41, 42, 43, 42]
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithSparkline`,`NegativeTrend`,`Glass`]}))();export{E as Default,k as Glass,O as NegativeTrend,D as WithSparkline,A as __namedExportsOrder,T as default};