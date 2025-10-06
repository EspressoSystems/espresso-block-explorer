import{j as i}from"./iframe-Dsdv_jy8.js";import{P as y}from"./generateFakeData-CJgVUPpv.js";import{m as p,i as l}from"./functional-CtE-8sCS.js";import{T as m}from"./TaggedBase64-yXncOpRr.js";import"./UnimplementedError-DbqcLgyi.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-DkjGRxAx.js";import"./base64-jao5sNyx.js";import"./string-BOqmI8nC.js";import"./array_buffer-6KHtE3L0.js";import"./MissingElementError-DHgZ7T60.js";import"./monetary_value-zEjoirMu.js";import"./url-BnopUvm8.js";import"./FetchError-Ba9CvRib.js";import"./NotFoundError-V2m6t4ee.js";import{S as g}from"./SearchInput-B6lHTOjb.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-BeJ5qedR.js";import"./LoadingProvider-ZcPlxnY_.js";import"./PromiseResolver-D417g7Z0.js";import"./ProvideAsyncStates-BdAP9c0y.js";import"./IconButton-DI0Cf13R.js";import"./higher_order-BcrgzP0b.js";import"./Button-zIdfC1HZ.js";import"./label-DB6Cj3T1.js";import"./PathResolverProvider-DQIE-5jR.js";import"./Card-BWis1JEF.js";import"./NumberText-CrclVv3b.js";import"./NumberFormattersProvider-QO8j60_X.js";import"./LocaleProvider-huCKFdsY.js";import"./RelativeTimeText-BgVYf3V3.js";import"./DateTimeFormattersProvider-B3ic2tiK.js";import"./NowProvider-Bqys-kMq.js";import"./Text-BU7JBOLk.js";import"./typography-G6sVg_FI.js";import"./SearchGlass-DxKbn0eh.js";import"./SVGIconBase-rh-N70d0.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),ne={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ce=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,ce as __namedExportsOrder,ne as default};
