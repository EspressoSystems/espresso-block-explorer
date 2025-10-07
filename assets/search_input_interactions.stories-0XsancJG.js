import{j as m}from"./iframe-DfHNakLQ.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-DwzTFUgH.js";import{S as d}from"./SearchInput-61QIp4mp.js";import{a as o}from"./react.esm-Cm673hQL.js";import"./preload-helper-PPVm8Dsz.js";import"./UnimplementedError-CRtBpVRh.js";import"./string-elRJFjrg.js";import"./array_buffer-bVPwHeb6.js";import"./base64-CGLM76xc.js";import"./functional-CBrBKmKr.js";import"./MissingElementError-B2OGDzdH.js";import"./url-BuIfv8Us.js";import"./monetary_value-DoxeGWYT.js";import"./TaggedBase64-DjV36QCx.js";import"./generateFakeData-ClpyRu3C.js";import"./sleep-CW-vxfof.js";import"./data-DH9p-Qw3.js";import"./LoadingProvider-BYJIF-mI.js";import"./FetchError-CPl6GbM7.js";import"./NotFoundError-BClVlkgY.js";import"./PromiseResolver-DmdlTb6w.js";import"./ProvideAsyncStates-CLD6pMRR.js";import"./IconButton-wYU5rcNF.js";import"./higher_order-WjuPy8Zm.js";import"./Button-SHv42XLb.js";import"./label-BLTnAsWt.js";import"./PathResolverProvider-jxTg-n2M.js";import"./Card-DbcJ10qU.js";import"./NumberText-Djfs-eB4.js";import"./NumberFormattersProvider-CueCmy4H.js";import"./LocaleProvider-BjoXYII7.js";import"./RelativeTimeText-Be7tEprs.js";import"./DateTimeFormattersProvider-CpVKlB1P.js";import"./NowProvider-DkY9ettO.js";import"./Text-BU7JBOLk.js";import"./typography-Ca4ZlVP6.js";import"./SearchGlass-BrpEEXUQ.js";import"./SVGIconBase-sp_JN_RY.js";import"./index-DhHtz-RK.js";import"./index-BuiErUGq.js";import"./client-CH6zA-36.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await w(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},w=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await w(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await w(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>m.jsx(y.Provider,{value:new S,children:m.jsx(d,{...t})}),yt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
