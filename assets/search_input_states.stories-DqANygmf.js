import{j as G}from"./jsx-runtime-BlAj40OV.js";import{P as q}from"./generateFakeData-BCq7J-7A.js";import{m as E,i as I}from"./functional-BZC-Q2QA.js";import{T as Q}from"./TaggedBase64-DeObMAd8.js";import{C as K,a as N}from"./CircularBuffer-BoENFPIY.js";import"./base64-DW9-vpGr.js";import"./string-Cg6lWpsr.js";import"./array_buffer-BiDpG-Ma.js";import"./LoadingProvider-Cu0dkHek.js";import{C as r,a as t}from"./CappuccinoHotShotQueryServiceAPIContext-D6pderAc.js";import"./monetary_value-VO_rcuFQ.js";import"./FetchError-BbxpOD7A.js";import"./NotFoundError-zYtPBSyK.js";import{S as b}from"./SearchInput-sZEUwaEy.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./sleep-CW-vxfof.js";import"./data-CgOROfg9.js";import"./url-JK4c_hib.js";import"./PromiseResolver-ZbtEiQb_.js";import"./ProvideAsyncStates-DGpd_8Im.js";import"./IconButton-C8CRMxou.js";import"./higher_order-DnPEgWEz.js";import"./Button-Cc3XS5nv.js";import"./PathResolverProvider-Xv58eOQd.js";import"./Card-0izmXN96.js";import"./NumberText-C4Z_0tU7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./LocaleProvider-B0_30C1H.js";import"./RelativeTimeText-DCz-EhHt.js";import"./DateTimeFormattersProvider-D6Gp1Kbv.js";import"./NowProvider-D4xjbY-7.js";import"./Text-BU7JBOLk.js";import"./typography-BIj1kvXp.js";import"./SearchGlass-REp8lC9G.js";import"./SVGIconBase-eCXHSPnQ.js";const H=L=>G.jsx(b,{...L}),ge={title:"Components/Page Sections/Search Input/States",component:H},s={args:{forceFocusState:!0,initialState:{isLoading:!0}}},e=new q,k=Array.from(E(I(10),()=>new K(new Q("BLOCK",e.fillBytes(32)),e.nextInt(),e.fillBytes(32),e.nextInt(),e.nextInt(),new Date))),F=Array.from(E(I(10),()=>new N(new Q("COMMIT",e.fillBytes(32)),[e.nextInt()],e.nextInt(),new Date,e.nextRange(0,10),e.nextRange(1,20)))),a={args:{forceFocusState:!0,initialState:{query:"SOMETHING",rawQuery:"something",searchResultsQuery:"SOMETHING",searchResults:new r(new t([],[]))}}},o={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(k,[]))}}},n={args:{forceFocusState:!0,initialState:{query:"BLOCK~",rawQuery:"block~",searchResultsQuery:"BLOCK~",searchResults:new r(new t(k,[])),offset:0}}},c={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],F))}}},u={args:{forceFocusState:!0,initialState:{query:"COMMIT~",rawQuery:"commit~",searchResultsQuery:"COMMIT~",searchResults:new r(new t([],F)),offset:0}}};var i,p,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const xe=["Loading","NoSearchResults","BlockSearchResults","BlockSearchResultsSelectedFirst","TransactionSearchResults","TransactionSearchResultsSelectedFirst"];export{o as BlockSearchResults,n as BlockSearchResultsSelectedFirst,s as Loading,a as NoSearchResults,c as TransactionSearchResults,u as TransactionSearchResultsSelectedFirst,xe as __namedExportsOrder,ge as default};
