import{j as r}from"./iframe-LIS-dxCY.js";import{L as p,E as c,D as d}from"./LoadingProvider-DxjZ0NgD.js";import"./DateTimeFormattersProvider-DKHY4Sy6.js";import"./LocaleProvider-CpxekBBi.js";import"./NavDrawerStateProvider-Bdan12C-.js";import"./NowProvider-DbFqtnj3.js";import"./NumberFormattersProvider-BQS9gj7A.js";import"./PathResolverProvider-FWM6m2CQ.js";import{b as u,i as n}from"./functional-CBrBKmKr.js";import{B as g}from"./BlockSizeHistogram-BDek-awb.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-B2OGDzdH.js";import"./string-elRJFjrg.js";import"./UnimplementedError-CRtBpVRh.js";import"./Card-DqZmgHWW.js";import"./higher_order-B4shpt_6.js";import"./SkeletonContent-Dc14eCe8.js";import"./typography-Ir_KRgMv.js";import"./label-CJY8brHO.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-B_kYzWnw.js";import"./base64-CGLM76xc.js";import"./CopyButton-2IgDnWno.js";import"./CheckCircle-BmZXH1vf.js";import"./SVGIconBase-CKCoJOKo.js";import"./Copy-WNDUSSUZ.js";/* empty css               */import"./CircularProgressIndicator-C1YnzehF.js";import"./ContainerLoading-C-s-22YD.js";import"./SVGToolTip-BbLUebin.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Cbk9Np_R.js";import"./ByteSizeText-Djz6TQ0l.js";import"./CopyHex-DK_eto34.js";import"./array_buffer-bVPwHeb6.js";import"./DateTimeText-CsO5pwj1.js";import"./FullHexText-BBYWB1AK.js";import"./HexText-Db0RzdvN.js";import"./MoneyText-CBwOL7jS.js";import"./RelativeTimeText-2QNeHZQD.js";import"./TaggedBase64Text-DywcAZqY.js";import"./TimeText-Cb0OiPYT.js";import"./Heading2-Bx-pAXCI.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),sr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const lr=["RandomData","MissingData","EmptyData","LoadingData"];export{t as EmptyData,e as LoadingData,a as MissingData,o as RandomData,lr as __namedExportsOrder,sr as default};
