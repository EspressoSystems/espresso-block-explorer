import{j as m}from"./iframe-BhfBVhTN.js";import{D as d}from"./loading_provider-DuSSXXi4.js";import"./date_time_formatters_provider-DE6pqwEE.js";import"./locale_provider-yL7RjglX.js";import"./page_path_provider-0leIx6sS.js";import"./now_provider-BZ0gf5-c.js";import"./number_formatters_provider-BXMu2AYo.js";import"./path_resolver_provider-B_VwRBzs.js";import{g as v,d as p,b as y,i as w}from"./functional-CSHHasco.js";import{B as f}from"./block_size_histogram-BkS5xMGz.js";import{a as s}from"./react.esm-CYZ_RHTj.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./card-Bbgs53pQ.js";import"./higher_order-D_YdbROE.js";import"./loading_shimmer-CpZ5586x.js";import"./skeleton_content-_MaUAuT1.js";import"./typography-ZJRa9Te0.js";import"./label-BuX9v5VO.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Ckfd6E2-.js";import"./base64-Dpbg5EzT.js";import"./copy_button-Cg3_7pgA.js";import"./check_circle_filled-qylX-1Qt.js";import"./svg_icon_base-BmNIBSz5.js";import"./copy-DnRvsYB4.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-ClR_i9Ow.js";import"./circular_progress_indicator-CGpLlJlf.js";import"./container_loading-DDqXETwJ.js";import"./svg_tool_tip-BRZl4CjZ.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B-w3Vx6j.js";import"./copy_hex-Byt9Vsvp.js";import"./array_buffer-CekOYGOQ.js";import"./date_time_text-39KZPkCE.js";import"./full_hex_text-BraGK7k3.js";import"./hex_text-BgbDwq-2.js";import"./money_text-C5q8QcQm.js";import"./relative_time_since_date_text-Cx9S2uF9.js";import"./tagged_base64_text-9vqYyYGM.js";import"./time_text-Dww6YPsN.js";import"./heading2-Dhv4ZOig.js";/* empty css                */import"./index-BieZ3BMC.js";import"./index-DGUlzzb1.js";import"./client-CjB65kfM.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
