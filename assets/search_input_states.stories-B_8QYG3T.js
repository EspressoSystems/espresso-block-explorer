import{j as i}from"./iframe-BbF3Syj1.js";import"./blocks-P1waaH9F.js";import{P as y}from"./nodes-DkeEh4bp.js";import{m as p,i as l}from"./functional-CRC6BLve.js";import{T as m}from"./tagged_base64-DQyXh8_2.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./cappuccino_hot_shot_query_service_api_context-CJkwwjJQ.js";import"./base64-CraqfgLB.js";import"./string-BMw5G0Eo.js";import"./array_buffer-T9JUf6pH.js";import"./loading_provider-DEd-giv5.js";import"./monetary_value-DtPxvzZx.js";import"./fetch_error-Dd6dXogQ.js";import"./missing_element_error-Bv32e7ki.js";import"./not_found_error-D5_0fLFV.js";import"./unimplemented_error-Bu4XFSEf.js";import"./bigint-D18ZzuZl.js";import"./url-D77M_m7j.js";import{S as g}from"./search_input-CGaEugXf.js";import"./preload-helper-PPVm8Dsz.js";import"./data-QnfQTY7I.js";import"./assert-B20_bgky.js";import"./explorer-uy2cryP-.js";import"./validator-Bu3t8B_u.js";import"./wallet_address-CJdGkmLZ.js";import"./promise_resolver-4LAyf1Wc.js";import"./provide_async_states-B24091I1.js";import"./icon_button-jlsAhfVz.js";import"./higher_order-P_eSrgQE.js";import"./button-BWpPALWI.js";import"./card-Drcx0POy.js";import"./label-BDCEF55u.js";import"./relative_time_since_date_text-Denl0BMc.js";import"./now_provider-B6bWrODL.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./path_resolver_provider-rPfG7hHk.js";import"./number_text-DFd3FJlE.js";import"./number_formatters_provider-DOen9m4S.js";import"./text-CEhLEmI-.js";import"./typography-B0b9ZxV3.js";import"./search_glass-CyVDoJPo.js";import"./svg_icon_base-BTNiSFJX.js";import"./container-C0KCSJx7.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
