import{j as m}from"./iframe-CKCSKCZk.js";import{D as f}from"./LoadingProvider-IZAf8NZo.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PagePathProvider-Bck-CLYd.js";import"./NowProvider-DDm0tQ2h.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./PathResolverProvider-65y-23gj.js";import{f as v,d as p,b as y,i as w}from"./functional-D84nw2eW.js";import{B as d}from"./BlockSizeHistogram-DMVyarrv.js";import{a as s}from"./react.esm-BNPRQ27L.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-D-5_3MUm.js";import"./higher_order-DLiNGwX1.js";import"./LoadingShimmer-SEd6dP6q.js";import"./SkeletonContent-CmRaKWaw.js";import"./typography-BFEyteYy.js";import"./label-Dymv7dcu.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-GMKTmsri.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-DZtevsws.js";import"./CheckCircleFilled-DdPcBHVp.js";import"./SVGIconBase-DGbb4H2y.js";import"./Copy-Dw0OUX71.js";/* empty css               */import"./CircularProgressIndicator-BiHPzzIH.js";import"./ContainerLoading-Dv4_uZf3.js";import"./SVGToolTip-DG2Gbjio.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-3GIByMNg.js";import"./ByteSizeText-CpkVVQnn.js";import"./CopyHex-biThFeaG.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-H-Z2u3yn.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-BhuQynQ8.js";import"./MoneyText-DICOGhXe.js";import"./RelativeTimeSinceDateText-CRFW37nm.js";import"./TaggedBase64Text-D64-OEXT.js";import"./TimeText-D5Zaz2tF.js";import"./Heading2-Cx_zPzG4.js";/* empty css                */import"./index-DmGiuwIY.js";import"./index-DR30vb4A.js";import"./client-DX8xMgVj.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
