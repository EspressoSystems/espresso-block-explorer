import{j as w}from"./iframe-f2wUEmLV.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-CVntcxNq.js";import{S as d}from"./SearchInput-DWc1T3Bi.js";import{a as o}from"./react.esm-BfNgPaiw.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-Bds2BYuY.js";import"./UnimplementedError-DRDLdWuq.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./array_buffer-DuWTC5ee.js";import"./base64-Dx8wLaZf.js";import"./functional-D84nw2eW.js";import"./MissingElementError-Dm9GiuiL.js";import"./url-DwwBj-2c.js";import"./monetary_value-q68MMcLV.js";import"./TaggedBase64-CL6rcPDn.js";import"./blocks-DqaRurhN.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./nodes-sPTSRSIJ.js";import"./LoadingProvider-ByZJpGMG.js";import"./FetchError-ljfnF1aF.js";import"./NotFoundError-B7azoDNK.js";import"./PromiseResolver-SxS7xBJo.js";import"./ProvideAsyncStates-JXpZ8V0P.js";import"./IconButton-DMZ9J1P4.js";import"./higher_order-DPELDOyr.js";import"./Button-Ekn2ZUwY.js";import"./label-C9J6_eC3.js";import"./RelativeTimeSinceDateText-tg_Ib5NI.js";import"./NowProvider-DGWfNrty.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PathResolverProvider-DHybasnL.js";import"./Card-BhNRY1Nn.js";import"./NumberText-Co9Msrjd.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./Text-BU7JBOLk.js";import"./typography-BFtRVX_Y.js";import"./SearchGlass-uxnxQV4S.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Container-DHIgdAGX.js";import"./index-ChcI8Gvf.js";import"./index-Cd6Sl8gl.js";import"./client-9wIUT5RQ.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Rt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
