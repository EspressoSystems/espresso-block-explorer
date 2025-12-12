import{j as m}from"./iframe-DERpcsaj.js";import{D as d}from"./loading_provider-DWAOa2Po.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./page_path_provider-CdVsPBlv.js";import"./now_provider-Du-h2Rp4.js";import"./number_formatters_provider-CAdhGcCB.js";import"./path_resolver_provider-yTnYQJl0.js";import{g as v,d as p,b as y,i as w}from"./functional-AkqJadlP.js";import{B as f}from"./block_size_histogram-QFx698Mm.js";import{a as s}from"./react.esm-BCrxck9h.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-ZXCjX9KG.js";import"./higher_order-DzHtQVvV.js";import"./loading_shimmer-DI9iRwM5.js";import"./skeleton_content-D1PJ_eX5.js";import"./typography-Dj8C4yvB.js";import"./label-CLVfv72F.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Ch3jAwxw.js";import"./base64-CraqfgLB.js";import"./copy_button-Bml6zmCr.js";import"./check_circle_filled-DonIuhOn.js";import"./svg_icon_base-BSoegY8q.js";import"./copy-G-i-gDej.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CWqYRbqG.js";import"./circular_progress_indicator-Bbat2shA.js";import"./container_loading-CMhY7v53.js";import"./svg_tool_tip-CYVVv9U-.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DPMJnSh0.js";import"./copy_hex-RceDw8c8.js";import"./array_buffer-CQ8t_IxW.js";import"./date_time_text-xQ32h6XM.js";import"./full_hex_text-Cc1EJ3GT.js";import"./hex_text-DEE_C5oi.js";import"./money_text-B9Ui4At1.js";import"./relative_time_since_date_text-NZAFUh1C.js";import"./tagged_base64_text-BoQvMWTe.js";import"./time_text-Bgj0j3yQ.js";import"./heading2-B4ieKzDT.js";/* empty css                */import"./index-Blc0c5dJ.js";import"./index-BMZNw6o_.js";import"./client-BRIjTmLC.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
