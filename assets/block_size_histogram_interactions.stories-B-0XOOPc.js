import{j as m}from"./iframe-Czs2L5m1.js";import{D as f}from"./data_provider-LHkS6gF_.js";import{E as g}from"./explorer_api_contexts-DT-G89Jt.js";import{c as p,d as w,a as b,i as h}from"./functional-CFnOe1PN.js";import{S as d}from"./summary_histograms-CBvVkNXk.js";import{a as c}from"./react.esm-B1073Apo.js";import{B as x}from"./block_size_histogram-CLVMZPBa.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./index-8XHMmjBr.js";import"./index-CVrR6RK1.js";import"./client-B1EorJUo.js";import"./card-DtdWdVsu.js";import"./higher_order-Bg2qo-qh.js";import"./value_labeled-B_yMrVqA.js";import"./typography-CqA07OnF.js";import"./label-DoHYz8u4.js";import"./circular_progress_indicator-DXYyTHHF.js";import"./container_loading-CAON8yd-.js";import"./skeleton_content-CzbtXqMN.js";import"./byte_size_text-LFOa9cPx.js";import"./number_formatters_provider-C7_WrEPu.js";import"./locale_provider-DjhHC7rP.js";import"./wallet_address_text-b1XU89BU.js";import"./date_time_formatters_provider-npYgPV9H.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-DTv9voBS.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-D4ncCmSo.js";import"./money_text-BJ-uCKea.js";import"./money_text_full-Cn1Suzc2.js";import"./number_text-NeBjfjp9.js";import"./percentage_text-DYq2RApP.js";import"./relative_time_since_date_text-DLaNVU8u.js";import"./tagged_base64_text-BpgIJSgf.js";import"./time_text-DXVJqvoG.js";import"./loading_provider-Cs7gPV-B.js";import"./histogram_section_title-99QteEYR.js";import"./svg_tool_tip-BecNETuX.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const{expect:n,userEvent:S,waitFor:l,within:O}=__STORYBOOK_MODULE_TEST__,y=async t=>{const r=await O(t).findByRole("graphics-datachart");return await n(r).toBeTruthy(),await n(r).toBeInTheDocument(),r};function u(t){return c(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function I(t,r){return c(async()=>(await u(t),r.setAttribute("data-hover","true"),S.hover(r)))}const E=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return b(o,e=>e)},k=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return b(o,e=>e)},a=async(t,r)=>c(async()=>{const o=await y(t);await l(async()=>{const B=await y(t);n(B).toBeInTheDocument()},{timeout:1e3});const e=E(o),i=k(o),H=p(w(e,r)),v=p(w(i,r));await I(t,H),await l(async()=>{n(v).toBeVisible()}),n(v).toBeVisible()}),T=async t=>c(async()=>u(t)),_=({data:t,...r})=>{const o=new d(t.blockSize.map((e,i)=>i),t.blockSize,t.blockSize.map((e,i)=>i),t.blockHeights);return m.jsx(g.Provider,{value:o,children:m.jsx(f.Provider,{value:o,children:m.jsx(x,{...r})})})},St={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:_},s={args:{data:{blockHeights:[...h(10)],blockSize:[...h(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await T(t)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
