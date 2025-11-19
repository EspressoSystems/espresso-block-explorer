import{j as r}from"./iframe-BoSgNqBp.js";import{L as p,E as c,D as d}from"./LoadingProvider-CwAifW4j.js";import"./DateTimeFormattersProvider-FuJoOaA5.js";import"./LocaleProvider-f-l0Jujy.js";import"./PagePathProvider-C5stwEi3.js";import"./NowProvider-C2Sgz9rf.js";import"./NumberFormattersProvider-CsVqC7rh.js";import"./PathResolverProvider-BUhwMhFL.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-D_gKgidJ.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-Dbsyu_3P.js";import"./higher_order-DFRpXnkL.js";import"./LoadingShimmer-MIx6GssT.js";import"./SkeletonContent-B3ybZy_b.js";import"./typography-Dp7dq7gN.js";import"./label-DuDeZ7Eb.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-CQNkYCLE.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-BWFxkgp5.js";import"./CheckCircleFilled-C6Hg_-lA.js";import"./SVGIconBase-DrKpLRmr.js";import"./Copy-BbW09CJG.js";/* empty css               */import"./CircularProgressIndicator-DttGafIS.js";import"./ContainerLoading-CDNXF-xb.js";import"./SVGToolTip-HLcXJpiJ.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-ojqcivk1.js";import"./ByteSizeText-Dc4ZRBh4.js";import"./CopyHex-BaVGMw0R.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-DvkobbUc.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-CFmFig5Q.js";import"./MoneyText-C1SfUPAA.js";import"./RelativeTimeSinceDateText-C4bjOK2m.js";import"./TaggedBase64Text-Dz6_0k8C.js";import"./TimeText-BtIw6-AG.js";import"./Heading2-FBM4VAmD.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
