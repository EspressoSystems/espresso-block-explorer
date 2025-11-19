import{j as w}from"./iframe-CKCSKCZk.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-DJWaOXW7.js";import{S as d}from"./SearchInput-Djrrv62A.js";import{a as o}from"./react.esm-BNPRQ27L.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-D8Fg5z6r.js";import"./UnimplementedError-DRDLdWuq.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./array_buffer-DuWTC5ee.js";import"./base64-Dx8wLaZf.js";import"./functional-D84nw2eW.js";import"./MissingElementError-Dm9GiuiL.js";import"./url-DwwBj-2c.js";import"./monetary_value-q68MMcLV.js";import"./TaggedBase64-CL6rcPDn.js";import"./blocks-DqaRurhN.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./nodes-sPTSRSIJ.js";import"./LoadingProvider-IZAf8NZo.js";import"./FetchError-ljfnF1aF.js";import"./NotFoundError-B7azoDNK.js";import"./PromiseResolver-CmQlwWcQ.js";import"./ProvideAsyncStates-CKttSOi_.js";import"./IconButton-DQw20JdF.js";import"./higher_order-DLiNGwX1.js";import"./Button-mWO67oWo.js";import"./label-Dymv7dcu.js";import"./RelativeTimeSinceDateText-CRFW37nm.js";import"./NowProvider-DDm0tQ2h.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PathResolverProvider-65y-23gj.js";import"./Card-D-5_3MUm.js";import"./NumberText-3GIByMNg.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./Text-BU7JBOLk.js";import"./typography-BFEyteYy.js";import"./SearchGlass-CfPtz_kH.js";import"./SVGIconBase-DGbb4H2y.js";import"./Container-BX8yUewp.js";import"./index-DmGiuwIY.js";import"./index-DR30vb4A.js";import"./client-DX8xMgVj.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Rt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Bt=["PerformSearch"];export{u as PerformSearch,Bt as __namedExportsOrder,Rt as default};
