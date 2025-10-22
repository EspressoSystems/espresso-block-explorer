import{j as r}from"./iframe-Dz1tcGmB.js";import{L as p,E as c,D as d}from"./LoadingProvider-DCua2xWV.js";import"./DateTimeFormattersProvider-CA5szNsR.js";import"./LocaleProvider-BX3D0wrI.js";import"./PagePathProvider-Cq5wJN0q.js";import"./NowProvider-4IsGhkTg.js";import"./NumberFormattersProvider-bfM2GBl7.js";import"./PathResolverProvider-NY-UQiBR.js";import{b as u,i as n}from"./functional-CtVX7zWU.js";import{B as g}from"./BlockSizeHistogram-J8adi6aV.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./Card-T8Nlve6i.js";import"./higher_order-BpBhqnZj.js";import"./SkeletonContent-DH2u090B.js";import"./typography-B0ztRi_u.js";import"./label-DWD3lJbf.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-BNo3C5nu.js";import"./base64-CwylSrof.js";import"./CopyButton-CGi9xgL8.js";import"./CheckCircleFilled-S-p0O8Ev.js";import"./SVGIconBase-Bg83ziHO.js";import"./Copy-BNPrJsvd.js";/* empty css               */import"./CircularProgressIndicator-0Ql0Aa-d.js";import"./ContainerLoading-DI1xOFHP.js";import"./SVGToolTip-DPeu-HE6.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-C9JeOSfX.js";import"./ByteSizeText-DB4laeik.js";import"./CopyHex-lXh6pXGJ.js";import"./array_buffer-ChxgVYUa.js";import"./DateTimeText-DkzI5dcJ.js";import"./FullHexText-P0-GHCQv.js";import"./HexText-DK7_zb8J.js";import"./MoneyText-MREHNVEq.js";import"./RelativeTimeText-Ch5UcHMA.js";import"./TaggedBase64Text-D9VjpAPe.js";import"./TimeText-WvIXH-1h.js";import"./Heading2-D-Q19wa2.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),lr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
