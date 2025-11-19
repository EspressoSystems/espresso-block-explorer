import{j as r}from"./iframe-C10TK4K_.js";import{L as p,E as c,D as d}from"./LoadingProvider-C2Vxpxyu.js";import"./DateTimeFormattersProvider-BWXeBQHM.js";import"./LocaleProvider-CPWkEasf.js";import"./PagePathProvider-BIxanFJ0.js";import"./NowProvider-DSoQthLn.js";import"./NumberFormattersProvider-bgWstj_C.js";import"./PathResolverProvider-3KgqRF8i.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-TkyxerCE.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-BFfI5TrY.js";import"./higher_order-M1cvrOm5.js";import"./LoadingShimmer-CskLYlGm.js";import"./SkeletonContent-Zw-7Yusf.js";import"./typography-CaD01Ilh.js";import"./label-BGtI9Q2s.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-Dd4Iwayj.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-BBQ-LRcI.js";import"./CheckCircleFilled-BqeGpfaK.js";import"./SVGIconBase-BDaUYJC3.js";import"./Copy-C0DrmXAF.js";/* empty css               */import"./CircularProgressIndicator-B81mNifx.js";import"./ContainerLoading-flIrK9Qj.js";import"./SVGToolTip-CM0TgrIf.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-DiVuXGXq.js";import"./ByteSizeText--TZaVChG.js";import"./CopyHex-B-cfSmAv.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-jhOo82k5.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-DsxiF4vf.js";import"./MoneyText-JybiOjRX.js";import"./RelativeTimeSinceDateText-Cr3urWhg.js";import"./TaggedBase64Text-DEsNa3_J.js";import"./TimeText-BTpTvfuj.js";import"./Heading2-DXttZ0xn.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
