import{j as m}from"./iframe-Dv6htQ23.js";import{D as f}from"./LoadingProvider-CRv47c_T.js";import"./DateTimeFormattersProvider-C5t6XUcQ.js";import"./LocaleProvider-2MskVwwW.js";import"./PagePathProvider-CMXtbgHw.js";import"./NowProvider-CUEytW_R.js";import"./NumberFormattersProvider-B9KzUGwo.js";import"./PathResolverProvider-DO2OIcGK.js";import{f as v,d as p,b as y,i as w}from"./functional-Cgf59ne2.js";import{B as d}from"./BlockSizeHistogram-DbJyZCrI.js";import{a as s}from"./react.esm-DzhUo7F1.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-CHe2rYXp.js";import"./higher_order-C7N0yVzV.js";import"./LoadingShimmer-Bqb90OnE.js";import"./SkeletonContent-BQG7cvXG.js";import"./typography-CgR0bGry.js";import"./label-DhPrwc6a.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BNmoA_dP.js";import"./base64-KHURY7_E.js";import"./CopyButton--qJXFrNp.js";import"./CheckCircleFilled-CplNTaXF.js";import"./SVGIconBase-DcFMrokn.js";import"./Copy-Cg0Q6oFM.js";/* empty css               */import"./CircularProgressIndicator-CGSnkEvU.js";import"./ContainerLoading-DleeJ4WR.js";import"./SVGToolTip-DKYbDa1j.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Dj8iVxLU.js";import"./ByteSizeText-C1GRTxwh.js";import"./CopyHex-eo5yI8q1.js";import"./array_buffer-cBr8gIXV.js";import"./DateTimeText-BOpXlQvA.js";import"./FullHexText-3tleIpiG.js";import"./HexText-C0iTiRGR.js";import"./MoneyText-CoTXhldl.js";import"./RelativeTimeSinceDateText-wnmIlcQg.js";import"./TaggedBase64Text-BPVeWXPe.js";import"./TimeText-CSjMgMr_.js";import"./Heading2-Fc0gzHbS.js";/* empty css                */import"./index-DXoJfKfG.js";import"./index-DIxc3OCG.js";import"./client-CpU2PEmD.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
