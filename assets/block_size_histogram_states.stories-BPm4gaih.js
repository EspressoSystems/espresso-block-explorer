import{j as r}from"./iframe-Dsdv_jy8.js";import{L as p,E as c,D as d}from"./LoadingProvider-ZcPlxnY_.js";import"./DateTimeFormattersProvider-B3ic2tiK.js";import"./LocaleProvider-huCKFdsY.js";import"./NavDrawerStateProvider-DV3EzpoW.js";import"./NowProvider-Bqys-kMq.js";import"./NumberFormattersProvider-QO8j60_X.js";import"./PathResolverProvider-DQIE-5jR.js";import{b as u,i as n}from"./functional-CtE-8sCS.js";import{B as g}from"./BlockSizeHistogram-CU06Y22R.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-DHgZ7T60.js";import"./string-BOqmI8nC.js";import"./UnimplementedError-DbqcLgyi.js";import"./Card-BWis1JEF.js";import"./higher_order-BcrgzP0b.js";import"./CopyButton-HuO0By6z.js";import"./CheckCircle-DJ5CyHk3.js";import"./SVGIconBase-rh-N70d0.js";import"./Copy-W_oyfHjZ.js";import"./typography-G6sVg_FI.js";import"./label-DB6Cj3T1.js";import"./Text-BU7JBOLk.js";import"./CircularProgressIndicator-CQjSHitw.js";import"./ContainerLoading-DYbv62WW.js";import"./SVGToolTip-BrrObrxH.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-CrclVv3b.js";import"./ByteSizeText-CNXXfO_U.js";import"./base64-jao5sNyx.js";/* empty css               */import"./CopyHex-CHRZT22W.js";import"./array_buffer-6KHtE3L0.js";import"./DateTimeText-BIynWLnf.js";import"./FullHexText-CwgTkTKw.js";import"./HexText-BJrTps3h.js";import"./MoneyText-BUVv8dkL.js";import"./RelativeTimeText-BgVYf3V3.js";import"./TaggedBase64Text-Dw0ZBxuI.js";import"./TimeText-BZvDg1Q4.js";import"./Heading2-zzl4Nfa0.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),nr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ir=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,ir as __namedExportsOrder,nr as default};
