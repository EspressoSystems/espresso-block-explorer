import{j as u}from"./iframe-CLPnbpxV.js";import{E as r,a as t,H as y,F as f,b as w,c as d}from"./promise_builder-D4A8enwA.js";import"./blocks-BWloOeNV.js";import{P as g}from"./nodes-D7BPIfrv.js";import{m,i as p}from"./functional-DK5v8yH0.js";import{T as l}from"./tagged_base64-R5asr4-X.js";import"./base64-ClQJ-u6S.js";import"./string-DCKD4j-j.js";import"./array_buffer_hex-B8TZXvFc.js";import"./array_buffer_base64-DkONyiFy.js";import"./bigint-CufIvmoo.js";import"./unimplemented_error-CMF8SzXs.js";import"./wallet_address-DAUZdEEL.js";import"./loading_provider-paXcQWk1.js";import"./view_change_evidence_v1-BnFV2vPF.js";import"./monetary_value-DN71IgaJ.js";import"./fetch_error-7gQ_WRN7.js";import"./missing_element_error-CMLVwjEG.js";import"./not_found_error-l32Q-ON6.js";import"./stake_table-DX0fkpcZ.js";import{S as x}from"./search_input-BZPZOO6d.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-LPg8CCaY.js";import"./assert-B6AoMnt_.js";import"./summary_histograms-CBvVkNXk.js";import"./circular_progress_indicator-c9XfkaIK.js";import"./higher_order-7cy5ynj_.js";import"./text-CEhLEmI-.js";import"./byte_size_text-_ohqn1f_.js";import"./number_formatters_provider-GVH6Hwmx.js";import"./locale_provider-BN4HfGkg.js";import"./wallet_address_text-CMr7VMhM.js";import"./date_time_formatters_provider-CmqVjlvw.js";/* empty css               */import"./date_time_text-Vjl96l3q.js";import"./full_hex_text-DIaruHQS.js";import"./hex_text-BsZ3Qfa8.js";import"./money_text-RleJYn5Z.js";import"./money_text_full-DQxVbaBP.js";import"./number_text-D9k67KIt.js";import"./percentage_text-BwRPUx72.js";import"./relative_time_since_date_text-DzcnoK0x.js";import"./tagged_base64_text-BmMKknzC.js";import"./time_text-DSSKbz_8.js";import"./provide_async_states-Bx1oVvH5.js";import"./data_provider-DgjhqqNC.js";import"./promise_resolver-DGDLAEu6.js";import"./sleep-CW-vxfof.js";import"./data-Bx35I0WQ.js";import"./icon_button-CbY0ityP.js";import"./button-Q8Vg8dqj.js";import"./card-DEiQ9h5C.js";import"./label-DcUIOBt7.js";import"./typography-B35vkejZ.js";import"./path_resolver_provider-CciWN3AP.js";import"./async_iterable_resolver-DtDr8S0I.js";import"./x_icon-rfrqIKaF.js";import"./chevron_up-BrJm_Csg.js";import"./twitter_icon-DnMoPF-q.js";import"./vertical_scroll-SCOcfRfI.js";import"./container-CW-0IuYZ.js";const E=h=>u.jsx(y.Provider,{value:new f,children:u.jsx(x,{...h})}),Ce={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new g,S=Array.from(m(p(10),()=>new w(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new d(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
