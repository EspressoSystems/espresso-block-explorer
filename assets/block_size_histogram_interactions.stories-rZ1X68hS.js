import{j as m}from"./iframe-BbF3Syj1.js";import{D as d}from"./loading_provider-DEd-giv5.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./page_path_provider-DFntaqal.js";import"./now_provider-B6bWrODL.js";import"./number_formatters_provider-DOen9m4S.js";import"./path_resolver_provider-rPfG7hHk.js";import{g as v,d as p,b as y,i as w}from"./functional-CRC6BLve.js";import{B as f}from"./block_size_histogram-Douks5_h.js";import{a as s}from"./react.esm-Cbvut28h.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./card-Drcx0POy.js";import"./higher_order-P_eSrgQE.js";import"./loading_shimmer-BihbGDgm.js";import"./skeleton_content-BRPUJFb-.js";import"./typography-B0b9ZxV3.js";import"./label-BDCEF55u.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-USvfzh87.js";import"./base64-CraqfgLB.js";import"./copy_button-XgccnUyj.js";import"./check_circle_filled-BWA5Es7Z.js";import"./svg_icon_base-BTNiSFJX.js";import"./copy-CKx4zh30.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-DFd3FJlE.js";import"./circular_progress_indicator-CMpg3_tY.js";import"./container_loading-Cc4c0X5F.js";import"./svg_tool_tip-DN23vI7l.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-DZp8S5pw.js";import"./copy_hex-CIch3Fzf.js";import"./array_buffer-T9JUf6pH.js";import"./date_time_text-DzqzJcq0.js";import"./full_hex_text-9iPXpFzG.js";import"./hex_text-B6LXlTWD.js";import"./money_text-BDvXCdjF.js";import"./relative_time_since_date_text-Denl0BMc.js";import"./tagged_base64_text-C_GjGHtj.js";import"./time_text-DZgfq9z4.js";import"./heading2-nYiqSj_i.js";/* empty css                */import"./index-8H9Cz35g.js";import"./index-CUKlM6e7.js";import"./client-BQV42wdX.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
