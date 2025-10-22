import{R as y,j as p}from"./iframe-Dz1tcGmB.js";import{I as x}from"./Container-CE2_Zbv5.js";import{a as s,w as i}from"./react.esm-Dv1yLAD_.js";import{T,a as I}from"./text-EYRO6bwT.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-BpBhqnZj.js";import"./index-DPssJQNt.js";import"./index-CMlGnRm5.js";import"./client-DWZ-wooc.js";import"./assert-BI051aL8.js";const{expect:n,userEvent:c,within:d}=__STORYBOOK_MODULE_TEST__,u=async e=>{const t=await d(e).findByRole("textbox");if(await n(t).toBeTruthy(),await n(t).toBeInTheDocument(),n(t.tagName.toLowerCase()).toBe("input"),n(t).toBeInstanceOf(HTMLInputElement),!(t instanceof HTMLInputElement))throw new Error("Input is not an HTMLInputElement");return t},l=async e=>{const t=await u(e),a=await s(()=>c.setup());return await s(async()=>a.click(t)),await i(async()=>{n(t).toHaveFocus()}),t},g=async(e,t)=>{const a=await l(e);return await s(async()=>c.keyboard(t)),await i(async()=>{n(a.value).toBe(t)}),a},E=async(e,t,a)=>{await s(async()=>{await c.pointer([{target:e,offset:t,keys:"[MouseLeft>]"},{offset:a},{keys:"[/MouseLeft]"}])}),await i(async()=>{const r=document.getSelection()?.toString();n(r).toBe(e.value.slice(t,a))})},f=async(e,t)=>(n(document.getSelection()).toBeTruthy(),await s(async()=>{await c.keyboard(t)}),await i(async()=>{n(e.value.includes(t)).toBe(!0)}),e),S=e=>{const{startingText:t,...a}=e,[r,w]=y.useState(new T(t??""));return p.jsx(x,{children:p.jsx(I,{...a,value:r,onChange:(h,m)=>w(m)})})},F={title:"components/HID/Inputs/Text Editing",component:S,args:{startingText:""}},o={args:{},play:async({canvasElement:e,step:t})=>{await t("Select the Text Input",async()=>{await l(e)}),await t("Type some values",async()=>{await g(e,"Hello, World!")});const a=await u(e);await t("Select Text",async()=>{await E(a,1,10)}),await t("Replace selected text with new text",async()=>{await f(a,"drlow")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      await selectTextInInput(inputElement, 1, 10);
    });
    await step('Replace selected text with new text', async () => {
      await interactionReplaceText(inputElement, 'drlow');
    });
  }
}`,...o.parameters?.docs?.source}}};const b=["SelectTextInput"];export{o as SelectTextInput,b as __namedExportsOrder,F as default};
