import{j as r}from"./iframe-BYhJ0elB.js";import{L as p,E as c,D as d}from"./LoadingProvider-Bn4-uxSH.js";import"./DateTimeFormattersProvider-D1BWIJEB.js";import"./LocaleProvider-DStRSijF.js";import"./PagePathProvider-nynPDlzk.js";import"./NowProvider-DPFdN-s-.js";import"./NumberFormattersProvider-BlItbZB7.js";import"./PathResolverProvider-CsgTwCpv.js";import{b as u,i as n}from"./functional-By_9lidy.js";import{B as g}from"./BlockSizeHistogram-BfsVXEu-.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./Card-DjFoWUft.js";import"./higher_order-CiFIqkYR.js";import"./LoadingShimmer-UjEhC6_z.js";import"./SkeletonContent-Ba_gn-Vd.js";import"./typography-C9lmU0CM.js";import"./label-DISaOArB.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-DYcNORHL.js";import"./base64-Dpbg5EzT.js";import"./CopyButton-CxEFcHR-.js";import"./CheckCircleFilled-BTQ9yhTR.js";import"./SVGIconBase-aGBMO4fP.js";import"./Copy-B8g8a5_A.js";/* empty css               */import"./CircularProgressIndicator-BIqoh_Pb.js";import"./ContainerLoading-DF3V8ltZ.js";import"./SVGToolTip-BIEfHSNE.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BsD_8CBR.js";import"./ByteSizeText-CuZS1pBT.js";import"./CopyHex-DgUFR5Yy.js";import"./array_buffer-CXxOH-jd.js";import"./DateTimeText-9mOQpDyB.js";import"./FullHexText-BkYgJRpz.js";import"./HexText-ZJeb_nkv.js";import"./MoneyText-CfP9eB4o.js";import"./RelativeTimeSinceDateText-fLW9DoTK.js";import"./TaggedBase64Text-CXs0z7BR.js";import"./TimeText-BCcWSA_p.js";import"./Heading2-BL-5QfGu.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
