import{j as i}from"./iframe-lCBbYCEU.js";import{a as r,C as f,F as y,b as t}from"./cappuccino_hot_shot_query_service_api_context-DSO45wB8.js";import"./blocks-XwzhN47T.js";import{P as w}from"./nodes--GPtCQfL.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{T as m}from"./tagged_base64-Beas1ikT.js";import{C,a as d}from"./height_and_address-DEARJVGA.js";import"./base64-Cs6zZcIo.js";import"./string-DDfX_5jt.js";import"./array_buffer-BrH4NOGl.js";import"./bigint-CrsQnXJW.js";import"./loading_provider-CfI_gzNc.js";import"./monetary_value-BgU0H56Y.js";import"./fetch_error-Cj-x_lfT.js";import"./missing_element_error-BIT--q2G.js";import"./not_found_error-C4PEbicn.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import{S as g}from"./search_input-Baq96fSY.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BW6Daj7l.js";import"./assert-B11BgmXM.js";import"./validator-D7TaBp9n.js";import"./wallet_address-DvLNDg5r.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-Bra0vYMO.js";import"./higher_order-B24NaQsc.js";import"./button-Dj1HGZq_.js";import"./card-bTL_EakN.js";import"./label-nz9fsGgx.js";import"./typography-C2G_oAYK.js";import"./path_resolver_provider-BQqhBI_r.js";import"./promise_resolver-C35CelZq.js";import"./provide_async_states-sOhoHCpB.js";import"./data_provider-JNzMXrDd.js";import"./relative_time_since_date_text-6snd4Hu9.js";import"./now_provider-BJlCMxdf.js";import"./date_time_formatters_provider-D_P0LLFh.js";import"./locale_provider-CivmyzXf.js";import"./number_text-C1feg6s_.js";import"./number_formatters_provider-n3Owoqke.js";import"./text-CEhLEmI-.js";import"./search_glass-SundPE7M.js";import"./svg_icon_base-K_bknCBI.js";import"./container-BEWGtb-I.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
