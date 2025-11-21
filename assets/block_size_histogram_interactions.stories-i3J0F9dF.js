import{j as m}from"./iframe-MDHi5BtY.js";import{D as f}from"./LoadingProvider-CWKs1OKS.js";import"./DateTimeFormattersProvider-CpgfAdO1.js";import"./LocaleProvider-C_FH1fdc.js";import"./PagePathProvider-CQM9bELx.js";import"./NowProvider-CcJI5I22.js";import"./NumberFormattersProvider-DXmL9zdB.js";import"./PathResolverProvider-BcSX6lnW.js";import{f as v,d as p,b as y,i as w}from"./functional-45VDB5x3.js";import{B as d}from"./BlockSizeHistogram-BA2BbUSD.js";import{a as s}from"./react.esm-Bmorjp6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-B_NJu7nu.js";import"./higher_order-BL5UuIFh.js";import"./LoadingShimmer-BDAUbKXw.js";import"./SkeletonContent-3WrbC6qB.js";import"./typography-DGJbNoek.js";import"./label-BK9IFAA1.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D3g4RYIw.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-cUrabOGa.js";import"./CheckCircleFilled-BxcF7Twl.js";import"./SVGIconBase-CcReponG.js";import"./Copy-C2kKIXDZ.js";/* empty css               */import"./CircularProgressIndicator-CB-8i12g.js";import"./ContainerLoading-DN71pZi4.js";import"./SVGToolTip-CFz4Wi22.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BIzYnAeN.js";import"./ByteSizeText-CQo8YJLi.js";import"./CopyHex-CsU9PPWX.js";import"./array_buffer-C6GouG76.js";import"./DateTimeText-C2CZTObp.js";import"./FullHexText-Bb8PrC1l.js";import"./HexText-BJr49gt8.js";import"./MoneyText-DF0iNO0P.js";import"./RelativeTimeSinceDateText-CR5XJemD.js";import"./TaggedBase64Text-DX81tLVE.js";import"./TimeText-DSVutLYM.js";import"./Heading2-Dbd4cIE1.js";/* empty css                */import"./index-Bu6H0fX7.js";import"./index-Dx45Pk4I.js";import"./client-CEW48UON.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
