import{j as i}from"./jsx-runtime-BlAj40OV.js";import{P as q}from"./generateFakeData-D7KWfDOY.js";import{m as B,i as E}from"./functional-BRpe52oq.js";import{T as k}from"./TaggedBase64-D45f0-Ll.js";import"./LoadingProvider-CI5XcxPx.js";import{C as K,a as b}from"./Completer-VHPB5F7F.js";import"./base64-pX9cPfQ1.js";import"./string-CcoL8872.js";import"./array_buffer-BDyIh9Vn.js";import{a as r,b as t,C as N,F as H}from"./CappuccinoHotShotQueryServiceAPIContext-BqMcNL7-.js";import"./monetary_value-B2EGCn_o.js";import"./FetchError-C1VXamgN.js";import"./NotFoundError-C6Rvypd-.js";import{S as P}from"./SearchInput-CzZpjvXE.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./sleep-CW-vxfof.js";import"./data-BrPcsNKZ.js";import"./url-D2X_Lhsq.js";import"./boolean-G714bpgs.js";import"./PromiseResolver-ByHV4Wpd.js";import"./ProvideAsyncStates-569m2cze.js";import"./IconButton-DmUE976j.js";import"./higher_order-DnPEgWEz.js";import"./Button-BeoLCdzA.js";import"./PathResolverProvider-Xv58eOQd.js";import"./Card-RHc01-Zp.js";import"./NumberText-C4Z_0tU7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./LocaleProvider-B0_30C1H.js";import"./RelativeTimeText-MUfD-2Qu.js";import"./DateTimeFormattersProvider-UwNlAqY8.js";import"./NowProvider-D4xjbY-7.js";import"./Text-BU7JBOLk.js";import"./typography-D2UEeKZ7.js";import"./SearchGlass-BTYiCYPh.js";import"./SVGIconBase-BLfr-WpK.js";const j=G=>i.jsx(N.Provider,{value:new H,children:i.jsx(P,{...G})}),Te={title:"Components/Page Sections/Search Input/States",component:j},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new q,F=Array.from(B(E(10),()=>new K(new k("BLOCK",e.fillBytes(32)),e.nextInt(),[e.fillBytes(32)],e.nextInt(),e.nextInt(),new Date))),L=Array.from(B(E(10),()=>new b(new k("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(F,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],L)),offset:0}}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(R=a.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var f,y,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      query: 'BLOCK~',
      rawQuery: 'block~',
      searchResultsQuery: 'BLOCK~',
      searchResults: new CappuccinoExplorerGetSearchResultResponse(new CappuccinoExplorerSearchResults(fakeBlockSearchResults, []))
    }
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,d,g;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Ie=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,Ie as __namedExportsOrder,Te as default};
