import{j as m}from"./iframe-LIS-dxCY.js";import{D as f}from"./LoadingProvider-DxjZ0NgD.js";import"./DateTimeFormattersProvider-DKHY4Sy6.js";import"./LocaleProvider-CpxekBBi.js";import"./NavDrawerStateProvider-Bdan12C-.js";import"./NowProvider-DbFqtnj3.js";import"./NumberFormattersProvider-BQS9gj7A.js";import"./PathResolverProvider-FWM6m2CQ.js";import{f as v,d as p,b as y,i as w}from"./functional-CBrBKmKr.js";import{B as d}from"./BlockSizeHistogram-BDek-awb.js";import{a as s}from"./react.esm-R7jjQ3-N.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-B2OGDzdH.js";import"./string-elRJFjrg.js";import"./UnimplementedError-CRtBpVRh.js";import"./Card-DqZmgHWW.js";import"./higher_order-B4shpt_6.js";import"./SkeletonContent-Dc14eCe8.js";import"./typography-Ir_KRgMv.js";import"./label-CJY8brHO.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-B_kYzWnw.js";import"./base64-CGLM76xc.js";import"./CopyButton-2IgDnWno.js";import"./CheckCircle-BmZXH1vf.js";import"./SVGIconBase-CKCoJOKo.js";import"./Copy-WNDUSSUZ.js";/* empty css               */import"./CircularProgressIndicator-C1YnzehF.js";import"./ContainerLoading-C-s-22YD.js";import"./SVGToolTip-BbLUebin.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Cbk9Np_R.js";import"./ByteSizeText-Djz6TQ0l.js";import"./CopyHex-DK_eto34.js";import"./array_buffer-bVPwHeb6.js";import"./DateTimeText-CsO5pwj1.js";import"./FullHexText-BBYWB1AK.js";import"./HexText-Db0RzdvN.js";import"./MoneyText-CBwOL7jS.js";import"./RelativeTimeText-2QNeHZQD.js";import"./TaggedBase64Text-DywcAZqY.js";import"./TimeText-Cb0OiPYT.js";import"./Heading2-Bx-pAXCI.js";/* empty css                */import"./index-CihGMYkb.js";import"./index-Bw4eUraH.js";import"./client-BZQ4Q8IM.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await i(r).toBeTruthy(),await i(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,r)),c=v(p(u,r));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Ot={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
