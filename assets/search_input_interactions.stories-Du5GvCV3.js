import{j as m}from"./iframe-Dsdv_jy8.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-DkjGRxAx.js";import{S as d}from"./SearchInput-B6lHTOjb.js";import{a as o}from"./react.esm-Bfrtalqq.js";import"./preload-helper-PPVm8Dsz.js";import"./UnimplementedError-DbqcLgyi.js";import"./string-BOqmI8nC.js";import"./array_buffer-6KHtE3L0.js";import"./base64-jao5sNyx.js";import"./functional-CtE-8sCS.js";import"./MissingElementError-DHgZ7T60.js";import"./url-BnopUvm8.js";import"./monetary_value-zEjoirMu.js";import"./TaggedBase64-yXncOpRr.js";import"./generateFakeData-CJgVUPpv.js";import"./sleep-CW-vxfof.js";import"./data-BeJ5qedR.js";import"./LoadingProvider-ZcPlxnY_.js";import"./FetchError-Ba9CvRib.js";import"./NotFoundError-V2m6t4ee.js";import"./PromiseResolver-D417g7Z0.js";import"./ProvideAsyncStates-BdAP9c0y.js";import"./IconButton-DI0Cf13R.js";import"./higher_order-BcrgzP0b.js";import"./Button-zIdfC1HZ.js";import"./label-DB6Cj3T1.js";import"./PathResolverProvider-DQIE-5jR.js";import"./Card-BWis1JEF.js";import"./NumberText-CrclVv3b.js";import"./NumberFormattersProvider-QO8j60_X.js";import"./LocaleProvider-huCKFdsY.js";import"./RelativeTimeText-BgVYf3V3.js";import"./DateTimeFormattersProvider-B3ic2tiK.js";import"./NowProvider-Bqys-kMq.js";import"./Text-BU7JBOLk.js";import"./typography-G6sVg_FI.js";import"./SearchGlass-DxKbn0eh.js";import"./SVGIconBase-rh-N70d0.js";import"./index-RQOMNxP7.js";import"./index-CiMbshgK.js";import"./client-Clp3j6EK.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await w(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},w=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await w(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await w(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>m.jsx(y.Provider,{value:new S,children:m.jsx(d,{...t})}),yt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const St=["PerformSearch"];export{u as PerformSearch,St as __namedExportsOrder,yt as default};
