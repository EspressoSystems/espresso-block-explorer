import{j as i}from"./iframe-D38n0YpH.js";import"./blocks-DWlb3Jqu.js";import{P as y}from"./nodes-BGjGUOjj.js";import{m as p,i as l}from"./functional-AkqJadlP.js";import{T as m}from"./tagged_base64-DQyXh8_2.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./cappuccino_hot_shot_query_service_api_context-BHRhid4U.js";import"./base64-CraqfgLB.js";import"./string-BMw5G0Eo.js";import"./array_buffer-CQ8t_IxW.js";import"./loading_provider-CmIKNCgq.js";import"./monetary_value-DtPxvzZx.js";import"./fetch_error-Dd6dXogQ.js";import"./missing_element_error-Bv32e7ki.js";import"./not_found_error-D5_0fLFV.js";import"./unimplemented_error-Bu4XFSEf.js";import"./bigint-D18ZzuZl.js";import"./url-D77M_m7j.js";import{S as g}from"./search_input-fvt8cpvY.js";import"./preload-helper-PPVm8Dsz.js";import"./data-QnfQTY7I.js";import"./assert-B20_bgky.js";import"./explorer-TzKwbjAF.js";import"./validator-CIjtoNtH.js";import"./wallet_address-SfsM8dHX.js";import"./promise_resolver-C361kvsJ.js";import"./provide_async_states-CjOcymhR.js";import"./icon_button-D6kDxS7x.js";import"./higher_order-xjg9P6xC.js";import"./button-DRrh3J5o.js";import"./card-Dj3LTq1C.js";import"./label-zU4z8gpb.js";import"./relative_time_since_date_text-BMr8JM1Q.js";import"./now_provider-DY018Nl3.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./path_resolver_provider-DkcsmNfF.js";import"./number_text-BXk_sP1g.js";import"./number_formatters_provider-ByDysz5-.js";import"./text-CEhLEmI-.js";import"./typography-91BC-7Aj.js";import"./search_glass-DCrh4jlM.js";import"./svg_icon_base-DTyOsi0d.js";import"./container-By-lTVZJ.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
