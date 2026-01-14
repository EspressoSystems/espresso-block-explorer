import{j as p}from"./iframe-uLWYWIdy.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-joxNeeWu.js";import{a as o}from"./react.esm-xIgWRSjR.js";import{S as d}from"./search_input-CSsIK0Qs.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-ykrKhyuT.js";import"./unimplemented_error-B7nptaaw.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./blocks-Dw_RhIDq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./base64-C9eISNYa.js";import"./nodes-BcMKYiFz.js";import"./functional-DsFqNm-o.js";import"./missing_element_error-BOXFIEXu.js";import"./loading_provider-BM5-2tPO.js";import"./height_and_address-BuKJdZLP.js";import"./array_buffer-OWUzmdpG.js";import"./url-D1AcOu20.js";import"./fetch_error-D3nSOO0h.js";import"./not_found_error-D_XgWhca.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./client-Dc6hmvfU.js";import"./icon_button-2OvTi4iH.js";import"./higher_order-BV5WAo3w.js";import"./button-3kQVwov6.js";import"./card-D29d4h2p.js";import"./label-CQ9FQXZM.js";import"./typography-D9YEMAu1.js";import"./path_resolver_provider-WtzdELai.js";import"./promise_resolver-BocC3IZa.js";import"./provide_async_states-DlviSoxq.js";import"./data_provider-wCUWR71U.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./now_provider-b5eqaHEI.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./locale_provider-CWIPDalB.js";import"./number_text-DsiwwU3j.js";import"./number_formatters_provider-BJawDDf5.js";import"./text-CEhLEmI-.js";import"./search_glass-1dCwa4Tu.js";import"./svg_icon_base-kLW-7jgl.js";import"./container-Ddwx2EqO.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
