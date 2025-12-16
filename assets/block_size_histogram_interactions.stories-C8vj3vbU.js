import{j as m}from"./iframe-ClKDkTx9.js";import{D as d}from"./loading_provider-BA4zBxyH.js";import"./date_time_formatters_provider-Cf6wYALs.js";import"./locale_provider-DJPVjQlf.js";import"./page_path_provider-ZBtbZN9A.js";import"./now_provider-CbLkKTxk.js";import"./number_formatters_provider-Dzy7g4cY.js";import"./path_resolver_provider-DQmcKCeL.js";import{e as v,d as p,b as y,i as w}from"./functional-aFFbciHe.js";import{B as f}from"./block_size_histogram-Cnusebxr.js";import{a as s}from"./react.esm-Cykdo6lV.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./card-6pMwU__V.js";import"./higher_order-DGDN5Dfc.js";import"./loading_shimmer-DTPhK2KI.js";import"./skeleton_content-kY3mGp8K.js";import"./typography-BXZmVxaS.js";import"./label-B3P8I4Su.js";import"./text-CEhLEmI-.js";import"./transactions_per_second_text-CH2bEJlt.js";import"./base64-Pz9_wEqE.js";import"./copy_button-DumrgIxC.js";import"./check_circle_filled-CuxB0CvJ.js";import"./svg_icon_base-Ik10Mkci.js";import"./copy-CB9E4g7X.js";/* empty css               */import"./affine_transform-UCCpzMIM.js";import"./number_text-CYRmJkvB.js";import"./circular_progress_indicator-amVCckxY.js";import"./container_loading-C3a7PW8E.js";import"./svg_tool_tip-D0xwzdvg.js";import"./svg_path_builder-4dyJLere.js";import"./byte_size_text-CiN5bTtT.js";import"./copy_hex-BXRMrXt3.js";import"./array_buffer-DJmzCn2r.js";import"./date_time_text-BzpapEyn.js";import"./full_hex_text-DEcjOEkQ.js";import"./hex_text-B_YXB2ec.js";import"./money_text-BxDRISn0.js";import"./relative_time_since_date_text-DvytMmFB.js";import"./tagged_base64_text-BoJwIYKK.js";import"./time_text-afbV6Zbr.js";import"./heading2-DOFOzc_J.js";/* empty css                */import"./index-GLakHcs0.js";import"./index-L2MXTyI-.js";import"./client-CcWLmDfD.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
