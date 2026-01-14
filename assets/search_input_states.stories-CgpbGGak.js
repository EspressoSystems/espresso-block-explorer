import{j as i}from"./iframe-CCLKIoat.js";import{a as r,C as f,F as y,b as t}from"./cappuccino_hot_shot_query_service_api_context-Ccdk_dQ4.js";import"./blocks-Dw_RhIDq.js";import{P as w}from"./nodes-BcMKYiFz.js";import{m as p,i as l}from"./functional-DsFqNm-o.js";import{T as m}from"./tagged_base64-OJExTSEK.js";import{C,a as d}from"./height_and_address-BuKJdZLP.js";import"./base64-C9eISNYa.js";import"./string-BsSBvYb_.js";import"./array_buffer-OWUzmdpG.js";import"./bigint-XOkPApkc.js";import"./loading_provider-DvG6A7dg.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./missing_element_error-BOXFIEXu.js";import"./not_found_error-D_XgWhca.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import{S as g}from"./search_input-jWx2wjoJ.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-XOHjuOmK.js";import"./assert-B11BgmXM.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-DY--8tYM.js";import"./higher_order-DyFKxQfc.js";import"./button-DuYyFFpF.js";import"./card-x0dgug2d.js";import"./label-R4nt8pcB.js";import"./typography-B2cxenSz.js";import"./path_resolver_provider-C-CQoB0e.js";import"./promise_resolver-DyTN7TrH.js";import"./provide_async_states-BSHtUug_.js";import"./data_provider-BF5QLA6e.js";import"./relative_time_since_date_text-B_x23ieN.js";import"./now_provider-B5osc7Mq.js";import"./date_time_formatters_provider-D0J5X-TW.js";import"./locale_provider-K_0BCaCZ.js";import"./number_text-BXbb_2Rl.js";import"./number_formatters_provider-3ltM0G6e.js";import"./text-CEhLEmI-.js";import"./search_glass-C9DOwRdG.js";import"./svg_icon_base-BQe2kabo.js";import"./container-CJFy0Lid.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], []))
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults(fakeBlockSearchResults, [])),
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
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults))
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults)),
      offset: 0
    }
  }
}`,...u.parameters?.docs?.source}}};const fe=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,fe as __namedExportsOrder,he as default};
