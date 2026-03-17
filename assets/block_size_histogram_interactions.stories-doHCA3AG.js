import{j as m}from"./iframe-FW1O3eUf.js";import{D as d}from"./data_provider-BbqeYGia.js";import{g as v,d as p,a as y,i as w}from"./functional-DzI6oRAM.js";import{a as s}from"./react.esm-CPYV7Nbv.js";import{B as f}from"./block_size_histogram-Bcb2mdS4.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./index-BMEX-Xo9.js";import"./index-CHh1lDEX.js";import"./client-DR6EZN8l.js";import"./card-Crf0WMMb.js";import"./higher_order-CZN8Z6mQ.js";import"./value_labeled-DWRsz4_f.js";import"./typography-CO4RcCVs.js";import"./label-uO7SM2IW.js";import"./loading_shimmer-OObC7tiF.js";import"./skeleton_content-C2ZsUKe2.js";import"./loading_provider-B2nS0TYu.js";import"./sleep-CW-vxfof.js";import"./unimplemented_error-BB_FSuj1.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-B4PqBScI.js";import"./number_formatters_provider-BUUmLBk_.js";import"./locale_provider-D1mYVGxJ.js";import"./date_time_formatters_provider-CpNhPCjr.js";/* empty css               */import"./histogram_section_title-D8iKxG55.js";import"./svg_tool_tip-BCcLIcjj.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-DgAnb3aC.js";import"./byte_size_text-by3M3sfe.js";import"./date_time_text-CrmlPWV7.js";import"./full_hex_text-Dk7uaXQs.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./hex_text-C4mrH0FW.js";import"./money_text-ChWSLHbP.js";import"./relative_time_since_date_text-Db7pPjvM.js";import"./now_provider-yzpWQ6ve.js";import"./tagged_base64_text-_xODqK5j.js";import"./time_text-66zGsxPx.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...a})}),Bt={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const dt=["MouseOverBar"];export{n as MouseOverBar,dt as __namedExportsOrder,Bt as default};
