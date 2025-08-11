import{j as c}from"./iframe-B8QM7YzT.js";import{D as g}from"./LoadingProvider-B39JWdAl.js";import"./DateTimeFormattersProvider-BFTAYU1H.js";import"./LocaleProvider-COHzpDxl.js";import"./NavDrawerStateProvider-DH9oZpuO.js";import"./NowProvider-5nmAZ7lz.js";import"./NumberFormattersProvider-C3nNPFFr.js";import"./PathResolverProvider-C88hU1oa.js";import{f as v,d as m,b as u,i as p}from"./functional-C2YPzjZP.js";import{B as x}from"./BlockSizeHistogram-BjCFYD6t.js";import"./MissingElementError-BiJAxgGE.js";import"./string-BI8AIx1I.js";import"./UnimplementedError-N0odIfDD.js";import"./Card-Cl2mv-h9.js";import"./higher_order-Bes1iNRk.js";import"./CopyButton-BFTSi8EA.js";import"./CheckCircle-Ckm2qCC6.js";import"./SVGIconBase-Bo3pZ3HU.js";import"./Copy-BnpNW3Xy.js";import"./typography-dF_xh9UT.js";import"./label-hvDw7S-G.js";import"./Text-BU7JBOLk.js";import"./CircularProgressIndicator-Cfy-C23x.js";import"./ContainerLoading-jqsYJP2p.js";import"./SVGToolTip-VqRae1-B.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./AffineTransform-DiV9SxhF.js";import"./NumberText-BASKf0dO.js";import"./ByteSizeText-DhKL_JWn.js";import"./base64-r9vyOGQT.js";/* empty css               */import"./CopyHex-BisNjgMf.js";import"./array_buffer-CitSjtn6.js";import"./DateTimeText-Ba7j_GZG.js";import"./FullHexText-Cvhkr5BV.js";import"./HexText-Dp4DXeKd.js";import"./MoneyText-DwIRTqf1.js";import"./RelativeTimeText-BGu8RDko.js";import"./TaggedBase64Text-D349AD4E.js";import"./TimeText-DO4vjzKE.js";import"./Heading2-CqORiGZe.js";/* empty css                */const{expect:i,userEvent:O,waitFor:h,within:I}=__STORYBOOK_MODULE_TEST__,w=async t=>{const a=await I(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function B(t){t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})}async function E(t,a){return B(t),a.setAttribute("data-hover","true"),O.hover(a)}const S=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return u(o,e=>e)},T=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,e=>e)},r=async(t,a)=>{const o=await w(t);await h(async()=>{const H=await w(t);i(H).toBeInTheDocument()},{timeout:1e3});const e=S(o),d=T(o),f=v(m(e,a)),s=v(m(d,a));await E(t,f),await h(async()=>{i(s).toBeVisible()}),i(s).toBeVisible()},A=async t=>B(t),_=({data:t,...a})=>c.jsx(g.Provider,{value:t,children:c.jsx(x,{...a})}),dt={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:_},n={args:{data:{blocks:[...p(10)],blockSize:[...p(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await A(t)})}};var l,b,y;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ft=["MouseOverBar"];export{n as MouseOverBar,ft as __namedExportsOrder,dt as default};
