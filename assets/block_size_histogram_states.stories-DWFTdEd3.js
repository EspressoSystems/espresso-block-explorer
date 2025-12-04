import{j as r}from"./iframe-D8Xp_xun.js";import{L as p,E as c,D as d}from"./LoadingProvider-D2cYfIgs.js";import"./DateTimeFormattersProvider-Bs-k3ShI.js";import"./LocaleProvider-HRtypQVb.js";import"./PagePathProvider-BwB57U9a.js";import"./NowProvider-CfKugIy7.js";import"./NumberFormattersProvider-C5Ud-AgN.js";import"./PathResolverProvider-BDnGbYv1.js";import{b as u,i as n}from"./functional-By_9lidy.js";import{B as g}from"./BlockSizeHistogram-CMOGfY7e.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./Card-CdtDVXN5.js";import"./higher_order-B-N0AM-V.js";import"./LoadingShimmer-BiJlz9dw.js";import"./SkeletonContent-ClpcfR_p.js";import"./typography-BDqn6gU5.js";import"./label-Bv386zfi.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-CE3UsWwk.js";import"./base64-Dpbg5EzT.js";import"./CopyButton-BhgKxyZz.js";import"./CheckCircleFilled-BCdMj2IR.js";import"./SVGIconBase-CDuc6DRM.js";import"./Copy-D-xoe-Q-.js";/* empty css               */import"./CircularProgressIndicator-DZRaXo_R.js";import"./ContainerLoading-BiQyl9rU.js";import"./SVGToolTip-DsNueoz7.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-B7BvvFcg.js";import"./ByteSizeText-BltvAO_Y.js";import"./CopyHex-BLDyQRsm.js";import"./array_buffer-CXxOH-jd.js";import"./DateTimeText-BZPG7YWn.js";import"./FullHexText-BkYgJRpz.js";import"./HexText-BZ632ph6.js";import"./MoneyText-D5lyXJxB.js";import"./RelativeTimeSinceDateText-B_wR9imQ.js";import"./TaggedBase64Text-CYUB2ZYw.js";import"./TimeText-BRU_UUuH.js";import"./Heading2-BPmBbbIL.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
