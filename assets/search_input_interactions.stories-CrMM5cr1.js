import{j as w}from"./iframe-B-iMvdD4.js";import{C as y,F as S}from"./cappuccino_hot_shot_query_service_api_context-B-B1a78X.js";import{S as d}from"./search_input-DfBemnbT.js";import{a as o}from"./react.esm-OKxsuYgY.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-itXQ-uhi.js";import"./unimplemented_error-C5MN7yCC.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./blocks-BstWny4x.js";import"./loading_provider-DGgAz7Nh.js";import"./missing_element_error-BkHusKs0.js";import"./monetary_value-B9zIXJUb.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-D1knUC6u.js";import"./base64-Pz9_wEqE.js";import"./nodes-Bp4zkxYj.js";import"./functional-aFFbciHe.js";import"./array_buffer-DJmzCn2r.js";import"./url-YePslpKX.js";import"./fetch_error-B3P2ZYNa.js";import"./not_found_error-MIy2_s-e.js";import"./validator-CNO3FRK_.js";import"./wallet_address-DTxp5ftj.js";import"./promise_resolver-Bsb4QvPX.js";import"./provide_async_states-CnPhFCZh.js";import"./icon_button-Bq4imOhp.js";import"./higher_order-p8JWl9JO.js";import"./button-D-WQLaAx.js";import"./card-DysXuFl8.js";import"./label-ycIGOt2h.js";import"./relative_time_since_date_text-R2kEd-ey.js";import"./now_provider-D9QH_F6_.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./path_resolver_provider-DTKqJOJp.js";import"./number_text-BjwVE4fU.js";import"./number_formatters_provider-C7OuKrqX.js";import"./text-CEhLEmI-.js";import"./typography-12nFQ59z.js";import"./search_glass-B70kcl-E.js";import"./svg_icon_base-BLNI1CYc.js";import"./container-Dmcd7Dq0.js";import"./index-C2Py61xS.js";import"./index-BPkPZEbx.js";import"./client-BRFImQn1.js";const{expect:a,userEvent:i,waitFor:p,within:h}=__STORYBOOK_MODULE_TEST__,g=async t=>{const e=await h(t).findByRole("searchbox");return await a(e).toBeTruthy(),await a(e).toBeInTheDocument(),e},c=async t=>{const e=await g(t),r=await o(()=>i.setup());return await o(async()=>r.click(e)),await a(e).toHaveFocus(),e},R=async(t,e)=>{await c(t),await o(async()=>i.keyboard(e))},B=async t=>{await R(t,"block~"),await p(async()=>{const r=await h(t).findByRole("search");a(r).toBeInTheDocument(),await m(t),a(r).toBeVisible()},{timeout:5e3});const e=await h(t).findByRole("search");a(e).toBeInTheDocument(),a(e).toBeVisible()},l=async t=>{const e=await h(t).findByRole("search");return a(e).toBeInTheDocument(),e},T=async t=>{const r=(await l(t)).querySelector('section[aria-label="block-results"]');return a(r).toBeInTheDocument(),r},m=async t=>{const e=await l(t),r=await T(t);if(!r)return[];const n=Array.from(r.querySelectorAll("a"));return a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument(),n},D=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowDown}"));const s=e[n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},I=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowDown}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},k=async t=>{await c(t);const e=await m(t),r=e.length;for(let n=0;n<r;n++){await o(async()=>i.keyboard("{ArrowUp}"));const s=e[r-1-n].children[0];a(s).toBeInTheDocument(),a(s).toHaveAttribute("data-selected","true")}},A=async t=>{await c(t);const e=await l(t);await o(async()=>i.keyboard("{ArrowUp}")),a(e.querySelector('[data-selected="true"]')).not.toBeInTheDocument()},b=async t=>{await c(t);const e=await l(t);a(e).toBeInTheDocument(),a(e).toBeVisible(),await o(async()=>i.keyboard("{Backspace>7/}")),await p(async()=>{a(e).toBeInTheDocument()}),a(e).toBeInTheDocument()},f=t=>w.jsx(y.Provider,{value:new S,children:w.jsx(d,{...t})}),Tt={title:"Components/Page Sections/Search Input/Interactions",component:f},u={play:async({canvasElement:t,step:e})=>{await e("Select the Search Bar",async()=>{await c(t)}),await e("Search for Blocks",async()=>{await B(t)}),await e("Navigate down through all search results",async()=>{await D(t)}),await e("Selecting down again should return to the original search term",async()=>{await I(t)}),await e("Navigate up through all search results",async()=>{await k(t)}),await e("Selecting up again should return to the original search term",async()=>{await A(t)}),await e("Clear Search Results",async()=>{await b(t)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
