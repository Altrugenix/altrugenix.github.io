import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{F as n,L as r,R as i,c as a,i as o,pt as s,r as c,s as l,z as u}from"./iframe-DM0JAH7r.js";import{t as d}from"./react-dom-D6bCX4p-.js";import{t as f}from"./Input-qB9aiWcX.js";import{r as p,t as m}from"./button-CDpz39Wf.js";import{t as h}from"./input-DqqAs80r.js";var g,_,v,y,b,x=e((()=>{g=t(s(),1),_=t(d(),1),n(),l(),o(),m(),v=u(),y={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-xl`,full:`max-w-[95vw] h-[95vh]`},b=({isOpen:e,onClose:t,title:n,description:o,children:s,footer:l,size:u=`md`,className:d,closeOnOverlayClick:f=!0,showCloseButton:m=!0})=>{let h=(0,g.useCallback)(n=>{n.key===`Escape`&&e&&t()},[t,e]);(0,g.useEffect)(()=>(e?(document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,h)):document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`,window.removeEventListener(`keydown`,h)}),[e,h]);let b=(0,v.jsx)(i,{children:e&&(0,v.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,v.jsx)(r.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed inset-0 bg-black/40 backdrop-blur-sm`,onClick:f?t:void 0}),(0,v.jsxs)(r.div,{initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:10},role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,"aria-describedby":o?`modal-description`:void 0,className:c(`glass relative flex w-full flex-col overflow-hidden rounded-xl bg-background p-6 shadow-2xl`,y[u],d),children:[(0,v.jsxs)(`div`,{className:`mb-4 flex items-start justify-between`,children:[(0,v.jsxs)(`div`,{className:`space-y-1`,children:[n&&(0,v.jsx)(`h2`,{id:`modal-title`,className:`text-xl font-semibold tracking-tight text-foreground`,children:n}),o&&(0,v.jsx)(`p`,{id:`modal-description`,className:`text-sm text-muted-foreground`,children:o})]}),m&&(0,v.jsx)(p,{variant:`ghost`,size:`icon`,className:`-mr-1 -mt-1 h-8 w-8 rounded-full`,onClick:t,"aria-label":`Close modal`,children:(0,v.jsx)(a,{className:`h-4 w-4`})})]}),(0,v.jsx)(`div`,{className:`flex-1 overflow-y-auto`,children:s}),l&&(0,v.jsx)(`div`,{className:`mt-6 flex items-center justify-end space-x-2`,children:l})]})]})});return typeof document>`u`?null:_.createPortal(b,document.body)},b.displayName=`Modal`})),S=e((()=>{x()})),C,w,T,E,D,O;e((()=>{S(),m(),h(),C=t(s(),1),w=u(),T={title:`UI/Modal`,component:b,tags:[`autodocs`]},E={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,w.jsx)(p,{onClick:()=>t(!0),children:`Open Modal`}),(0,w.jsx)(b,{isOpen:e,onClose:()=>t(!1),title:`Delete Account`,description:`Are you sure you want to delete your account? This action cannot be undone.`,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{variant:`ghost`,onClick:()=>t(!1),children:`Cancel`}),(0,w.jsx)(p,{variant:`destructive`,onClick:()=>t(!1),children:`Delete Permanently`})]}),children:(0,w.jsxs)(`div`,{className:`space-y-4 py-4`,children:[(0,w.jsx)(`p`,{className:`text-sm text-foreground/80`,children:`Please enter your password to confirm account deletion.`}),(0,w.jsx)(f,{label:`Password`,type:`password`})]})})]})}},D={render:()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,w.jsx)(p,{variant:`outline`,onClick:()=>t(!0),children:`Open XL Modal`}),(0,w.jsx)(b,{isOpen:e,onClose:()=>t(!1),title:`Expanded View`,size:`xl`,footer:(0,w.jsx)(p,{onClick:()=>t(!1),children:`Close`}),children:(0,w.jsx)(`div`,{className:`mt-4 flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed p-10 text-muted-foreground`,children:`Large content area`})})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex flex-col items-start gap-4">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Delete Account" description="Are you sure you want to delete your account? This action cannot be undone." footer={<>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => setIsOpen(false)}>
                Delete Permanently
              </Button>
            </>}>
          <div className="space-y-4 py-4">
            <p className="text-sm text-foreground/80">
              Please enter your password to confirm account deletion.
            </p>
            <Input label="Password" type="password" />
          </div>
        </Modal>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex flex-col items-start gap-4">
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Open XL Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Expanded View" size="xl" footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          <div className="mt-4 flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed p-10 text-muted-foreground">
            Large content area
          </div>
        </Modal>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`CustomSize`]}))();export{D as CustomSize,E as Default,O as __namedExportsOrder,T as default};