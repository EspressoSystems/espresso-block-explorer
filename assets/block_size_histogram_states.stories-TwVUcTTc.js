import{j as r}from"./iframe-Dv6htQ23.js";import{L as p,E as c,D as d}from"./LoadingProvider-CRv47c_T.js";import"./DateTimeFormattersProvider-C5t6XUcQ.js";import"./LocaleProvider-2MskVwwW.js";import"./PagePathProvider-CMXtbgHw.js";import"./NowProvider-CUEytW_R.js";import"./NumberFormattersProvider-B9KzUGwo.js";import"./PathResolverProvider-DO2OIcGK.js";import{b as u,i as n}from"./functional-Cgf59ne2.js";import{B as g}from"./BlockSizeHistogram-DbJyZCrI.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-CHe2rYXp.js";import"./higher_order-C7N0yVzV.js";import"./LoadingShimmer-Bqb90OnE.js";import"./SkeletonContent-BQG7cvXG.js";import"./typography-CgR0bGry.js";import"./label-DhPrwc6a.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BNmoA_dP.js";import"./base64-KHURY7_E.js";import"./CopyButton--qJXFrNp.js";import"./CheckCircleFilled-CplNTaXF.js";import"./SVGIconBase-DcFMrokn.js";import"./Copy-Cg0Q6oFM.js";/* empty css               */import"./CircularProgressIndicator-CGSnkEvU.js";import"./ContainerLoading-DleeJ4WR.js";import"./SVGToolTip-DKYbDa1j.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Dj8iVxLU.js";import"./ByteSizeText-C1GRTxwh.js";import"./CopyHex-eo5yI8q1.js";import"./array_buffer-cBr8gIXV.js";import"./DateTimeText-BOpXlQvA.js";import"./FullHexText-3tleIpiG.js";import"./HexText-C0iTiRGR.js";import"./MoneyText-CoTXhldl.js";import"./RelativeTimeSinceDateText-wnmIlcQg.js";import"./TaggedBase64Text-BPVeWXPe.js";import"./TimeText-CSjMgMr_.js";import"./Heading2-Fc0gzHbS.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
