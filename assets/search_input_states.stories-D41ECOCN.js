import{j as i}from"./iframe-BvJnvOK3.js";import{a as r,b as t,C as f,F as y}from"./cappuccino_hot_shot_query_service_api_context-BAvpYj8i.js";import"./blocks-BEHlDsni.js";import{P as w}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{T as m}from"./tagged_base64-C1c0MovD.js";import{C,a as d}from"./height_and_address-bdNPMBCQ.js";import"./base64-D2HwddJb.js";import"./string-BGbpIfpT.js";import"./array_buffer_hex-2CxW6xhL.js";import"./array_buffer_base64-Df7I341a.js";import"./monetary_value-BBaBP7s4.js";import"./wallet_address-JTIetClq.js";import"./unimplemented_error-BDiuBEcJ.js";import"./loading_provider-BgHImaQi.js";import"./view_change_evidence_v1-DN-jlMQt.js";import"./fetch_error-CpkjK4oN.js";import"./missing_element_error-BMmla67R.js";import"./not_found_error-Dccy2lFm.js";import{S as g}from"./search_input-DPwZyrQX.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-BptZv2Lf.js";import"./assert-BWgKxNW2.js";import"./validator-CeWWAq22.js";import"./sleep-CW-vxfof.js";import"./data-D5p7UK42.js";import"./icon_button-CwLFDOP7.js";import"./higher_order-CzhT3LZz.js";import"./button-CyqoXlcM.js";import"./card-DepqxSAB.js";import"./label-9K-rLN01.js";import"./typography-BvwdJNDp.js";import"./path_resolver_provider-ITMlBgoH.js";import"./promise_resolver-kWMCy_m1.js";import"./provide_async_states-BXyETLp8.js";import"./data_provider-D1xrNIUw.js";import"./relative_time_since_date_text-CL62WKWF.js";import"./now_provider-C3aSuMvV.js";import"./date_time_formatters_provider-DiFEct46.js";import"./locale_provider-DLWcZiH3.js";import"./number_text-B3D3piOk.js";import"./number_formatters_provider-Cr-dALW7.js";import"./text-CEhLEmI-.js";import"./search_glass-BJ0La6C3.js";import"./svg_icon_base-CnwbtYtI.js";import"./container-DlV63yPu.js";const x=h=>i.jsx(f.Provider,{value:new y,children:i.jsx(g,{...h})}),he={title:"Block Explorer/Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
