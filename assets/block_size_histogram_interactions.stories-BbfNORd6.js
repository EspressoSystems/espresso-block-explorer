import{j as m}from"./iframe-BD1yaix1.js";import{D as d}from"./loading_provider-BbzSpk-c.js";import"./date_time_formatters_provider-D85-FJC7.js";import"./locale_provider-CMpeMO95.js";import"./page_path_provider-5HsnBsq2.js";import"./now_provider-BiYKTb9R.js";import"./number_formatters_provider-CYQ6aY_k.js";import"./path_resolver_provider-7jpIaJCk.js";import{g as v,d as p,b as y,i as w}from"./functional-DLuq-Zgx.js";import{B as f}from"./block_size_histogram-CuKTRGG4.js";import{a as s}from"./react.esm-D7jH-8cm.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-Ce3zmVpn.js";import"./higher_order-T0GH9dDo.js";import"./loading_shimmer-DZUlX3Qg.js";import"./skeleton_content-D9B9Vsd-.js";import"./typography-r90yo729.js";import"./label-Dkp6u3Eq.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-DeKQBrPK.js";import"./base64-Dpbg5EzT.js";import"./copy_button-yRgUblgX.js";import"./check_circle_filled-DJQh71hH.js";import"./svg_icon_base-COhmG2Uq.js";import"./copy-CRo-ZtnZ.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-hxKhlidF.js";import"./circular_progress_indicator-CWgqd9fq.js";import"./container_loading-gzhT654p.js";import"./svg_tool_tip-CnrXK4GU.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-Dq0iPJZS.js";import"./copy_hex-d0DTV1iG.js";import"./array_buffer-DYdk84gS.js";import"./date_time_text-DR_8S3xN.js";import"./full_hex_text-Cv2FWqgk.js";import"./hex_text-CH_nbHML.js";import"./money_text-9zzMFh-l.js";import"./relative_time_since_date_text-CRDYs83Q.js";import"./tagged_base64_text-BfGKDfT7.js";import"./time_text-DSkjDEJY.js";import"./heading2-CLmjJKmV.js";/* empty css                */import"./index-DB82ngbe.js";import"./index-C8rR8fZL.js";import"./client-DFM34XNO.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
