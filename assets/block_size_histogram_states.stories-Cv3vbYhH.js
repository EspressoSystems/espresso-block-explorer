import{j as r}from"./iframe-CsosU7ok.js";import{L as p,E as c,D as d}from"./LoadingProvider-AxA0aNAd.js";import"./DateTimeFormattersProvider-BofVQaY6.js";import"./LocaleProvider-CtIKevMd.js";import"./PagePathProvider-smkZoFme.js";import"./NowProvider-fe9o8zdM.js";import"./NumberFormattersProvider-BqBKZweo.js";import"./PathResolverProvider-DVBKdtu_.js";import{b as u,i as n}from"./functional-45VDB5x3.js";import{B as g}from"./BlockSizeHistogram-D1EWGRu8.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-DD0Oymcq.js";import"./higher_order-DCgqxpyS.js";import"./LoadingShimmer-Djycb66H.js";import"./SkeletonContent-CB_9e_94.js";import"./typography-DX4Zo0Oa.js";import"./label-DO5WNxT3.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-DJyF7P_s.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-D5TyOSuO.js";import"./CheckCircleFilled-CUm5i6Tt.js";import"./SVGIconBase-DLBQdslh.js";import"./Copy-oqk4lSc-.js";/* empty css               */import"./CircularProgressIndicator-CksnPb9v.js";import"./ContainerLoading-CF0jGl1C.js";import"./SVGToolTip-EDVGPCPM.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-mFShU_q1.js";import"./ByteSizeText-CHylc-ig.js";import"./CopyHex-B_-p0ihJ.js";import"./array_buffer-C6GouG76.js";import"./DateTimeText-CwqrkJbI.js";import"./FullHexText-Bb8PrC1l.js";import"./HexText-Cbghy2Jb.js";import"./MoneyText-Q5mfBi_X.js";import"./RelativeTimeSinceDateText-Cj8Sp7hd.js";import"./TaggedBase64Text-dXsZMgr3.js";import"./TimeText-C7nc_xe4.js";import"./Heading2-CNK_n2uT.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [...iota(10)],
      blockSize: [...mapIterator(iota(10), () => Math.random() * 100)]
    },
    loading: false,
    error: null
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null],
      blockSize: [1, 2, 3, null, 5, 6, null, 8, 9, 10, null]
    },
    loading: false,
    error: null
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: false,
    error: null
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      blocks: [],
      blockSize: []
    },
    loading: true,
    error: null
  }
}`,...e.parameters?.docs?.source}}};const pr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,pr as __namedExportsOrder,mr as default};
