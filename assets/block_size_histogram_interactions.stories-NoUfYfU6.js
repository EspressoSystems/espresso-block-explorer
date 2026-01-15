import{j as v}from"./iframe-ChMM8fie.js";import{D as d}from"./data_provider-DipucN8t.js";import{e as m,d as p,a as y,i as w}from"./functional-DT4GooI6.js";import{a as s}from"./react.esm-CDELKqQ0.js";import{B as f}from"./block_size_histogram-Bxn010z4.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./client-laTrBQ9W.js";import"./card-sFx9rmY6.js";import"./higher_order-BDzlKa4m.js";import"./value_labeled-m0_-_cYZ.js";import"./typography-CXTpHQ-1.js";import"./label-DyjIPWVJ.js";import"./loading_shimmer--9TEp1Ur.js";import"./skeleton_content-D_9h32no.js";import"./loading_provider-DLgXNpIx.js";import"./sleep-CW-vxfof.js";import"./unimplemented_error-CUVVCP1k.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-Dq-dziEi.js";import"./number_formatters_provider-CudGGieU.js";import"./locale_provider--Ln2ac7i.js";import"./date_time_formatters_provider-BWsAdsOr.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CahUOGB6.js";import"./svg_tool_tip-CCW323fW.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-BCct5yUn.js";import"./date_time_text-CsqteGv_.js";import"./full_hex_text-wUTAmwfT.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./hex_text-DiwkJ0fA.js";import"./money_text-Bga5xRSR.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./now_provider-CCB05c4h.js";import"./tagged_base64_text-DfwL_HLi.js";import"./time_text-CGiZUZ1Y.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=m(p(e,a)),c=m(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>v.jsx(d.Provider,{value:t,children:v.jsx(f,{...a})}),Ht={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Bt=["MouseOverBar"];export{n as MouseOverBar,Bt as __namedExportsOrder,Ht as default};
