import{j as m}from"./iframe-BnfkL8Kh.js";import{D as f}from"./data_provider-DR0SepNE.js";import{E as g}from"./explorer_api_contexts-Cg2c5Qbq.js";import{c as p,d as w,a as b,i as h}from"./functional-CFnOe1PN.js";import{S as d}from"./summary_histograms-CBvVkNXk.js";import{a as c}from"./react.esm-Ox8_752g.js";import{B as x}from"./block_size_histogram-DY4Ryd1O.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./index-DexEU5NC.js";import"./index-BG56inAp.js";import"./client-GHwztkti.js";import"./card-D3z7ArwK.js";import"./higher_order-DQHFbP0d.js";import"./value_labeled-D1z_oOrK.js";import"./typography-B6LbXW63.js";import"./label-Dr6oLJ4a.js";import"./circular_progress_indicator-ASlMJQs_.js";import"./container_loading-CC5kCkQh.js";import"./skeleton_content-CMvu7TDW.js";import"./byte_size_text-B76LDok-.js";import"./number_formatters_provider-Bn0oY0TV.js";import"./locale_provider-CYJgRcn0.js";import"./wallet_address_text-6-IkVQhj.js";import"./date_time_formatters_provider-Ce8bEeDE.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-C0tSpfk5.js";import"./full_hex_text-B9F7kEcQ.js";import"./array_buffer_hex-K4SX2B-7.js";import"./hex_text-BF6HsMV1.js";import"./money_text-D7zHf1Cp.js";import"./money_text_full-D40dbKHR.js";import"./number_text-BnuGQVAX.js";import"./percentage_text-DqJBck8H.js";import"./relative_time_since_date_text-ZWzH2UAR.js";import"./tagged_base64_text-BEZsdLdo.js";import"./time_text-CTnIpnRY.js";import"./loading_provider-D7jVFZnN.js";import"./histogram_section_title-DVf2yach.js";import"./svg_tool_tip-lPbuggcv.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const{expect:n,userEvent:S,waitFor:l,within:O}=__STORYBOOK_MODULE_TEST__,y=async t=>{const r=await O(t).findByRole("graphics-datachart");return await n(r).toBeTruthy(),await n(r).toBeInTheDocument(),r};function u(t){return c(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function I(t,r){return c(async()=>(await u(t),r.setAttribute("data-hover","true"),S.hover(r)))}const E=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return b(o,e=>e)},k=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return b(o,e=>e)},a=async(t,r)=>c(async()=>{const o=await y(t);await l(async()=>{const B=await y(t);n(B).toBeInTheDocument()},{timeout:1e3});const e=E(o),i=k(o),H=p(w(e,r)),v=p(w(i,r));await I(t,H),await l(async()=>{n(v).toBeVisible()}),n(v).toBeVisible()}),T=async t=>c(async()=>u(t)),_=({data:t,...r})=>{const o=new d(t.blockSize.map((e,i)=>i),t.blockSize,t.blockSize.map((e,i)=>i),t.blockHeights);return m.jsx(g.Provider,{value:o,children:m.jsx(f.Provider,{value:o,children:m.jsx(x,{...r})})})},St={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:_},s={args:{data:{blockHeights:[...h(10)],blockSize:[...h(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await T(t)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
