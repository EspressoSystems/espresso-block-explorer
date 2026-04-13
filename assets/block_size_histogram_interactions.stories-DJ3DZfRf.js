import{j as m}from"./iframe-hlwV_SLU.js";import{D as d}from"./data_provider-BSV0zpAE.js";import{e as v,d as p,a as y,i as w}from"./functional-BN9f4kvo.js";import{a as s}from"./react.esm-2JgpB0hW.js";import{B as f}from"./block_size_histogram-b75s2Qdo.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./index-CGMwTfK0.js";import"./index-CYUkv1Xd.js";import"./client-CmMhSb24.js";import"./card-D8TnEowP.js";import"./higher_order-Bp4R-A8k.js";import"./value_labeled-BYqdLs_X.js";import"./typography-Doo0wUY8.js";import"./label-BuHDRF2c.js";import"./circular_progress_indicator-BYNpNd3l.js";import"./container_loading-K_Yp0bT6.js";import"./skeleton_content-BmUbB4de.js";import"./byte_size_text-BgslcI2e.js";import"./number_formatters_provider-CEQBq_Hk.js";import"./locale_provider-CqJhpaHu.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_formatters_provider-BxM1oZxM.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./time_text-CBcl6HLm.js";import"./loading_provider-CI0TwLTi.js";import"./histogram_section_title-Dcs6mrk4.js";import"./svg_tool_tip-bLY4e0oh.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...a})}),Bt={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
