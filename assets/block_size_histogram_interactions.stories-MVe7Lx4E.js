import{j as m}from"./iframe-lCBbYCEU.js";import{D as d}from"./data_provider-JNzMXrDd.js";import{g as v,d as p,a as y,i as w}from"./functional-6Z2QHHX7.js";import{a as s}from"./react.esm-DPsyTmJB.js";import{B as f}from"./block_size_histogram-Bx9I3-Ys.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./client-BJ4MhKIH.js";import"./card-bTL_EakN.js";import"./higher_order-B24NaQsc.js";import"./value_labeled-CYq3Snk9.js";import"./typography-C2G_oAYK.js";import"./label-nz9fsGgx.js";import"./loading_shimmer-_d-yto7M.js";import"./skeleton_content-uXbBjkPV.js";import"./loading_provider-CfI_gzNc.js";import"./sleep-CW-vxfof.js";import"./unimplemented_error--qiu5jWk.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-r_eDlOBe.js";import"./number_formatters_provider-n3Owoqke.js";import"./locale_provider-CivmyzXf.js";import"./date_time_formatters_provider-D_P0LLFh.js";/* empty css               */import"./histogram_section_title-D1yw9CdP.js";import"./svg_tool_tip-SOGiG2kC.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";import"./number_text-C1feg6s_.js";import"./byte_size_text-DdskNyFJ.js";import"./date_time_text-PZluedtG.js";import"./full_hex_text-31tEMUpT.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./hex_text-Dq7vbRlC.js";import"./money_text-B449SFRa.js";import"./relative_time_since_date_text-6snd4Hu9.js";import"./now_provider-BJlCMxdf.js";import"./tagged_base64_text-DSPnvE07.js";import"./time_text-FZhLuGii.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...a})}),Bt={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
