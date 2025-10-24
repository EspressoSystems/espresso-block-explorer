import{j as r}from"./iframe-xPpTS9dO.js";import{L as p,E as c,D as d}from"./LoadingProvider-DEoBX8YF.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PagePathProvider-6arKryxS.js";import"./NowProvider-Clo83YBl.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./PathResolverProvider-XKUKdvE1.js";import{b as u,i as n}from"./functional-CJQfVQrn.js";import{B as g}from"./BlockSizeHistogram-C9IoS3Lj.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-B5sBbsij.js";import"./higher_order-cEYzRmR2.js";import"./LoadingShimmer-Cs3zUzIB.js";import"./SkeletonContent-D5S015Dw.js";import"./typography-DOsyjWqi.js";import"./label-Bt1YRaym.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-glj3zT01.js";import"./base64-C1KKyByM.js";import"./CopyButton-DY0FR6xq.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./SVGIconBase-DRQr1LH4.js";import"./Copy-Bg1Dzap1.js";/* empty css               */import"./CircularProgressIndicator-Bwt9laMC.js";import"./ContainerLoading-DzEjivks.js";import"./SVGToolTip-5F109HLF.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BI77pf0U.js";import"./ByteSizeText-BUz_P0aN.js";import"./CopyHex-CCVeOuCP.js";import"./array_buffer-C2KvbgUx.js";import"./DateTimeText-zl9AaIlT.js";import"./FullHexText-DQocPh7W.js";import"./HexText-D16FECet.js";import"./MoneyText-BDvNDVp1.js";import"./RelativeTimeSinceDateText-qeHXCk3H.js";import"./TaggedBase64Text-Cs7axRqY.js";import"./TimeText-DJtWNxAl.js";import"./Heading2-C-kCrxZC.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
