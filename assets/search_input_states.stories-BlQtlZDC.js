import{j as i}from"./iframe-3Z2fgCPY.js";import"./blocks-h-zMY_bP.js";import{P as y}from"./nodes-BtP9A9m5.js";import{m as p,i as l}from"./functional-DLuq-Zgx.js";import{T as m}from"./tagged_base64-DlPC3yRR.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./cappuccino_hot_shot_query_service_api_context-DJEe-4bc.js";import"./base64-Dpbg5EzT.js";import"./string-DO2hqbbz.js";import"./array_buffer-DYdk84gS.js";import"./loading_provider-Ur2XoJ-b.js";import"./monetary_value-CGCIrnLJ.js";import"./fetch_error-DuIs0boE.js";import"./missing_element_error-Bky0HlCJ.js";import"./not_found_error-bihNLxJz.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./bigint-Rw5otYDY.js";import"./url-BkzmLfUb.js";import{S as g}from"./search_input-CPUrASDx.js";import"./preload-helper-PPVm8Dsz.js";import"./data-Cpeha0UW.js";import"./assert-B20_bgky.js";import"./explorer-BK5ylhki.js";import"./validator-DiMZuNkp.js";import"./wallet_address-cs0DJHAB.js";import"./promise_resolver-Br2QLwS5.js";import"./provide_async_states-1FCOnEtg.js";import"./icon_button-Bz3vi-MQ.js";import"./higher_order-HipsDJR4.js";import"./button-xS-DSVF0.js";import"./card-CjCkCJ1k.js";import"./label-BjY6IUq1.js";import"./relative_time_since_date_text-CL_lCgQD.js";import"./now_provider-5ZcTXbz-.js";import"./date_time_formatters_provider-Dd-pwKzP.js";import"./locale_provider-B-1mGrFX.js";import"./path_resolver_provider-BSMezMxn.js";import"./number_text-BJeOQPuJ.js";import"./number_formatters_provider-C17xfnZz.js";import"./text-CEhLEmI-.js";import"./typography-CaQwexFI.js";import"./search_glass-DnKCyrqn.js";import"./svg_icon_base-VH6Zm-Te.js";import"./container-CkVCVe5V.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
