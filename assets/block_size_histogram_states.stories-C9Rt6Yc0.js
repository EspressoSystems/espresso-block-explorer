import{j as r}from"./iframe-f2wUEmLV.js";import{L as p,E as c,D as d}from"./LoadingProvider-ByZJpGMG.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PagePathProvider-DMTB2oDq.js";import"./NowProvider-DGWfNrty.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./PathResolverProvider-DHybasnL.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-N3p8kQGi.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-BhNRY1Nn.js";import"./higher_order-DPELDOyr.js";import"./LoadingShimmer-CGubZBoN.js";import"./SkeletonContent-CqhLHFcX.js";import"./typography-BFtRVX_Y.js";import"./label-C9J6_eC3.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D7GxvIq0.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-zsN0S60c.js";import"./CheckCircleFilled-yzKlL67t.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Copy-D321I0JD.js";/* empty css               */import"./CircularProgressIndicator-DrX2esjz.js";import"./ContainerLoading-DHHYO2Cb.js";import"./SVGToolTip-DVtKHKlZ.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Co9Msrjd.js";import"./ByteSizeText-DjbeH3C1.js";import"./CopyHex-DkQu5fj-.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-jZCy6L4K.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-Ds4usxHH.js";import"./MoneyText-BfVqQ9Nl.js";import"./RelativeTimeSinceDateText-tg_Ib5NI.js";import"./TaggedBase64Text-BWB_yix6.js";import"./TimeText-Clv532My.js";import"./Heading2-DFXogWT3.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
