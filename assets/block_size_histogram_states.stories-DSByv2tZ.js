import{j as r}from"./iframe-DDtNpaPj.js";import{L as p,E as c,D as d}from"./LoadingProvider-EJvyESuW.js";import"./DateTimeFormattersProvider-CEaM9jNC.js";import"./LocaleProvider-BxpRRu6O.js";import"./PagePathProvider-BwI_7891.js";import"./NowProvider-CMQ0CsoE.js";import"./NumberFormattersProvider-BnFA9-qT.js";import"./PathResolverProvider-BwuogejA.js";import{b as u,i as n}from"./functional-CtVX7zWU.js";import{B as g}from"./BlockSizeHistogram-DlN4Krtf.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-CylQopmA.js";import"./higher_order-TaO5A4FW.js";import"./SkeletonContent-Dlb-PyuE.js";import"./typography-DywsIeg8.js";import"./label-iiT-L9ET.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-rWsvQujX.js";import"./base64-CwylSrof.js";import"./CopyButton-YH-UV-G5.js";import"./CheckCircleFilled-B53sWYXb.js";import"./SVGIconBase-B0WWpDx_.js";import"./Copy-DLM2aOgO.js";/* empty css               */import"./CircularProgressIndicator-B76bJi-q.js";import"./ContainerLoading-Du_CIgJ5.js";import"./SVGToolTip-CVQPiB_9.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CXwUlbas.js";import"./ByteSizeText-D2zWMQS7.js";import"./CopyHex-CTLMxk7t.js";import"./array_buffer-ChxgVYUa.js";import"./DateTimeText-eJTc5mLm.js";import"./FullHexText-P0-GHCQv.js";import"./HexText-wQTcpdN9.js";import"./MoneyText-B2ZUl_Jj.js";import"./RelativeTimeSinceDateText-B4wxGErP.js";import"./TaggedBase64Text-BK5qbBAK.js";import"./TimeText-DrDa6YiX.js";import"./Heading2-BJOIYuUD.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),lr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const mr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,mr as __namedExportsOrder,lr as default};
