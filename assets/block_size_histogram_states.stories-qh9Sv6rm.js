import{j as r}from"./iframe-6sDIVuv1.js";import{L as p,E as c,D as d}from"./LoadingProvider-CrTsTokN.js";import"./DateTimeFormattersProvider-B9ptiKJK.js";import"./LocaleProvider-qvoseI_m.js";import"./PagePathProvider-DXgMaDUe.js";import"./NowProvider-9_TLGQLi.js";import"./NumberFormattersProvider-qTTfMxSz.js";import"./PathResolverProvider-BI3bDQHR.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-DwZzvq4z.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-H6VSm3Gs.js";import"./higher_order-CqVlj1z5.js";import"./LoadingShimmer-CIJZjRRL.js";import"./SkeletonContent-D1xueSVF.js";import"./typography-C-j7u7QD.js";import"./label-N_OfIQCK.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-zlhAN4en.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-CINQv9cY.js";import"./CheckCircleFilled-BE3oJZM6.js";import"./SVGIconBase-aCvu50bH.js";import"./Copy-DEIJ49QX.js";/* empty css               */import"./CircularProgressIndicator-DQskT5Wj.js";import"./ContainerLoading-DlnmaV8c.js";import"./SVGToolTip-BCi-nGu1.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-DmOrh8vf.js";import"./ByteSizeText-B2l_HyjZ.js";import"./CopyHex-DKVYsOU9.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-CQywexfr.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-Dquu6xJA.js";import"./MoneyText-pcHqcefM.js";import"./RelativeTimeSinceDateText-c3QUR7zZ.js";import"./TaggedBase64Text-Du-s-zvK.js";import"./TimeText-7DSwPO8b.js";import"./Heading2-toZNLwpq.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
