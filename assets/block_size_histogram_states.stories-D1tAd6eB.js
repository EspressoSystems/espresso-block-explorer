import{j as r}from"./iframe-CZr8t9jY.js";import{L as p,E as c,D as d}from"./LoadingProvider-CpQg_alm.js";import"./DateTimeFormattersProvider-DnPksEHq.js";import"./LocaleProvider-C_oPBYMV.js";import"./PagePathProvider--PzVzJcG.js";import"./NowProvider-DNx-Ix2E.js";import"./NumberFormattersProvider-Ih38hUky.js";import"./PathResolverProvider-C2pAxoUb.js";import{b as u,i as n}from"./functional-Cgf59ne2.js";import{B as g}from"./BlockSizeHistogram-D_2UNWdR.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-CaSkKKIp.js";import"./higher_order-BJO-eimJ.js";import"./LoadingShimmer-CCWbATbx.js";import"./SkeletonContent-_-h4l-3E.js";import"./typography-CT4CmWvf.js";import"./label-BTw-GpSK.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-DUcjO8XX.js";import"./base64-KHURY7_E.js";import"./CopyButton-DDDcObOp.js";import"./CheckCircleFilled-D5GKimKt.js";import"./SVGIconBase-DuaD1ZtN.js";import"./Copy-EcqMa1xk.js";/* empty css               */import"./CircularProgressIndicator-B8-o2knj.js";import"./ContainerLoading-CIrpTi4e.js";import"./SVGToolTip-BbG4a6RY.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BecQVMhk.js";import"./ByteSizeText-CFW1vnKy.js";import"./CopyHex-BvQfgRC3.js";import"./array_buffer-cBr8gIXV.js";import"./DateTimeText-BzHS252i.js";import"./FullHexText-3tleIpiG.js";import"./HexText-BGjwdQ3o.js";import"./MoneyText-rZp2f6dH.js";import"./RelativeTimeSinceDateText-DnGwjhle.js";import"./TaggedBase64Text-Do9TRrb4.js";import"./TimeText-DhyLZnOP.js";import"./Heading2-BPNy3Wnj.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
