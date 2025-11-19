import{j as m}from"./iframe-6sDIVuv1.js";import{D as f}from"./LoadingProvider-CrTsTokN.js";import"./DateTimeFormattersProvider-B9ptiKJK.js";import"./LocaleProvider-qvoseI_m.js";import"./PagePathProvider-DXgMaDUe.js";import"./NowProvider-9_TLGQLi.js";import"./NumberFormattersProvider-qTTfMxSz.js";import"./PathResolverProvider-BI3bDQHR.js";import{f as v,d as p,b as y,i as w}from"./functional-D84nw2eW.js";import{B as d}from"./BlockSizeHistogram-DwZzvq4z.js";import{a as s}from"./react.esm-D3FClK0z.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-H6VSm3Gs.js";import"./higher_order-CqVlj1z5.js";import"./LoadingShimmer-CIJZjRRL.js";import"./SkeletonContent-D1xueSVF.js";import"./typography-C-j7u7QD.js";import"./label-N_OfIQCK.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-zlhAN4en.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-CINQv9cY.js";import"./CheckCircleFilled-BE3oJZM6.js";import"./SVGIconBase-aCvu50bH.js";import"./Copy-DEIJ49QX.js";/* empty css               */import"./CircularProgressIndicator-DQskT5Wj.js";import"./ContainerLoading-DlnmaV8c.js";import"./SVGToolTip-BCi-nGu1.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-DmOrh8vf.js";import"./ByteSizeText-B2l_HyjZ.js";import"./CopyHex-DKVYsOU9.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-CQywexfr.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-Dquu6xJA.js";import"./MoneyText-pcHqcefM.js";import"./RelativeTimeSinceDateText-c3QUR7zZ.js";import"./TaggedBase64Text-Du-s-zvK.js";import"./TimeText-7DSwPO8b.js";import"./Heading2-toZNLwpq.js";/* empty css                */import"./index-gfuw5-ba.js";import"./index-CWZnnTq9.js";import"./client-CuyKNz1O.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
