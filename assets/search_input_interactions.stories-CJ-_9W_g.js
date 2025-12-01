import{j as w}from"./iframe-6qRHL8kK.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-igIphiue.js";import{S as d}from"./SearchInput-CTUzlAJt.js";import{a as o}from"./react.esm-mVV27ITt.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-XN1bAbaS.js";import"./UnimplementedError-ByG_fP0m.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./blocks-Vs1RfMPo.js";import"./sleep-CW-vxfof.js";import"./monetary_value-h2r6a0FR.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CSIwxIxH.js";import"./base64-BqC1I8uO.js";import"./nodes-DRGfJywc.js";import"./functional-DfB4rlpz.js";import"./MissingElementError-BvD5kqNE.js";import"./LoadingProvider-CiRo7IyT.js";import"./array_buffer-BXDx5OgG.js";import"./bigint-CUIR6GFU.js";import"./url-BemJHibL.js";import"./FetchError-CLDKU5UE.js";import"./NotFoundError-7l5Ugwjq.js";import"./validator-BUSEmKKD.js";import"./wallet_address-CTiRjRjo.js";import"./PromiseResolver-DBNJ2pdB.js";import"./ProvideAsyncStates-9hJLkdZQ.js";import"./IconButton-B6uM_bHc.js";import"./higher_order-BVrk3P2P.js";import"./Button-imQ_92ab.js";import"./label-DaaYS4Ka.js";import"./RelativeTimeSinceDateText-Bo4ot7P4.js";import"./NowProvider-DFWj2jBI.js";import"./DateTimeFormattersProvider-CTAmKTvQ.js";import"./LocaleProvider-Dn-Cb6v6.js";import"./PathResolverProvider-BhkdUZ3l.js";import"./Card-NP-Eb91a.js";import"./NumberText-CX4omtIU.js";import"./NumberFormattersProvider-BaYHxeOC.js";import"./Text-BU7JBOLk.js";import"./typography-CU0Q2b4v.js";import"./SearchGlass-BuDCMh7z.js";import"./SVGIconBase-A4DT5FtI.js";import"./Container-ClpjZ9sC.js";import"./index-DAPUY6YU.js";import"./index-JrXKFfwy.js";import"./client-BZLXbOhf.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Dt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const It=["PerformSearch"];export{u as PerformSearch,It as __namedExportsOrder,Dt as default};
