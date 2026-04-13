import{j as u}from"./iframe-Da-pRdj_.js";import{E as r,a as t,H as f,F as y}from"./hot_shot_query_service_api_context-DIU1mLot.js";import"./blocks-36ZEPcvJ.js";import{P as w}from"./nodes-BsbvMhdT.js";import{m,i as p}from"./functional-BY4LX4kJ.js";import{T as l}from"./tagged_base64-CKlPb5jQ.js";import{E as d,a as g}from"./height_and_address-BwQvAxZt.js";import"./base64-CIn2pRZH.js";import"./string-DwcMXV6G.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./bigint-nvMxq-Qk.js";import"./unimplemented_error-BNblu8WE.js";import"./wallet_address-3kO0efKM.js";import"./loading_provider-CkZUfCHZ.js";import"./view_change_evidence_v1-BCEuinom.js";import"./monetary_value-DqTXp7cz.js";import"./fetch_error-D_X_Gp90.js";import"./missing_element_error-BXDBouYu.js";import"./not_found_error-BdUVpmTw.js";import"./promise_builder-DfN8Z1g7.js";import"./stake_table_field-CIreD0Dp.js";import{S as x}from"./search_input-C-W-TeSS.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-Bo9hx4zB.js";import"./assert-B11BgmXM.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./sleep-CW-vxfof.js";import"./data-DkoEaPI0.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./higher_order-BliYGj6D.js";import"./text-CEhLEmI-.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./locale_provider-Bv2GXKLp.js";import"./wallet_address_text-BXyJ1CeJ.js";import"./date_time_formatters_provider-Bq_dXrCb.js";/* empty css               */import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./provide_async_states-YzODn9jr.js";import"./data_provider-DT5b-p5f.js";import"./promise_resolver-BUp_5laA.js";import"./icon_button-T6pb85Aa.js";import"./button-C_DJFpKf.js";import"./card-CTYjD-eM.js";import"./label-EkcAtQoZ.js";import"./typography-CxAy-q2v.js";import"./path_resolver_provider-lIT2T7X3.js";import"./async_iterable_resolver-inPpVq-S.js";import"./x_icon-DUOKCEyJ.js";import"./chevron_up-CA2lC1se.js";import"./twitter_icon-DJH4hGMI.js";import"./vertical_scroll-NWp1kiUw.js";import"./container-BJKRtwut.js";const E=h=>u.jsx(f.Provider,{value:new y,children:u.jsx(x,{...h})}),Le={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(m(p(10),()=>new d(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new g(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
