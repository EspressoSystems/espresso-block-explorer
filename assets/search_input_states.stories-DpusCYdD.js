import{j as i}from"./iframe-DBL03KB_.js";import{P as y}from"./generateFakeData-BFCdh-w9.js";import{m as p,i as l}from"./functional-DhS0UyF-.js";import{T as m}from"./TaggedBase64-DTqtQPCE.js";import"./UnimplementedError-DEXMe0kn.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-CGVABb2v.js";import"./base64-CwylSrof.js";import"./string-DurhFPzJ.js";import"./array_buffer-DT_hwq4h.js";import"./MissingElementError-C2wrrywP.js";import"./monetary_value-D_JlCdWi.js";import"./url-Cp1wsmOC.js";import"./WebWorkerErrorResponse-DDmF8pSp.js";import"./FetchError-CshovAWm.js";import"./NotFoundError-BfMh7-IB.js";import{S as g}from"./SearchInput-f8uZK08L.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-CeQBE4up.js";import"./assert-BI051aL8.js";import"./explorer-CJw6wZnY.js";import"./LoadingProvider-DNR5Hkoh.js";import"./PromiseResolver-DwzM1kW5.js";import"./ProvideAsyncStates-sFLmmd0E.js";import"./IconButton-_n-orWdk.js";import"./higher_order-BDc1dO9t.js";import"./Button-CowcYNAK.js";import"./label-DSt-7g5L.js";import"./PathResolverProvider-C0zkn9is.js";import"./Card-5R6NZ5QH.js";import"./NumberText-C6v9mUpM.js";import"./NumberFormattersProvider-MvsW0TSm.js";import"./LocaleProvider-DPHh7gaX.js";import"./RelativeTimeText-CPThff-t.js";import"./DateTimeFormattersProvider-CmMqGjYy.js";import"./NowProvider-DkyPls7m.js";import"./Text-BU7JBOLk.js";import"./typography-DsvMXyRR.js";import"./SearchGlass-Ykd22-PS.js";import"./SVGIconBase-CnTjSQHC.js";import"./Container-Bdba4zDo.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),pe={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const le=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,le as __namedExportsOrder,pe as default};
