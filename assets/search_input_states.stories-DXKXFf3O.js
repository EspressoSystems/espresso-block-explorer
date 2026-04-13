import{j as u}from"./iframe-CRN6ir_k.js";import{E as r,a as t,H as f,F as y}from"./hot_shot_query_service_api_context-DSWf7DF2.js";import"./blocks-BbFMk1LL.js";import{P as w}from"./nodes-DYObZsIN.js";import{m,i as p}from"./functional-BN9f4kvo.js";import{T as l}from"./tagged_base64-CKlPb5jQ.js";import{E as d,a as g}from"./height_and_address-DJ80vskF.js";import"./base64-CIn2pRZH.js";import"./string-DwcMXV6G.js";import"./array_buffer_hex-CckWFzk6.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./bigint-nvMxq-Qk.js";import"./unimplemented_error-BNblu8WE.js";import"./wallet_address-BHYnm282.js";import"./loading_provider-bJjs6rdx.js";import"./view_change_evidence_v1-BsoAhiKC.js";import"./monetary_value-DqTXp7cz.js";import"./fetch_error-D_X_Gp90.js";import"./missing_element_error-BXDBouYu.js";import"./not_found_error-BdUVpmTw.js";import"./promise_builder-DOu61EMF.js";import"./stake_table_field-C5Qabowc.js";import{S as x}from"./search_input-w81uAUIH.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BGP7plBm.js";import"./assert-B11BgmXM.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./sleep-CW-vxfof.js";import"./data-DkoEaPI0.js";import"./circular_progress_indicator-D_atp0op.js";import"./higher_order-BJoFsnsT.js";import"./text-CEhLEmI-.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./locale_provider-DitRBxok.js";import"./wallet_address_text-iOdgpcaz.js";import"./date_time_formatters_provider-CO-VImxK.js";/* empty css               */import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./provide_async_states-BKkQM2nw.js";import"./data_provider-BRUBq0Ii.js";import"./promise_resolver-CYiSp4i2.js";import"./icon_button-BQMndz8l.js";import"./button-Bh7r9wL1.js";import"./card-C-qeXBil.js";import"./label-02TVAkTh.js";import"./typography-CuF_OJjv.js";import"./path_resolver_provider-D1HmFeDs.js";import"./async_iterable_resolver-Cdg3RPf4.js";import"./x_icon-CeOMdX2y.js";import"./chevron_up-BIFMo3iJ.js";import"./twitter_icon-BMz0LQWW.js";import"./vertical_scroll-BFk-ygDy.js";import"./container-D8LhTD1U.js";const E=h=>u.jsx(f.Provider,{value:new y,children:u.jsx(x,{...h})}),Le={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(m(p(10),()=>new d(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new g(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      isLoading: true
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'SOMETHING',
      rawQuery: 'something',
      searchResultsQuery: 'SOMETHING',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], []))
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults(fakeBlockSearchResults, [])),
      offset: 0
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], fakeTransactionSearchResults))
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], fakeTransactionSearchResults)),
      offset: 0
    }
  }
}`,...i.parameters?.docs?.source}}};const Ge=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,i as TransactionSearchResultsSelectedFirst,Ge as __namedExportsOrder,Le as default};
