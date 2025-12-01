import{j as m}from"./iframe-6qRHL8kK.js";import{D as f}from"./LoadingProvider-CiRo7IyT.js";import"./DateTimeFormattersProvider-CTAmKTvQ.js";import"./LocaleProvider-Dn-Cb6v6.js";import"./PagePathProvider-BB5_V-vn.js";import"./NowProvider-DFWj2jBI.js";import"./NumberFormattersProvider-BaYHxeOC.js";import"./PathResolverProvider-BhkdUZ3l.js";import{f as v,d as p,b as y,i as w}from"./functional-DfB4rlpz.js";import{B as d}from"./BlockSizeHistogram-DUCsjA6c.js";import{a as s}from"./react.esm-mVV27ITt.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-BvD5kqNE.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./UnimplementedError-ByG_fP0m.js";import"./Card-NP-Eb91a.js";import"./higher_order-BVrk3P2P.js";import"./LoadingShimmer-D_BnBiok.js";import"./SkeletonContent-BPdzUoF-.js";import"./typography-CU0Q2b4v.js";import"./label-DaaYS4Ka.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Cc2z-6lc.js";import"./base64-BqC1I8uO.js";import"./CopyButton-DRgo3UZF.js";import"./CheckCircleFilled-BenepkbP.js";import"./SVGIconBase-A4DT5FtI.js";import"./Copy-CZ3brQky.js";/* empty css               */import"./CircularProgressIndicator-DRiLGeMo.js";import"./ContainerLoading-BYumNDN_.js";import"./SVGToolTip-B8imTCh9.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CX4omtIU.js";import"./ByteSizeText-Bet9xQjP.js";import"./CopyHex-Cf_006lM.js";import"./array_buffer-BXDx5OgG.js";import"./DateTimeText-D6RW9Z_V.js";import"./FullHexText-Bixypd9K.js";import"./HexText-DCLf9LZz.js";import"./MoneyText-BdviuoM2.js";import"./RelativeTimeSinceDateText-Bo4ot7P4.js";import"./TaggedBase64Text-Cgw7TagP.js";import"./TimeText-BIeM4-F8.js";import"./Heading2-Pq1yfmef.js";/* empty css                */import"./index-DAPUY6YU.js";import"./index-JrXKFfwy.js";import"./client-BZLXbOhf.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
