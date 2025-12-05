import{j as m}from"./iframe-DIKNrIIb.js";import{D as d}from"./loading_provider-Dn9ytlaz.js";import"./date_time_formatters_provider-DhcWWpu8.js";import"./locale_provider-DYOAFLcG.js";import"./page_path_provider-B1N-ENWh.js";import"./now_provider-DNU3NT7E.js";import"./number_formatters_provider-CoB2HbbC.js";import"./path_resolver_provider-D_k7zmI5.js";import{g as v,d as p,b as y,i as w}from"./functional-DLuq-Zgx.js";import{B as f}from"./block_size_histogram-CQmXO6mn.js";import{a as s}from"./react.esm-PYvwRhAE.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-DkiVkAU4.js";import"./higher_order-CERhs-Yx.js";import"./loading_shimmer-BevhGYCh.js";import"./skeleton_content-DoayltBs.js";import"./typography-C-u2xTwd.js";import"./label-BBqImYri.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CoujvQ_L.js";import"./base64-Dpbg5EzT.js";import"./copy_button-DrvH4bvD.js";import"./check_circle_filled-B7jxOVSh.js";import"./svg_icon_base-CJsibPKU.js";import"./copy-CnbsWkwa.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-C_D0_0Sh.js";import"./circular_progress_indicator-BwmKD8wi.js";import"./container_loading-D6SGm2EM.js";import"./svg_tool_tip-DWTJCm-L.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CVlm-gPG.js";import"./copy_hex-zR5ZV97x.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-Di9xHhdz.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-C5T8OYp6.js";import"./money_text-YqxDusDO.js";import"./relative_time_since_date_text-BLwzRj7T.js";import"./tagged_base64_text-DaoCGQRV.js";import"./time_text-DhxGW57C.js";import"./heading2-Boff_b8b.js";/* empty css                */import"./index-B1u9hlBx.js";import"./index-C8ROo_QO.js";import"./client-Cgb01xwx.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
