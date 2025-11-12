import{j as m}from"./iframe-DCPSZz_3.js";import{D as f}from"./LoadingProvider-Bf1m95A-.js";import"./DateTimeFormattersProvider-cQ3P3CXT.js";import"./LocaleProvider-BWtINspZ.js";import"./PagePathProvider-DCChvPC-.js";import"./NowProvider-NCwNHFL9.js";import"./NumberFormattersProvider-D3veI70u.js";import"./PathResolverProvider-Bqa8_97D.js";import{f as v,d as p,b as y,i as w}from"./functional-g5wG3Azh.js";import{B as d}from"./BlockSizeHistogram-Ds60vRgO.js";import{a as s}from"./react.esm-B3-VOCYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-B8LjTotE.js";import"./higher_order-CuXztvfh.js";import"./LoadingShimmer-5aSLAGZW.js";import"./SkeletonContent-twYoAYJ9.js";import"./typography-qws2gU0X.js";import"./label-CZL-CHP5.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BcKeP8my.js";import"./base64-KHURY7_E.js";import"./CopyButton-DCJivZJa.js";import"./CheckCircleFilled-CoSEID6J.js";import"./SVGIconBase-SJC07UFc.js";import"./Copy-DVTUcARM.js";/* empty css               */import"./CircularProgressIndicator-CsGr7d2o.js";import"./ContainerLoading-CDjhuIop.js";import"./SVGToolTip-JXBNr9tn.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-LA0gFWzT.js";import"./ByteSizeText-DkB5YFBp.js";import"./CopyHex-C68wIBen.js";import"./array_buffer-zIqOMhaQ.js";import"./DateTimeText-D0R4fo4z.js";import"./FullHexText-Cz-BU8xP.js";import"./HexText-BHWa3T91.js";import"./MoneyText-C728B48w.js";import"./RelativeTimeSinceDateText-BT_07pYp.js";import"./TaggedBase64Text-B6h2NRED.js";import"./TimeText-Czad-izx.js";import"./Heading2-DqT8fiYO.js";/* empty css                */import"./index-CoStvZ7i.js";import"./index-DIKh44Bc.js";import"./client-DBKWokK0.js";const{expect:e,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const r=await x(t).findByRole("graphics-datachart");return await e(r).toBeTruthy(),await e(r).toBeInTheDocument(),r};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(r=>{r.removeAttribute("data-hover")})})}async function O(t,r){return s(async()=>(await b(t),r.setAttribute("data-hover","true"),g.hover(r)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,i=>i)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,i=>i)},a=async(t,r)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);e(B).toBeInTheDocument()},{timeout:1e3});const i=I(o),u=E(o),H=v(p(i,r)),c=v(p(u,r));await O(t,H),await h(async()=>{e(c).toBeVisible()}),e(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...r})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...r})}),Et={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:r})=>{await r("Hover over first bar",async()=>{await a(t,0)}),await r("Hover over second bar",async()=>{await a(t,1)}),await r("Hover over third bar",async()=>{await a(t,2)}),await r("Hover over fourth bar",async()=>{await a(t,3)}),await r("Hover over fifth bar",async()=>{await a(t,4)}),await r("Hover over sixth bar",async()=>{await a(t,5)}),await r("Hover over seventh bar",async()=>{await a(t,6)}),await r("Hover over eighth bar",async()=>{await a(t,7)}),await r("Hover over ninth bar",async()=>{await a(t,8)}),await r("Hover over tenth bar",async()=>{await a(t,9)}),await r("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
