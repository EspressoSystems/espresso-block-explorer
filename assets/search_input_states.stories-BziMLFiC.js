import{j as i}from"./iframe-DERpcsaj.js";import"./blocks-D-RxNLhz.js";import{P as y}from"./nodes-BGjGUOjj.js";import{m as p,i as l}from"./functional-AkqJadlP.js";import{T as m}from"./tagged_base64-DQyXh8_2.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./cappuccino_hot_shot_query_service_api_context-DiF1RVZm.js";import"./base64-CraqfgLB.js";import"./string-BMw5G0Eo.js";import"./array_buffer-CQ8t_IxW.js";import"./loading_provider-DWAOa2Po.js";import"./monetary_value-DtPxvzZx.js";import"./fetch_error-Dd6dXogQ.js";import"./missing_element_error-Bv32e7ki.js";import"./not_found_error-D5_0fLFV.js";import"./unimplemented_error-Bu4XFSEf.js";import"./bigint-D18ZzuZl.js";import"./url-D77M_m7j.js";import{S as g}from"./search_input-R8pD-d2l.js";import"./preload-helper-PPVm8Dsz.js";import"./data-QnfQTY7I.js";import"./assert-B20_bgky.js";import"./explorer-B53Xh8qe.js";import"./validator-CIjtoNtH.js";import"./wallet_address-SfsM8dHX.js";import"./promise_resolver-DGT_UkE5.js";import"./provide_async_states-ByTNvCSj.js";import"./icon_button-CqdQNghI.js";import"./higher_order-DzHtQVvV.js";import"./button-pYe7K9rg.js";import"./card-ZXCjX9KG.js";import"./label-CLVfv72F.js";import"./relative_time_since_date_text-NZAFUh1C.js";import"./now_provider-Du-h2Rp4.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./path_resolver_provider-yTnYQJl0.js";import"./number_text-CWqYRbqG.js";import"./number_formatters_provider-CAdhGcCB.js";import"./text-CEhLEmI-.js";import"./typography-Dj8C4yvB.js";import"./search_glass-ChQ6vkg6.js";import"./svg_icon_base-BSoegY8q.js";import"./container-D0PUqV8s.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
