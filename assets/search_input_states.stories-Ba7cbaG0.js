import{j as i}from"./iframe-CKCSKCZk.js";import"./blocks-DqaRurhN.js";import{P as y}from"./nodes-sPTSRSIJ.js";import{m as p,i as l}from"./functional-D84nw2eW.js";import{T as m}from"./TaggedBase64-CL6rcPDn.js";import"./UnimplementedError-DRDLdWuq.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-DJWaOXW7.js";import"./base64-Dx8wLaZf.js";import"./string-Bj9RBsFG.js";import"./array_buffer-DuWTC5ee.js";import"./LoadingProvider-IZAf8NZo.js";import"./monetary_value-q68MMcLV.js";import"./url-DwwBj-2c.js";import"./FetchError-ljfnF1aF.js";import"./MissingElementError-Dm9GiuiL.js";import"./NotFoundError-B7azoDNK.js";import{S as g}from"./SearchInput-Djrrv62A.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-Cpeha0UW.js";import"./assert-BI051aL8.js";import"./explorer-D8Fg5z6r.js";import"./PromiseResolver-CmQlwWcQ.js";import"./ProvideAsyncStates-CKttSOi_.js";import"./IconButton-DQw20JdF.js";import"./higher_order-DLiNGwX1.js";import"./Button-mWO67oWo.js";import"./label-Dymv7dcu.js";import"./RelativeTimeSinceDateText-CRFW37nm.js";import"./NowProvider-DDm0tQ2h.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PathResolverProvider-65y-23gj.js";import"./Card-D-5_3MUm.js";import"./NumberText-3GIByMNg.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./Text-BU7JBOLk.js";import"./typography-BFEyteYy.js";import"./SearchGlass-CfPtz_kH.js";import"./SVGIconBase-DGbb4H2y.js";import"./Container-BX8yUewp.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),pe={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
