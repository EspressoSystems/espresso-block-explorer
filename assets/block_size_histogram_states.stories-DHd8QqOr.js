import{j as r}from"./iframe-CAIcvJ70.js";import{L as p,E as c,D as d}from"./LoadingProvider-DGChf-KQ.js";import"./DateTimeFormattersProvider-X38tn8qt.js";import"./LocaleProvider-y0Euh852.js";import"./PagePathProvider-C1vNRw3D.js";import"./NowProvider-Cc9-Bxzc.js";import"./NumberFormattersProvider-d1oGBTd3.js";import"./PathResolverProvider-BiLWwEPS.js";import{b as u,i as n}from"./functional-Cgf59ne2.js";import{B as g}from"./BlockSizeHistogram-gZWof_JJ.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-D1CYIb8R.js";import"./higher_order-DYSeXyA3.js";import"./LoadingShimmer-BhtSdQId.js";import"./SkeletonContent-2MCCOw30.js";import"./typography-wMQVOeJ2.js";import"./label-TYgucuf0.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BCbgKGff.js";import"./base64-KHURY7_E.js";import"./CopyButton-DkzcM-Lg.js";import"./CheckCircleFilled-DqLDQU78.js";import"./SVGIconBase-C2htln4Y.js";import"./Copy-pW00-f5f.js";/* empty css               */import"./CircularProgressIndicator-uNz-WY5N.js";import"./ContainerLoading-BwQTgvMQ.js";import"./SVGToolTip-TiqhLxEx.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-WHq5951A.js";import"./ByteSizeText-DwwcoumR.js";import"./CopyHex-DGdo0USx.js";import"./array_buffer-cBr8gIXV.js";import"./DateTimeText-DgoITeOR.js";import"./FullHexText-3tleIpiG.js";import"./HexText-JjHx5g3B.js";import"./MoneyText-Dl_iMSjy.js";import"./RelativeTimeSinceDateText-CQlY7jbz.js";import"./TaggedBase64Text-CCyVnX6a.js";import"./TimeText-D34EmpbH.js";import"./Heading2-D2t8e2jO.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
