import{j as m}from"./iframe-BoSgNqBp.js";import{D as f}from"./LoadingProvider-CwAifW4j.js";import"./DateTimeFormattersProvider-FuJoOaA5.js";import"./LocaleProvider-f-l0Jujy.js";import"./PagePathProvider-C5stwEi3.js";import"./NowProvider-C2Sgz9rf.js";import"./NumberFormattersProvider-CsVqC7rh.js";import"./PathResolverProvider-BUhwMhFL.js";import{f as v,d as p,b as y,i as w}from"./functional-D84nw2eW.js";import{B as d}from"./BlockSizeHistogram-D_gKgidJ.js";import{a as s}from"./react.esm-CFc2OBhr.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-Dbsyu_3P.js";import"./higher_order-DFRpXnkL.js";import"./LoadingShimmer-MIx6GssT.js";import"./SkeletonContent-B3ybZy_b.js";import"./typography-Dp7dq7gN.js";import"./label-DuDeZ7Eb.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-CQNkYCLE.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-BWFxkgp5.js";import"./CheckCircleFilled-C6Hg_-lA.js";import"./SVGIconBase-DrKpLRmr.js";import"./Copy-BbW09CJG.js";/* empty css               */import"./CircularProgressIndicator-DttGafIS.js";import"./ContainerLoading-CDNXF-xb.js";import"./SVGToolTip-HLcXJpiJ.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-ojqcivk1.js";import"./ByteSizeText-Dc4ZRBh4.js";import"./CopyHex-BaVGMw0R.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-DvkobbUc.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-CFmFig5Q.js";import"./MoneyText-C1SfUPAA.js";import"./RelativeTimeSinceDateText-C4bjOK2m.js";import"./TaggedBase64Text-Dz6_0k8C.js";import"./TimeText-BtIw6-AG.js";import"./Heading2-FBM4VAmD.js";/* empty css                */import"./index-DIetdbzc.js";import"./index-D6cO6e_L.js";import"./client-xeh3sM4i.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
