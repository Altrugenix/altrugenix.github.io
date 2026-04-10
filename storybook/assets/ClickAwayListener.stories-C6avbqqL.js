import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Pt as n,cn as r}from"./iframe-CAjx62e_.js";import{a as i,t as a}from"./button-WWkxm_3b.js";import{n as o,t as s}from"./refs-CwIGsfPC.js";var c,l,u=e((()=>{c=t(r(),1),s(),l=({children:e,onClickAway:t,active:n=!0})=>{let r=(0,c.useRef)(null),i=o(r,e.ref);return(0,c.useEffect)(()=>{if(!n)return;let e=e=>{r.current&&!r.current.contains(e.target)&&t(e)};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e)}},[t,n]),c.cloneElement(e,{ref:i})},l.displayName=`ClickAwayListener`,l.__docgenInfo={description:`A utility component to detect and handle click events outside its child element.`,methods:[],displayName:`ClickAwayListener`,props:{children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:`The child element to wrap`},onClickAway:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent | TouchEvent) => void`,signature:{arguments:[{type:{name:`union`,raw:`MouseEvent | TouchEvent`,elements:[{name:`MouseEvent`},{name:`TouchEvent`}]},name:`event`}],return:{name:`void`}}},description:`Callback triggered when a click occurs outside the child`},active:{required:!1,tsType:{name:`boolean`},description:`Whether to listen for clicks`,defaultValue:{value:`true`,computed:!1}}}}})),d,f,p,m,h;e((()=>{u(),d=t(r(),1),a(),f=n(),p={title:`Utilities/ClickAwayListener`,component:l,tags:[`autodocs`]},m={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-4 py-20`,children:[(0,f.jsx)(l,{onClickAway:()=>t(!1),children:(0,f.jsxs)(`div`,{className:`relative`,children:[(0,f.jsx)(i,{onClick:()=>t(!e),children:`Toggle Dropdown-like UI`}),e&&(0,f.jsxs)(`div`,{className:`absolute top-full z-10 mt-2 w-64 rounded-lg border bg-background p-4 shadow-xl`,children:[(0,f.jsx)(`p`,{className:`text-sm font-medium`,children:`Click outside of me to close!`}),(0,f.jsx)(i,{size:`sm`,variant:`outline`,className:`mt-2 w-full`,children:`Inside Button`})]})]})}),!e&&(0,f.jsx)(`p`,{className:`text-sm italic text-muted-foreground`,children:`Dropdown is closed.`})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4 py-20">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="relative">
            <Button onClick={() => setOpen(!open)}>
              Toggle Dropdown-like UI
            </Button>

            {open && <div className="absolute top-full z-10 mt-2 w-64 rounded-lg border bg-background p-4 shadow-xl">
                <p className="text-sm font-medium">
                  Click outside of me to close!
                </p>
                <Button size="sm" variant="outline" className="mt-2 w-full">
                  Inside Button
                </Button>
              </div>}
          </div>
        </ClickAwayListener>

        {!open && <p className="text-sm italic text-muted-foreground">
            Dropdown is closed.
          </p>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};