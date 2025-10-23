import{j as r}from"./iframe-B_UBkTbs.js";import{L as p,E as c,D as d}from"./LoadingProvider-DRkSo8Wr.js";import"./DateTimeFormattersProvider-FGdD03H8.js";import"./LocaleProvider-0J8ELAGn.js";import"./PagePathProvider-BlRtpPfA.js";import"./NowProvider-Cmvro9JC.js";import"./NumberFormattersProvider-Bqe_gtsw.js";import"./PathResolverProvider--Psz2VXI.js";import{b as u,i as n}from"./functional-CtVX7zWU.js";import{B as g}from"./BlockSizeHistogram-CUzcjNep.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-Bplc6Qy_.js";import"./higher_order-DgYhC1-i.js";import"./SkeletonContent-BhIcyZaZ.js";import"./typography-CoEoGMVz.js";import"./label-2Mfe7Pxx.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-yvG3F04G.js";import"./base64-CwylSrof.js";import"./CopyButton-_nqs0ufP.js";import"./CheckCircleFilled-5wQQPuTo.js";import"./SVGIconBase-BHUxzGpP.js";import"./Copy-B8t-Jw3-.js";/* empty css               */import"./CircularProgressIndicator-D-iBNzph.js";import"./ContainerLoading-RzFPN2xR.js";import"./SVGToolTip-BfsHikRj.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BmUK0MTT.js";import"./ByteSizeText-D8_yG-jC.js";import"./CopyHex-Bl4-HLJS.js";import"./array_buffer-ChxgVYUa.js";import"./DateTimeText-Bbsw7ZiQ.js";import"./FullHexText-P0-GHCQv.js";import"./HexText-QYy1vQJd.js";import"./MoneyText-Dyj-gmnY.js";import"./RelativeTimeText-CZ62dNGQ.js";import"./TaggedBase64Text-Dvo2EXLC.js";import"./TimeText-Wyxs47px.js";import"./Heading2-DoBRMSDv.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),lr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
