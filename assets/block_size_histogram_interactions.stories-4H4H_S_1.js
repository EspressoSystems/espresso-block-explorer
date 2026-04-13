import{j as m}from"./iframe-yFC_6Lkm.js";import{D as d}from"./data_provider-5GKNepRL.js";import{e as v,d as p,a as y,i as w}from"./functional-BN9f4kvo.js";import{a as s}from"./react.esm-CEp6g7pp.js";import{B as f}from"./block_size_histogram-9tRzM_k1.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./index-BmV5BhIB.js";import"./index-CRsEpIOc.js";import"./client-3rhF3nDV.js";import"./card-BXmZ-D4n.js";import"./higher_order-CjJuNElG.js";import"./value_labeled-frYvV7Lv.js";import"./typography-BhzIADDi.js";import"./label-CHErshDC.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./container_loading-B8wF_9BZ.js";import"./skeleton_content-Cc8wo3D2.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./locale_provider-vvwlyNor.js";import"./wallet_address_text-C8RpyldE.js";import"./date_time_formatters_provider-DcGFks32.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./loading_provider-BcOPdPnh.js";import"./histogram_section_title-BLkHPART.js";import"./svg_tool_tip-Ck_wTyi2.js";import"./svg_path_builder-4dyJLere.js";import"./affine_transform-UCCpzMIM.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...a})}),Bt={title:"Block Explorer/Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
