import{j as m}from"./iframe-xPpTS9dO.js";import{D as f}from"./LoadingProvider-DEoBX8YF.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PagePathProvider-6arKryxS.js";import"./NowProvider-Clo83YBl.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./PathResolverProvider-XKUKdvE1.js";import{f as v,d as p,b as y,i as w}from"./functional-CJQfVQrn.js";import{B as d}from"./BlockSizeHistogram-C9IoS3Lj.js";import{a as s}from"./react.esm-C-7xwL5g.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-B5sBbsij.js";import"./higher_order-cEYzRmR2.js";import"./LoadingShimmer-Cs3zUzIB.js";import"./SkeletonContent-D5S015Dw.js";import"./typography-DOsyjWqi.js";import"./label-Bt1YRaym.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-glj3zT01.js";import"./base64-C1KKyByM.js";import"./CopyButton-DY0FR6xq.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./SVGIconBase-DRQr1LH4.js";import"./Copy-Bg1Dzap1.js";/* empty css               */import"./CircularProgressIndicator-Bwt9laMC.js";import"./ContainerLoading-DzEjivks.js";import"./SVGToolTip-5F109HLF.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BI77pf0U.js";import"./ByteSizeText-BUz_P0aN.js";import"./CopyHex-CCVeOuCP.js";import"./array_buffer-C2KvbgUx.js";import"./DateTimeText-zl9AaIlT.js";import"./FullHexText-DQocPh7W.js";import"./HexText-D16FECet.js";import"./MoneyText-BDvNDVp1.js";import"./RelativeTimeSinceDateText-qeHXCk3H.js";import"./TaggedBase64Text-Cs7axRqY.js";import"./TimeText-DJtWNxAl.js";import"./Heading2-C-kCrxZC.js";/* empty css                */import"./index-Be3GcqnB.js";import"./index-Du7Eaecz.js";import"./client-BCC1VFLG.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
