import{j as i}from"./iframe-DxMCvlUh.js";import"./blocks-C2sSQJmD.js";import{P as y}from"./nodes-BPkpfAJX.js";import{m as p,i as l}from"./functional-CSHHasco.js";import{T as m}from"./tagged_base64-DlPC3yRR.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./cappuccino_hot_shot_query_service_api_context-D2k-VFWp.js";import"./base64-Dpbg5EzT.js";import"./string-DO2hqbbz.js";import"./array_buffer-CekOYGOQ.js";import"./loading_provider-Df0mCD4_.js";import"./monetary_value-CGCIrnLJ.js";import"./fetch_error-DuIs0boE.js";import"./missing_element_error-Bky0HlCJ.js";import"./not_found_error-bihNLxJz.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./bigint-Rw5otYDY.js";import"./url-D2S2nX8d.js";import{S as g}from"./search_input-BwEBlrSB.js";import"./preload-helper-PPVm8Dsz.js";import"./data-QnfQTY7I.js";import"./assert-B20_bgky.js";import"./explorer-BIvIKU3a.js";import"./validator-CiTB3PK8.js";import"./wallet_address-CWJZxHZ9.js";import"./promise_resolver-DsSbWftV.js";import"./provide_async_states-CMIoQRxa.js";import"./icon_button-DE9OrONK.js";import"./higher_order-DagK1XCO.js";import"./button-DoyOZXCI.js";import"./card-CJu4WajX.js";import"./label-BE1c8qNS.js";import"./relative_time_since_date_text-CIVd6X04.js";import"./now_provider-KL7TCSJM.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./path_resolver_provider-BxmbrlnP.js";import"./number_text-DQRO7zl6.js";import"./number_formatters_provider-DQjo9vlS.js";import"./text-CEhLEmI-.js";import"./typography-Cf3UQRAk.js";import"./search_glass-DKd1PhIP.js";import"./svg_icon_base-BtviVFgm.js";import"./container-8vFAvF9C.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Se=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,Se as __namedExportsOrder,me as default};
