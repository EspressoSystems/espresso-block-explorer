import{j as p}from"./iframe-D4NG4Ygg.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-DlSdfeHd.js";import{a as o}from"./react.esm-C-kTbQMi.js";import{S as d}from"./search_input-BQ4CDeAH.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-CNUcw_TJ.js";import"./unimplemented_error-CUVVCP1k.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./blocks-BLRm0qbp.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./nodes-DdUtUYCE.js";import"./functional-Ci6o84Cp.js";import"./missing_element_error-BOfgw7mk.js";import"./loading_provider-B7axcFy0.js";import"./height_and_address-Do-kAfmv.js";import"./array_buffer-DMedzaQw.js";import"./url-fXESVLgZ.js";import"./fetch_error-g-VCQtdm.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-BLy62hcp.js";import"./wallet_address-BEIvL2Xd.js";import"./index-CN5LEFBF.js";import"./index-vB25Cpb6.js";import"./client-jiXVFmGw.js";import"./icon_button-s1yS-ZMm.js";import"./higher_order-BVplWATc.js";import"./button-CMLc6d_k.js";import"./card-DX01MHcn.js";import"./label-D8dHc5tI.js";import"./typography-B6ctLHzU.js";import"./path_resolver_provider-T-F4e6m2.js";import"./promise_resolver-6eSa-CmG.js";import"./provide_async_states-Czoq1B-f.js";import"./data_provider-kgUlCSLb.js";import"./relative_time_since_date_text-Oku8-zsN.js";import"./now_provider-DEocB4vj.js";import"./date_time_formatters_provider-D_NikJXM.js";import"./locale_provider-y_w6A6F5.js";import"./number_text-CGho1SjB.js";import"./number_formatters_provider-CV8eEq8L.js";import"./text-CEhLEmI-.js";import"./search_glass-C-IxBWA0.js";import"./svg_icon_base-D3FfKTtS.js";import"./container-D47jH8o3.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
