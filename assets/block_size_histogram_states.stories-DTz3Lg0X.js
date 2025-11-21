import{j as r}from"./iframe-MDHi5BtY.js";import{L as p,E as c,D as d}from"./LoadingProvider-CWKs1OKS.js";import"./DateTimeFormattersProvider-CpgfAdO1.js";import"./LocaleProvider-C_FH1fdc.js";import"./PagePathProvider-CQM9bELx.js";import"./NowProvider-CcJI5I22.js";import"./NumberFormattersProvider-DXmL9zdB.js";import"./PathResolverProvider-BcSX6lnW.js";import{b as u,i as n}from"./functional-45VDB5x3.js";import{B as g}from"./BlockSizeHistogram-BA2BbUSD.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./Card-B_NJu7nu.js";import"./higher_order-BL5UuIFh.js";import"./LoadingShimmer-BDAUbKXw.js";import"./SkeletonContent-3WrbC6qB.js";import"./typography-DGJbNoek.js";import"./label-BK9IFAA1.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-D3g4RYIw.js";import"./base64-Dx8wLaZf.js";import"./CopyButton-cUrabOGa.js";import"./CheckCircleFilled-BxcF7Twl.js";import"./SVGIconBase-CcReponG.js";import"./Copy-C2kKIXDZ.js";/* empty css               */import"./CircularProgressIndicator-CB-8i12g.js";import"./ContainerLoading-DN71pZi4.js";import"./SVGToolTip-CFz4Wi22.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BIzYnAeN.js";import"./ByteSizeText-CQo8YJLi.js";import"./CopyHex-CsU9PPWX.js";import"./array_buffer-C6GouG76.js";import"./DateTimeText-C2CZTObp.js";import"./FullHexText-Bb8PrC1l.js";import"./HexText-BJr49gt8.js";import"./MoneyText-DF0iNO0P.js";import"./RelativeTimeSinceDateText-CR5XJemD.js";import"./TaggedBase64Text-DX81tLVE.js";import"./TimeText-DSVutLYM.js";import"./Heading2-Dbd4cIE1.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
