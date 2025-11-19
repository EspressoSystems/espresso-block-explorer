import{j as r}from"./iframe-FzErJqN6.js";import{L as p,E as c,D as d}from"./LoadingProvider-CBligMWO.js";import"./DateTimeFormattersProvider-CZowblb9.js";import"./LocaleProvider-DKgBZSpf.js";import"./PagePathProvider-CP4LF1jP.js";import"./NowProvider-_E-9Clgm.js";import"./NumberFormattersProvider-WL2WBrHm.js";import"./PathResolverProvider-CU74cDgI.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-DDqBv4M2.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-CxAhIdpa.js";import"./higher_order-D1aPdQSR.js";import"./LoadingShimmer-Jp93z9Z7.js";import"./SkeletonContent-Cqj7aVKa.js";import"./typography-Di2_0slN.js";import"./label-_AWJOLq3.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Da6Hm1jc.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-PEjw1Crq.js";import"./CheckCircleFilled-B65Yvqd6.js";import"./SVGIconBase-yCORSxOm.js";import"./Copy-Dw9BDBZ5.js";/* empty css               */import"./CircularProgressIndicator-oLfnIsPk.js";import"./ContainerLoading-DaMZ2YzF.js";import"./SVGToolTip-DK2Zww0z.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-HNhVnN8v.js";import"./ByteSizeText-zZc0kQwz.js";import"./CopyHex-B5sdZsMs.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-BUWL7bUB.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-CJn3mfhH.js";import"./MoneyText-CCTbcaV9.js";import"./RelativeTimeSinceDateText-Bww6-P-5.js";import"./TaggedBase64Text-BwrT1FIO.js";import"./TimeText-Bo9Os8VH.js";import"./Heading2-DflGgZev.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
