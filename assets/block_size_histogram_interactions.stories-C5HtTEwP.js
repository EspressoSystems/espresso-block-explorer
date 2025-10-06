import{j as m}from"./iframe-Dsdv_jy8.js";import{D as f}from"./LoadingProvider-ZcPlxnY_.js";import"./DateTimeFormattersProvider-B3ic2tiK.js";import"./LocaleProvider-huCKFdsY.js";import"./NavDrawerStateProvider-DV3EzpoW.js";import"./NowProvider-Bqys-kMq.js";import"./NumberFormattersProvider-QO8j60_X.js";import"./PathResolverProvider-DQIE-5jR.js";import{f as v,d as p,b as y,i as w}from"./functional-CtE-8sCS.js";import{B as d}from"./BlockSizeHistogram-CU06Y22R.js";import{a as s}from"./react.esm-Bfrtalqq.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-DHgZ7T60.js";import"./string-BOqmI8nC.js";import"./UnimplementedError-DbqcLgyi.js";import"./Card-BWis1JEF.js";import"./higher_order-BcrgzP0b.js";import"./CopyButton-HuO0By6z.js";import"./CheckCircle-DJ5CyHk3.js";import"./SVGIconBase-rh-N70d0.js";import"./Copy-W_oyfHjZ.js";import"./typography-G6sVg_FI.js";import"./label-DB6Cj3T1.js";import"./Text-BU7JBOLk.js";import"./CircularProgressIndicator-CQjSHitw.js";import"./ContainerLoading-DYbv62WW.js";import"./SVGToolTip-BrrObrxH.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CrclVv3b.js";import"./ByteSizeText-CNXXfO_U.js";import"./base64-jao5sNyx.js";/* empty css               */import"./CopyHex-CHRZT22W.js";import"./array_buffer-6KHtE3L0.js";import"./DateTimeText-BIynWLnf.js";import"./FullHexText-CwgTkTKw.js";import"./HexText-BJrTps3h.js";import"./MoneyText-BUVv8dkL.js";import"./RelativeTimeText-BgVYf3V3.js";import"./TaggedBase64Text-Dw0ZBxuI.js";import"./TimeText-BZvDg1Q4.js";import"./Heading2-zzl4Nfa0.js";/* empty css                */import"./index-RQOMNxP7.js";import"./index-CiMbshgK.js";import"./client-Clp3j6EK.js";const{expect:i,userEvent:g,waitFor:h,within:x}=__STORYBOOK_MODULE_TEST__,l=async t=>{const a=await x(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function b(t){return s(async()=>{t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})})}async function O(t,a){return s(async()=>(await b(t),a.setAttribute("data-hover","true"),g.hover(a)))}const I=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},E=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>s(async()=>{const o=await l(t);await h(async()=>{const B=await l(t);i(B).toBeInTheDocument()},{timeout:1e3});const e=I(o),u=E(o),H=v(p(e,a)),c=v(p(u,a));await O(t,H),await h(async()=>{i(c).toBeVisible()}),i(c).toBeVisible()}),S=async t=>s(async()=>b(t)),T=({data:t,...a})=>m.jsx(f.Provider,{value:t,children:m.jsx(d,{...a})}),gt={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:T},n={args:{data:{blocks:[...w(10)],blockSize:[...w(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await S(t)})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xt=["MouseOverBar"];export{n as MouseOverBar,xt as __namedExportsOrder,gt as default};
