import{j as m}from"./iframe-D8Xp_xun.js";import{D as d}from"./LoadingProvider-D2cYfIgs.js";import"./DateTimeFormattersProvider-Bs-k3ShI.js";import"./LocaleProvider-HRtypQVb.js";import"./PagePathProvider-BwB57U9a.js";import"./NowProvider-CfKugIy7.js";import"./NumberFormattersProvider-C5Ud-AgN.js";import"./PathResolverProvider-BDnGbYv1.js";import{g as v,d as p,b as y,i as w}from"./functional-By_9lidy.js";import{B as f}from"./BlockSizeHistogram-CMOGfY7e.js";import{a as s}from"./react.esm-BS51rXa5.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./Card-CdtDVXN5.js";import"./higher_order-B-N0AM-V.js";import"./LoadingShimmer-BiJlz9dw.js";import"./SkeletonContent-ClpcfR_p.js";import"./typography-BDqn6gU5.js";import"./label-Bv386zfi.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-CE3UsWwk.js";import"./base64-Dpbg5EzT.js";import"./CopyButton-BhgKxyZz.js";import"./CheckCircleFilled-BCdMj2IR.js";import"./SVGIconBase-CDuc6DRM.js";import"./Copy-D-xoe-Q-.js";/* empty css               */import"./CircularProgressIndicator-DZRaXo_R.js";import"./ContainerLoading-BiQyl9rU.js";import"./SVGToolTip-DsNueoz7.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-B7BvvFcg.js";import"./ByteSizeText-BltvAO_Y.js";import"./CopyHex-BLDyQRsm.js";import"./array_buffer-CXxOH-jd.js";import"./DateTimeText-BZPG7YWn.js";import"./FullHexText-BkYgJRpz.js";import"./HexText-BZ632ph6.js";import"./MoneyText-D5lyXJxB.js";import"./RelativeTimeSinceDateText-B_wR9imQ.js";import"./TaggedBase64Text-CYUB2ZYw.js";import"./TimeText-BRU_UUuH.js";import"./Heading2-BPmBbbIL.js";/* empty css                */import"./index-CyXMnPlm.js";import"./index-CrEpRO5z.js";import"./client-DGN3IcB0.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(d.Provider,{value:t,children:m.jsx(f,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
