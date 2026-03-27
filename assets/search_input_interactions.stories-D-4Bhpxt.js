import{j as p}from"./iframe-Cvx6RpPY.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-D7BJELZm.js";import{a as o}from"./react.esm-DpAMl9g-.js";import{S as d}from"./search_input-DMAMFchq.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-S4Yz8IV6.js";import"./unimplemented_error-BB_FSuj1.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./blocks-6yclG0ka.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DXbf4XhX.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./tagged_base64-B_lPSlUf.js";import"./base64-CqV3gweX.js";import"./nodes-B70Gne2-.js";import"./functional-DzI6oRAM.js";import"./missing_element_error-D0dGm0KW.js";import"./loading_provider-BVRuGC11.js";import"./height_and_address-DcOJdVP6.js";import"./array_buffer-DFcBajus.js";import"./url-CDyI1Tkc.js";import"./fetch_error-BobVF34n.js";import"./not_found_error-BA1XOWZ_.js";import"./validator-C0io6BAI.js";import"./wallet_address-BnrZuCWl.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";import"./client-MqscF9bh.js";import"./icon_button-BycFFAnJ.js";import"./higher_order-CcpOgoeh.js";import"./button-DE_jcZxp.js";import"./card-CsSulh7F.js";import"./label-DNkPgfEy.js";import"./typography-B40_qrOR.js";import"./path_resolver_provider-4NfNH-Lz.js";import"./promise_resolver-B3Bf1HFA.js";import"./provide_async_states-CDz20rjv.js";import"./data_provider-DuSHNFDm.js";import"./relative_time_since_date_text-DcFvPw8b.js";import"./now_provider-C_TnA9uy.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./locale_provider-D5aNHbGy.js";import"./number_text-6gO1h8MR.js";import"./number_formatters_provider-DSWMRQJW.js";import"./text-CEhLEmI-.js";import"./search_glass-CCF_qhG6.js";import"./svg_icon_base-CJF1g_tc.js";import"./container-QGE28RJs.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
