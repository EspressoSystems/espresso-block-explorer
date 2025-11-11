import{j as m}from"./iframe-DemEOwrW.js";import{D as f}from"./LoadingProvider-BejkcYK5.js";import"./DateTimeFormattersProvider-DNsYUpWM.js";import"./LocaleProvider-DbdD2VEs.js";import"./PagePathProvider-D4ag8Oi_.js";import"./NowProvider-BKkkit-4.js";import"./NumberFormattersProvider-Cv2n8TIj.js";import"./PathResolverProvider-ZydTQwVi.js";import{f as v,d as p,b as y,i as w}from"./functional-g5wG3Azh.js";import{B as d}from"./BlockSizeHistogram-Caf0xVom.js";import{a as s}from"./react.esm-CcxOIFVs.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-COZdMR6w.js";import"./higher_order-B41vOjYd.js";import"./LoadingShimmer-YSn3WEkV.js";import"./SkeletonContent-DQfGACWR.js";import"./typography-D_5Kic_p.js";import"./label-B5w5a4R4.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BK5EArS8.js";import"./base64-KHURY7_E.js";import"./CopyButton-DsyAirpI.js";import"./CheckCircleFilled-DUMDewi5.js";import"./SVGIconBase-By2Dy568.js";import"./Copy-Bk0N4w0I.js";/* empty css               */import"./CircularProgressIndicator-BXO1v5EL.js";import"./ContainerLoading-C0n1x0D2.js";import"./SVGToolTip-B8GxQMmI.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-O_tSvdK5.js";import"./ByteSizeText-BOXet3wQ.js";import"./CopyHex-5FezhnoO.js";import"./array_buffer-zIqOMhaQ.js";import"./DateTimeText-DbTGLRv2.js";import"./FullHexText-Cz-BU8xP.js";import"./HexText-DoDkjOLz.js";import"./MoneyText-HSj2Dilp.js";import"./PercentageText-4ikhPh6V.js";import"./RelativeTimeSinceDateText-CW0CghFK.js";import"./TaggedBase64Text-Dzb7s87v.js";import"./TimeText-Csn_Qbhe.js";import"./Heading2-tyV-eXDC.js";/* empty css                */import"./index-CKhALns6.js";import"./index-D4mXpXRf.js";import"./client-BO4K9TZ6.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),St={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Tt=["MouseOverBar"];export{n as MouseOverBar,Tt as __namedExportsOrder,St as default};
