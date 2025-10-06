import{j as i}from"./iframe-DygLW6I0.js";import{P as q}from"./generateFakeData-BXMpUtDN.js";import{m as B,i as E}from"./functional-C2YPzjZP.js";import{T as k}from"./TaggedBase64-D-xwfkqv.js";import"./UnimplementedError-N0odIfDD.js";import{a as r,C as K,F as b,b as t,c as N,d as H}from"./CappuccinoHotShotQueryServiceAPIContext-B0abyRUY.js";import"./base64-r9vyOGQT.js";import"./string-BI8AIx1I.js";import"./array_buffer-CitSjtn6.js";import"./MissingElementError-BiJAxgGE.js";import"./monetary_value-Dof17hnG.js";import"./url-BLYalvQP.js";import"./FetchError-BkM_RKT_.js";import"./NotFoundError-D156Q_Lb.js";import{S as P}from"./SearchInput-CqkzFLmV.js";import"./sleep-CW-vxfof.js";import"./data-CfBQlPrI.js";import"./LoadingProvider-Byfo0QzP.js";import"./PromiseResolver-ZjmnF0wX.js";import"./ProvideAsyncStates-B4f0kEob.js";import"./IconButton-CdAOT0Jt.js";import"./higher_order-BcLzZ7W3.js";import"./Button-BwF0iMhW.js";import"./label-BvScgLcI.js";import"./PathResolverProvider-DvoeaLUs.js";import"./Card-1sZgTX0b.js";import"./NumberText-Xd59w2dg.js";import"./NumberFormattersProvider-KKfvmIDJ.js";import"./LocaleProvider-BTog8Eg4.js";import"./RelativeTimeText-Dw-jd3cC.js";import"./DateTimeFormattersProvider-BiVnDCug.js";import"./NowProvider-DQJHzESf.js";import"./Text-BU7JBOLk.js";import"./typography-CE54FjU0.js";import"./SearchGlass-DYUY_TO9.js";import"./SVGIconBase-CwzDODLl.js";const j=G=>i.jsx(K.Provider,{value:new b,children:i.jsx(P,{...G})}),Oe={title:"Components/Page Sections/Search Input/States",component:j},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new q,F=Array.from(B(E(10),()=>new N(new k("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),L=Array.from(B(E(10),()=>new H(new k("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L)),offset:0}}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
