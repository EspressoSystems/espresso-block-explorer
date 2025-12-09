import{j as w}from"./iframe-DxMCvlUh.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-D2k-VFWp.js";import{S as d}from"./search_input-BwEBlrSB.js";import{a as o}from"./react.esm-CqVqGmm5.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BIvIKU3a.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./blocks-C2sSQJmD.js";import"./loading_provider-Df0mCD4_.js";import"./missing_element_error-Bky0HlCJ.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./nodes-BPkpfAJX.js";import"./functional-CSHHasco.js";import"./array_buffer-CekOYGOQ.js";import"./url-D2S2nX8d.js";import"./fetch_error-DuIs0boE.js";import"./not_found_error-bihNLxJz.js";import"./validator-CiTB3PK8.js";import"./wallet_address-CWJZxHZ9.js";import"./promise_resolver-DsSbWftV.js";import"./provide_async_states-CMIoQRxa.js";import"./icon_button-DE9OrONK.js";import"./higher_order-DagK1XCO.js";import"./button-DoyOZXCI.js";import"./card-CJu4WajX.js";import"./label-BE1c8qNS.js";import"./relative_time_since_date_text-CIVd6X04.js";import"./now_provider-KL7TCSJM.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./path_resolver_provider-BxmbrlnP.js";import"./number_text-DQRO7zl6.js";import"./number_formatters_provider-DQjo9vlS.js";import"./text-CEhLEmI-.js";import"./typography-Cf3UQRAk.js";import"./search_glass-DKd1PhIP.js";import"./svg_icon_base-BtviVFgm.js";import"./container-8vFAvF9C.js";import"./index-S_Fpd5t-.js";import"./index-KSdcX99f.js";import"./client-BIN2nFOj.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Tt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Dt=["PerformSearch"];export{u as PerformSearch,Dt as __namedExportsOrder,Tt as default};
