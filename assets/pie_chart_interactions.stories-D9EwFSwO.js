import{j as y}from"./jsx-runtime-BlAj40OV.js";import{D as I}from"./LoadingProvider-Cu0dkHek.js";import"./DateTimeFormattersProvider-D6Gp1Kbv.js";import"./LocaleProvider-B0_30C1H.js";import"./NavDrawerStateProvider-HpepdHmi.js";import"./NowProvider-D4xjbY-7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./PathResolverProvider-Xv58eOQd.js";import{f as d,d as S,t as g,b as u,i as O}from"./functional-BZC-Q2QA.js";import{P as q}from"./PieChart-BoM9qx5-.js";import{a as m,e as r,w as A}from"./index-1MAJgnAK.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./string-Cg6lWpsr.js";import"./NumberText-C4Z_0tU7.js";import"./typography-BIj1kvXp.js";import"./higher_order-DnPEgWEz.js";import"./Text-BU7JBOLk.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./SVGToolTip-VtYDiDwI.js";import"./index-DZLKizrv.js";async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await r(!0).toEqual(e);return}if(e){await r(c.toString()).toEqual("1"),await r(t).toBeVisible();return}await r(c.toString()).toEqual("0"),await r(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await r(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await r(!1).toEqual(e);return}await r(a.hasAttribute("data-hover")).toEqual(e)}const p=async t=>{const e=await A(t).findByRole("graphics-datachart");return await r(e).toBeTruthy(),await r(e).toBeInTheDocument(),e};async function b(t){const e=t.querySelectorAll("[data-hover]"),o=h(t);for(const a of e)a.removeAttribute("data-hover");await m(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function B(t,e){await b(t),e.setAttribute("data-hover","")}const T=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},h=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>{const o=await p(t);await m(async()=>{const i=await p(t);await r(i).toBeInTheDocument()},{timeout:2e3});const a=T(o),f=h(o),c=d(S(a,e)),l=d(S(f,e));await B(t,c),await m(async()=>{await n(l,!0)},{timeout:2e3});const w=h(o)[Symbol.iterator]();for(const i of g(w,e))await r(i).not.toEqual(l),await n(i,!1);r(w.next().value).toEqual(l),await n(l,!0);for(const i of w)await r(i).not.toEqual(l),await n(i,!1)},C=async t=>{await b(t);const e=await p(t),o=h(e);for(const a of o)await n(a,!1)},P=()=>y.jsx(I.Provider,{value:[...u(O(10),t=>({label:`Entry ${t}`,value:1}))],children:y.jsx(q,{})}),tt={title:"Components/Page Sections/Pie Chart/Interactions",component:P},v={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await C(t)})}};var x,E,H;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      await hoverOverIthSlice(canvasElement, 0);
    });
    await step('Hover over the second slice', async () => {
      await hoverOverIthSlice(canvasElement, 1);
    });
    await step('Hover over the third slice', async () => {
      await hoverOverIthSlice(canvasElement, 2);
    });
    await step('Hover over the fourth slice', async () => {
      await hoverOverIthSlice(canvasElement, 3);
    });
    await step('Hover over the fifth slice', async () => {
      await hoverOverIthSlice(canvasElement, 4);
    });
    await step('Hover over the sixth slice', async () => {
      await hoverOverIthSlice(canvasElement, 5);
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
      await exitHoverAll(canvasElement);
    });
  }
}`,...(H=(E=v.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const et=["HoverOverSlices"];export{v as HoverOverSlices,et as __namedExportsOrder,tt as default};
