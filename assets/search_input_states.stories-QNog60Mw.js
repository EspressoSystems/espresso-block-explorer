import{j as i}from"./iframe-BisBQj4b.js";import{a as r,b as t,C as f,F as y}from"./cappuccino_hot_shot_query_service_api_context-iVJ8Zytx.js";import"./blocks-DxW4BCgY.js";import{P as w}from"./nodes-DkqQpvmH.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{T as m}from"./tagged_base64-ZlJISydJ.js";import{C,a as d}from"./height_and_address-CYA_N0t6.js";import"./base64-GdO7PHhr.js";import"./string-DDfX_5jt.js";import"./array_buffer-D3ACJkCk.js";import"./bigint-CrsQnXJW.js";import"./loading_provider-BcyIpYE9.js";import"./monetary_value-BgU0H56Y.js";import"./fetch_error-Cj-x_lfT.js";import"./missing_element_error-BIT--q2G.js";import"./not_found_error-C4PEbicn.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import{S as g}from"./search_input-og3sTLXG.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-DI76IWem.js";import"./assert-B11BgmXM.js";import"./validator-CdkOZxMl.js";import"./wallet_address-DHR3FL3i.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-D0KMSKa5.js";import"./higher_order-B_D7TFYJ.js";import"./button-Cil6Nn0d.js";import"./card-D0UOX6M7.js";import"./label-CGwj4aky.js";import"./typography-CoQDMpTx.js";import"./path_resolver_provider-CkeKuk75.js";import"./promise_resolver-D-e2p1re.js";import"./provide_async_states-dcTrIMdG.js";import"./data_provider-DSZ9Vv_3.js";import"./relative_time_since_date_text-BcKaKuH7.js";import"./now_provider-BADpF5pN.js";import"./date_time_formatters_provider-T4Gwii8n.js";import"./locale_provider-Cy9Qu1vd.js";import"./number_text-DzPmU_Wm.js";import"./number_formatters_provider-BbUevisL.js";import"./text-CEhLEmI-.js";import"./search_glass-mM_LzLS4.js";import"./svg_icon_base-eIEhIJU_.js";import"./container-DbFCdQqu.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
