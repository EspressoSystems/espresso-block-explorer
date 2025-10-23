import{j as r}from"./iframe-DBL03KB_.js";import{L as p,E as c,D as d}from"./LoadingProvider-DNR5Hkoh.js";import"./DateTimeFormattersProvider-CmMqGjYy.js";import"./LocaleProvider-DPHh7gaX.js";import"./PagePathProvider-CuJ4lB7I.js";import"./NowProvider-DkyPls7m.js";import"./NumberFormattersProvider-MvsW0TSm.js";import"./PathResolverProvider-C0zkn9is.js";import{b as u,i as n}from"./functional-DhS0UyF-.js";import{B as g}from"./BlockSizeHistogram-Bo0njSx8.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-5R6NZ5QH.js";import"./higher_order-BDc1dO9t.js";import"./SkeletonContent-XBozz7e0.js";import"./typography-DsvMXyRR.js";import"./label-DSt-7g5L.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-nrSKuyYW.js";import"./base64-CwylSrof.js";import"./CopyButton-DN743_DK.js";import"./CheckCircleFilled-BsgmHdZj.js";import"./SVGIconBase-CnTjSQHC.js";import"./Copy-BPDrVqPS.js";/* empty css               */import"./CircularProgressIndicator-TRa6-Rdm.js";import"./ContainerLoading-txgcCvRN.js";import"./SVGToolTip-DxgPfkG2.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-C6v9mUpM.js";import"./ByteSizeText-C6mbuV3Q.js";import"./CopyHex-DbPkuZ0b.js";import"./array_buffer-DT_hwq4h.js";import"./DateTimeText-CJEitzMO.js";import"./FullHexText-Cc87lfvK.js";import"./HexText-5ZvMZLKw.js";import"./MoneyText-DE4bwqda.js";import"./RelativeTimeText-CPThff-t.js";import"./TaggedBase64Text-rMwIDupZ.js";import"./TimeText-BbHRTCq8.js";import"./Heading2-Cn_PpwDu.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),lr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const mr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,mr as __namedExportsOrder,lr as default};
