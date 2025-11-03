import{j as m}from"./iframe-CYSVuX1x.js";import{D as f}from"./LoadingProvider-MAD86iE_.js";import"./DateTimeFormattersProvider-FXlbRvqz.js";import"./LocaleProvider-2Kr3jmsM.js";import"./PagePathProvider-BamKWudK.js";import"./NowProvider-DPht8VTo.js";import"./NumberFormattersProvider-CsE6Hjjx.js";import"./PathResolverProvider-C1EnTGtp.js";import{f as v,d as p,b as y,i as w}from"./functional-BkuSRiGx.js";import{B as d}from"./BlockSizeHistogram-DTW0TZcx.js";import{a as s}from"./react.esm-COy7Kf2c.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-DFKol7R9.js";import"./higher_order-Go0fHGBA.js";import"./LoadingShimmer-D1kFnY-4.js";import"./SkeletonContent-DODOsMVL.js";import"./typography-70s9wEYp.js";import"./label-D5Iwvx3Q.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Ck3jbLE3.js";import"./base64-KHURY7_E.js";import"./CopyButton-Ct8FXU6p.js";import"./CheckCircleFilled-DZkxeFyd.js";import"./SVGIconBase-Ce3MMpWa.js";import"./Copy-B-rad2pI.js";/* empty css               */import"./CircularProgressIndicator-CEW2mKD2.js";import"./ContainerLoading-Q2bfjUCI.js";import"./SVGToolTip-TWRLXxcM.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BbsCt4nU.js";import"./ByteSizeText-B-_nlHQb.js";import"./CopyHex-DNvyaoND.js";import"./array_buffer-CdfOeTuC.js";import"./DateTimeText-CYyXa_kR.js";import"./FullHexText-C_3bLndC.js";import"./HexText-CmX8c7ld.js";import"./MoneyText-Bgh5NbAY.js";import"./PercentageText-FVpucOq7.js";import"./RelativeTimeSinceDateText-Dv54OkJg.js";import"./TaggedBase64Text-OehAwbTf.js";import"./TimeText-Qgxy22il.js";import"./Heading2-BLXRcxbd.js";/* empty css                */import"./index-CAo0dEz9.js";import"./index-DYXE1PjN.js";import"./client-CxKbrq6X.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),St={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
