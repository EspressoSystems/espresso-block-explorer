import{j as u}from"./iframe-ByirMSqC.js";import{E as r,a as t,H as y,F as f,b as w,c as d}from"./promise_builder-muywECiG.js";import"./blocks-BWloOeNV.js";import{P as g}from"./nodes-D7BPIfrv.js";import{m,i as p}from"./functional-DK5v8yH0.js";import{T as l}from"./tagged_base64-R5asr4-X.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./array_buffer_hex-B8TZXvFc.js";import"./array_buffer_base64-DkONyiFy.js";import"./bigint-CufIvmoo.js";import"./unimplemented_error-CMF8SzXs.js";import"./wallet_address-DAUZdEEL.js";import"./loading_provider-JQzlSpbY.js";import"./view_change_evidence_v1-Dra8o73Q.js";import"./monetary_value-DN71IgaJ.js";import"./fetch_error-7gQ_WRN7.js";import"./missing_element_error-CMLVwjEG.js";import"./not_found_error-l32Q-ON6.js";import"./stake_table-DX0fkpcZ.js";import{S as x}from"./search_input-V6LsKDPR.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-CrdMY4vr.js";import"./assert-B6AoMnt_.js";import"./summary_histograms-CBvVkNXk.js";import"./circular_progress_indicator-DX47TK7n.js";import"./higher_order-B4s6DllY.js";import"./text-CEhLEmI-.js";import"./byte_size_text-rg32i4pu.js";import"./number_formatters_provider-BSxXP_Sb.js";import"./locale_provider-EAu4dooN.js";import"./wallet_address_text-pc0HgSn8.js";import"./date_time_formatters_provider-BDkg3xmd.js";/* empty css               */import"./date_time_text-Bkgrlfv9.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-Ds-pkMC3.js";import"./money_text-Pdt9ieyf.js";import"./money_text_full-B_yvHUNG.js";import"./number_text-BPE_jkSC.js";import"./percentage_text-j7czaObi.js";import"./relative_time_since_date_text-Z2A2B9ek.js";import"./tagged_base64_text-BmBn2DYq.js";import"./time_text-DzXzA355.js";import"./provide_async_states-BOJbI_Cd.js";import"./data_provider-uPErEsh-.js";import"./promise_resolver-BmTReJnd.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./icon_button-CcGPHgXo.js";import"./button-JQiSrqm6.js";import"./card-DmuDK-sr.js";import"./label-Dv8k1Ut_.js";import"./typography-DrYgbUpu.js";import"./path_resolver_provider-_n_uu5AE.js";import"./async_iterable_resolver-C0jMMB28.js";import"./x_icon-CE7rSdDc.js";import"./chevron_up-S1JPAfJ6.js";import"./twitter_icon-BVgDx6-6.js";import"./vertical_scroll-C-wAnSnI.js";import"./container-Bk6NjXy8.js";const E=h=>u.jsx(y.Provider,{value:new f,children:u.jsx(x,{...h})}),Ce={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new g,S=Array.from(m(p(10),()=>new w(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new d(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
