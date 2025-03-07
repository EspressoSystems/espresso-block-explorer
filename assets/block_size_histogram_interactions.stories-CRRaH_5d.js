import{j as m}from"./jsx-runtime-BlAj40OV.js";import{D as g}from"./LoadingProvider-CI5XcxPx.js";import"./DateTimeFormattersProvider-UwNlAqY8.js";import"./LocaleProvider-B0_30C1H.js";import"./NavDrawerStateProvider-HpepdHmi.js";import"./NowProvider-D4xjbY-7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./PathResolverProvider-Xv58eOQd.js";import{f as v,d as c,b as y,i as p}from"./functional-BRpe52oq.js";import{B as x}from"./BlockSizeHistogram-D9sHhtkT.js";import{w as h,e as i,a as I,u as O}from"./index-asKdx3I-.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./string-CcoL8872.js";import"./Card-RHc01-Zp.js";import"./higher_order-DnPEgWEz.js";import"./SkeletonContent-CtSG0ZPy.js";import"./typography-D2UEeKZ7.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-C7pMj7u0.js";import"./base64-pX9cPfQ1.js";import"./CopyButton-BP2n2S2V.js";import"./CheckCircle-CjHLze1Z.js";import"./SVGIconBase-BLfr-WpK.js";import"./Copy-BuMhWLDb.js";/* empty css               */import"./CircularProgressIndicator-CCTWMgAg.js";import"./ContainerLoading-DxQsa2On.js";import"./SVGToolTip-PiyluX_7.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./AffineTransform-DiV9SxhF.js";import"./NumberText-C4Z_0tU7.js";import"./index-Dk74W0Oi.js";import"./ByteSizeText-Dv1cMyzR.js";import"./CopyHex-BYDmIsAM.js";import"./array_buffer-BDyIh9Vn.js";import"./DateTimeText-nfJttqAO.js";import"./FullHexText-BoJGKrEx.js";import"./HexText-Dw92hmJ-.js";import"./MoneyText-B78eRiA1.js";import"./RelativeTimeText-MUfD-2Qu.js";import"./TaggedBase64Text-0Q1D1i_-.js";import"./TimeText-D4oQFb1K.js";import"./Heading2-Dp8h0y0d.js";/* empty css                */const w=async t=>{const a=await I(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function B(t){t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})}async function E(t,a){return B(t),a.setAttribute("data-hover","true"),O.hover(a)}const S=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return y(o,e=>e)},A=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return y(o,e=>e)},r=async(t,a)=>{const o=await w(t);await h(async()=>{const H=await w(t);i(H).toBeInTheDocument()},{timeout:1e3});const e=S(o),f=A(o),d=v(c(e,a)),s=v(c(f,a));await E(t,d),await h(async()=>{i(s).toBeVisible()}),i(s).toBeVisible()},T=async t=>B(t),k=({data:t,...a})=>m.jsx(g.Provider,{value:t,children:m.jsx(x,{...a})}),gt={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:k},n={args:{data:{blocks:[...p(10)],blockSize:[...p(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await T(t)})}};var l,b,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const xt=["MouseOverBar"];export{n as MouseOverBar,xt as __namedExportsOrder,gt as default};
