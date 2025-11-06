import{j as m}from"./iframe-C4ZPvz3S.js";import{D as f}from"./LoadingProvider-C0CMoad9.js";import"./DateTimeFormattersProvider-umfK80_V.js";import"./LocaleProvider-Ifjl9SJa.js";import"./PagePathProvider-By61cyAL.js";import"./NowProvider-Bpd3RyKH.js";import"./NumberFormattersProvider-SZx-qAnO.js";import"./PathResolverProvider-CTtpeaKW.js";import{f as v,d as p,b as y,i as w}from"./functional-g5wG3Azh.js";import{B as d}from"./BlockSizeHistogram-sC1zmChf.js";import{a as s}from"./react.esm-BaPllKBR.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-BOS_TL0-.js";import"./higher_order-bNpIPqEX.js";import"./LoadingShimmer-Dr1OorMS.js";import"./SkeletonContent-vrEAX-5I.js";import"./typography-CZegUgq3.js";import"./label-D7-fFmqu.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D7PbrOEC.js";import"./base64-KHURY7_E.js";import"./CopyButton-uPtOM2rR.js";import"./CheckCircleFilled-BwZlx9EF.js";import"./SVGIconBase-D1Jn9W5J.js";import"./Copy-DJRo9pdy.js";/* empty css               */import"./CircularProgressIndicator-Ba5KLYbQ.js";import"./ContainerLoading-BlSROiUn.js";import"./SVGToolTip-iZNDDfQ0.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-B9xVU4B6.js";import"./ByteSizeText-Z06zMCgt.js";import"./CopyHex-CtbXa_U9.js";import"./array_buffer-D67g0v0K.js";import"./DateTimeText-UbQTWiMm.js";import"./FullHexText-DFYP_GOS.js";import"./HexText-CJZHJo2I.js";import"./MoneyText-l4Szszhu.js";import"./PercentageText-CTf78PLW.js";import"./RelativeTimeSinceDateText-D4Nzx_3Y.js";import"./TaggedBase64Text-DQWXUPnk.js";import"./TimeText-R3lLk-Wp.js";import"./Heading2-PKXl6PMX.js";/* empty css                */import"./index-B5j2zDE0.js";import"./index-7F0X8HIb.js";import"./client-CDbnNTMK.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),St={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
