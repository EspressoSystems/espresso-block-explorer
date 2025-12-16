import{j as m}from"./iframe-C36uQjwe.js";import{D as d}from"./loading_provider-BllPH4wN.js";import"./date_time_formatters_provider-CAjNQyov.js";import"./locale_provider-wQt49r1W.js";import"./page_path_provider-C4TVebhC.js";import"./now_provider-D6WuJJod.js";import"./number_formatters_provider-DywPH02u.js";import"./path_resolver_provider-D1l7Ftg7.js";import{e as v,d as p,b as y,i as w}from"./functional-aFFbciHe.js";import{B as f}from"./block_size_histogram-CBmAQsRk.js";import{a as s}from"./react.esm-DMHPUCOI.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-DU_RdzbY.js";import"./higher_order-CfyPS3zu.js";import"./loading_shimmer-DJZ_QB33.js";import"./skeleton_content-D1Jtp_i-.js";import"./typography-DJ4LlwQ2.js";import"./label-DjiaBedk.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-B42oMXnp.js";import"./base64-Pz9_wEqE.js";import"./copy_button-BiIYGymM.js";import"./check_circle_filled-DS2y5kq9.js";import"./svg_icon_base-CociR3Gf.js";import"./copy-DFD6qtai.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CLzfObOD.js";import"./circular_progress_indicator-CbdAP0A9.js";import"./container_loading-BT9WwxGU.js";import"./svg_tool_tip-SAnc6R0I.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-B4Pvq_Gb.js";import"./copy_hex-GAVk31wC.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-C_B9GWia.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-BVK1cUlH.js";import"./money_text-d7EzokJA.js";import"./relative_time_since_date_text-BQfFGPgl.js";import"./tagged_base64_text-C7K2A3rC.js";import"./time_text-D-W2Vk_c.js";import"./heading2-C74CUe_P.js";/* empty css                */import"./index-USsukJ9q.js";import"./index-CuQTq9WB.js";import"./client-NDPkqDfF.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
