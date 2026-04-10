import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r}from"./iframe-CAjx62e_.js";import{a as i,t as a}from"./button-WWkxm_3b.js";import{t as o}from"./Input-BMgjnZAM.js";import{n as s,t as c}from"./refs-CwIGsfPC.js";import{t as l}from"./input-C0FTRNRc.js";import{n as u,t as d}from"./sheet-CHwPg5dg.js";var f,p,m=e((()=>{f=t(r(),1),c(),p=({children:e,active:t=!0})=>{let n=(0,f.useRef)(null),r=s(n,e.ref);return(0,f.useEffect)(()=>{if(!t)return;let e=n.current;if(!e)return;let r=e.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`);if(r.length===0)return;let i=r[0],a=r[r.length-1],o=e=>{e.key===`Tab`&&(e.shiftKey?document.activeElement===i&&(e.preventDefault(),a.focus()):document.activeElement===a&&(e.preventDefault(),i.focus()))};return document.addEventListener(`keydown`,o),i.focus(),()=>{document.removeEventListener(`keydown`,o)}},[t]),f.cloneElement(e,{ref:r})},p.displayName=`FocusTrap`,p.__docgenInfo={description:`A critical accessibility component that traps focus within a specific container (e.g., inside a Modal or Drawer).`,methods:[],displayName:`FocusTrap`,props:{children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:`The children to trap focus within`},active:{required:!1,tsType:{name:`boolean`},description:`Whether the trap is active`,defaultValue:{value:`true`,computed:!1}}}}})),h,g,_,v,y;e((()=>{m(),h=t(r(),1),a(),d(),l(),g=n(),_={title:`Utilities/FocusTrap`,component:p,tags:[`autodocs`]},v={render:()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(`div`,{className:`space-y-4 p-10`,children:[(0,g.jsx)(i,{onClick:()=>t(!e),children:e?`Deactivate Trap`:`Activate Focus Trap`}),(0,g.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e?`Focus is now trapped! Try tabbing through the elements in the sheet below.`:`Focus can move freely.`}),(0,g.jsx)(p,{active:e,children:(0,g.jsxs)(u,{className:`max-w-sm space-y-4 p-6`,children:[(0,g.jsx)(`h3`,{className:`font-bold`,children:`Trapped Content`}),(0,g.jsx)(o,{placeholder:`First focusable`}),(0,g.jsx)(o,{placeholder:`Second focusable`}),(0,g.jsxs)(`div`,{className:`flex gap-2`,children:[(0,g.jsx)(i,{size:`sm`,children:`Submit`}),(0,g.jsx)(i,{size:`sm`,variant:`outline`,onClick:()=>t(!1),children:`Cancel`})]})]})}),(0,g.jsx)(`div`,{className:`mt-10`,children:(0,g.jsx)(i,{variant:`ghost`,children:`I am outside the trap`})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(false);
    return <div className="space-y-4 p-10">
        <Button onClick={() => setActive(!active)}>
          {active ? "Deactivate Trap" : "Activate Focus Trap"}
        </Button>

        <p className="text-sm text-muted-foreground">
          {active ? "Focus is now trapped! Try tabbing through the elements in the sheet below." : "Focus can move freely."}
        </p>

        <FocusTrap active={active}>
          <Sheet className="max-w-sm space-y-4 p-6">
            <h3 className="font-bold">Trapped Content</h3>
            <Input placeholder="First focusable" />
            <Input placeholder="Second focusable" />
            <div className="flex gap-2">
              <Button size="sm">Submit</Button>
              <Button size="sm" variant="outline" onClick={() => setActive(false)}>
                Cancel
              </Button>
            </div>
          </Sheet>
        </FocusTrap>

        <div className="mt-10">
          <Button variant="ghost">I am outside the trap</Button>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]}))();export{v as Default,y as __namedExportsOrder,_ as default};