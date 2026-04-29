import{j as u}from"./iframe-Blfbjlvh.js";import{E as r,a as t,H as y,F as f,b as w,c as d}from"./promise_builder-0abF-NrO.js";import"./blocks-DUPxZJN1.js";import{P as g}from"./nodes-B9V7XXPx.js";import{m,i as p}from"./functional-CFnOe1PN.js";import{T as l}from"./tagged_base64-R5asr4-X.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./array_buffer_hex-K4SX2B-7.js";import"./array_buffer_base64-DkONyiFy.js";import"./bigint-CufIvmoo.js";import"./unimplemented_error-CMF8SzXs.js";import"./wallet_address-Cy_sXQzx.js";import"./loading_provider-DXstYbvN.js";import"./view_change_evidence_v1-MpkZHe3x.js";import"./monetary_value-DN71IgaJ.js";import"./fetch_error-7gQ_WRN7.js";import"./missing_element_error-CMLVwjEG.js";import"./not_found_error-l32Q-ON6.js";import"./stake_table-vtegmqEX.js";import{S as x}from"./search_input-BBL0PmNz.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-_8qg-Rss.js";import"./assert-B6AoMnt_.js";import"./summary_histograms-CBvVkNXk.js";import"./circular_progress_indicator-D9cGi28K.js";import"./higher_order-DC1bhpzY.js";import"./text-CEhLEmI-.js";import"./byte_size_text-fYb6Ipih.js";import"./number_formatters_provider-CMgMBIb7.js";import"./locale_provider-2gwxwAQe.js";import"./wallet_address_text-Ce2BIBuE.js";import"./date_time_formatters_provider-CTRX1eWg.js";/* empty css               */import"./date_time_text-goFrQyOw.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-CMd0ughg.js";import"./money_text-BHu1NHy8.js";import"./money_text_full-Cij7145-.js";import"./number_text-B0fm5SWR.js";import"./percentage_text-Df9tDUxB.js";import"./relative_time_since_date_text-DON7xrTR.js";import"./tagged_base64_text-fqOOQXXq.js";import"./time_text-Bs6IzVdx.js";import"./provide_async_states-CTTp0qtV.js";import"./data_provider-DgI1389i.js";import"./promise_resolver-LFoVq2E7.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./icon_button-BXZZaGL2.js";import"./button-CZ363swt.js";import"./card-BX2I1LTH.js";import"./label-COnSXR8t.js";import"./typography-Bjr2JLHR.js";import"./path_resolver_provider-CzsBDxvl.js";import"./async_iterable_resolver-BIiSjMUo.js";import"./x_icon-9X5OLWoj.js";import"./chevron_up-C0fCgRF-.js";import"./twitter_icon-VX9yyVpv.js";import"./vertical_scroll-EuYZzzgE.js";import"./container-C7ev9a-3.js";const E=h=>u.jsx(y.Provider,{value:new f,children:u.jsx(x,{...h})}),Ce={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new g,S=Array.from(m(p(10),()=>new w(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new d(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], []))
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults(fakeBlockSearchResults, [])),
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
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], fakeTransactionSearchResults))
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new ExplorerGetSearchResultResponse(new ExplorerSearchResults([], fakeTransactionSearchResults)),
      offset: 0
    }
  }
}`,...i.parameters?.docs?.source}}};const Fe=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,i as TransactionSearchResultsSelectedFirst,Fe as __namedExportsOrder,Ce as default};
