import{j as r}from"./iframe-DemEOwrW.js";import{L as p,E as c,D as d}from"./LoadingProvider-BejkcYK5.js";import"./DateTimeFormattersProvider-DNsYUpWM.js";import"./LocaleProvider-DbdD2VEs.js";import"./PagePathProvider-D4ag8Oi_.js";import"./NowProvider-BKkkit-4.js";import"./NumberFormattersProvider-Cv2n8TIj.js";import"./PathResolverProvider-ZydTQwVi.js";import{b as u,i as n}from"./functional-g5wG3Azh.js";import{B as g}from"./BlockSizeHistogram-Caf0xVom.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-COZdMR6w.js";import"./higher_order-B41vOjYd.js";import"./LoadingShimmer-YSn3WEkV.js";import"./SkeletonContent-DQfGACWR.js";import"./typography-D_5Kic_p.js";import"./label-B5w5a4R4.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BK5EArS8.js";import"./base64-KHURY7_E.js";import"./CopyButton-DsyAirpI.js";import"./CheckCircleFilled-DUMDewi5.js";import"./SVGIconBase-By2Dy568.js";import"./Copy-Bk0N4w0I.js";/* empty css               */import"./CircularProgressIndicator-BXO1v5EL.js";import"./ContainerLoading-C0n1x0D2.js";import"./SVGToolTip-B8GxQMmI.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-O_tSvdK5.js";import"./ByteSizeText-BOXet3wQ.js";import"./CopyHex-5FezhnoO.js";import"./array_buffer-zIqOMhaQ.js";import"./DateTimeText-DbTGLRv2.js";import"./FullHexText-Cz-BU8xP.js";import"./HexText-DoDkjOLz.js";import"./MoneyText-HSj2Dilp.js";import"./PercentageText-4ikhPh6V.js";import"./RelativeTimeSinceDateText-CW0CghFK.js";import"./TaggedBase64Text-Dzb7s87v.js";import"./TimeText-Csn_Qbhe.js";import"./Heading2-tyV-eXDC.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),pr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const cr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,cr as __namedExportsOrder,pr as default};
