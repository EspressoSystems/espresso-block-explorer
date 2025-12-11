import{j as w}from"./iframe-D38n0YpH.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-BHRhid4U.js";import{S as d}from"./search_input-fvt8cpvY.js";import{a as o}from"./react.esm-5MOUnv-I.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-TzKwbjAF.js";import"./unimplemented_error-Bu4XFSEf.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./blocks-DWlb3Jqu.js";import"./loading_provider-CmIKNCgq.js";import"./missing_element_error-Bv32e7ki.js";import"./monetary_value-DtPxvzZx.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DQyXh8_2.js";import"./base64-CraqfgLB.js";import"./nodes-BGjGUOjj.js";import"./functional-AkqJadlP.js";import"./array_buffer-CQ8t_IxW.js";import"./url-D77M_m7j.js";import"./fetch_error-Dd6dXogQ.js";import"./not_found_error-D5_0fLFV.js";import"./validator-CIjtoNtH.js";import"./wallet_address-SfsM8dHX.js";import"./promise_resolver-C361kvsJ.js";import"./provide_async_states-CjOcymhR.js";import"./icon_button-D6kDxS7x.js";import"./higher_order-xjg9P6xC.js";import"./button-DRrh3J5o.js";import"./card-Dj3LTq1C.js";import"./label-zU4z8gpb.js";import"./relative_time_since_date_text-BMr8JM1Q.js";import"./now_provider-DY018Nl3.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./path_resolver_provider-DkcsmNfF.js";import"./number_text-BXk_sP1g.js";import"./number_formatters_provider-ByDysz5-.js";import"./text-CEhLEmI-.js";import"./typography-91BC-7Aj.js";import"./search_glass-DCrh4jlM.js";import"./svg_icon_base-DTyOsi0d.js";import"./container-By-lTVZJ.js";import"./index-BQAHaO3b.js";import"./index-b2ucKIM2.js";import"./client-Cormy-O0.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Tt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
