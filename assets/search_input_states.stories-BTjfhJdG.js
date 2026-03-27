import{j as i}from"./iframe-Cvx6RpPY.js";import{a as r,b as t,C as f,F as y}from"./cappuccino_hot_shot_query_service_api_context-D7BJELZm.js";import"./blocks-6yclG0ka.js";import{P as w}from"./nodes-B70Gne2-.js";import{m as p,i as l}from"./functional-DzI6oRAM.js";import{T as m}from"./tagged_base64-B_lPSlUf.js";import{C,a as d}from"./height_and_address-DcOJdVP6.js";import"./base64-CqV3gweX.js";import"./string-BCb2Pt7Y.js";import"./array_buffer-DFcBajus.js";import"./bigint-DeSLcxHO.js";import"./loading_provider-BVRuGC11.js";import"./monetary_value-DXbf4XhX.js";import"./fetch_error-BobVF34n.js";import"./missing_element_error-D0dGm0KW.js";import"./not_found_error-BA1XOWZ_.js";import"./unimplemented_error-BB_FSuj1.js";import"./url-CDyI1Tkc.js";import{S as g}from"./search_input-DMAMFchq.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-S4Yz8IV6.js";import"./assert-B11BgmXM.js";import"./validator-C0io6BAI.js";import"./wallet_address-BnrZuCWl.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-BycFFAnJ.js";import"./higher_order-CcpOgoeh.js";import"./button-DE_jcZxp.js";import"./card-CsSulh7F.js";import"./label-DNkPgfEy.js";import"./typography-B40_qrOR.js";import"./path_resolver_provider-4NfNH-Lz.js";import"./promise_resolver-B3Bf1HFA.js";import"./provide_async_states-CDz20rjv.js";import"./data_provider-DuSHNFDm.js";import"./relative_time_since_date_text-DcFvPw8b.js";import"./now_provider-C_TnA9uy.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./locale_provider-D5aNHbGy.js";import"./number_text-6gO1h8MR.js";import"./number_formatters_provider-DSWMRQJW.js";import"./text-CEhLEmI-.js";import"./search_glass-CCF_qhG6.js";import"./svg_icon_base-CJF1g_tc.js";import"./container-QGE28RJs.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
