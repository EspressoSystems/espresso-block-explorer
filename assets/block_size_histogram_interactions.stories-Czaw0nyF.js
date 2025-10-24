import{j as m}from"./iframe-Cfh0eePN.js";import{D as f}from"./LoadingProvider-CKkBrFm2.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";import"./LocaleProvider-D8Kjh7eq.js";import"./PagePathProvider-DS53fVOm.js";import"./NowProvider-gH2ltRAl.js";import"./NumberFormattersProvider-BkhnvKth.js";import"./PathResolverProvider-XIbO0Y2M.js";import{f as v,d as p,b as y,i as w}from"./functional-CJQfVQrn.js";import{B as d}from"./BlockSizeHistogram-EATZRUNs.js";import{a as s}from"./react.esm-C7E3UGcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-DP3f1xjY.js";import"./higher_order-kZsKjHKn.js";import"./LoadingShimmer-Bug8Yy1S.js";import"./SkeletonContent-DFSGCXCf.js";import"./typography-CSzJ38pA.js";import"./label-DRwSi1ij.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Ckt5P9hg.js";import"./base64-C1KKyByM.js";import"./CopyButton-xTnrAFcf.js";import"./CheckCircleFilled-Vjq3m9Qn.js";import"./SVGIconBase-DvO4AW8t.js";import"./Copy-BiMYs1cj.js";/* empty css               */import"./CircularProgressIndicator-_zcpiIPy.js";import"./ContainerLoading-00J4YO0Z.js";import"./SVGToolTip-CpCm1JZ6.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BeA3jcpj.js";import"./ByteSizeText-zghgiO3k.js";import"./CopyHex-CMrw1j88.js";import"./array_buffer-C2KvbgUx.js";import"./DateTimeText-C2Q7-R2m.js";import"./FullHexText-DQocPh7W.js";import"./HexText-BH0RdlRi.js";import"./MoneyText-C8YVSbVS.js";import"./RelativeTimeSinceDateText-BIDDn8v1.js";import"./TaggedBase64Text-DStqoIpO.js";import"./TimeText-B0TZrLuO.js";import"./Heading2-CgWOYrI_.js";/* empty css                */import"./index-Cc9aKvRX.js";import"./index-BsUSwBcT.js";import"./client-DU1do1ug.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
