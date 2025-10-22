import{j as w}from"./iframe-Dz1tcGmB.js";import{C as y,F as S}from"./CappuccinoHotShotQueryServiceAPIContext-JoU-L4bA.js";import{S as d}from"./SearchInput-DPydw0nH.js";import{a as o}from"./react.esm-Dv1yLAD_.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BGrbUw5I.js";import"./UnimplementedError-DEXMe0kn.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./array_buffer-ChxgVYUa.js";import"./base64-CwylSrof.js";import"./functional-CtVX7zWU.js";import"./MissingElementError-C2wrrywP.js";import"./url-Cp1wsmOC.js";import"./WebWorkerErrorResponse-DDmF8pSp.js";import"./monetary_value-D_JlCdWi.js";import"./TaggedBase64-DTqtQPCE.js";import"./generateFakeData-DW9myA_6.js";import"./sleep-CW-vxfof.js";import"./data-CeQBE4up.js";import"./LoadingProvider-DCua2xWV.js";import"./FetchError-CshovAWm.js";import"./NotFoundError-BfMh7-IB.js";import"./PromiseResolver-DkQ6sgKm.js";import"./ProvideAsyncStates-BBO7b-4g.js";import"./IconButton-C7leDAVZ.js";import"./higher_order-BpBhqnZj.js";import"./Button-V2SMy-f8.js";import"./label-DWD3lJbf.js";import"./PathResolverProvider-NY-UQiBR.js";import"./Card-T8Nlve6i.js";import"./NumberText-C9JeOSfX.js";import"./NumberFormattersProvider-bfM2GBl7.js";import"./LocaleProvider-BX3D0wrI.js";import"./RelativeTimeText-Ch5UcHMA.js";import"./DateTimeFormattersProvider-CA5szNsR.js";import"./NowProvider-4IsGhkTg.js";import"./Text-BU7JBOLk.js";import"./typography-B0ztRi_u.js";import"./SearchGlass-CW66AL5Y.js";import"./SVGIconBase-Bg83ziHO.js";import"./Container-CE2_Zbv5.js";import"./index-DPssJQNt.js";import"./index-CMlGnRm5.js";import"./client-DWZ-wooc.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Rt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
