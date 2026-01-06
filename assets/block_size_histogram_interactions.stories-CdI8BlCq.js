import{j as m}from"./iframe-B-iMvdD4.js";import{D as d}from"./loading_provider-DGgAz7Nh.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./page_path_provider-DWGnqofr.js";import"./now_provider-D9QH_F6_.js";import"./number_formatters_provider-C7OuKrqX.js";import"./path_resolver_provider-DTKqJOJp.js";import{e as v,d as p,b as y,i as w}from"./functional-aFFbciHe.js";import{B as f}from"./block_size_histogram-CBaD8T5u.js";import{a as s}from"./react.esm-OKxsuYgY.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-DysXuFl8.js";import"./higher_order-p8JWl9JO.js";import"./loading_shimmer-BAmtup37.js";import"./skeleton_content-v3SVavGm.js";import"./typography-12nFQ59z.js";import"./label-ycIGOt2h.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-xiGLa1J_.js";import"./base64-Pz9_wEqE.js";import"./copy_button-ByWeuO8A.js";import"./check_circle_filled-DPIQ4HbT.js";import"./svg_icon_base-BLNI1CYc.js";import"./copy-DlUw72_P.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-BjwVE4fU.js";import"./circular_progress_indicator-zVJv3sLl.js";import"./container_loading-JT-HF1IR.js";import"./svg_tool_tip-DaL9hdFL.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DfVp7OHb.js";import"./copy_hex-BDJCygmF.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-EU368kfm.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-Dh3oergr.js";import"./money_text-BypLSPg_.js";import"./relative_time_since_date_text-R2kEd-ey.js";import"./tagged_base64_text-DT1iuIo5.js";import"./time_text-COF6WMBW.js";import"./heading2-DnsU6o8f.js";/* empty css                */import"./index-C2Py61xS.js";import"./index-BPkPZEbx.js";import"./client-BRFImQn1.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
