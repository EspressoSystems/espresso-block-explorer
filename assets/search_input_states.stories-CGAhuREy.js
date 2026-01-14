import{j as i}from"./iframe-uLWYWIdy.js";import{a as r,C as f,F as y,b as t}from"./cappuccino_hot_shot_query_service_api_context-joxNeeWu.js";import"./blocks-Dw_RhIDq.js";import{P as w}from"./nodes-BcMKYiFz.js";import{m as p,i as l}from"./functional-DsFqNm-o.js";import{T as m}from"./tagged_base64-OJExTSEK.js";import{C,a as d}from"./height_and_address-BuKJdZLP.js";import"./base64-C9eISNYa.js";import"./string-BsSBvYb_.js";import"./array_buffer-OWUzmdpG.js";import"./bigint-XOkPApkc.js";import"./loading_provider-BM5-2tPO.js";import"./monetary_value-B8_AgdSi.js";import"./fetch_error-D3nSOO0h.js";import"./missing_element_error-BOXFIEXu.js";import"./not_found_error-D_XgWhca.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import{S as g}from"./search_input-CSsIK0Qs.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-ykrKhyuT.js";import"./assert-B11BgmXM.js";import"./validator-DvtB0LEj.js";import"./wallet_address-Djn4OEas.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-2OvTi4iH.js";import"./higher_order-BV5WAo3w.js";import"./button-3kQVwov6.js";import"./card-D29d4h2p.js";import"./label-CQ9FQXZM.js";import"./typography-D9YEMAu1.js";import"./path_resolver_provider-WtzdELai.js";import"./promise_resolver-BocC3IZa.js";import"./provide_async_states-DlviSoxq.js";import"./data_provider-wCUWR71U.js";import"./relative_time_since_date_text-DZ8q2cCw.js";import"./now_provider-b5eqaHEI.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./locale_provider-CWIPDalB.js";import"./number_text-DsiwwU3j.js";import"./number_formatters_provider-BJawDDf5.js";import"./text-CEhLEmI-.js";import"./search_glass-1dCwa4Tu.js";import"./svg_icon_base-kLW-7jgl.js";import"./container-Ddwx2EqO.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
