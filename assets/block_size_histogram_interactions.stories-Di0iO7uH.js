import{j as m}from"./iframe-DfHNakLQ.js";import{D as f}from"./LoadingProvider-BYJIF-mI.js";import"./DateTimeFormattersProvider-CpVKlB1P.js";import"./LocaleProvider-BjoXYII7.js";import"./NavDrawerStateProvider-CBukqRJJ.js";import"./NowProvider-DkY9ettO.js";import"./NumberFormattersProvider-CueCmy4H.js";import"./PathResolverProvider-jxTg-n2M.js";import{f as v,d as p,b as y,i as w}from"./functional-CBrBKmKr.js";import{B as d}from"./BlockSizeHistogram-CDFkcPWP.js";import{a as s}from"./react.esm-Cm673hQL.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-B2OGDzdH.js";import"./string-elRJFjrg.js";import"./UnimplementedError-CRtBpVRh.js";import"./Card-DbcJ10qU.js";import"./higher_order-WjuPy8Zm.js";import"./SkeletonContent-CW0kwa0b.js";import"./typography-Ca4ZlVP6.js";import"./label-BLTnAsWt.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-Bx6tqdL4.js";import"./base64-CGLM76xc.js";import"./CopyButton-BxNmo-_j.js";import"./CheckCircle-CCqTADYa.js";import"./SVGIconBase-sp_JN_RY.js";import"./Copy-fs5RTqu2.js";/* empty css               */import"./CircularProgressIndicator-CuEIuDl8.js";import"./ContainerLoading-KhiYAzoH.js";import"./SVGToolTip-CF4ID-3r.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Djfs-eB4.js";import"./ByteSizeText-DQ4WThAc.js";import"./CopyHex-bWIoTUnL.js";import"./array_buffer-bVPwHeb6.js";import"./DateTimeText-28NgEk6B.js";import"./FullHexText-BBYWB1AK.js";import"./HexText-d4Cv2NYH.js";import"./MoneyText-BAAZD7rs.js";import"./RelativeTimeText-Be7tEprs.js";import"./TaggedBase64Text-9C0KbZjD.js";import"./TimeText-ByVYwMyL.js";import"./Heading2-CaGpes7L.js";/* empty css                */import"./index-DhHtz-RK.js";import"./index-BuiErUGq.js";import"./client-CH6zA-36.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await i(r).toBeTruthy(),await i(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,r)),c=v(p(u,r));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Ot={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const It=["MouseOverBar"];export{n as MouseOverBar,It as __namedExportsOrder,Ot as default};
