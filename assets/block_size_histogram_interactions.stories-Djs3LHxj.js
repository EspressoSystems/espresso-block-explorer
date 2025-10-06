import{j as c}from"./iframe-qvfUXTkm.js";import{D as g}from"./LoadingProvider-DgQN9Zdn.js";import"./DateTimeFormattersProvider-DbqxsnDS.js";import"./LocaleProvider-jwYmqFIt.js";import"./NavDrawerStateProvider-BcOt6WS_.js";import"./NowProvider-CD1cKyLv.js";import"./NumberFormattersProvider-DscmQNwX.js";import"./PathResolverProvider-BlfBXr5Z.js";import{f as v,d as m,b as u,i as p}from"./functional-C2YPzjZP.js";import{B as x}from"./BlockSizeHistogram-yTH7dvul.js";import"./MissingElementError-BiJAxgGE.js";import"./string-BI8AIx1I.js";import"./UnimplementedError-N0odIfDD.js";import"./Card-C0mh941P.js";import"./higher_order-BbtlCIJ_.js";import"./CopyButton-oPMx-T-a.js";import"./CheckCircle-sfaHyw2d.js";import"./SVGIconBase-CzzofrIY.js";import"./Copy-DRBdDtq4.js";import"./typography-CFJKql1h.js";import"./label-WKmojHTx.js";import"./Text-BU7JBOLk.js";import"./CircularProgressIndicator-DhO9C0Tz.js";import"./ContainerLoading-ghir2vYi.js";import"./SVGToolTip-8JuMYVlh.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./AffineTransform-DiV9SxhF.js";import"./NumberText-D72ET3U5.js";import"./ByteSizeText-BewKtfAd.js";import"./base64-r9vyOGQT.js";/* empty css               */import"./CopyHex-DPFo-oXO.js";import"./array_buffer-CitSjtn6.js";import"./DateTimeText-Dq_BAY34.js";import"./FullHexText-28uF8u5G.js";import"./HexText-Dy2Nti68.js";import"./MoneyText-B6xVsT9y.js";import"./RelativeTimeText-Cc8qJJFF.js";import"./TaggedBase64Text-CKuxw_kw.js";import"./TimeText-CGgzK3I3.js";import"./Heading2-BPinPkUy.js";/* empty css                */const{expect:i,userEvent:O,waitFor:h,within:I}=__STORYBOOK_MODULE_TEST__,w=async t=>{const a=await I(t).findByRole("graphics-datachart");return await i(a).toBeTruthy(),await i(a).toBeInTheDocument(),a};function B(t){t.querySelectorAll('[data-hover="true"]').forEach(a=>{a.removeAttribute("data-hover")})}async function E(t,a){return B(t),a.setAttribute("data-hover","true"),O.hover(a)}const S=t=>{const o=t.querySelectorAll(".bbox")[Symbol.iterator]();return u(o,e=>e)},T=t=>{const o=t.querySelectorAll(".tooltip")[Symbol.iterator]();return u(o,e=>e)},r=async(t,a)=>{const o=await w(t);await h(async()=>{const H=await w(t);i(H).toBeInTheDocument()},{timeout:1e3});const e=S(o),d=T(o),f=v(m(e,a)),s=v(m(d,a));await E(t,f),await h(async()=>{i(s).toBeVisible()}),i(s).toBeVisible()},A=async t=>B(t),_=({data:t,...a})=>c.jsx(g.Provider,{value:t,children:c.jsx(x,{...a})}),dt={title:"Components/Page Sections/Histogram/Block Size/Interactions",component:_},n={args:{data:{blocks:[...p(10)],blockSize:[...p(10)]}},play:async({canvasElement:t,step:a})=>{await a("Hover over first bar",async()=>{await r(t,0)}),await a("Hover over second bar",async()=>{await r(t,1)}),await a("Hover over third bar",async()=>{await r(t,2)}),await a("Hover over fourth bar",async()=>{await r(t,3)}),await a("Hover over fifth bar",async()=>{await r(t,4)}),await a("Hover over sixth bar",async()=>{await r(t,5)}),await a("Hover over seventh bar",async()=>{await r(t,6)}),await a("Hover over eighth bar",async()=>{await r(t,7)}),await a("Hover over ninth bar",async()=>{await r(t,8)}),await a("Hover over tenth bar",async()=>{await r(t,9)}),await a("Mouse off",async()=>{await A(t)})}};var l,b,y;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
