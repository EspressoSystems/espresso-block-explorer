import{j as i}from"./iframe-D8Xp_xun.js";import"./blocks-DSOY1HQB.js";import{P as y}from"./nodes-TxP0qWmy.js";import{m as p,i as l}from"./functional-By_9lidy.js";import{T as m}from"./TaggedBase64-DlPC3yRR.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-BtE3f2bU.js";import"./base64-Dpbg5EzT.js";import"./string-DO2hqbbz.js";import"./array_buffer-CXxOH-jd.js";import"./LoadingProvider-D2cYfIgs.js";import"./monetary_value-CGCIrnLJ.js";import"./FetchError-DuIs0boE.js";import"./MissingElementError-Bky0HlCJ.js";import"./NotFoundError-bihNLxJz.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./bigint-Rw5otYDY.js";import"./url-BkzmLfUb.js";import{S as g}from"./SearchInput-CcaEVGBO.js";import"./preload-helper-PPVm8Dsz.js";import"./data-Cpeha0UW.js";import"./assert-B20_bgky.js";import"./explorer-DvTBwC5z.js";import"./validator-NVaijjF0.js";import"./wallet_address-Bz0sM43W.js";import"./PromiseResolver-BOCISzV2.js";import"./ProvideAsyncStates-DW8zdw2B.js";import"./IconButton-ClDRD10I.js";import"./higher_order-B-N0AM-V.js";import"./Button-CSJAkSNQ.js";import"./label-Bv386zfi.js";import"./RelativeTimeSinceDateText-B_wR9imQ.js";import"./NowProvider-CfKugIy7.js";import"./DateTimeFormattersProvider-Bs-k3ShI.js";import"./LocaleProvider-HRtypQVb.js";import"./PathResolverProvider-BDnGbYv1.js";import"./Card-CdtDVXN5.js";import"./NumberText-B7BvvFcg.js";import"./NumberFormattersProvider-C5Ud-AgN.js";import"./Text-BU7JBOLk.js";import"./typography-BDqn6gU5.js";import"./SearchGlass-DHYaZ1FV.js";import"./SVGIconBase-CDuc6DRM.js";import"./Container-lNpudLo2.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),me={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
