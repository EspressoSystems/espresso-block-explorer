import{j as u}from"./iframe-COKd2Os-.js";import{E as r,a as t,H as f,F as y}from"./hot_shot_query_service_api_context-T58k7YpJ.js";import"./blocks-36ZEPcvJ.js";import{P as w}from"./nodes-BsbvMhdT.js";import{m,i as p}from"./functional-BY4LX4kJ.js";import{T as l}from"./tagged_base64-CKlPb5jQ.js";import{E as d,a as g}from"./height_and_address-CfMFdU6e.js";import"./base64-CIn2pRZH.js";import"./string-DwcMXV6G.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./array_buffer_base64-G4Wtb-y4.js";import"./bigint-nvMxq-Qk.js";import"./unimplemented_error-BNblu8WE.js";import"./wallet_address-3kO0efKM.js";import"./loading_provider-CAiGDh4M.js";import"./view_change_evidence_v1-BcYH3FH1.js";import"./monetary_value-DqTXp7cz.js";import"./fetch_error-D_X_Gp90.js";import"./missing_element_error-BXDBouYu.js";import"./not_found_error-BdUVpmTw.js";import"./promise_builder-DANtV8OO.js";import"./stake_table_field-CIreD0Dp.js";import{S as x}from"./search_input-C5KD1hh4.js";import"./preload-helper-PPVm8Dsz.js";import"./explorer-CSZf3dEM.js";import"./assert-B11BgmXM.js";import"./validator-BgZRo16z.js";import"./stake_table-Bbtpv34V.js";import"./sleep-CW-vxfof.js";import"./data-DkoEaPI0.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./higher_order-t8f3m54J.js";import"./text-CEhLEmI-.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./locale_provider-CRfUaY6B.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_formatters_provider-KQLt3BJr.js";/* empty css               */import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./provide_async_states-CvBr9k-N.js";import"./data_provider-I8Cq7ni6.js";import"./promise_resolver-pqxv98-P.js";import"./icon_button-DcakUMcU.js";import"./button-PHgiVnmT.js";import"./card-BY4-ajl1.js";import"./label-CaZTa4Lb.js";import"./typography-DxbyuuNv.js";import"./path_resolver_provider-C9PXJtCJ.js";import"./async_iterable_resolver-D6M1xbii.js";import"./x_icon-BdiuL9tT.js";import"./chevron_up-0QfBWqbC.js";import"./twitter_icon-CDA43j3T.js";import"./vertical_scroll-e5WQDJ-j.js";import"./container-ClsFc8-2.js";const E=h=>u.jsx(f.Provider,{value:new y,children:u.jsx(x,{...h})}),Le={title:"Block Explorer/Components/Page Sections/Search Input/States",component:E},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new w,S=Array.from(m(p(10),()=>new d(new l("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(m(p(10),()=>new g(new l("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},i={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ge=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,i as TransactionSearchResultsSelectedFirst,Ge as __namedExportsOrder,Le as default};
