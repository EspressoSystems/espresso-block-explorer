import{j as m}from"./iframe-f2wUEmLV.js";import{D as f}from"./LoadingProvider-ByZJpGMG.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PagePathProvider-DMTB2oDq.js";import"./NowProvider-DGWfNrty.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./PathResolverProvider-DHybasnL.js";import{f as v,d as p,b as y,i as w}from"./functional-D84nw2eW.js";import{B as d}from"./BlockSizeHistogram-N3p8kQGi.js";import{a as s}from"./react.esm-BfNgPaiw.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-BhNRY1Nn.js";import"./higher_order-DPELDOyr.js";import"./LoadingShimmer-CGubZBoN.js";import"./SkeletonContent-CqhLHFcX.js";import"./typography-BFtRVX_Y.js";import"./label-C9J6_eC3.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D7GxvIq0.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-zsN0S60c.js";import"./CheckCircleFilled-yzKlL67t.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Copy-D321I0JD.js";/* empty css               */import"./CircularProgressIndicator-DrX2esjz.js";import"./ContainerLoading-DHHYO2Cb.js";import"./SVGToolTip-DVtKHKlZ.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Co9Msrjd.js";import"./ByteSizeText-DjbeH3C1.js";import"./CopyHex-DkQu5fj-.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-jZCy6L4K.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-Ds4usxHH.js";import"./MoneyText-BfVqQ9Nl.js";import"./RelativeTimeSinceDateText-tg_Ib5NI.js";import"./TaggedBase64Text-BWB_yix6.js";import"./TimeText-Clv532My.js";import"./Heading2-DFXogWT3.js";/* empty css                */import"./index-ChcI8Gvf.js";import"./index-Cd6Sl8gl.js";import"./client-9wIUT5RQ.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
