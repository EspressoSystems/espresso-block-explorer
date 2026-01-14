import{j as v}from"./iframe-uLWYWIdy.js";import{D as d}from"./data_provider-wCUWR71U.js";import{e as m,d as p,a as y,i as w}from"./functional-DsFqNm-o.js";import{a as s}from"./react.esm-xIgWRSjR.js";import{B as f}from"./block_size_histogram-Dlz29PX8.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./client-Dc6hmvfU.js";import"./card-D29d4h2p.js";import"./higher_order-BV5WAo3w.js";import"./value_labeled-DnBhW8uh.js";import"./typography-D9YEMAu1.js";import"./label-CQ9FQXZM.js";import"./loading_shimmer-CBsceKJt.js";import"./skeleton_content-CXAzo2K4.js";import"./loading_provider-BM5-2tPO.js";import"./sleep-CW-vxfof.js";import"./unimplemented_error-B7nptaaw.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-D9u07ye5.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";import"./date_time_formatters_provider-DTa7qZb-.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DsiwwU3j.js";import"./svg_tool_tip-CPDws9sq.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CcmMYnIy.js";import"./date_time_text-BPg9gf0T.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-CyJ0gTKK.js";import"./money_text-8MdYa69j.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./now_provider-b5eqaHEI.js";import"./tagged_base64_text-CI2MD-yf.js";import"./time_text-aTJSNRK6.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=m(p(e,a)),c=m(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>v.jsx(d.Provider,{value:t,children:v.jsx(f,{...a})}),Ht={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...iota(10)]
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('Hover over first bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 0);
    });
    await step('Hover over second bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 1);
    });
    await step('Hover over third bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 2);
    });
    await step('Hover over fourth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 3);
    });
    await step('Hover over fifth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 4);
    });
    await step('Hover over sixth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 5);
    });
    await step('Hover over seventh bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 6);
    });
    await step('Hover over eighth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 7);
    });
    await step('Hover over ninth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 8);
    });
    await step('Hover over tenth bar', async () => {
      await interactionHoverOverIthBar(canvasElement, 9);
    });
    await step('Mouse off', async () => {
      await interactionUnhoverAll(canvasElement);
    });
  }
}`,...n.parameters?.docs?.source}}};const Bt=["MouseOverBar"];export{n as MouseOverBar,Bt as __namedExportsOrder,Ht as default};
