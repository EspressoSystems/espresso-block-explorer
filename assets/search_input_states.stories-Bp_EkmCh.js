import{j as i}from"./iframe-6sDIVuv1.js";import"./blocks-DqaRurhN.js";import{P as y}from"./nodes-sPTSRSIJ.js";import{m as p,i as l}from"./functional-D84nw2eW.js";import{T as m}from"./TaggedBase64-CL6rcPDn.js";import"./UnimplementedError-DRDLdWuq.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-DyaadbUg.js";import"./base64-Dx8wLaZf.js";import"./string-Bj9RBsFG.js";import"./array_buffer-DuWTC5ee.js";import"./LoadingProvider-CrTsTokN.js";import"./monetary_value-q68MMcLV.js";import"./url-DwwBj-2c.js";import"./FetchError-ljfnF1aF.js";import"./MissingElementError-Dm9GiuiL.js";import"./NotFoundError-B7azoDNK.js";import{S as g}from"./SearchInput-D7MXbo4K.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./assert-BI051aL8.js";import"./explorer-CalQ4DGV.js";import"./PromiseResolver-ruJ8APyn.js";import"./ProvideAsyncStates-BykCtBiA.js";import"./IconButton-C7RPHVSc.js";import"./higher_order-CqVlj1z5.js";import"./Button-Czuu8rfd.js";import"./label-N_OfIQCK.js";import"./RelativeTimeSinceDateText-c3QUR7zZ.js";import"./NowProvider-9_TLGQLi.js";import"./DateTimeFormattersProvider-B9ptiKJK.js";import"./LocaleProvider-qvoseI_m.js";import"./PathResolverProvider-BI3bDQHR.js";import"./Card-H6VSm3Gs.js";import"./NumberText-DmOrh8vf.js";import"./NumberFormattersProvider-qTTfMxSz.js";import"./Text-BU7JBOLk.js";import"./typography-C-j7u7QD.js";import"./SearchGlass-CY4dlqG8.js";import"./SVGIconBase-aCvu50bH.js";import"./Container-lRxLf6hc.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),pe={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
