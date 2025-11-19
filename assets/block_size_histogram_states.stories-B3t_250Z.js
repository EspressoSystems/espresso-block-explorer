import{j as r}from"./iframe-CKCSKCZk.js";import{L as p,E as c,D as d}from"./LoadingProvider-IZAf8NZo.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PagePathProvider-Bck-CLYd.js";import"./NowProvider-DDm0tQ2h.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./PathResolverProvider-65y-23gj.js";import{b as u,i as n}from"./functional-D84nw2eW.js";import{B as g}from"./BlockSizeHistogram-DMVyarrv.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-D-5_3MUm.js";import"./higher_order-DLiNGwX1.js";import"./LoadingShimmer-SEd6dP6q.js";import"./SkeletonContent-CmRaKWaw.js";import"./typography-BFEyteYy.js";import"./label-Dymv7dcu.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-GMKTmsri.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-DZtevsws.js";import"./CheckCircleFilled-DdPcBHVp.js";import"./SVGIconBase-DGbb4H2y.js";import"./Copy-Dw0OUX71.js";/* empty css               */import"./CircularProgressIndicator-BiHPzzIH.js";import"./ContainerLoading-Dv4_uZf3.js";import"./SVGToolTip-DG2Gbjio.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-3GIByMNg.js";import"./ByteSizeText-CpkVVQnn.js";import"./CopyHex-biThFeaG.js";import"./array_buffer-DuWTC5ee.js";import"./DateTimeText-H-Z2u3yn.js";import"./FullHexText-_vyHn9pV.js";import"./HexText-BhuQynQ8.js";import"./MoneyText-DICOGhXe.js";import"./RelativeTimeSinceDateText-CRFW37nm.js";import"./TaggedBase64Text-D64-OEXT.js";import"./TimeText-D5Zaz2tF.js";import"./Heading2-Cx_zPzG4.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
