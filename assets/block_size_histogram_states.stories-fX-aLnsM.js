import{j as r}from"./iframe-B5ACCtQe.js";import{L as p,E as c,D as d}from"./LoadingProvider-inUiJrG2.js";import"./DateTimeFormattersProvider-B5EcmP53.js";import"./LocaleProvider-CmiabapK.js";import"./PagePathProvider-CfW_IWDG.js";import"./NowProvider-Dv0I_bBi.js";import"./NumberFormattersProvider-BqP1tbDM.js";import"./PathResolverProvider-pwfQA8J8.js";import{b as u,i as n}from"./functional-BkuSRiGx.js";import{B as g}from"./BlockSizeHistogram-T0p1uAUz.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-DAVeZk3A.js";import"./higher_order-DcvTrifj.js";import"./LoadingShimmer-1O-oPP4u.js";import"./SkeletonContent-QgcOifyD.js";import"./typography-BEMjcSvZ.js";import"./label-F-5hPRdH.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Ba0H4Z79.js";import"./base64-MELtJYLj.js";import"./CopyButton-ZkbB-uGf.js";import"./CheckCircleFilled-BiPPd6Eq.js";import"./SVGIconBase-Dvte2yLu.js";import"./Copy-F5qEbGBt.js";/* empty css               */import"./CircularProgressIndicator-3mob9pfC.js";import"./ContainerLoading-DFSrhxuU.js";import"./SVGToolTip-K1r27RqD.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Bh585QNs.js";import"./ByteSizeText-C5rPYbrt.js";import"./CopyHex-BEWsbbl3.js";import"./array_buffer-CaGbebEx.js";import"./DateTimeText-CvJVIqzH.js";import"./FullHexText-BHKyctfq.js";import"./HexText-DgI_1c0Z.js";import"./MoneyText-CX8FrIqY.js";import"./PercentageText-B2qDQkJd.js";import"./RelativeTimeSinceDateText-Bq0o1gtH.js";import"./TaggedBase64Text-BEdF0tZ2.js";import"./TimeText-DZbDrmAy.js";import"./Heading2-hKXGmewZ.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),pr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const cr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,cr as __namedExportsOrder,pr as default};
