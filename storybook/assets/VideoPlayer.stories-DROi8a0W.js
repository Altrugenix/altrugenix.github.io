import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,Ht as r,Lt as i,N as a,R as o,gn as s,j as c,l,r as u,u as d,zt as f}from"./iframe-zfMobaDd.js";import{n as p,t as m}from"./src-DCvc2bg2.js";var h,g,_,v=e((()=>{h=t(s(),1),u(),i(),m(),g=r(),_=({src:e,poster:t,className:r,autoPlay:i=!1,loop:s=!1})=>{let u=(0,h.useRef)(null),[m,_]=(0,h.useState)(!1),[v,y]=(0,h.useState)(0),[b,x]=(0,h.useState)(0),[S,C]=(0,h.useState)(1),[w,T]=(0,h.useState)(!1),[E,D]=(0,h.useState)(!0),O=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=u.current;if(!e)return;let t=()=>y(e.currentTime),n=()=>x(e.duration);return e.addEventListener(`timeupdate`,t),e.addEventListener(`loadedmetadata`,n),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`loadedmetadata`,n)}},[]);let k=()=>{u.current&&(m?u.current.pause():u.current.play(),_(!m))},A=e=>{if(u.current){let t=e[0];u.current.currentTime=t,y(t)}},j=e=>{let t=e[0];C(t),u.current&&(u.current.volume=t,T(t===0))},M=()=>{if(u.current){let e=!w;T(e),u.current.muted=e}},N=()=>{u.current?.requestFullscreen&&u.current.requestFullscreen()},P=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,g.jsxs)(`div`,{className:f(`group relative aspect-video overflow-hidden rounded-xl bg-black shadow-2xl`,r),onMouseMove:()=>{D(!0),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{m&&D(!1)},3e3)},onMouseLeave:()=>m&&D(!1),children:[(0,g.jsx)(`video`,{ref:u,src:e,poster:t,autoPlay:i,loop:s,className:`h-full w-full cursor-pointer`,onClick:k,playsInline:!0}),!m&&(0,g.jsx)(`div`,{className:`absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40`,onClick:k,children:(0,g.jsx)(`div`,{className:`rounded-full bg-white/20 p-4 backdrop-blur-md transition-transform hover:scale-110 active:scale-95`,children:(0,g.jsx)(c,{className:`h-10 w-10 fill-white text-white`})})}),(0,g.jsxs)(`div`,{className:f(`absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 transition-opacity duration-300`,E?`opacity-100`:`pointer-events-none opacity-0`),children:[(0,g.jsx)(`div`,{className:`mb-4`,children:(0,g.jsx)(p,{value:v,max:b||100,step:.1,onChange:e=>A([parseFloat(e.target.value)]),className:`cursor-pointer`})}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsx)(`button`,{onClick:k,className:`hover:text-primary text-white transition-colors`,children:m?(0,g.jsx)(a,{className:`h-5 w-5 fill-current`}):(0,g.jsx)(c,{className:`h-5 w-5 fill-current`})}),(0,g.jsxs)(`div`,{className:`group/volume flex items-center gap-2`,children:[(0,g.jsx)(`button`,{onClick:M,className:`hover:text-primary text-white transition-colors`,children:w||S===0?(0,g.jsx)(l,{className:`h-5 w-5`}):(0,g.jsx)(d,{className:`h-5 w-5`})}),(0,g.jsx)(`div`,{className:`w-0 overflow-hidden transition-all duration-300 group-hover/volume:w-20`,children:(0,g.jsx)(p,{value:w?0:S,max:1,step:.01,onChange:e=>j([parseFloat(e.target.value)]),className:`w-20`})})]}),(0,g.jsxs)(`div`,{className:`text-xs font-medium text-white/80 tabular-nums`,children:[P(v),` / `,P(b)]})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsx)(`button`,{className:`text-white/80 transition-colors hover:text-white`,children:(0,g.jsx)(n,{className:`h-4 w-4`})}),(0,g.jsx)(`button`,{onClick:N,className:`text-white/80 transition-colors hover:text-white`,children:(0,g.jsx)(o,{className:`h-4 w-4`})})]})]})]})]})},_.__docgenInfo={description:``,methods:[],displayName:`VideoPlayer`,props:{src:{required:!0,tsType:{name:`string`},description:``},poster:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},autoPlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loop:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),y=e((()=>{v()})),b,x,S,C,w,T,E,D,O;e((()=>{y(),b=r(),x={title:`Media/VideoPlayer`,component:_,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-[800px] p-6`,children:(0,b.jsx)(e,{})})],parameters:{docs:{description:{component:`A custom video player with play/pause, seek bar, volume control, mute toggle, and fullscreen support. Features auto-hiding controls and a cinematic play overlay.`}}},argTypes:{src:{description:`Video source URL.`,table:{category:`Media`}},poster:{description:`Thumbnail image displayed before playback starts.`,table:{category:`Media`}},autoPlay:{control:`boolean`,description:`Start playback automatically on mount.`,table:{category:`Behavior`}},loop:{control:`boolean`,description:`Restart playback when the video ends.`,table:{category:`Behavior`}}}},S=`https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4`,C=`https://telecommunication-telemedia-assessment.github.io/AVT-VQDB-UHD-1/thumbs/new/test_1_bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.jpg`,w={args:{src:S,poster:C},parameters:{docs:{description:{story:`A standard video player with poster image. Click the play button or video area to start playback.`}}}},T={args:{src:S,autoPlay:!0,loop:!0},parameters:{docs:{description:{story:`A looping auto-play video — suitable for hero sections and background media.`}}}},E={args:{src:S},parameters:{docs:{description:{story:`A video without a poster image — the first frame of the video is shown instead.`}}}},D={render:()=>(0,b.jsx)(`div`,{className:`max-w-[400px]`,children:(0,b.jsx)(_,{src:S,poster:C})}),parameters:{docs:{description:{story:`A compact-sized player at 400px width — controls adapt to the available space.`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: videoUrl,
    poster: thumbnailUrl
  },
  parameters: {
    docs: {
      description: {
        story: "A standard video player with poster image. Click the play button or video area to start playback."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: videoUrl,
    autoPlay: true,
    loop: true
  },
  parameters: {
    docs: {
      description: {
        story: "A looping auto-play video — suitable for hero sections and background media."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: videoUrl
  },
  parameters: {
    docs: {
      description: {
        story: "A video without a poster image — the first frame of the video is shown instead."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[400px]">
      <VideoPlayer src={videoUrl} poster={thumbnailUrl} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A compact-sized player at 400px width — controls adapt to the available space."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`AutoPlayLoop`,`NoPoster`,`CompactPlayer`]}))();export{T as AutoPlayLoop,D as CompactPlayer,w as Default,E as NoPoster,O as __namedExportsOrder,x as default};