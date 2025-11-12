import{j as r}from"./iframe-DCPSZz_3.js";import{L as p,E as c,D as d}from"./LoadingProvider-Bf1m95A-.js";import"./DateTimeFormattersProvider-cQ3P3CXT.js";import"./LocaleProvider-BWtINspZ.js";import"./PagePathProvider-DCChvPC-.js";import"./NowProvider-NCwNHFL9.js";import"./NumberFormattersProvider-D3veI70u.js";import"./PathResolverProvider-Bqa8_97D.js";import{b as u,i as n}from"./functional-g5wG3Azh.js";import{B as g}from"./BlockSizeHistogram-Ds60vRgO.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-B8LjTotE.js";import"./higher_order-CuXztvfh.js";import"./LoadingShimmer-5aSLAGZW.js";import"./SkeletonContent-twYoAYJ9.js";import"./typography-qws2gU0X.js";import"./label-CZL-CHP5.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BcKeP8my.js";import"./base64-KHURY7_E.js";import"./CopyButton-DCJivZJa.js";import"./CheckCircleFilled-CoSEID6J.js";import"./SVGIconBase-SJC07UFc.js";import"./Copy-DVTUcARM.js";/* empty css               */import"./CircularProgressIndicator-CsGr7d2o.js";import"./ContainerLoading-CDjhuIop.js";import"./SVGToolTip-JXBNr9tn.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-LA0gFWzT.js";import"./ByteSizeText-DkB5YFBp.js";import"./CopyHex-C68wIBen.js";import"./array_buffer-zIqOMhaQ.js";import"./DateTimeText-D0R4fo4z.js";import"./FullHexText-Cz-BU8xP.js";import"./HexText-BHWa3T91.js";import"./MoneyText-C728B48w.js";import"./RelativeTimeSinceDateText-BT_07pYp.js";import"./TaggedBase64Text-B6h2NRED.js";import"./TimeText-Czad-izx.js";import"./Heading2-DqT8fiYO.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
