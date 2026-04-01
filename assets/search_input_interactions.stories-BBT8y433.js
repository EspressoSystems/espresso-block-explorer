import{j as p}from"./iframe-hejhwxVl.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-DiaeFuQS.js";import{a as o}from"./react.esm-CtXjynZ4.js";import{S as d}from"./search_input-DbMAnepQ.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-D_RQoZbW.js";import"./unimplemented_error-BDiuBEcJ.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./blocks-BO0jjecB.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./nodes-DZ7P8xPE.js";import"./functional-CHI4evRY.js";import"./missing_element_error-BMmla67R.js";import"./loading_provider-CPfGcHzH.js";import"./height_and_address-CvkBIbKM.js";import"./array_buffer_hex-2CxW6xhL.js";import"./array_buffer_base64-Df7I341a.js";import"./wallet_address-JTIetClq.js";import"./fetch_error-CpkjK4oN.js";import"./not_found_error-Dccy2lFm.js";import"./validator-CeWWAq22.js";import"./index-CrNDxhwo.js";import"./index-CogtgnYk.js";import"./client-D6exDgc_.js";import"./icon_button-DB1zG8Ip.js";import"./higher_order-W9buzvfY.js";import"./button-BXNjM3pQ.js";import"./card-BJjORL1b.js";import"./label-CatIjX5_.js";import"./typography-Bf4AbonD.js";import"./path_resolver_provider-rWpEttVD.js";import"./promise_resolver-DBcAh5LT.js";import"./provide_async_states-DGA_yGFK.js";import"./data_provider-oqf6yKht.js";import"./relative_time_since_date_text-CewqWWcH.js";import"./now_provider-B6OQbAFu.js";import"./date_time_formatters_provider-BEpx9gnS.js";import"./locale_provider-B6ewQipp.js";import"./number_text-BsE1LgbZ.js";import"./number_formatters_provider-DDCZmzjm.js";import"./text-CEhLEmI-.js";import"./search_glass-D_5JQm0z.js";import"./svg_icon_base-C4F1Mj4O.js";import"./container-C-HhaEE3.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),kt={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const It=["PerformSearch"];export{u as PerformSearch,It as __namedExportsOrder,kt as default};
