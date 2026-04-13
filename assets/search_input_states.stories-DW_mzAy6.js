import{j as u}from"./iframe-yFC_6Lkm.js";import{E as r,a as t,H as f,F as y}from"./hot_shot_query_service_api_context-CS-0g1zv.js";import"./blocks-BbFMk1LL.js";import{P as w}from"./nodes-DYObZsIN.js";import{m,i as p}from"./functional-BN9f4kvo.js";import{T as l}from"./tagged_base64-CKlPb5jQ.js";import{E as d,a as g}from"./height_and_address-o6gd2Qhm.js";import"./base64-CIn2pRZH.js";import"./string-DwcMXV6G.js";import"./array_buffer_hex-CckWFzk6.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./bigint-nvMxq-Qk.js";import"./unimplemented_error-BNblu8WE.js";import"./wallet_address-BHYnm282.js";import"./loading_provider-BcOPdPnh.js";import"./view_change_evidence_v1-KUoN5CtB.js";import"./monetary_value-DqTXp7cz.js";import"./fetch_error-D_X_Gp90.js";import"./missing_element_error-BXDBouYu.js";import"./not_found_error-BdUVpmTw.js";import"./promise_builder-MyoVUTu8.js";import"./stake_table_field-C5Qabowc.js";import{S as x}from"./search_input-GN3GpClc.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-B6X62ykO.js";import"./assert-B11BgmXM.js";import"./validator-C-byOqEv.js";import"./stake_table-7i6QuRDm.js";import"./sleep-CW-vxfof.js";import"./data-DkoEaPI0.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./higher_order-CjJuNElG.js";import"./text-CEhLEmI-.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./locale_provider-vvwlyNor.js";import"./wallet_address_text-C8RpyldE.js";import"./date_time_formatters_provider-DcGFks32.js";/* empty css               */import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./provide_async_states-CdxvwGgy.js";import"./data_provider-5GKNepRL.js";import"./promise_resolver-czMCB7aT.js";import"./icon_button-B5236f05.js";import"./button-NUYCV0nd.js";import"./card-BXmZ-D4n.js";import"./label-CHErshDC.js";import"./typography-BhzIADDi.js";import"./path_resolver_provider-DHnJ8sHv.js";import"./async_iterable_resolver-DHVBK9PV.js";import"./x_icon-Cly8TORT.js";import"./chevron_up-DL-aSyib.js";import"./twitter_icon-BSqXgZj9.js";import"./vertical_scroll-ABb2uixh.js";import"./container-CVKatA2n.js";const E=h=>u.jsx(f.Provider,{value:new y,children:u.jsx(x,{...h})}),Le={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(m(p(10),()=>new d(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new g(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
