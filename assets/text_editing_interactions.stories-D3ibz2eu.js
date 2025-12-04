import{R as m,j as u}from"./iframe-D8Xp_xun.js";import{I as y}from"./Container-lNpudLo2.js";import{w as i,f as l,a as p}from"./react.esm-BS51rXa5.js";import{T as x,a as E}from"./text-Cl3VGp0V.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-B-N0AM-V.js";import"./index-CyXMnPlm.js";import"./index-CrEpRO5z.js";import"./client-DGN3IcB0.js";import"./assert-B20_bgky.js";const{expect:a,userEvent:T}=__STORYBOOK_MODULE_TEST__,c=async t=>(await i(async()=>{await l(t,"textbox")}),await l(t,"textbox"));async function I(t){if(await a(t).toBeTruthy(),await a(t).toBeInTheDocument(),a(t.tagName.toLowerCase()).toBe("input"),a(t).toBeInstanceOf(HTMLInputElement),!(t instanceof HTMLInputElement))throw new Error("Input is not an HTMLInputElement")}const v=async(t,n)=>{const e=await c(t);return await p(async()=>n.click(e)),await i(async()=>{a(e).toHaveFocus()}),a(e).toHaveFocus(),e},d=async(t,n,e)=>{const s=await c(t);return await n.keyboard(e),await i(async()=>{a(s.value).toBe(e)}),s},f=async(t,n,e,s)=>{await p(async()=>{const o=await c(t);await n.pointer([{target:o,offset:e,keys:"[MouseLeft>]"},{target:o,offset:s},{target:o,keys:"[/MouseLeft]"}]),await i(async()=>{a(o.selectionStart).toBe(e),a(o.selectionEnd).toBe(s)})})},g=async(t,n)=>(a(document.getSelection()).toBeTruthy(),await p(async()=>{await T.keyboard(n)}),await i(async()=>{a(t.value.includes(n)).toBe(!0)}),t),h=t=>{const{startingText:n,...e}=t,[s,o]=m.useState(new x(n??""));return u.jsx(y,{children:u.jsx(E,{...e,value:s,onChange:(B,w)=>o(w)})})},F={title:"components/HID/Inputs/Text Editing",component:h,args:{startingText:""}},r={args:{},play:async({step:t})=>{await t("Wait for the Text Input to be present",async({canvasElement:n})=>{const e=await c(n);I(e)}),await t("Select the Text Input",async({canvasElement:n,userEvent:e})=>{await v(n,e)}),await t("Type some values",async({canvasElement:n,userEvent:e})=>{await d(n,e,"Hello, World!")}),await t("Select Text",async({canvasElement:n,userEvent:e})=>{await f(n,e,1,10)}),await t("Replace selected text with new text",async({canvasElement:n})=>{const e=await c(n);await g(e,"drlow")})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    step
  }) => {
    await step('Wait for the Text Input to be present', async ({
      canvasElement
    }) => {
      const input = await getTextInput(canvasElement);
      performInputChecks(input);
    });
    await step('Select the Text Input', async ({
      canvasElement,
      userEvent
    }) => {
      await interactionFocusInput(canvasElement, userEvent);
    });
    await step('Type some values', async ({
      canvasElement,
      userEvent
    }) => {
      await interactionKeyInInput(canvasElement, userEvent, 'Hello, World!');
    });
    await step('Select Text', async ({
      canvasElement,
      userEvent
    }) => {
      await selectTextInInput(canvasElement, userEvent, 1, 10);
    });
    await step('Replace selected text with new text', async ({
      canvasElement
    }) => {
      const inputElement = await getTextInput(canvasElement);
      await interactionReplaceText(inputElement, 'drlow');
    });
  }
}`,...r.parameters?.docs?.source}}};const W=["SelectTextInput"];export{r as SelectTextInput,W as __namedExportsOrder,F as default};
