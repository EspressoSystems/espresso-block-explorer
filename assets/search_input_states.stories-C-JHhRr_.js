import{j as G}from"./jsx-runtime-C8OW3RLV.js";import{P as q}from"./functional_async-0caEKL_O.js";import{m as I,i as E}from"./functional-C-MJgtC4.js";import{T as Q}from"./TaggedBase64-MUE_Sjuq.js";import"./base64-sUJ5_M47.js";import"./string-X3Gg19gt.js";import"./array_buffer-73_ZskUD.js";import{C as K,a as N}from"./CircularBuffer-BRETtkFg.js";import"./monetary_value-DdH0GKvL.js";import{C as r,a as t}from"./CappuccinoHotShotQueryServiceAPIContext-CeXTtBtb.js";import"./FetchError-B3q-_EcF.js";import"./NotFoundError-D27_4bN0.js";import{S as b}from"./SearchInput-B4BW2srg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./sleep-CW-vxfof.js";import"./data-BqGnzjPf.js";import"./PromiseResolver-Bzan-m3_.js";import"./ProvideAsyncStates-cPWIR7SO.js";import"./LoadingProvider-D-gSICWy.js";import"./IconButton-D8uo0ZjI.js";import"./higher_order-BhpYKJuV.js";import"./Button-DxK-R5j9.js";import"./PathResolverProvider-Bt7H5csd.js";import"./Card-CUmdu2p1.js";import"./NumberText-CEiknsW6.js";import"./NumberFormattersProvider-B153Cyqz.js";import"./LocaleProvider-BQ-iXQt3.js";import"./RelativeTimeText-CJcgDeEz.js";import"./DateTimeFormattersProvider-Br3pQ116.js";import"./NowProvider-DGXfqGr9.js";import"./Text-BU7JBOLk.js";import"./typography-CBcnIq8a.js";import"./SearchGlass-CgCHiqbn.js";import"./SVGIconBase-Dbx5nMUX.js";const H=L=>G(b,{...L}),de={title:"Components/Page Sections/Search Input/States",component:H},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new q,k=Array.from(I(E(10),()=>new K(new Q("BLOCK",e.fillBytes(32)),e.nextInt(),e.fillBytes(32),e.nextInt(),e.nextInt(),new Date))),F=Array.from(I(E(10),()=>new N(new Q("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(k,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(k,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],F))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],F)),offset:0}}};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      isLoading: true
    }
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,S,R;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'SOMETHING',
      rawQuery: 'something',
      searchResultsQuery: 'SOMETHING',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], []))
    }
  }
}`,...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var h,f,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,C,d;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(d=(C=n.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var g,x,O;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults))
    }
  }
}`,...(O=(x=c.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var T,M,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const ge=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,ge as __namedExportsOrder,de as default};
