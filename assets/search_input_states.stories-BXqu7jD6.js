import{j as G}from"./jsx-runtime-Cd6u8K_H.js";import{C as r,a as s,b as q,c as K,P as b}from"./CappuccinoHotShotQueryServiceAPIContext-DINgnYce.js";import{m as I,i as E}from"./functional-D1RzZCNy.js";import{T as Q}from"./TaggedBase64-CWozzVDS.js";import"./base64-ByugtSst.js";import"./string-BgQ3tcOU.js";import"./array_buffer-EBg4rlG_.js";import"./monetary_value-DDtKFr-C.js";import"./NotFoundError-BY595sC3.js";import{S as N}from"./SearchInput-CtZdgZGS.js";import"./index-UfW7PFvU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./data-BqGnzjPf.js";import"./PromiseResolver-B67x4zsp.js";import"./IconButton-DD9pzky6.js";import"./higher_order-D-qJ_MgL.js";import"./Button-BCUYW5Qg.js";import"./PathResolverProvider-BVqaehX5.js";import"./Card-BjlJmkp1.js";import"./NumberText-BjtZNgFb.js";import"./NumberFormattersProvider-BnR4LO86.js";import"./LocaleProvider-JyRdHYHm.js";import"./RelativeTimeText-Zn5WzkQp.js";import"./DateTimeFormattersProvider-sP3n8rc8.js";import"./NowProvider-HlA00xrR.js";import"./Text-BU7JBOLk.js";import"./typography-DzQrGlWr.js";import"./SearchGlass-B7Bot8Sk.js";import"./SVGIconBase-DzKd7HyE.js";const H=L=>G(N,{...L}),Re={title:"Components/Page Sections/Search Input/States",component:H},t={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new b,k=Array.from(I(E(10),()=>new q(new Q("BLOCK",e.fillBytes(32)),e.nextInt(),e.fillBytes(32),e.nextInt(),e.nextInt(),new Date))),F=Array.from(I(E(10),()=>new K(new Q("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new s([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new s(k,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new s(k,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new s([],F))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new s([],F)),offset:0}}};var i,p,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    forceFocusState: true,
    initialState: {
      isLoading: true
    }
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,S,R;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const he=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,t as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,he as __namedExportsOrder,Re as default};
