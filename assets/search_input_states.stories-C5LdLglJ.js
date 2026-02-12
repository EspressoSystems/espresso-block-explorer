import{j as i}from"./iframe-D4NG4Ygg.js";import{a as r,b as t,C as f,F as y}from"./cappuccino_hot_shot_query_service_api_context-DlSdfeHd.js";import"./blocks-BLRm0qbp.js";import{P as w}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{T as m}from"./tagged_base64-CUYa8gnG.js";import{C,a as d}from"./height_and_address-Do-kAfmv.js";import"./base64-Bp_idpg2.js";import"./string-DoEjSKSD.js";import"./array_buffer-DMedzaQw.js";import"./bigint-DqPQCubx.js";import"./loading_provider-B7axcFy0.js";import"./monetary_value-krz3zuqt.js";import"./fetch_error-g-VCQtdm.js";import"./missing_element_error-BOfgw7mk.js";import"./not_found_error-DDa8r4Zj.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import{S as g}from"./search_input-BQ4CDeAH.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-CNUcw_TJ.js";import"./assert-B11BgmXM.js";import"./validator-BLy62hcp.js";import"./wallet_address-BEIvL2Xd.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-s1yS-ZMm.js";import"./higher_order-BVplWATc.js";import"./button-CMLc6d_k.js";import"./card-DX01MHcn.js";import"./label-D8dHc5tI.js";import"./typography-B6ctLHzU.js";import"./path_resolver_provider-T-F4e6m2.js";import"./promise_resolver-6eSa-CmG.js";import"./provide_async_states-Czoq1B-f.js";import"./data_provider-kgUlCSLb.js";import"./relative_time_since_date_text-Oku8-zsN.js";import"./now_provider-DEocB4vj.js";import"./date_time_formatters_provider-D_NikJXM.js";import"./locale_provider-y_w6A6F5.js";import"./number_text-CGho1SjB.js";import"./number_formatters_provider-CV8eEq8L.js";import"./text-CEhLEmI-.js";import"./search_glass-C-IxBWA0.js";import"./svg_icon_base-D3FfKTtS.js";import"./container-D47jH8o3.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
