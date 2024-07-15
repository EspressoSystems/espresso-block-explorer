import{j as v}from"./jsx-runtime-C8OW3RLV.js";import{D as g}from"./LoadingProvider-D-gSICWy.js";import"./DateTimeFormattersProvider-Br3pQ116.js";import"./LocaleProvider-BQ-iXQt3.js";import"./NavDrawerStateProvider-RUkJKNKz.js";import"./NowProvider-DGXfqGr9.js";import"./NumberFormattersProvider-B153Cyqz.js";import"./PathResolverProvider-Bt7H5csd.js";import{f as c,d as m,b as u,i as h}from"./functional-C-MJgtC4.js";import{B as I}from"./BlockSizeHistogram-wPszuwLL.js";import{a as w,e as n,w as x,u as O}from"./index-q1sypPMF.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./string-X3Gg19gt.js";import"./higher_order-BhpYKJuV.js";import"./typography-CBcnIq8a.js";import"./Text-BU7JBOLk.js";import"./SVGToolTip-DOfXbiYJ.js";import"./SVGPathBuilder-CAxdfrWF.js";import"./AffineTransform-Dl54L-L7.js";import"./NumberText-CEiknsW6.js";import"./index-Dk74W0Oi.js";import"./ByteSizeText-Dm-Xof9e.js";import"./DateTimeText-CbTfWNwF.js";import"./RelativeTimeText-CJcgDeEz.js";import"./TimeText-Bc4kADFb.js";import"./Heading2-Bs5hWmcH.js";/* empty css                */const p=async a=>{const t=await x(a).findByRole("graphics-datachart");return await n(t).toBeTruthy(),await n(t).toBeInTheDocument(),t};function B(a){a.querySelectorAll('[data-hover="true"]').forEach(t=>{t.removeAttribute("data-hover")})}async function S(a,t){return B(a),t.setAttribute("data-hover","true"),O.hover(t)}const E=a=>{const o=a.querySelectorAll(".bbox")[Symbol.iterator]();return u(o,e=>e)},A=a=>{const o=a.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,e=>e)},r=async(a,t)=>{const o=await p(a);await w(async()=>{const H=await p(a);n(H).toBeInTheDocument()},{timeout:1e3});const e=E(o),f=A(o),d=c(m(e,t)),s=c(m(f,t));await S(a,d),await w(async()=>{n(s).toBeVisible()}),n(s).toBeVisible()},T=async a=>B(a),k=({data:a,...t})=>v(g.Provider,{value:a,children:v(I,{...t})}),na={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:k},i={args:{data:{blocks:[...h(10)],blockSize:[...h(10)]}},play:async({canvasElement:a,step:t})=>{await t("Hover over first bar",async()=>{await r(a,0)}),await t("Hover over second bar",async()=>{await r(a,1)}),await t("Hover over third bar",async()=>{await r(a,2)}),await t("Hover over fourth bar",async()=>{await r(a,3)}),await t("Hover over fifth bar",async()=>{await r(a,4)}),await t("Hover over sixth bar",async()=>{await r(a,5)}),await t("Hover over seventh bar",async()=>{await r(a,6)}),await t("Hover over eighth bar",async()=>{await r(a,7)}),await t("Hover over ninth bar",async()=>{await r(a,8)}),await t("Hover over tenth bar",async()=>{await r(a,9)}),await t("Mouse off",async()=>{await T(a)})}};var l,b,y;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      await hoverOverIthBar(canvasElement, 0);
    });
    await step('Hover over second bar', async () => {
      await hoverOverIthBar(canvasElement, 1);
    });
    await step('Hover over third bar', async () => {
      await hoverOverIthBar(canvasElement, 2);
    });
    await step('Hover over fourth bar', async () => {
      await hoverOverIthBar(canvasElement, 3);
    });
    await step('Hover over fifth bar', async () => {
      await hoverOverIthBar(canvasElement, 4);
    });
    await step('Hover over sixth bar', async () => {
      await hoverOverIthBar(canvasElement, 5);
    });
    await step('Hover over seventh bar', async () => {
      await hoverOverIthBar(canvasElement, 6);
    });
    await step('Hover over eighth bar', async () => {
      await hoverOverIthBar(canvasElement, 7);
    });
    await step('Hover over ninth bar', async () => {
      await hoverOverIthBar(canvasElement, 8);
    });
    await step('Hover over tenth bar', async () => {
      await hoverOverIthBar(canvasElement, 9);
    });
    await step('Mouse off', async () => {
      await unhoverAll(canvasElement);
    });
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ia=["MouseOverBar"];export{i as MouseOverBar,ia as __namedExportsOrder,na as default};
