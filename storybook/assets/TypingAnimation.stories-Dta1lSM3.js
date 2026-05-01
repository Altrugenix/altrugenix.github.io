import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./src-Cxfa1RFo.js";var r,i,a,o,s;e((()=>{n(),r={title:`Feedback/TypingAnimation`,component:t,parameters:{layout:`centered`,docs:{description:{component:`A simple text typing animation effect. It renders text character by character to simulate a typing effect.`}}},tags:[`autodocs`],argTypes:{text:{description:`The text string to animate.`,table:{category:`Content`}},speed:{control:{type:`number`,min:10,max:200},description:`Speed of typing in milliseconds per character.`,table:{category:`Animation`}},repeat:{control:`boolean`,description:`Whether the animation should loop infinitely.`,table:{category:`Animation`}},className:{description:`Custom CSS classes to style the text.`,table:{category:`Appearance`}}}},i={args:{text:`Building the future of digital experiences 🚀`,speed:80}},a={args:{text:`Altrugenix: The only UI library you'll ever need.`,speed:50,className:`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600`},parameters:{docs:{description:{story:`Typing animation applied to large, gradient-colored text. Perfect for hero sections.`}}}},o={args:{text:`Type... Repeat... Type... Repeat...`,speed:30,repeat:!0},parameters:{docs:{description:{story:`A fast animation that repeats in an infinite loop.`}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Building the future of digital experiences 🚀",
    speed: 80
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Altrugenix: The only UI library you'll ever need.",
    speed: 50,
    className: "text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
  },
  parameters: {
    docs: {
      description: {
        story: "Typing animation applied to large, gradient-colored text. Perfect for hero sections."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Type... Repeat... Type... Repeat...",
    speed: 30,
    repeat: true
  },
  parameters: {
    docs: {
      description: {
        story: "A fast animation that repeats in an infinite loop."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`HeroSection`,`FastRepeating`]}))();export{i as Default,o as FastRepeating,a as HeroSection,s as __namedExportsOrder,r as default};