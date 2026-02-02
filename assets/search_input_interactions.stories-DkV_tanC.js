import{j as p}from"./iframe-lCBbYCEU.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-DSO45wB8.js";import{a as o}from"./react.esm-DPsyTmJB.js";import{S as d}from"./search_input-Baq96fSY.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BW6Daj7l.js";import"./unimplemented_error--qiu5jWk.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./blocks-XwzhN47T.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-Beas1ikT.js";import"./base64-Cs6zZcIo.js";import"./nodes--GPtCQfL.js";import"./functional-6Z2QHHX7.js";import"./missing_element_error-BIT--q2G.js";import"./loading_provider-CfI_gzNc.js";import"./height_and_address-DEARJVGA.js";import"./array_buffer-BrH4NOGl.js";import"./url-dt6vXsS3.js";import"./fetch_error-Cj-x_lfT.js";import"./not_found_error-C4PEbicn.js";import"./validator-D7TaBp9n.js";import"./wallet_address-DvLNDg5r.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./client-BJ4MhKIH.js";import"./icon_button-Bra0vYMO.js";import"./higher_order-B24NaQsc.js";import"./button-Dj1HGZq_.js";import"./card-bTL_EakN.js";import"./label-nz9fsGgx.js";import"./typography-C2G_oAYK.js";import"./path_resolver_provider-BQqhBI_r.js";import"./promise_resolver-C35CelZq.js";import"./provide_async_states-sOhoHCpB.js";import"./data_provider-JNzMXrDd.js";import"./relative_time_since_date_text-6snd4Hu9.js";import"./now_provider-BJlCMxdf.js";import"./date_time_formatters_provider-D_P0LLFh.js";import"./locale_provider-CivmyzXf.js";import"./number_text-C1feg6s_.js";import"./number_formatters_provider-n3Owoqke.js";import"./text-CEhLEmI-.js";import"./search_glass-SundPE7M.js";import"./svg_icon_base-K_bknCBI.js";import"./container-BEWGtb-I.js";const{expect:a,userEvent:i,waitFor:w,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},B=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},R=async t=>{await B(t,"block~"),await w(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},k=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},I=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await w(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>p.jsx(y.Provider,{value:new S,children:p.jsx(d,{...t})}),It={title:"Block Explorer/Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await R(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await k(t)}),await e("Navigate up through all search results",async()=>{await I(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
