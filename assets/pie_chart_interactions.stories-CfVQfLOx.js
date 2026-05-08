import{j as d}from"./iframe-BzM1REe5.js";import{D as x}from"./data_provider-UvOryvGc.js";import{g as S,d as H,t as b,a as u,i as I}from"./functional-DK5v8yH0.js";import{a as y}from"./react.esm-CINIUMuy.js";import{P as O}from"./pie_chart-DyBttJhf.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./index-Brvi13u4.js";import"./index-B6gwanc6.js";import"./client-COZu0YC8.js";import"./byte_size_text-BvBqpNSY.js";import"./number_formatters_provider-B55I5973.js";import"./locale_provider-CcmMVSKG.js";import"./wallet_address_text-DkuIDJMv.js";import"./date_time_formatters_provider-BQMjgMAw.js";/* empty css               */import"./text-CEhLEmI-.js";import"./date_time_text-CkDQW_O2.js";import"./full_hex_text-DIaruHQS.js";import"./array_buffer_hex-B8TZXvFc.js";import"./base64-ClQJ-u6S.js";import"./unimplemented_error-CMF8SzXs.js";import"./hex_text-BX6Ncm6j.js";import"./money_text-CvmVZA_V.js";import"./money_text_full-DtYqNUaR.js";import"./number_text-CoNdK3e3.js";import"./percentage_text-DoqaZ5Li.js";import"./relative_time_since_date_text-CbvHaqJF.js";import"./tagged_base64_text-BxaxBsXv.js";import"./time_text-DWVaFWBe.js";import"./svg_tool_tip-C0Lh-T3P.js";import"./svg_path_builder-4dyJLere.js";const{expect:r,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__;async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await r(!0).toEqual(e);return}if(e){await r(c.toString()).toEqual("1"),await r(t).toBeVisible();return}await r(c.toString()).toEqual("0"),await r(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await r(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await r(!1).toEqual(e);return}await r(a.hasAttribute("data-hover")).toEqual(e)}const w=async t=>{const e=await g(t).findByRole("graphics-datachart");return await r(e).toBeTruthy(),await r(e).toBeInTheDocument(),e};async function E(t){const e=t.querySelectorAll("[data-hover]"),o=v(t);for(const a of e)a.removeAttribute("data-hover");await h(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function B(t,e){return y(async()=>{await E(t),e.setAttribute("data-hover","")})}const q=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},v=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>y(async()=>{const o=await w(t);await h(async()=>{const i=await w(t);await r(i).toBeInTheDocument()},{timeout:2e3});const a=q(o),f=v(o),c=S(H(a,e)),l=S(H(f,e));await B(t,c),await h(async()=>{await n(l,!0)},{timeout:2e3});const m=v(o)[Symbol.iterator]();for(const i of b(m,e))await r(i).not.toEqual(l),await n(i,!1);r(m.next().value).toEqual(l),await n(l,!0);for(const i of m)await r(i).not.toEqual(l),await n(i,!1)}),T=async t=>y(async()=>{await E(t);const e=await w(t),o=v(e);for(const a of o)await n(a,!1)}),A=()=>d.jsx(x.Provider,{value:[...u(I(10),t=>({label:`Entry ${t}`,value:1}))],children:d.jsx(O,{})}),vt={title:"Block Explorer/Components/Page Sections/Pie Chart/Interactions",component:A},p={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await T(t)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  async play({
    canvasElement,
    step
  }) {
    await step('Hover over the first slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 0);
    });
    await step('Hover over the second slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 1);
    });
    await step('Hover over the third slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 2);
    });
    await step('Hover over the fourth slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 3);
    });
    await step('Hover over the fifth slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 4);
    });
    await step('Hover over the sixth slice', async () => {
      await interactionHoverOverIthSlice(canvasElement, 5);
    });

    // await step('Hover over the seventh slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 6);
    // });

    // await step('Hover over the eighth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 7);
    // });

    // await step('Hover over the ninth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 8);
    // });

    // await step('Hover over the tenth slice', async () => {
    //   await hoverOverIthSlice(canvasElement, 9);
    // });

    await step('Unhover all', async () => {
      await interactionExitHoverAll(canvasElement);
    });
  }
}`,...p.parameters?.docs?.source}}};const mt=["HoverOverSlices"];export{p as HoverOverSlices,mt as __namedExportsOrder,vt as default};
