import{j as i}from"./iframe-ChMM8fie.js";import{a as r,C as f,F as y,b as t}from"./cappuccino_hot_shot_query_service_api_context-lVXsrw-0.js";import"./blocks-CTgVmMXl.js";import{P as w}from"./nodes-9I9c2iOF.js";import{m as p,i as l}from"./functional-DT4GooI6.js";import{T as m}from"./tagged_base64-YfeKLRN5.js";import{C,a as d}from"./height_and_address-ThaYTKrp.js";import"./base64-_rmSu-kQ.js";import"./string-DoEjSKSD.js";import"./array_buffer-BGAdkDgu.js";import"./bigint-CAUtzhcw.js";import"./loading_provider-DLgXNpIx.js";import"./monetary_value-CL5YFX4A.js";import"./fetch_error-g-VCQtdm.js";import"./missing_element_error-BOfgw7mk.js";import"./not_found_error-DDa8r4Zj.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import{S as g}from"./search_input-B62QCZ5f.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BbOChV9R.js";import"./assert-B11BgmXM.js";import"./validator-nxDvP-Ih.js";import"./wallet_address-CE0HFCr5.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-BP0zySQv.js";import"./higher_order-BDzlKa4m.js";import"./button-B6MLw89K.js";import"./card-sFx9rmY6.js";import"./label-DyjIPWVJ.js";import"./typography-CXTpHQ-1.js";import"./path_resolver_provider-Bi7OwYmA.js";import"./promise_resolver-YvW86r_O.js";import"./provide_async_states-CKGzWnoG.js";import"./data_provider-DipucN8t.js";import"./relative_time_since_date_text-CpWnS_tf.js";import"./now_provider-CCB05c4h.js";import"./date_time_formatters_provider-BWsAdsOr.js";import"./locale_provider--Ln2ac7i.js";import"./number_text-CahUOGB6.js";import"./number_formatters_provider-CudGGieU.js";import"./text-CEhLEmI-.js";import"./search_glass-BE45xqZB.js";import"./svg_icon_base-CS1Nu1nM.js";import"./container-CdE0kalI.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
