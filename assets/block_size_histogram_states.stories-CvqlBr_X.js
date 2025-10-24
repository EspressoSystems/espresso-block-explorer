import{j as r}from"./iframe-BHjaQoR_.js";import{L as p,E as c,D as d}from"./LoadingProvider-BK_eECZs.js";import"./DateTimeFormattersProvider-C490CWS5.js";import"./LocaleProvider-D_LBLk6t.js";import"./PagePathProvider-2NbmsHer.js";import"./NowProvider-C4x-vJBH.js";import"./NumberFormattersProvider-CUY8YoGJ.js";import"./PathResolverProvider-DqEQuimj.js";import{b as u,i as n}from"./functional-CJQfVQrn.js";import{B as g}from"./BlockSizeHistogram-DpehiGAa.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-DF-8MlCJ.js";import"./higher_order-B5xxcO2p.js";import"./LoadingShimmer-74fN_Ku8.js";import"./SkeletonContent-C1MGHMD0.js";import"./typography-DgOFllQG.js";import"./label-DipsbDwb.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-CfimZ-im.js";import"./base64-FoiTT2pJ.js";import"./CopyButton-C-s6aWvc.js";import"./CheckCircleFilled-BK1jmySu.js";import"./SVGIconBase-Ca1lCrFv.js";import"./Copy-GPQIP3qy.js";/* empty css               */import"./CircularProgressIndicator-Mzoc5KrX.js";import"./ContainerLoading-PclK0mLr.js";import"./SVGToolTip-BjVME9fu.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CvdAo0fc.js";import"./ByteSizeText-CtgavNV0.js";import"./CopyHex-D7MLljFl.js";import"./array_buffer-BaJjf8aB.js";import"./DateTimeText-CqJ295jV.js";import"./FullHexText-DrrbCVEi.js";import"./HexText-TQzs933f.js";import"./MoneyText-DbWKIn0G.js";import"./RelativeTimeSinceDateText-KOl05fRA.js";import"./TaggedBase64Text-BEixiiTN.js";import"./TimeText-D87eF9gl.js";import"./Heading2-CszoxISY.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
