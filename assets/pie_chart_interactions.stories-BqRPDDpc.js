import{j as d}from"./iframe-RrH5notm.js";import{D as x}from"./data_provider-CnI5ffrM.js";import{g as S,d as H,t as b,a as u,i as I}from"./functional-CHI4evRY.js";import{a as y}from"./react.esm-mGbqDEpr.js";import{P as O}from"./pie_chart-B-OMWc9w.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./index-DyPC3jWh.js";import"./index-B30HYQ58.js";import"./client-opeFtPJh.js";import"./number_text-BiMC9TJ3.js";import"./number_formatters_provider-BWToNpc0.js";import"./locale_provider-Cyvsr7cz.js";import"./text-CEhLEmI-.js";import"./svg_tool_tip-CY6ki9kT.js";import"./svg_path_builder-4dyJLere.js";const{expect:r,waitFor:p,within:g}=__STORYBOOK_MODULE_TEST__;async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await r(!0).toEqual(e);return}if(e){await r(c.toString()).toEqual("1"),await r(t).toBeVisible();return}await r(c.toString()).toEqual("0"),await r(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await r(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await r(!1).toEqual(e);return}await r(a.hasAttribute("data-hover")).toEqual(e)}const m=async t=>{const e=await g(t).findByRole("graphics-datachart");return await r(e).toBeTruthy(),await r(e).toBeInTheDocument(),e};async function E(t){const e=t.querySelectorAll("[data-hover]"),o=h(t);for(const a of e)a.removeAttribute("data-hover");await p(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function B(t,e){return y(async()=>{await E(t),e.setAttribute("data-hover","")})}const q=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},h=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>y(async()=>{const o=await m(t);await p(async()=>{const i=await m(t);await r(i).toBeInTheDocument()},{timeout:2e3});const a=q(o),f=h(o),c=S(H(a,e)),l=S(H(f,e));await B(t,c),await p(async()=>{await n(l,!0)},{timeout:2e3});const w=h(o)[Symbol.iterator]();for(const i of b(w,e))await r(i).not.toEqual(l),await n(i,!1);r(w.next().value).toEqual(l),await n(l,!0);for(const i of w)await r(i).not.toEqual(l),await n(i,!1)}),T=async t=>y(async()=>{await E(t);const e=await m(t),o=h(e);for(const a of o)await n(a,!1)}),A=()=>d.jsx(x.Provider,{value:[...u(I(10),t=>({label:`Entry ${t}`,value:1}))],children:d.jsx(O,{})}),N={title:"Block Explorer/Components/Page Sections/Pie Chart/Interactions",component:A},v={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await T(t)})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const Q=["HoverOverSlices"];export{v as HoverOverSlices,Q as __namedExportsOrder,N as default};
