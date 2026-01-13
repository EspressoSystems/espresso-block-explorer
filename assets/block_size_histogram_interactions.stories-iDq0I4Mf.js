import{j as m}from"./iframe-BwY8Nc_o.js";import{D as d}from"./data_provider-BIkZvgj5.js";import{e as v,d as p,a as y,i as w}from"./functional-DsFqNm-o.js";import{a as s}from"./react.esm-Dexxyoa5.js";import{B as f}from"./block_size_histogram-B-nAlbIB.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./client-BxCpvd2i.js";import"./card-ib7QqidU.js";import"./higher_order-CDuDe3l-.js";import"./value_labeled-4OGkiiJD.js";import"./typography-PELJ4Pi9.js";import"./label-BqqvuJsR.js";import"./loading_provider--Fab2jEg.js";import"./sleep-CW-vxfof.js";import"./unimplemented_error-B7nptaaw.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CvJU-ydw.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";import"./date_time_formatters_provider-DyEL5Gtx.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-v_ckRp1n.js";import"./skeleton_content-2CbNU9lX.js";import"./svg_tool_tip-CfY5wQC2.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CzTF4zt-.js";import"./date_time_text-B7XZh9vE.js";import"./full_hex_text-IJaD05bO.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./hex_text-SnO3_FxC.js";import"./money_text-BxDHRD8P.js";import"./relative_time_since_date_text-k8xSGfZM.js";import"./now_provider--GGOYw_8.js";import"./tagged_base64_text-C_twqSLi.js";import"./time_text-hYMI7GpY.js";import"./heading2--_TAz6HX.js";/* empty css                */import"./loading_shimmer-CxxRa7n9.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...a})}),dt={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ft=["MouseOverBar"];export{n as MouseOverBar,ft as __namedExportsOrder,dt as default};
