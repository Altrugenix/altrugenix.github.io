import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Dt as n,F as r,Ht as i,Lt as a,Mt as o,f as s,gn as c,jt as l,ot as u,r as d,zt as f}from"./iframe-coe0kFk0.js";import{n as p,t as m}from"./dist-C2GwZUMa.js";import{n as h,t as g}from"./src-O5Ec0FJG.js";var _,v,y=e((()=>{c(),_=i(),v=({data:e,width:t=100,height:n=40,color:r=`currentColor`,strokeWidth:i=2,className:a})=>{if(!e||e.length<2)return null;let o=Math.min(...e),s=Math.max(...e)-o||1,c=e.map((r,i)=>`${i/(e.length-1)*t},${n-(r-o)/s*n}`);return(0,_.jsx)(`svg`,{viewBox:`0 0 ${t} ${n}`,width:t,height:n,preserveAspectRatio:`none`,className:a,children:(0,_.jsx)(`path`,{d:`M ${c.join(` L `)}`,fill:`none`,stroke:r,strokeWidth:i,strokeLinecap:`round`,strokeLinejoin:`round`})})},v.__docgenInfo={description:``,methods:[],displayName:`Sparkline`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`40`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"currentColor"`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x=e((()=>{p(),b=m(`relative overflow-hidden transition-all duration-300`,{variants:{variant:{default:`bg-card text-card-foreground`,glass:`glass`,outline:`border border-border bg-transparent`,primary:`bg-primary text-primary-foreground`},size:{default:`p-6`,sm:`p-4`,lg:`p-8`},status:{neutral:``,success:`border-l-4 border-l-success`,warning:`border-l-4 border-l-warning`,destructive:`border-l-4 border-l-destructive`}},defaultVariants:{variant:`default`,size:`default`,status:`neutral`}})})),S,C,w,T=e((()=>{S=t(c(),1),a(),g(),y(),x(),d(),C=i(),w=S.forwardRef(({className:e,variant:t,size:i,status:a,title:o,value:s,description:c,trend:u,icon:d,chartData:p,chartColor:m,...g},_)=>{let y=u?.direction===`up`?`text-success`:u?.direction===`down`?`text-destructive`:`text-muted-foreground`,x=u?.direction===`up`?n:u?.direction===`down`?l:r;return(0,C.jsxs)(h,{ref:_,className:f(b({variant:t,size:i,status:a,className:e})),...g,children:[(0,C.jsxs)(`div`,{className:`flex items-start justify-between`,children:[(0,C.jsxs)(`div`,{className:`space-y-1`,children:[(0,C.jsx)(`p`,{className:`text-muted-foreground text-sm font-medium`,children:o}),(0,C.jsx)(`h3`,{className:`text-2xl font-bold tracking-tight`,children:s})]}),d&&(0,C.jsx)(`div`,{className:`bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground rounded-full p-2 transition-colors`,children:d})]}),(u||c||p)&&(0,C.jsxs)(`div`,{className:`mt-4 flex items-end justify-between gap-4`,children:[(0,C.jsxs)(`div`,{className:`space-y-1.5`,children:[u&&(0,C.jsxs)(`div`,{className:f(`flex items-center text-xs font-semibold`,y),children:[(0,C.jsx)(x,{className:`mr-1 h-3.5 w-3.5`}),(0,C.jsx)(`span`,{children:u.value}),u.label&&(0,C.jsx)(`span`,{className:`text-muted-foreground ml-1 font-normal`,children:u.label})]}),c&&(0,C.jsx)(`p`,{className:`text-muted-foreground line-clamp-1 text-xs`,children:c})]}),p&&(0,C.jsx)(`div`,{className:`max-w-[120px] flex-1`,children:(0,C.jsx)(v,{data:p,color:m||(u?.direction===`up`?`hsl(var(--success))`:u?.direction===`down`?`hsl(var(--destructive))`:`hsl(var(--primary))`),strokeWidth:2,className:`w-full opacity-80`})})]})]})}),w.displayName=`MetricCard`,w.__docgenInfo={description:``,methods:[],displayName:`MetricCard`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},description:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  value: number | string;
  direction: "up" | "down" | "neutral";
  label?: string;
}`,signature:{properties:[{key:`value`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}},{key:`direction`,value:{name:`union`,raw:`"up" | "down" | "neutral"`,elements:[{name:`literal`,value:`"up"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"neutral"`}],required:!0}},{key:`label`,value:{name:`string`,required:!1}}]}},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},chartData:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},chartColor:{required:!1,tsType:{name:`string`},description:``}},composes:[`MetricCardStylesProps`]}})),E=e((()=>{T(),x(),y()})),D,O,k,A,j,M,N;e((()=>{E(),d(),D=i(),O={title:`Data Display/MetricCard`,component:w,tags:[`autodocs`],parameters:{docs:{description:{component:`A specialized card for dashboard metrics. Displays a title, primary value, icon, and optional trend/change indicator.`}}},argTypes:{title:{description:`Metric label (e.g. 'Total Revenue').`,table:{category:`Content`}},value:{description:`Primary numeric or formatted value.`,table:{category:`Content`}},trend:{description:`Change indicator value (e.g. '+12.5%').`,table:{category:`Content`}},icon:{description:`Top-right icon representing the metric.`,table:{category:`Content`}}}},k={args:{title:`Total Users`,value:`14,231`}},A={args:{title:`Monthly Revenue`,value:`$45,231.89`,trend:{value:`+20.1%`,direction:`up`,label:`from last month`},icon:(0,D.jsx)(u,{className:`text-muted-foreground h-4 w-4`})}},j={args:{title:`Bounce Rate`,value:`42.3%`,trend:{value:`-4.5%`,direction:`down`,label:`from last week`},icon:(0,D.jsx)(o,{className:`text-muted-foreground h-4 w-4`})}},M={render:()=>(0,D.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[(0,D.jsx)(w,{title:`Total Active Users`,value:`2,420`,trend:{value:`+4.1%`,direction:`up`},icon:(0,D.jsx)(s,{className:`text-muted-foreground h-4 w-4`})}),(0,D.jsx)(w,{title:`Avg. Session Duration`,value:`4m 12s`,trend:{value:`-1.2%`,direction:`down`},icon:(0,D.jsx)(o,{className:`text-muted-foreground h-4 w-4`})}),(0,D.jsx)(w,{title:`Server Uptime`,value:`99.9%`,trend:{value:`Stable`,direction:`neutral`}})]}),parameters:{docs:{description:{story:`A responsive grid of metric cards — the core building block of admin dashboards.`}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Users",
    value: "14,231"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Revenue",
    value: "$45,231.89",
    trend: {
      value: "+20.1%",
      direction: "up",
      label: "from last month"
    },
    icon: <DollarSign className="text-muted-foreground h-4 w-4" />
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Bounce Rate",
    value: "42.3%",
    trend: {
      value: "-4.5%",
      direction: "down",
      label: "from last week"
    },
    icon: <Activity className="text-muted-foreground h-4 w-4" />
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <MetricCard title="Total Active Users" value="2,420" trend={{
      value: "+4.1%",
      direction: "up"
    }} icon={<Users className="text-muted-foreground h-4 w-4" />} />
      <MetricCard title="Avg. Session Duration" value="4m 12s" trend={{
      value: "-1.2%",
      direction: "down"
    }} icon={<Activity className="text-muted-foreground h-4 w-4" />} />
      <MetricCard title="Server Uptime" value="99.9%" trend={{
      value: "Stable",
      direction: "neutral"
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A responsive grid of metric cards — the core building block of admin dashboards."
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithTrendUp`,`WithTrendDown`,`DashboardGrid`]}))();export{M as DashboardGrid,k as Default,j as WithTrendDown,A as WithTrendUp,N as __namedExportsOrder,O as default};