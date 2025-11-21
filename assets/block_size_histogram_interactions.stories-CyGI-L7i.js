import{j as m}from"./iframe-CsosU7ok.js";import{D as f}from"./LoadingProvider-AxA0aNAd.js";import"./DateTimeFormattersProvider-BofVQaY6.js";import"./LocaleProvider-CtIKevMd.js";import"./PagePathProvider-smkZoFme.js";import"./NowProvider-fe9o8zdM.js";import"./NumberFormattersProvider-BqBKZweo.js";import"./PathResolverProvider-DVBKdtu_.js";import{f as v,d as p,b as y,i as w}from"./functional-45VDB5x3.js";import{B as d}from"./BlockSizeHistogram-D1EWGRu8.js";import{a as s}from"./react.esm-HXUCLrtK.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-DD0Oymcq.js";import"./higher_order-DCgqxpyS.js";import"./LoadingShimmer-Djycb66H.js";import"./SkeletonContent-CB_9e_94.js";import"./typography-DX4Zo0Oa.js";import"./label-DO5WNxT3.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-DJyF7P_s.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-D5TyOSuO.js";import"./CheckCircleFilled-CUm5i6Tt.js";import"./SVGIconBase-DLBQdslh.js";import"./Copy-oqk4lSc-.js";/* empty css               */import"./CircularProgressIndicator-CksnPb9v.js";import"./ContainerLoading-CF0jGl1C.js";import"./SVGToolTip-EDVGPCPM.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-mFShU_q1.js";import"./ByteSizeText-CHylc-ig.js";import"./CopyHex-B_-p0ihJ.js";import"./array_buffer-C6GouG76.js";import"./DateTimeText-CwqrkJbI.js";import"./FullHexText-Bb8PrC1l.js";import"./HexText-Cbghy2Jb.js";import"./MoneyText-Q5mfBi_X.js";import"./RelativeTimeSinceDateText-Cj8Sp7hd.js";import"./TaggedBase64Text-dXsZMgr3.js";import"./TimeText-C7nc_xe4.js";import"./Heading2-CNK_n2uT.js";/* empty css                */import"./index-tYrwqES5.js";import"./index-BQffFVGz.js";import"./client-CEXsb7e4.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
