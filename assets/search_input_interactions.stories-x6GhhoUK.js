import{j as w}from"./iframe-xPpTS9dO.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-60UIjNqk.js";import{S as d}from"./SearchInput-Bf2Q6qTJ.js";import{a as o}from"./react.esm-C-7xwL5g.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-Dl8AKkx9.js";import"./UnimplementedError-DEXMe0kn.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./array_buffer-C2KvbgUx.js";import"./base64-C1KKyByM.js";import"./functional-CJQfVQrn.js";import"./MissingElementError-C2wrrywP.js";import"./url-Cp1wsmOC.js";import"./WebWorkerErrorResponse-DDmF8pSp.js";import"./monetary_value-D_JlCdWi.js";import"./TaggedBase64--rbfr4uv.js";import"./generateFakeData-DzM1urrr.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./LoadingProvider-DEoBX8YF.js";import"./FetchError-CshovAWm.js";import"./NotFoundError-BfMh7-IB.js";import"./PromiseResolver-BQgySzrc.js";import"./ProvideAsyncStates-BIDV8GO7.js";import"./IconButton-DnOr5IOa.js";import"./higher_order-cEYzRmR2.js";import"./Button-Duv-SEFj.js";import"./label-Bt1YRaym.js";import"./RelativeTimeSinceDateText-qeHXCk3H.js";import"./NowProvider-Clo83YBl.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PathResolverProvider-XKUKdvE1.js";import"./Card-B5sBbsij.js";import"./NumberText-BI77pf0U.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./Text-BU7JBOLk.js";import"./typography-DOsyjWqi.js";import"./SearchGlass-DY-A1JPh.js";import"./SVGIconBase-DRQr1LH4.js";import"./Container-DRVQRi1P.js";import"./index-Be3GcqnB.js";import"./index-Du7Eaecz.js";import"./client-BCC1VFLG.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Rt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
