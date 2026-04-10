import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ot as n,Pt as r,Tt as i,b as a,cn as o,h as s,i as c,kt as l,r as u,s as d,st as f,z as p}from"./iframe-CAjx62e_.js";import{n as m,t as h}from"./dist-CWM4ALlg.js";import{s as g,t as _}from"./Card-CXyyfjxz.js";var v,y,b=e((()=>{o(),v=r(),y=({data:e,width:t=100,height:n=40,color:r=`currentColor`,strokeWidth:i=2,className:a})=>{if(!e||e.length<2)return null;let o=Math.min(...e),s=Math.max(...e)-o||1,c=e.map((r,i)=>`${i/(e.length-1)*t},${n-(r-o)/s*n}`);return(0,v.jsx)(`svg`,{viewBox:`0 0 ${t} ${n}`,width:t,height:n,preserveAspectRatio:`none`,className:a,children:(0,v.jsx)(`path`,{d:`M ${c.join(` L `)}`,fill:`none`,stroke:r,strokeWidth:i,strokeLinecap:`round`,strokeLinejoin:`round`})})},y.__docgenInfo={description:``,methods:[],displayName:`Sparkline`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`40`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"currentColor"`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),x,S=e((()=>{m(),x=h(`relative overflow-hidden transition-all duration-300`,{variants:{variant:{default:`bg-card text-card-foreground`,glass:`glass`,outline:`border border-border bg-transparent`,primary:`bg-primary text-primary-foreground`},size:{default:`p-6`,sm:`p-4`,lg:`p-8`},status:{neutral:``,success:`border-l-4 border-l-success`,warning:`border-l-4 border-l-warning`,destructive:`border-l-4 border-l-destructive`}},defaultVariants:{variant:`default`,size:`default`,status:`neutral`}})})),C,w,T,E=e((()=>{C=t(o(),1),c(),g(),b(),S(),d(),w=r(),T=C.forwardRef(({className:e,variant:t,size:r,status:a,title:o,value:s,description:c,trend:l,icon:d,chartData:f,chartColor:m,...h},g)=>{let v=l?.direction===`up`?`text-success`:l?.direction===`down`?`text-destructive`:`text-muted-foreground`,b=l?.direction===`up`?i:l?.direction===`down`?n:p;return(0,w.jsxs)(_,{ref:g,className:u(x({variant:t,size:r,status:a,className:e})),...h,children:[(0,w.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,w.jsxs)(`div`,{className:`space-y-1`,children:[(0,w.jsx)(`p`,{className:`text-sm font-medium text-muted-foreground`,children:o}),(0,w.jsx)(`h3`,{className:`text-2xl font-bold tracking-tight`,children:s})]}),d&&(0,w.jsx)(`div`,{className:`rounded-full bg-muted/50 p-2 text-muted-foreground transition-colors group-hover:bg-muted group-hover:text-foreground`,children:d})]}),(l||f)&&(0,w.jsxs)(`div`,{className:`mt-4 flex items-end justify-between gap-4`,children:[(0,w.jsxs)(`div`,{className:`space-y-1.5`,children:[l&&(0,w.jsxs)(`div`,{className:u(`flex items-center text-xs font-semibold`,v),children:[(0,w.jsx)(b,{className:`mr-1 h-3.5 w-3.5`}),(0,w.jsx)(`span`,{children:l.value}),l.label&&(0,w.jsx)(`span`,{className:`ml-1 font-normal text-muted-foreground`,children:l.label})]}),c&&(0,w.jsx)(`p`,{className:`line-clamp-1 text-xs text-muted-foreground`,children:c})]}),f&&(0,w.jsx)(`div`,{className:`max-w-[120px] flex-1`,children:(0,w.jsx)(y,{data:f,color:m||(l?.direction===`up`?`hsl(var(--success))`:l?.direction===`down`?`hsl(var(--destructive))`:`hsl(var(--primary))`),strokeWidth:2,className:`w-full opacity-80`})})]})]})}),T.displayName=`MetricCard`,T.__docgenInfo={description:``,methods:[],displayName:`MetricCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},description:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: number | string;
  direction: "up" | "down" | "neutral";
  label?: string;
}`,signature:{properties:[{key:`value`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}},{key:`direction`,value:{name:`union`,raw:`"up" | "down" | "neutral"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"neutral"`}],required:!0}},{key:`label`,value:{name:`string`,required:!1}}]}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},chartData:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},chartColor:{required:!1,tsType:{name:`string`},description:``}},composes:[`MetricCardStylesProps`]}})),D=e((()=>{E(),S(),b()})),O,k,A,j,M,N,P;e((()=>{D(),d(),O=r(),k={title:`UI/MetricCard`,component:T,tags:[`autodocs`],decorators:[e=>(0,O.jsx)(`div`,{className:`max-w-[350px] bg-muted/20 p-6`,children:(0,O.jsx)(e,{})})]},A={args:{title:`Total Revenue`,value:`$45,231.89`,description:`+20.1% from last month`,icon:(0,O.jsx)(f,{className:`h-4 w-4`}),trend:{value:`+20.1%`,direction:`up`,label:`vs last month`}}},j={args:{title:`Active Users`,value:`2,350`,description:`Average 120 per hour`,icon:(0,O.jsx)(s,{className:`h-4 w-4`}),trend:{value:`+12.5%`,direction:`up`},chartData:[20,45,28,80,99,43,65,50,85,100]}},M={args:{title:`Churn Rate`,value:`2.4%`,icon:(0,O.jsx)(l,{className:`h-4 w-4`}),trend:{value:`-0.5%`,direction:`down`,label:`reduction`},chartData:[45,40,42,38,35,30,32,28,25,24],chartColor:`hsl(var(--destructive))`}},N={args:{variant:`glass`,title:`Server Load`,value:`42%`,icon:(0,O.jsx)(a,{className:`h-4 w-4`}),trend:{value:`Stable`,direction:`neutral`},chartData:[40,42,41,43,42,42,41,42,43,42]}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithSparkline`,`NegativeTrend`,`Glass`]}))();export{A as Default,N as Glass,M as NegativeTrend,j as WithSparkline,P as __namedExportsOrder,k as default};