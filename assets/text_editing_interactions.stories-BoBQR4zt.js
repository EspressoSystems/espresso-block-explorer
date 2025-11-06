import{R as y,j as u}from"./iframe-BZt-oGI2.js";import{I as x}from"./Container-C-OS2WVC.js";import{a as o,w as c}from"./react.esm-C_OCskS6.js";import{T,a as I}from"./text-p__4l9Ja.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-PSnDsqAx.js";import"./index-BXl1AAbx.js";import"./index-CpV6ALFd.js";import"./client-Bii3fxNu.js";import"./assert-BI051aL8.js";const{expect:n,userEvent:r,within:d}=__STORYBOOK_MODULE_TEST__,l=async e=>{const t=await d(e).findByRole("textbox");if(await n(t).toBeTruthy(),await n(t).toBeInTheDocument(),n(t.tagName.toLowerCase()).toBe("input"),n(t).toBeInstanceOf(HTMLInputElement),!(t instanceof HTMLInputElement))throw new Error("Input is not an HTMLInputElement");return t},p=async e=>{const t=await l(e),a=await o(()=>r.setup());return await o(async()=>a.click(t)),await c(async()=>{n(t).toHaveFocus()}),t},E=async(e,t)=>{const a=await p(e);return await o(async()=>r.keyboard(t)),await c(async()=>{n(a.value).toBe(t)}),a},g=async(e,t,a)=>{await o(async()=>{const s=await p(e);await r.pointer([{target:s,offset:t,keys:"[MouseLeft>]"},{target:s,offset:a},{target:s,keys:"[/MouseLeft]"}]),await c(async()=>{n(s.selectionStart).toBe(t),n(s.selectionEnd).toBe(a)})})},f=async(e,t)=>(n(document.getSelection()).toBeTruthy(),await o(async()=>{await r.keyboard(t)}),await c(async()=>{n(e.value.includes(t)).toBe(!0)}),e),h=e=>{const{startingText:t,...a}=e,[s,w]=y.useState(new T(t??""));return u.jsx(x,{children:u.jsx(I,{...a,value:s,onChange:(B,m)=>w(m)})})},F={title:"components/HID/Inputs/Text Editing",component:h,args:{startingText:""}},i={args:{},play:async({canvasElement:e,step:t})=>{await t("Select the Text Input",async()=>{await p(e)}),await t("Type some values",async()=>{await E(e,"Hello, World!")});const a=await l(e);await t("Select Text",async()=>{await g(e,1,10)}),await t("Replace selected text with new text",async()=>{await f(a,"drlow")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement,
    step
  }) => {
    await step('Select the Text Input', async () => {
      await interactionFocusInput(canvasElement);
    });
    await step('Type some values', async () => {
      await interactionKeyInInput(canvasElement, 'Hello, World!');
    });
    const inputElement = await getTextInput(canvasElement);
    await step('Select Text', async () => {
      await selectTextInInput(canvasElement, 1, 10);
    });
    await step('Replace selected text with new text', async () => {
      await interactionReplaceText(inputElement, 'drlow');
    });
  }
}`,...i.parameters?.docs?.source}}};const b=["SelectTextInput"];export{i as SelectTextInput,b as __namedExportsOrder,F as default};
