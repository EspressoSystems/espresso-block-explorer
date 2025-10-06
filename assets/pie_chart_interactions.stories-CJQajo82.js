import{j as f}from"./iframe-DygLW6I0.js";import{D as I}from"./LoadingProvider-Byfo0QzP.js";import"./DateTimeFormattersProvider-BiVnDCug.js";import"./LocaleProvider-BTog8Eg4.js";import"./NavDrawerStateProvider-Dcgn9ff6.js";import"./NowProvider-DQJHzESf.js";import"./NumberFormattersProvider-KKfvmIDJ.js";import"./PathResolverProvider-DvoeaLUs.js";import{f as d,d as S,t as O,b as u,i as g}from"./functional-C2YPzjZP.js";import{P as q}from"./PieChart-f6qFW4tj.js";import"./MissingElementError-BiJAxgGE.js";import"./string-BI8AIx1I.js";import"./UnimplementedError-N0odIfDD.js";import"./NumberText-Xd59w2dg.js";import"./typography-CE54FjU0.js";import"./higher_order-BcLzZ7W3.js";import"./Text-BU7JBOLk.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./SVGToolTip-DqrjToKh.js";const{expect:r,waitFor:p,within:B}=__STORYBOOK_MODULE_TEST__;async function n(t,e){const o=t;if("computedStyleMap"in o){const c=o.computedStyleMap().get("opacity");if(c===void 0){await r(!0).toEqual(e);return}if(e){await r(c.toString()).toEqual("1"),await r(t).toBeVisible();return}await r(c.toString()).toEqual("0"),await r(t).not.toBeVisible();return}if(t.hasAttribute("data-hover")){await r(t.hasAttribute("data-hover")).toEqual(e);return}const a=t.previousElementSibling;if(!a){await r(!1).toEqual(e);return}await r(a.hasAttribute("data-hover")).toEqual(e)}const m=async t=>{const e=await B(t).findByRole("graphics-datachart");return await r(e).toBeTruthy(),await r(e).toBeInTheDocument(),e};async function b(t){const e=t.querySelectorAll("[data-hover]"),o=h(t);for(const a of e)a.removeAttribute("data-hover");await p(async()=>{for(const a of o)await n(a,!1)},{timeout:2e3});for(const a of o)await n(a,!1)}async function T(t,e){await b(t),e.setAttribute("data-hover","")}const A=t=>{const o=t.querySelectorAll(".pie-chart-section-hitbox")[Symbol.iterator]();return u(o,a=>a)},h=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,a=>a)},s=async(t,e)=>{const o=await m(t);await p(async()=>{const i=await m(t);await r(i).toBeInTheDocument()},{timeout:2e3});const a=A(o),y=h(o),c=d(S(a,e)),l=d(S(y,e));await T(t,c),await p(async()=>{await n(l,!0)},{timeout:2e3});const w=h(o)[Symbol.iterator]();for(const i of O(w,e))await r(i).not.toEqual(l),await n(i,!1);r(w.next().value).toEqual(l),await n(l,!0);for(const i of w)await r(i).not.toEqual(l),await n(i,!1)},_=async t=>{await b(t);const e=await m(t),o=h(e);for(const a of o)await n(a,!1)},C=()=>f.jsx(I.Provider,{value:[...u(g(10),t=>({label:`Entry ${t}`,value:1}))],children:f.jsx(q,{})}),X={title:"Components/Page Sections/Pie Chart/Interactions",component:C},v={parameters:{viewport:{defaultViewport:"mobile1"}},async play({canvasElement:t,step:e}){await e("Hover over the first slice",async()=>{await s(t,0)}),await e("Hover over the second slice",async()=>{await s(t,1)}),await e("Hover over the third slice",async()=>{await s(t,2)}),await e("Hover over the fourth slice",async()=>{await s(t,3)}),await e("Hover over the fifth slice",async()=>{await s(t,4)}),await e("Hover over the sixth slice",async()=>{await s(t,5)}),await e("Unhover all",async()=>{await _(t)})}};var E,x,H;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(x=v.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const Z=["HoverOverSlices"];export{v as HoverOverSlices,Z as __namedExportsOrder,X as default};
