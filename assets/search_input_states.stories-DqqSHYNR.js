import{j as i}from"./iframe-zEcEksBb.js";import{P as q}from"./generateFakeData-UQf8nJ8g.js";import{m as B,i as E}from"./functional-BS7OJ5eK.js";import{T as k}from"./TaggedBase64-KfoUSl3M.js";import"./UnimplementedError-17tXTyU9.js";import{a as r,C as K,F as b,b as t,c as N,d as H}from"./CappuccinoHotShotQueryServiceAPIContext-DC1WOFXZ.js";import"./base64-Dx-bhXjM.js";import"./string-D0u4-xyR.js";import"./array_buffer-BKVV0l5M.js";import"./MissingElementError-YFeWEE8W.js";import"./monetary_value-CZcT9WbV.js";import"./url-BL_yoWaS.js";import"./FetchError-DsbqzoSu.js";import"./NotFoundError-Dda3nNUu.js";import{S as P}from"./SearchInput-6Vdj6o9i.js";import"./sleep-CW-vxfof.js";import"./data-Cr5z5ONv.js";import"./LoadingProvider-BMrX2k61.js";import"./PromiseResolver-BiyWZgkv.js";import"./ProvideAsyncStates-xIzp1Eue.js";import"./IconButton-NB6kmce3.js";import"./higher_order-BfTEeOwN.js";import"./Button-akoQnLXo.js";import"./label-DnJQPYAc.js";import"./PathResolverProvider-BY6HTwpT.js";import"./Card-DSBP5ZLS.js";import"./NumberText-B_RduDOO.js";import"./NumberFormattersProvider-DB0fdcoi.js";import"./LocaleProvider-ysY4q8_d.js";import"./RelativeTimeText-COlSF0AU.js";import"./DateTimeFormattersProvider-D90xWuNL.js";import"./NowProvider-BzxzTsO6.js";import"./Text-BU7JBOLk.js";import"./typography-B3yGvuWM.js";import"./SearchGlass-Dn-nQPzb.js";import"./SVGIconBase-BNeTmGDn.js";const j=G=>i.jsx(K.Provider,{value:new b,children:i.jsx(P,{...G})}),Oe={title:"Components/Page Sections/Search Input/States",component:j},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new q,F=Array.from(B(E(10),()=>new N(new k("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),L=Array.from(B(E(10),()=>new H(new k("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L)),offset:0}}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      isLoading: true
    }
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,R,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'SOMETHING',
      rawQuery: 'something',
      searchResultsQuery: 'SOMETHING',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], []))
    }
  }
}`,...(h=(R=a.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,d,g;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,O,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'COMMIT~',
      rawQuery: 'commit~',
      searchResultsQuery: 'COMMIT~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults([], fakeTransactionSearchResults))
    }
  }
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var I,M,Q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Te=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,Te as __namedExportsOrder,Oe as default};
