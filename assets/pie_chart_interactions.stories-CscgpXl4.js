import{j as d}from"./iframe-C4ZPvz3S.js";import{D as x}from"./LoadingProvider-C0CMoad9.js";import"./DateTimeFormattersProvider-umfK80_V.js";import"./LocaleProvider-Ifjl9SJa.js";import"./PagePathProvider-By61cyAL.js";import"./NowProvider-Bpd3RyKH.js";import"./NumberFormattersProvider-SZx-qAnO.js";import"./PathResolverProvider-CTtpeaKW.js";import{f as S,d as H,t as b,b as u,i as I}from"./functional-g5wG3Azh.js";import{P as O}from"./PieChart-s5PIutPH.js";import{a as y}from"./react.esm-BaPllKBR.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./NumberText-B9xVU4B6.js";import"./typography-CZegUgq3.js";import"./higher_order-bNpIPqEX.js";import"./Text-BU7JBOLk.js";import"./SVGPathBuilder-4dyJLere.js";import"./SVGToolTip-iZNDDfQ0.js";import"./index-B5j2zDE0.js";import"./index-7F0X8HIb.js";import"./client-CDbnNTMK.js";const{expect:i,waitFor:p,within:g}=__STORYBOOK_MODULE_TEST__;async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await i(!0).toEqual(e);return}if(e){await i(c.toString()).toEqual("1"),await i(t).toBeVisible();return}await i(c.toString()).toEqual("0"),await i(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await i(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await i(!1).toEqual(e);return}await i(a.hasAttribute("data-hover")).toEqual(e)}const w=async t=>{const e=await g(t).findByRole("graphics-datachart");return await i(e).toBeTruthy(),await i(e).toBeInTheDocument(),e};async function E(t){const e=t.querySelectorAll("[data-hover]"),o=h(t);for(const a of e)a.removeAttribute("data-hover");await p(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function q(t,e){return y(async()=>{await E(t),e.setAttribute("data-hover","")})}const B=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},h=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>y(async()=>{const o=await w(t);await p(async()=>{const r=await w(t);await i(r).toBeInTheDocument()},{timeout:2e3});const a=B(o),f=h(o),c=S(H(a,e)),l=S(H(f,e));await q(t,c),await p(async()=>{await n(l,!0)},{timeout:2e3});const m=h(o)[Symbol.iterator]();for(const r of b(m,e))await i(r).not.toEqual(l),await n(r,!1);i(m.next().value).toEqual(l),await n(l,!0);for(const r of m)await i(r).not.toEqual(l),await n(r,!1)}),T=async t=>y(async()=>{await E(t);const e=await w(t),o=h(e);for(const a of o)await n(a,!1)}),A=()=>d.jsx(x.Provider,{value:[...u(I(10),t=>({label:`Entry ${t}`,value:1}))],children:d.jsx(O,{})}),at={title:"Components/Page Sections/Pie Chart/Interactions",component:A},v={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await T(t)})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const ot=["HoverOverSlices"];export{v as HoverOverSlices,ot as __namedExportsOrder,at as default};
