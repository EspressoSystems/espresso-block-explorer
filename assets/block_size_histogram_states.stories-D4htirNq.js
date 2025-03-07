import{j as r}from"./jsx-runtime-BlAj40OV.js";import{L as E,E as j,D as v}from"./LoadingProvider-CI5XcxPx.js";import"./DateTimeFormattersProvider-UwNlAqY8.js";import"./LocaleProvider-B0_30C1H.js";import"./NavDrawerStateProvider-HpepdHmi.js";import"./NowProvider-D4xjbY-7.js";import"./NumberFormattersProvider-DANbX_lC.js";import"./PathResolverProvider-Xv58eOQd.js";import{i as n,b as h}from"./functional-BRpe52oq.js";import{B as C}from"./BlockSizeHistogram-D9sHhtkT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./string-CcoL8872.js";import"./Card-RHc01-Zp.js";import"./higher_order-DnPEgWEz.js";import"./SkeletonContent-CtSG0ZPy.js";import"./typography-D2UEeKZ7.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-C7pMj7u0.js";import"./base64-pX9cPfQ1.js";import"./CopyButton-BP2n2S2V.js";import"./CheckCircle-CjHLze1Z.js";import"./SVGIconBase-BLfr-WpK.js";import"./Copy-BuMhWLDb.js";/* empty css               */import"./CircularProgressIndicator-CCTWMgAg.js";import"./ContainerLoading-DxQsa2On.js";import"./SVGToolTip-PiyluX_7.js";import"./SVGPathBuilder-XZx_HA2Y.js";import"./AffineTransform-DiV9SxhF.js";import"./NumberText-C4Z_0tU7.js";import"./index-Dk74W0Oi.js";import"./ByteSizeText-Dv1cMyzR.js";import"./CopyHex-BYDmIsAM.js";import"./array_buffer-BDyIh9Vn.js";import"./DateTimeText-nfJttqAO.js";import"./FullHexText-BoJGKrEx.js";import"./HexText-Dw92hmJ-.js";import"./MoneyText-B78eRiA1.js";import"./RelativeTimeText-MUfD-2Qu.js";import"./TaggedBase64Text-0Q1D1i_-.js";import"./TimeText-D4oQFb1K.js";import"./Heading2-Dp8h0y0d.js";/* empty css                */const L=({data:x,error:f,loading:z,...D})=>r.jsx(E.Provider,{value:z,children:r.jsx(j.Provider,{value:f,children:r.jsx(v.Provider,{value:x,children:r.jsx(C,{...D})})})}),xr={title:"Components/Page Sections/Histogram/Block Size/States",component:L},o={args:{data:{blocks:[...n(10)],blockSize:[...h(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)]
    },
    loading: false,
    error: null
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    },
    loading: false,
    error: null
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: false,
    error: null
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,b,S;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: true,
    error: null
  }
}`,...(S=(b=e.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const fr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,fr as __namedExportsOrder,xr as default};
