import{j as m}from"./iframe-DFfdKi-0.js";import{D as d}from"./loading_provider-da-Stdik.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./locale_provider-BSfkAuIP.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./number_formatters_provider-BFBcbrkA.js";import"./path_resolver_provider-DZ-5eptY.js";import{g as v,d as p,b as y,i as w}from"./functional-DLuq-Zgx.js";import{B as f}from"./block_size_histogram-Bzo1DuKO.js";import{a as s}from"./react.esm-QcRRCiS6.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-B_DGO8IT.js";import"./higher_order-CAFNA8md.js";import"./loading_shimmer-BmQWJNQg.js";import"./skeleton_content-CLW3IdlQ.js";import"./typography-M3pkdhb1.js";import"./label-C_7faWes.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CVlg39ir.js";import"./base64-Dpbg5EzT.js";import"./copy_button-CNhoUW5a.js";import"./check_circle_filled-C8KuScJK.js";import"./svg_icon_base-Bysx7lQ6.js";import"./copy-Yrm6dGhz.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BThEIcq7.js";import"./circular_progress_indicator-CvHG1nqf.js";import"./container_loading-W_k3-qfn.js";import"./svg_tool_tip-DuC_nbES.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-D8sYOBly.js";import"./copy_hex-DAgaj9SU.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-Cno5hICi.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-vhhXAAGO.js";import"./money_text-BY6QHfpq.js";import"./relative_time_since_date_text-Ch8VK2RY.js";import"./tagged_base64_text-V3FlBX9h.js";import"./time_text-Dd-TCUHg.js";import"./heading2-DNajMEUY.js";/* empty css                */import"./index-C5KUm6uC.js";import"./index-qjXQvvE7.js";import"./client-IBhBTdAB.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
