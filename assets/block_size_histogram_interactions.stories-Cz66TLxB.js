import{j as m}from"./iframe-Bhigqh8S.js";import{D as f}from"./LoadingProvider-B-tzpZix.js";import"./DateTimeFormattersProvider-hijkch1q.js";import"./LocaleProvider-XFyG3k3y.js";import"./PagePathProvider-sdmImp7U.js";import"./NowProvider-CMOF9EXi.js";import"./NumberFormattersProvider-DqfQyzSW.js";import"./PathResolverProvider-R7WzYCMy.js";import{f as v,d as p,b as y,i as w}from"./functional-BycAVInn.js";import{B as d}from"./BlockSizeHistogram-Baxhdqf7.js";import{a as s}from"./react.esm-COkWOs6s.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-092r4cae.js";import"./higher_order-DB2rAW4M.js";import"./LoadingShimmer-CVJPZhbC.js";import"./SkeletonContent-CCdbvsKX.js";import"./typography-B0Jwoebx.js";import"./label-DmqXKBVH.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-CKibkEjN.js";import"./base64-KHURY7_E.js";import"./CopyButton-DjWzfThD.js";import"./CheckCircleFilled-DhX0c1R4.js";import"./SVGIconBase-Y-9iG5mL.js";import"./Copy-DO7KMn7a.js";/* empty css               */import"./CircularProgressIndicator-CC8Z4tQL.js";import"./ContainerLoading-BuK2D_6Z.js";import"./SVGToolTip-BpXGZYJf.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CTdlrJn9.js";import"./ByteSizeText-RiDAp87x.js";import"./CopyHex-gsm-pOSF.js";import"./array_buffer-DztdsvYf.js";import"./DateTimeText-CRkEG6_p.js";import"./FullHexText-DTOMpgFU.js";import"./HexText-CPnBrQZF.js";import"./MoneyText-CReqHNNB.js";import"./RelativeTimeSinceDateText-DDGcNfVF.js";import"./TaggedBase64Text-mzxNz82B.js";import"./TimeText-Dk0sBoae.js";import"./Heading2-DVrkdgwt.js";/* empty css                */import"./index-6rOjFIl9.js";import"./index-DRqb6u-H.js";import"./client-DkKJNYvx.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
