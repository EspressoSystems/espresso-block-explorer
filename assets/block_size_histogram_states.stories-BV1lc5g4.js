import{j as r}from"./iframe-Cfh0eePN.js";import{L as p,E as c,D as d}from"./LoadingProvider-CKkBrFm2.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";import"./LocaleProvider-D8Kjh7eq.js";import"./PagePathProvider-DS53fVOm.js";import"./NowProvider-gH2ltRAl.js";import"./NumberFormattersProvider-BkhnvKth.js";import"./PathResolverProvider-XIbO0Y2M.js";import{b as u,i as n}from"./functional-CJQfVQrn.js";import{B as g}from"./BlockSizeHistogram-EATZRUNs.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-DP3f1xjY.js";import"./higher_order-kZsKjHKn.js";import"./LoadingShimmer-Bug8Yy1S.js";import"./SkeletonContent-DFSGCXCf.js";import"./typography-CSzJ38pA.js";import"./label-DRwSi1ij.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Ckt5P9hg.js";import"./base64-C1KKyByM.js";import"./CopyButton-xTnrAFcf.js";import"./CheckCircleFilled-Vjq3m9Qn.js";import"./SVGIconBase-DvO4AW8t.js";import"./Copy-BiMYs1cj.js";/* empty css               */import"./CircularProgressIndicator-_zcpiIPy.js";import"./ContainerLoading-00J4YO0Z.js";import"./SVGToolTip-CpCm1JZ6.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BeA3jcpj.js";import"./ByteSizeText-zghgiO3k.js";import"./CopyHex-CMrw1j88.js";import"./array_buffer-C2KvbgUx.js";import"./DateTimeText-C2Q7-R2m.js";import"./FullHexText-DQocPh7W.js";import"./HexText-BH0RdlRi.js";import"./MoneyText-C8YVSbVS.js";import"./RelativeTimeSinceDateText-BIDDn8v1.js";import"./TaggedBase64Text-DStqoIpO.js";import"./TimeText-B0TZrLuO.js";import"./Heading2-CgWOYrI_.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
