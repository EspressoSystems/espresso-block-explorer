import{j as r}from"./iframe-JNS3S7eL.js";import{L as p,E as c,D as d}from"./LoadingProvider-jaO_huAJ.js";import"./DateTimeFormattersProvider-Bu6s_REn.js";import"./LocaleProvider-DYWRrg4P.js";import"./PagePathProvider-DcxjeYx6.js";import"./NowProvider-DrewU4Ns.js";import"./NumberFormattersProvider-DDrkjpLU.js";import"./PathResolverProvider-kVM6rfVI.js";import{b as u,i as n}from"./functional-BkuSRiGx.js";import{B as g}from"./BlockSizeHistogram-BkdJQxke.js";import"./preload-helper-PPVm8Dsz.js";import"./functional_async-BusT9-bd.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-D0Y_gljY.js";import"./higher_order-BlyC2PwC.js";import"./LoadingShimmer-D2_T_6ea.js";import"./SkeletonContent-DWd7u_gj.js";import"./typography-DT5TFJ0I.js";import"./label-DYER8YBp.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D3Cf8v1L.js";import"./base64-KHURY7_E.js";import"./CopyButton-CH6sCv-G.js";import"./CheckCircleFilled-DXpsHxW-.js";import"./SVGIconBase-CjDAVVkj.js";import"./Copy-k9Z_1ofE.js";/* empty css               */import"./CircularProgressIndicator-COVf3C3Y.js";import"./ContainerLoading-C_mi-xEu.js";import"./SVGToolTip-LWXzSflM.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BRYtpqXm.js";import"./ByteSizeText-DCB8GkDk.js";import"./CopyHex-DXVrgonU.js";import"./array_buffer-CdfOeTuC.js";import"./DateTimeText-CKXcd44W.js";import"./FullHexText-C_3bLndC.js";import"./HexText-WgaQfxik.js";import"./MoneyText-DR9dNieW.js";import"./RelativeTimeSinceDateText-w1qatCHB.js";import"./TaggedBase64Text-AtDiO1-l.js";import"./TimeText-BgZ5CLs1.js";import"./Heading2-C1PxXnep.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),pr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
