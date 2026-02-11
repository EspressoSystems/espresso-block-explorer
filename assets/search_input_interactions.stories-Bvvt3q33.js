import{j as p}from"./iframe-B298lYzW.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-BO9nUHza.js";import{a as o}from"./react.esm-BmlWp72S.js";import{S as d}from"./search_input-8aDHIq1M.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-CB357lew.js";import"./unimplemented_error-CUVVCP1k.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./blocks-BLRm0qbp.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./nodes-DdUtUYCE.js";import"./functional-Ci6o84Cp.js";import"./missing_element_error-BOfgw7mk.js";import"./loading_provider-DErAdSbQ.js";import"./height_and_address-Do-kAfmv.js";import"./array_buffer-DMedzaQw.js";import"./url-fXESVLgZ.js";import"./fetch_error-g-VCQtdm.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-BLy62hcp.js";import"./wallet_address-BEIvL2Xd.js";import"./index-CiS3ONPk.js";import"./index-S2HY-myl.js";import"./client-CNu7C4Ux.js";import"./icon_button-Bk8EpSlp.js";import"./higher_order-B_g3tT7H.js";import"./button-Db1cN8Wr.js";import"./card-BwB_tCdr.js";import"./label-CGuk9g0m.js";import"./typography-DTOV1Dte.js";import"./path_resolver_provider-Do-I3vWG.js";import"./promise_resolver-Dz8_NSzi.js";import"./provide_async_states-D_2Jsqop.js";import"./data_provider-vKdZeY0D.js";import"./relative_time_since_date_text-CHPupwUX.js";import"./now_provider-Bs88lXDN.js";import"./date_time_formatters_provider-4ga6Ydx1.js";import"./locale_provider-COLCQzYC.js";import"./number_text-PJZIjD72.js";import"./number_formatters_provider-CrNZeYmu.js";import"./text-CEhLEmI-.js";import"./search_glass-D3cVJw0i.js";import"./svg_icon_base-CuicflMO.js";import"./container-BlV0NP0E.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const At=["PerformSearch"];export{u as PerformSearch,At as __namedExportsOrder,It as default};
