import{j as u}from"./iframe-BzM1REe5.js";import{E as r,a as t,H as y,F as f,b as w,c as d}from"./promise_builder-IMV_mUhm.js";import"./blocks-BWloOeNV.js";import{P as g}from"./nodes-D7BPIfrv.js";import{m,i as p}from"./functional-DK5v8yH0.js";import{T as l}from"./tagged_base64-R5asr4-X.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./array_buffer_hex-B8TZXvFc.js";import"./array_buffer_base64-DkONyiFy.js";import"./bigint-CufIvmoo.js";import"./unimplemented_error-CMF8SzXs.js";import"./wallet_address-DAUZdEEL.js";import"./loading_provider-Cf6L2PDb.js";import"./view_change_evidence_v1-4rBJNXIe.js";import"./monetary_value-DN71IgaJ.js";import"./fetch_error-7gQ_WRN7.js";import"./missing_element_error-CMLVwjEG.js";import"./not_found_error-l32Q-ON6.js";import"./stake_table-DX0fkpcZ.js";import{S as x}from"./search_input-Bzoof1Ev.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-VPExH5Eh.js";import"./assert-B6AoMnt_.js";import"./summary_histograms-CBvVkNXk.js";import"./circular_progress_indicator-B9ilkt7L.js";import"./higher_order-RPDetbly.js";import"./text-CEhLEmI-.js";import"./byte_size_text-BvBqpNSY.js";import"./number_formatters_provider-B55I5973.js";import"./locale_provider-CcmMVSKG.js";import"./wallet_address_text-DkuIDJMv.js";import"./date_time_formatters_provider-BQMjgMAw.js";/* empty css               */import"./date_time_text-CkDQW_O2.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-BX6Ncm6j.js";import"./money_text-CvmVZA_V.js";import"./money_text_full-DtYqNUaR.js";import"./number_text-CoNdK3e3.js";import"./percentage_text-DoqaZ5Li.js";import"./relative_time_since_date_text-CbvHaqJF.js";import"./tagged_base64_text-BxaxBsXv.js";import"./time_text-DWVaFWBe.js";import"./provide_async_states-C7YFZX1i.js";import"./data_provider-UvOryvGc.js";import"./promise_resolver-DTeTxs6H.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./icon_button-9UwvfCIU.js";import"./button-xlPKfHkE.js";import"./card-nv9dVqy5.js";import"./label-DbUh9m4B.js";import"./typography-x0QpVsAI.js";import"./path_resolver_provider-DpiTf9TV.js";import"./async_iterable_resolver-D1lGKdFw.js";import"./x_icon-Cj5-XcrP.js";import"./chevron_up-BZB8tbSA.js";import"./twitter_icon-_zJMwtMj.js";import"./vertical_scroll-C_cix099.js";import"./container-DjNSeIcn.js";const E=h=>u.jsx(y.Provider,{value:new f,children:u.jsx(x,{...h})}),Ce={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new g,S=Array.from(m(p(10),()=>new w(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new d(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
