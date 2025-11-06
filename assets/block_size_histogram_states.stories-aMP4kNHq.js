import{j as r}from"./iframe-BZt-oGI2.js";import{L as p,E as c,D as d}from"./LoadingProvider-DxB0Fjbl.js";import"./DateTimeFormattersProvider-B7GdAoyu.js";import"./LocaleProvider-Dj1DT9ro.js";import"./PagePathProvider-CmyuTqbd.js";import"./NowProvider-DLNJqZ40.js";import"./NumberFormattersProvider-DXFJ5cGD.js";import"./PathResolverProvider-Dycj2KH7.js";import{b as u,i as n}from"./functional-g5wG3Azh.js";import{B as g}from"./BlockSizeHistogram-B09J5DIk.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-BggnL-Lz.js";import"./higher_order-PSnDsqAx.js";import"./LoadingShimmer-Q5swrf_O.js";import"./SkeletonContent-B2Xy3K34.js";import"./typography-CB8jWl-O.js";import"./label-BCjOzo8O.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-DzVVDa_U.js";import"./base64-KHURY7_E.js";import"./CopyButton-BwagY-CS.js";import"./CheckCircleFilled-CxBE9-dX.js";import"./SVGIconBase-DXiGZLXq.js";import"./Copy-4CpKomVk.js";/* empty css               */import"./CircularProgressIndicator-BM8kKdt4.js";import"./ContainerLoading-C4WTJ_VK.js";import"./SVGToolTip-Bxq22u8N.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-ClxDVIx1.js";import"./ByteSizeText-CqDC6EBO.js";import"./CopyHex-C9HMEKnM.js";import"./array_buffer-D67g0v0K.js";import"./DateTimeText-_E2nkZua.js";import"./FullHexText-DFYP_GOS.js";import"./HexText-DAV18_aj.js";import"./MoneyText-CGcWcbOg.js";import"./PercentageText-820Z1jRD.js";import"./RelativeTimeSinceDateText-S_DJr-y1.js";import"./TaggedBase64Text-Ci447vql.js";import"./TimeText-Bkeqiel0.js";import"./Heading2-C2GH-Mcl.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),pr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
