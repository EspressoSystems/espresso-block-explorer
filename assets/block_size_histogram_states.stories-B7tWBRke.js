import{j as r}from"./iframe-6qRHL8kK.js";import{L as p,E as c,D as d}from"./LoadingProvider-CiRo7IyT.js";import"./DateTimeFormattersProvider-CTAmKTvQ.js";import"./LocaleProvider-Dn-Cb6v6.js";import"./PagePathProvider-BB5_V-vn.js";import"./NowProvider-DFWj2jBI.js";import"./NumberFormattersProvider-BaYHxeOC.js";import"./PathResolverProvider-BhkdUZ3l.js";import{b as u,i as n}from"./functional-DfB4rlpz.js";import{B as g}from"./BlockSizeHistogram-DUCsjA6c.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-BvD5kqNE.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./UnimplementedError-ByG_fP0m.js";import"./Card-NP-Eb91a.js";import"./higher_order-BVrk3P2P.js";import"./LoadingShimmer-D_BnBiok.js";import"./SkeletonContent-BPdzUoF-.js";import"./typography-CU0Q2b4v.js";import"./label-DaaYS4Ka.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Cc2z-6lc.js";import"./base64-BqC1I8uO.js";import"./CopyButton-DRgo3UZF.js";import"./CheckCircleFilled-BenepkbP.js";import"./SVGIconBase-A4DT5FtI.js";import"./Copy-CZ3brQky.js";/* empty css               */import"./CircularProgressIndicator-DRiLGeMo.js";import"./ContainerLoading-BYumNDN_.js";import"./SVGToolTip-B8imTCh9.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CX4omtIU.js";import"./ByteSizeText-Bet9xQjP.js";import"./CopyHex-Cf_006lM.js";import"./array_buffer-BXDx5OgG.js";import"./DateTimeText-D6RW9Z_V.js";import"./FullHexText-Bixypd9K.js";import"./HexText-DCLf9LZz.js";import"./MoneyText-BdviuoM2.js";import"./RelativeTimeSinceDateText-Bo4ot7P4.js";import"./TaggedBase64Text-Cgw7TagP.js";import"./TimeText-BIeM4-F8.js";import"./Heading2-Pq1yfmef.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
