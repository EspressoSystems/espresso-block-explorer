import{j as d}from"./iframe-Dsdv_jy8.js";import{D as x}from"./LoadingProvider-ZcPlxnY_.js";import"./DateTimeFormattersProvider-B3ic2tiK.js";import"./LocaleProvider-huCKFdsY.js";import"./NavDrawerStateProvider-DV3EzpoW.js";import"./NowProvider-Bqys-kMq.js";import"./NumberFormattersProvider-QO8j60_X.js";import"./PathResolverProvider-DQIE-5jR.js";import{f as S,d as H,t as b,b as u,i as I}from"./functional-CtE-8sCS.js";import{P as O}from"./PieChart-C4zhTiTS.js";import{a as y}from"./react.esm-Bfrtalqq.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-DHgZ7T60.js";import"./string-BOqmI8nC.js";import"./UnimplementedError-DbqcLgyi.js";import"./NumberText-CrclVv3b.js";import"./typography-G6sVg_FI.js";import"./higher_order-BcrgzP0b.js";import"./Text-BU7JBOLk.js";import"./SVGPathBuilder-4dyJLere.js";import"./SVGToolTip-BrrObrxH.js";import"./index-RQOMNxP7.js";import"./index-CiMbshgK.js";import"./client-Clp3j6EK.js";const{expect:i,waitFor:m,within:g}=__STORYBOOK_MODULE_TEST__;async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await i(!0).toEqual(e);return}if(e){await i(c.toString()).toEqual("1"),await i(t).toBeVisible();return}await i(c.toString()).toEqual("0"),await i(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await i(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await i(!1).toEqual(e);return}await i(a.hasAttribute("data-hover")).toEqual(e)}const p=async t=>{const e=await g(t).findByRole("graphics-datachart");return await i(e).toBeTruthy(),await i(e).toBeInTheDocument(),e};async function E(t){const e=t.querySelectorAll("[data-hover]"),o=h(t);for(const a of e)a.removeAttribute("data-hover");await m(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function q(t,e){return y(async()=>{await E(t),e.setAttribute("data-hover","")})}const B=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},h=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>y(async()=>{const o=await p(t);await m(async()=>{const r=await p(t);await i(r).toBeInTheDocument()},{timeout:2e3});const a=B(o),f=h(o),c=S(H(a,e)),l=S(H(f,e));await q(t,c),await m(async()=>{await n(l,!0)},{timeout:2e3});const w=h(o)[Symbol.iterator]();for(const r of b(w,e))await i(r).not.toEqual(l),await n(r,!1);i(w.next().value).toEqual(l),await n(l,!0);for(const r of w)await i(r).not.toEqual(l),await n(r,!1)}),T=async t=>y(async()=>{await E(t);const e=await p(t),o=h(e);for(const a of o)await n(a,!1)}),A=()=>d.jsx(x.Provider,{value:[...u(I(10),t=>({label:`Entry ${t}`,value:1}))],children:d.jsx(O,{})}),et={title:"Components/Page Sections/Pie Chart/Interactions",component:A},v={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await T(t)})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const at=["HoverOverSlices"];export{v as HoverOverSlices,at as __namedExportsOrder,et as default};
