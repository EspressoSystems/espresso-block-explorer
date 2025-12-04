import{j as m}from"./iframe-BYhJ0elB.js";import{D as d}from"./LoadingProvider-Bn4-uxSH.js";import"./DateTimeFormattersProvider-D1BWIJEB.js";import"./LocaleProvider-DStRSijF.js";import"./PagePathProvider-nynPDlzk.js";import"./NowProvider-DPFdN-s-.js";import"./NumberFormattersProvider-BlItbZB7.js";import"./PathResolverProvider-CsgTwCpv.js";import{g as v,d as p,b as y,i as w}from"./functional-By_9lidy.js";import{B as f}from"./BlockSizeHistogram-BfsVXEu-.js";import{a as s}from"./react.esm-BNO_F-p3.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./Card-DjFoWUft.js";import"./higher_order-CiFIqkYR.js";import"./LoadingShimmer-UjEhC6_z.js";import"./SkeletonContent-Ba_gn-Vd.js";import"./typography-C9lmU0CM.js";import"./label-DISaOArB.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-DYcNORHL.js";import"./base64-Dpbg5EzT.js";import"./CopyButton-CxEFcHR-.js";import"./CheckCircleFilled-BTQ9yhTR.js";import"./SVGIconBase-aGBMO4fP.js";import"./Copy-B8g8a5_A.js";/* empty css               */import"./CircularProgressIndicator-BIqoh_Pb.js";import"./ContainerLoading-DF3V8ltZ.js";import"./SVGToolTip-BIEfHSNE.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BsD_8CBR.js";import"./ByteSizeText-CuZS1pBT.js";import"./CopyHex-DgUFR5Yy.js";import"./array_buffer-CXxOH-jd.js";import"./DateTimeText-9mOQpDyB.js";import"./FullHexText-BkYgJRpz.js";import"./HexText-ZJeb_nkv.js";import"./MoneyText-CfP9eB4o.js";import"./RelativeTimeSinceDateText-fLW9DoTK.js";import"./TaggedBase64Text-CXs0z7BR.js";import"./TimeText-BCcWSA_p.js";import"./Heading2-BL-5QfGu.js";/* empty css                */import"./index-iiudyRW9.js";import"./index-B_8YGfN4.js";import"./client-Djd8YNzz.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
