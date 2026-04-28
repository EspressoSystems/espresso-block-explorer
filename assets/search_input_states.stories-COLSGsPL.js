import{j as u}from"./iframe-BnfkL8Kh.js";import{E as r,a as t,H as y,F as f,b as w,c as d}from"./promise_builder-DBobNSv0.js";import"./blocks-DUPxZJN1.js";import{P as g}from"./nodes-B9V7XXPx.js";import{m,i as p}from"./functional-CFnOe1PN.js";import{T as l}from"./tagged_base64-R5asr4-X.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./array_buffer_hex-K4SX2B-7.js";import"./array_buffer_base64-DkONyiFy.js";import"./bigint-CufIvmoo.js";import"./unimplemented_error-CMF8SzXs.js";import"./wallet_address-Cy_sXQzx.js";import"./loading_provider-D7jVFZnN.js";import"./view_change_evidence_v1-DrtfwW7H.js";import"./monetary_value-DN71IgaJ.js";import"./fetch_error-7gQ_WRN7.js";import"./missing_element_error-CMLVwjEG.js";import"./not_found_error-l32Q-ON6.js";import"./stake_table-vtegmqEX.js";import{S as x}from"./search_input-D1EYNcM9.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-B7y7w-nQ.js";import"./assert-B6AoMnt_.js";import"./summary_histograms-CBvVkNXk.js";import"./circular_progress_indicator-ASlMJQs_.js";import"./higher_order-DQHFbP0d.js";import"./text-CEhLEmI-.js";import"./byte_size_text-B76LDok-.js";import"./number_formatters_provider-Bn0oY0TV.js";import"./locale_provider-CYJgRcn0.js";import"./wallet_address_text-6-IkVQhj.js";import"./date_time_formatters_provider-Ce8bEeDE.js";/* empty css               */import"./date_time_text-C0tSpfk5.js";import"./full_hex_text-B9F7kEcQ.js";import"./hex_text-BF6HsMV1.js";import"./money_text-D7zHf1Cp.js";import"./money_text_full-D40dbKHR.js";import"./number_text-BnuGQVAX.js";import"./percentage_text-DqJBck8H.js";import"./relative_time_since_date_text-ZWzH2UAR.js";import"./tagged_base64_text-BEZsdLdo.js";import"./time_text-CTnIpnRY.js";import"./provide_async_states-B6s17Xt-.js";import"./data_provider-DR0SepNE.js";import"./promise_resolver-meuzv9ZO.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./icon_button-B0XeVDVl.js";import"./button-Dpy0rE1C.js";import"./card-D3z7ArwK.js";import"./label-Dr6oLJ4a.js";import"./typography-B6LbXW63.js";import"./path_resolver_provider-CehlRrhg.js";import"./async_iterable_resolver-Ddg_3UE-.js";import"./x_icon-CH2hZlfy.js";import"./chevron_up-De1rCEk7.js";import"./twitter_icon-BG46ZLRr.js";import"./vertical_scroll-Dmhye8Fv.js";import"./container-eaZwogTS.js";const E=h=>u.jsx(y.Provider,{value:new f,children:u.jsx(x,{...h})}),Ce={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new g,S=Array.from(m(p(10),()=>new w(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new d(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
