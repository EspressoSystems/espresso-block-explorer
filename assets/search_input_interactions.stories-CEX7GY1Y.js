import{j as w}from"./iframe-zEcEksBb.js";import{C as d,F as g}from"./CappuccinoHotShotQueryServiceAPIContext-DC1WOFXZ.js";import{S as R}from"./SearchInput-6Vdj6o9i.js";import"./UnimplementedError-17tXTyU9.js";import"./string-D0u4-xyR.js";import"./array_buffer-BKVV0l5M.js";import"./base64-Dx-bhXjM.js";import"./functional-BS7OJ5eK.js";import"./MissingElementError-YFeWEE8W.js";import"./url-BL_yoWaS.js";import"./monetary_value-CZcT9WbV.js";import"./TaggedBase64-KfoUSl3M.js";import"./generateFakeData-UQf8nJ8g.js";import"./sleep-CW-vxfof.js";import"./data-Cr5z5ONv.js";import"./LoadingProvider-BMrX2k61.js";import"./FetchError-DsbqzoSu.js";import"./NotFoundError-Dda3nNUu.js";import"./PromiseResolver-BiyWZgkv.js";import"./ProvideAsyncStates-xIzp1Eue.js";import"./IconButton-NB6kmce3.js";import"./higher_order-BfTEeOwN.js";import"./Button-akoQnLXo.js";import"./label-DnJQPYAc.js";import"./PathResolverProvider-BY6HTwpT.js";import"./Card-DSBP5ZLS.js";import"./NumberText-B_RduDOO.js";import"./NumberFormattersProvider-DB0fdcoi.js";import"./LocaleProvider-ysY4q8_d.js";import"./RelativeTimeText-COlSF0AU.js";import"./DateTimeFormattersProvider-D90xWuNL.js";import"./NowProvider-BzxzTsO6.js";import"./Text-BU7JBOLk.js";import"./typography-B3yGvuWM.js";import"./SearchGlass-Dn-nQPzb.js";import"./SVGIconBase-BNeTmGDn.js";const{expect:a,userEvent:o,waitFor:S,within:u}=__STORYBOOK_MODULE_TEST__,B=async t=>{const e=await u(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},i=async t=>{const e=await B(t);return await o.setup().click(e),await a(e).toHaveFocus(),e},T=async(t,e)=>{await i(t),await o.keyboard(e)},D=async t=>{await T(t,"block~"),await S(async()=>{const r=await u(t).findByRole("search");a(r).toBeInTheDocument(),await h(t),a(r).toBeVisible()},{timeout:5e3});const e=await u(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},s=async t=>{const e=await u(t).findByRole("search");return a(e).toBeInTheDocument(),e},I=async t=>{const r=(await s(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},h=async t=>{const e=await s(t),r=await I(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},k=async t=>{await i(t);const e=await h(t),r=e.length;for(let n=0;n<r;n++){await o.keyboard("{ArrowDown}");const c=e[n].children[0];a(c).toBeInTheDocument(),a(c).toHaveAttribute("data-selected","true")}},A=async t=>{await i(t);const e=await s(t);await o.keyboard("{ArrowDown}"),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await i(t);const e=await h(t),r=e.length;for(let n=0;n<r;n++){await o.keyboard("{ArrowUp}");const c=e[r-1-n].children[0];a(c).toBeInTheDocument(),a(c).toHaveAttribute("data-selected","true")}},C=async t=>{await i(t);const e=await s(t);await o.keyboard("{ArrowUp}"),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},f=async t=>{await i(t);const e=await s(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o.keyboard("{Backspace>7/}"),await S(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},P=t=>w.jsx(d.Provider,{value:new g,children:w.jsx(R,{...t})}),wt={title:"Components/Page Sections/Search Input/Interactions",component:P},l={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await i(t)}),await e("Search for Blocks",async()=>{await D(t)}),await e("Navigate down through all search results",async()=>{await k(t)}),await e("Selecting down again should return to the original search term",async()=>{await A(t)}),await e("Navigate up through all search results",async()=>{await b(t)}),await e("Selecting up again should return to the original search term",async()=>{await C(t)}),await e("Clear Search Results",async()=>{await f(t)})}};var m,p,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    await step('Select the Search Bar', async () => {
      await interactionSelectSearchBar(canvasElement);
    });
    await step('Search for Blocks', async () => {
      await interactionKeyInBlocksForSearch(canvasElement);
    });
    await step('Navigate down through all search results', async () => {
      await interactionNavigateDownThroughAllSearchResults(canvasElement);
    });
    await step('Selecting down again should return to the original search term', async () => {
      await interactionEnteringKeyDownAgainShouldReturnToSearchTerm(canvasElement);
    });

    // Going the other direction should word as well
    await step('Navigate up through all search results', async () => {
      await interactionNavigateUpThroughAllSearchResults(canvasElement);
    });
    await step('Selecting up again should return to the original search term', async () => {
      await interactionEnteringKeyUpAgainShouldReturnToSearchTerm(canvasElement);
    });
    await step('Clear Search Results', async () => {
      await interactiveSelectAllDelete(canvasElement);
    });
  }
}`,...(y=(p=l.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const mt=["PerformSearch"];export{l as PerformSearch,mt as __namedExportsOrder,wt as default};
