import{j as m}from"./iframe-DBL03KB_.js";import{D as f}from"./LoadingProvider-DNR5Hkoh.js";import"./DateTimeFormattersProvider-CmMqGjYy.js";import"./LocaleProvider-DPHh7gaX.js";import"./PagePathProvider-CuJ4lB7I.js";import"./NowProvider-DkyPls7m.js";import"./NumberFormattersProvider-MvsW0TSm.js";import"./PathResolverProvider-C0zkn9is.js";import{f as v,d as p,b as y,i as w}from"./functional-DhS0UyF-.js";import{B as d}from"./BlockSizeHistogram-Bo0njSx8.js";import{a as s}from"./react.esm-CT0Y66AL.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-5R6NZ5QH.js";import"./higher_order-BDc1dO9t.js";import"./SkeletonContent-XBozz7e0.js";import"./typography-DsvMXyRR.js";import"./label-DSt-7g5L.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-nrSKuyYW.js";import"./base64-CwylSrof.js";import"./CopyButton-DN743_DK.js";import"./CheckCircleFilled-BsgmHdZj.js";import"./SVGIconBase-CnTjSQHC.js";import"./Copy-BPDrVqPS.js";/* empty css               */import"./CircularProgressIndicator-TRa6-Rdm.js";import"./ContainerLoading-txgcCvRN.js";import"./SVGToolTip-DxgPfkG2.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-C6v9mUpM.js";import"./ByteSizeText-C6mbuV3Q.js";import"./CopyHex-DbPkuZ0b.js";import"./array_buffer-DT_hwq4h.js";import"./DateTimeText-CJEitzMO.js";import"./FullHexText-Cc87lfvK.js";import"./HexText-5ZvMZLKw.js";import"./MoneyText-DE4bwqda.js";import"./RelativeTimeText-CPThff-t.js";import"./TaggedBase64Text-rMwIDupZ.js";import"./TimeText-BbHRTCq8.js";import"./Heading2-Cn_PpwDu.js";/* empty css                */import"./index-lqCd3_-5.js";import"./index-eSkcNk-9.js";import"./client-CMkRbutd.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),It={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Et=["MouseOverBar"];export{n as MouseOverBar,Et as __namedExportsOrder,It as default};
