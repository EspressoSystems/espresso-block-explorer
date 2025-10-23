import{j as i}from"./iframe-DDtNpaPj.js";import{P as y}from"./generateFakeData-DW9myA_6.js";import{m as p,i as l}from"./functional-CtVX7zWU.js";import{T as m}from"./TaggedBase64-DTqtQPCE.js";import"./UnimplementedError-DEXMe0kn.js";import{a as r,C as f,F as w,b as t,c as C,d}from"./CappuccinoHotShotQueryServiceAPIContext-2pD9lkuW.js";import"./base64-CwylSrof.js";import"./string-DurhFPzJ.js";import"./array_buffer-ChxgVYUa.js";import"./MissingElementError-C2wrrywP.js";import"./monetary_value-D_JlCdWi.js";import"./url-Cp1wsmOC.js";import"./WebWorkerErrorResponse-DDmF8pSp.js";import"./FetchError-CshovAWm.js";import"./NotFoundError-BfMh7-IB.js";import{S as g}from"./SearchInput-CwXjaHS9.js";import"./preload-helper-PPVm8Dsz.js";import"./sleep-CW-vxfof.js";import"./data-CeQBE4up.js";import"./assert-BI051aL8.js";import"./explorer-CC5IGeiJ.js";import"./LoadingProvider-EJvyESuW.js";import"./PromiseResolver-C_ImKZPs.js";import"./ProvideAsyncStates-C3y7nSv7.js";import"./IconButton-C7A32fGK.js";import"./higher_order-TaO5A4FW.js";import"./Button-CqmGfx7a.js";import"./label-iiT-L9ET.js";import"./RelativeTimeSinceDateText-B4wxGErP.js";import"./NowProvider-CMQ0CsoE.js";import"./DateTimeFormattersProvider-CEaM9jNC.js";import"./LocaleProvider-BxpRRu6O.js";import"./PathResolverProvider-BwuogejA.js";import"./Card-CylQopmA.js";import"./NumberText-CXwUlbas.js";import"./NumberFormattersProvider-BnFA9-qT.js";import"./Text-BU7JBOLk.js";import"./typography-DywsIeg8.js";import"./SearchGlass-CzGECd0H.js";import"./SVGIconBase-B0WWpDx_.js";import"./Container-CI3AZz21.js";const x=h=>i.jsx(f.Provider,{value:new w,children:i.jsx(g,{...h})}),pe={title:"Components/Page Sections/Search Input/States",component:x},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new y,S=Array.from(p(l(10),()=>new C(new m("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),R=Array.from(p(l(10),()=>new d(new m("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(S,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],R)),offset:0}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
