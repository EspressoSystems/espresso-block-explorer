import{j as m}from"./iframe-B5ACCtQe.js";import{D as f}from"./LoadingProvider-inUiJrG2.js";import"./DateTimeFormattersProvider-B5EcmP53.js";import"./LocaleProvider-CmiabapK.js";import"./PagePathProvider-CfW_IWDG.js";import"./NowProvider-Dv0I_bBi.js";import"./NumberFormattersProvider-BqP1tbDM.js";import"./PathResolverProvider-pwfQA8J8.js";import{f as v,d as p,b as y,i as w}from"./functional-BkuSRiGx.js";import{B as d}from"./BlockSizeHistogram-T0p1uAUz.js";import{a as s}from"./react.esm-BHreGMm4.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-DAVeZk3A.js";import"./higher_order-DcvTrifj.js";import"./LoadingShimmer-1O-oPP4u.js";import"./SkeletonContent-QgcOifyD.js";import"./typography-BEMjcSvZ.js";import"./label-F-5hPRdH.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Ba0H4Z79.js";import"./base64-MELtJYLj.js";import"./CopyButton-ZkbB-uGf.js";import"./CheckCircleFilled-BiPPd6Eq.js";import"./SVGIconBase-Dvte2yLu.js";import"./Copy-F5qEbGBt.js";/* empty css               */import"./CircularProgressIndicator-3mob9pfC.js";import"./ContainerLoading-DFSrhxuU.js";import"./SVGToolTip-K1r27RqD.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Bh585QNs.js";import"./ByteSizeText-C5rPYbrt.js";import"./CopyHex-BEWsbbl3.js";import"./array_buffer-CaGbebEx.js";import"./DateTimeText-CvJVIqzH.js";import"./FullHexText-BHKyctfq.js";import"./HexText-DgI_1c0Z.js";import"./MoneyText-CX8FrIqY.js";import"./PercentageText-B2qDQkJd.js";import"./RelativeTimeSinceDateText-Bq0o1gtH.js";import"./TaggedBase64Text-BEdF0tZ2.js";import"./TimeText-DZbDrmAy.js";import"./Heading2-hKXGmewZ.js";/* empty css                */import"./index-B_fSnr5e.js";import"./index-CKJHJ-Zn.js";import"./client-bTAg9zYX.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),St={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
