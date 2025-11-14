import{j as i}from"./iframe-Dv6htQ23.js";import"./blocks-BbRoLXeF.js";import{P as y}from"./nodes-BnjHQtbM.js";import{m as p,i as l}from"./functional-Cgf59ne2.js";import{T as m}from"./TaggedBase64-S1MhFE0d.js";import"./UnimplementedError-CdIPpzwU.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-ZOx07nQd.js";import"./base64-KHURY7_E.js";import"./string-IJEBdhwx.js";import"./array_buffer-cBr8gIXV.js";import"./LoadingProvider-CRv47c_T.js";import"./monetary_value-B0ntaWrJ.js";import"./url-Bph6d-ow.js";import"./FetchError-DX6me_FL.js";import"./MissingElementError-CbV3pOXz.js";import"./NotFoundError-DPKbBn2w.js";import{S as g}from"./SearchInput-KWa_S20H.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./assert-BI051aL8.js";import"./explorer-DCunbqys.js";import"./PromiseResolver-fu2gpVzF.js";import"./ProvideAsyncStates-2wWJu2Ts.js";import"./IconButton-CBFjp57s.js";import"./higher_order-C7N0yVzV.js";import"./Button-Ddn29KoC.js";import"./label-DhPrwc6a.js";import"./RelativeTimeSinceDateText-wnmIlcQg.js";import"./NowProvider-CUEytW_R.js";import"./DateTimeFormattersProvider-C5t6XUcQ.js";import"./LocaleProvider-2MskVwwW.js";import"./PathResolverProvider-DO2OIcGK.js";import"./Card-CHe2rYXp.js";import"./NumberText-Dj8iVxLU.js";import"./NumberFormattersProvider-B9KzUGwo.js";import"./Text-BU7JBOLk.js";import"./typography-CgR0bGry.js";import"./SearchGlass-CtpKzB4B.js";import"./SVGIconBase-DcFMrokn.js";import"./Container-BoNP9P87.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),pe={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
