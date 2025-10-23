import{j as m}from"./iframe-B_UBkTbs.js";import{D as f}from"./LoadingProvider-DRkSo8Wr.js";import"./DateTimeFormattersProvider-FGdD03H8.js";import"./LocaleProvider-0J8ELAGn.js";import"./PagePathProvider-BlRtpPfA.js";import"./NowProvider-Cmvro9JC.js";import"./NumberFormattersProvider-Bqe_gtsw.js";import"./PathResolverProvider--Psz2VXI.js";import{f as v,d as p,b as y,i as w}from"./functional-CtVX7zWU.js";import{B as d}from"./BlockSizeHistogram-CUzcjNep.js";import{a as s}from"./react.esm-CyCGEsEh.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-Bplc6Qy_.js";import"./higher_order-DgYhC1-i.js";import"./SkeletonContent-BhIcyZaZ.js";import"./typography-CoEoGMVz.js";import"./label-2Mfe7Pxx.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-yvG3F04G.js";import"./base64-CwylSrof.js";import"./CopyButton-_nqs0ufP.js";import"./CheckCircleFilled-5wQQPuTo.js";import"./SVGIconBase-BHUxzGpP.js";import"./Copy-B8t-Jw3-.js";/* empty css               */import"./CircularProgressIndicator-D-iBNzph.js";import"./ContainerLoading-RzFPN2xR.js";import"./SVGToolTip-BfsHikRj.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BmUK0MTT.js";import"./ByteSizeText-D8_yG-jC.js";import"./CopyHex-Bl4-HLJS.js";import"./array_buffer-ChxgVYUa.js";import"./DateTimeText-Bbsw7ZiQ.js";import"./FullHexText-P0-GHCQv.js";import"./HexText-QYy1vQJd.js";import"./MoneyText-Dyj-gmnY.js";import"./RelativeTimeText-CZ62dNGQ.js";import"./TaggedBase64Text-Dvo2EXLC.js";import"./TimeText-Wyxs47px.js";import"./Heading2-DoBRMSDv.js";/* empty css                */import"./index-Do9tf19L.js";import"./index-D0XH7Lbi.js";import"./client-B3icF1e9.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),It={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Et=["MouseOverBar"];export{n as MouseOverBar,Et as __namedExportsOrder,It as default};
