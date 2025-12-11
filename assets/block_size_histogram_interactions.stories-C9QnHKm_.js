import{j as m}from"./iframe-D38n0YpH.js";import{D as d}from"./loading_provider-CmIKNCgq.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./page_path_provider-C5mOuAiV.js";import"./now_provider-DY018Nl3.js";import"./number_formatters_provider-ByDysz5-.js";import"./path_resolver_provider-DkcsmNfF.js";import{g as v,d as p,b as y,i as w}from"./functional-AkqJadlP.js";import{B as f}from"./block_size_histogram-B3301wph.js";import{a as s}from"./react.esm-5MOUnv-I.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-Dj3LTq1C.js";import"./higher_order-xjg9P6xC.js";import"./loading_shimmer-BblTHptj.js";import"./skeleton_content-BFqgBQHP.js";import"./typography-91BC-7Aj.js";import"./label-zU4z8gpb.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-C7J0pzwe.js";import"./base64-CraqfgLB.js";import"./copy_button-DFqAvgi0.js";import"./check_circle_filled-CUn6gAdy.js";import"./svg_icon_base-DTyOsi0d.js";import"./copy-DSARhWHi.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BXk_sP1g.js";import"./circular_progress_indicator-CPnHk2K0.js";import"./container_loading-BI_Xpd_7.js";import"./svg_tool_tip-BuN2EHCo.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B_ZGQaYX.js";import"./copy_hex-Ci6gPGeT.js";import"./array_buffer-CQ8t_IxW.js";import"./date_time_text-BYKdFTsT.js";import"./full_hex_text-Cc1EJ3GT.js";import"./hex_text-DA_W3sj6.js";import"./money_text-DpZAFuDQ.js";import"./relative_time_since_date_text-BMr8JM1Q.js";import"./tagged_base64_text-DbKNcDnK.js";import"./time_text-D6wmN4a7.js";import"./heading2-CCYzvka5.js";/* empty css                */import"./index-BQAHaO3b.js";import"./index-b2ucKIM2.js";import"./client-Cormy-O0.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const St=["MouseOverBar"];export{n as MouseOverBar,St as __namedExportsOrder,Et as default};
