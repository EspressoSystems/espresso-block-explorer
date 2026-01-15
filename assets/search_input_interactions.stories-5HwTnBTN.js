import{j as p}from"./iframe-ChMM8fie.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-lVXsrw-0.js";import{a as o}from"./react.esm-CDELKqQ0.js";import{S as d}from"./search_input-B62QCZ5f.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BbOChV9R.js";import"./unimplemented_error-CUVVCP1k.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./blocks-CTgVmMXl.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./base64-_rmSu-kQ.js";import"./nodes-9I9c2iOF.js";import"./functional-DT4GooI6.js";import"./missing_element_error-BOfgw7mk.js";import"./loading_provider-DLgXNpIx.js";import"./height_and_address-ThaYTKrp.js";import"./array_buffer-BGAdkDgu.js";import"./url-fXESVLgZ.js";import"./fetch_error-g-VCQtdm.js";import"./not_found_error-DDa8r4Zj.js";import"./validator-nxDvP-Ih.js";import"./wallet_address-CE0HFCr5.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./client-laTrBQ9W.js";import"./icon_button-BP0zySQv.js";import"./higher_order-BDzlKa4m.js";import"./button-B6MLw89K.js";import"./card-sFx9rmY6.js";import"./label-DyjIPWVJ.js";import"./typography-CXTpHQ-1.js";import"./path_resolver_provider-Bi7OwYmA.js";import"./promise_resolver-YvW86r_O.js";import"./provide_async_states-CKGzWnoG.js";import"./data_provider-DipucN8t.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./now_provider-CCB05c4h.js";import"./date_time_formatters_provider-BWsAdsOr.js";import"./locale_provider--Ln2ac7i.js";import"./number_text-CahUOGB6.js";import"./number_formatters_provider-CudGGieU.js";import"./text-CEhLEmI-.js";import"./search_glass-BE45xqZB.js";import"./svg_icon_base-CS1Nu1nM.js";import"./container-CdE0kalI.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
