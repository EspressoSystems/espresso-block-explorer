import{j as m}from"./iframe-CLPnbpxV.js";import{D as f}from"./data_provider-DgjhqqNC.js";import{E as g}from"./explorer_api_contexts-BpoDdc_Y.js";import{g as p,d as w,a as b,i as h}from"./functional-DK5v8yH0.js";import{S as d}from"./summary_histograms-CBvVkNXk.js";import{a as c}from"./react.esm-z5B1IF4t.js";import{B as x}from"./block_size_histogram-BnF_DVKI.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./index-Cyu_tdB6.js";import"./index-BDob3IAG.js";import"./client-Yv7b0EpL.js";import"./card-DEiQ9h5C.js";import"./higher_order-7cy5ynj_.js";import"./value_labeled-1neXfb_V.js";import"./typography-B35vkejZ.js";import"./label-DcUIOBt7.js";import"./circular_progress_indicator-c9XfkaIK.js";import"./container_loading-C7NKHBtL.js";import"./skeleton_content-CHVdEqRf.js";import"./byte_size_text-_ohqn1f_.js";import"./number_formatters_provider-GVH6Hwmx.js";import"./locale_provider-BN4HfGkg.js";import"./wallet_address_text-CMr7VMhM.js";import"./date_time_formatters_provider-CmqVjlvw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-Vjl96l3q.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./hex_text-BsZ3Qfa8.js";import"./money_text-RleJYn5Z.js";import"./money_text_full-DQxVbaBP.js";import"./number_text-D9k67KIt.js";import"./percentage_text-BwRPUx72.js";import"./relative_time_since_date_text-DzcnoK0x.js";import"./tagged_base64_text-BmMKknzC.js";import"./time_text-DSSKbz_8.js";import"./loading_provider-paXcQWk1.js";import"./histogram_section_title-CnyW1MGR.js";import"./svg_tool_tip-D30dHnub.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-CW2gj0SF.js";const{expect:n,userEvent:S,waitFor:l,within:O}=__STORYBOOK_MODULE_TEST__,y=async t=>{const r=await O(t).findByRole("graphics-datachart");return await n(r).toBeTruthy(),await n(r).toBeInTheDocument(),r};function u(t){return c(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function I(t,r){return c(async()=>(await u(t),r.setAttribute("data-hover","true"),S.hover(r)))}const E=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return b(o,e=>e)},k=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return b(o,e=>e)},a=async(t,r)=>c(async()=>{const o=await y(t);await l(async()=>{const B=await y(t);n(B).toBeInTheDocument()},{timeout:1e3});const e=E(o),i=k(o),H=p(w(e,r)),v=p(w(i,r));await I(t,H),await l(async()=>{n(v).toBeVisible()}),n(v).toBeVisible()}),T=async t=>c(async()=>u(t)),_=({data:t,...r})=>{const o=new d(t.blockSize.map((e,i)=>i),t.blockSize,t.blockSize.map((e,i)=>i),t.blockHeights);return m.jsx(g.Provider,{value:o,children:m.jsx(f.Provider,{value:o,children:m.jsx(x,{...r})})})},St={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:_},s={args:{data:{blockHeights:[...h(10)],blockSize:[...h(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await T(t)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blockHeights: [...iota(10)],
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
}`,...s.parameters?.docs?.source}}};const Ot=["MouseOverBar"];export{s as MouseOverBar,Ot as __namedExportsOrder,St as default};
