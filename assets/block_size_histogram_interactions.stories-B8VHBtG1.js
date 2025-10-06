import{j as m}from"./iframe-DhalQE6g.js";import{D as f}from"./LoadingProvider-plSsL9kW.js";import"./DateTimeFormattersProvider-Byy5ZfRy.js";import"./LocaleProvider-vur0MvWU.js";import"./NavDrawerStateProvider-BOM6Rgvv.js";import"./NowProvider-Cxgig7md.js";import"./NumberFormattersProvider-BmlPtdZ5.js";import"./PathResolverProvider-OkjeJArZ.js";import{f as v,d as p,b as y,i as w}from"./functional-CqKsH-G6.js";import{B as d}from"./BlockSizeHistogram-4HG3vLSy.js";import{a as s}from"./react.esm-CXx4A7oh.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C0Z4QoIY.js";import"./string-B8Rshh3e.js";import"./UnimplementedError-BEJrC_RV.js";import"./Card-CS_siqkV.js";import"./higher_order-rjCqB3wU.js";import"./SkeletonContent-CfUx8dtI.js";import"./typography-BVAXx6mN.js";import"./label-DgW09f9Z.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-BTs8I7mx.js";import"./base64-BLHA4cZM.js";import"./CopyButton-BWw4VkKd.js";import"./CheckCircle-C-Fy1nIq.js";import"./SVGIconBase-DFPJZAw4.js";import"./Copy-y0xpi0f3.js";/* empty css               */import"./CircularProgressIndicator-4SDpeRco.js";import"./ContainerLoading-CXz8endZ.js";import"./SVGToolTip-BI8FmMvj.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CqlUb8qk.js";import"./ByteSizeText-VUKtWV7t.js";import"./CopyHex-Ch0zM98m.js";import"./array_buffer-Dp0JAU74.js";import"./DateTimeText-Bi26ZGCY.js";import"./FullHexText-Cn6O0nGf.js";import"./HexText-BowuplI0.js";import"./MoneyText-BHOBZ2XU.js";import"./RelativeTimeText-DO2x2upw.js";import"./TaggedBase64Text-BCBQ_Ogc.js";import"./TimeText-CxMUGASv.js";import"./Heading2-DpTS-zNf.js";/* empty css                */import"./index-DF41TwKL.js";import"./index-C2NqSSlr.js";import"./client-E8W7_h9x.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await i(r).toBeTruthy(),await i(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,r)),c=v(p(u,r));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Ot={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const It=["MouseOverBar"];export{n as MouseOverBar,It as __namedExportsOrder,Ot as default};
