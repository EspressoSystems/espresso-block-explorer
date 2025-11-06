import{j as r}from"./iframe-DbeSBdx1.js";import{L as p,E as c,D as d}from"./LoadingProvider-CYIEarZO.js";import"./DateTimeFormattersProvider-VwnNOFLX.js";import"./LocaleProvider-ShZNSPZC.js";import"./PagePathProvider-DHZuw_Lh.js";import"./NowProvider-CR5LhUAr.js";import"./NumberFormattersProvider-Cp-tTNjA.js";import"./PathResolverProvider-BbMkGmpS.js";import{b as u,i as n}from"./functional-BkuSRiGx.js";import{B as g}from"./BlockSizeHistogram-CkjerKNy.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-BkagKVxl.js";import"./higher_order-B0Ghit15.js";import"./LoadingShimmer-Tq_J3oM-.js";import"./SkeletonContent-DJQ_hYxE.js";import"./typography-V6XS-j0Y.js";import"./label-V-bY4cV_.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-zSsIGPXC.js";import"./base64-KHURY7_E.js";import"./CopyButton-zoahVRbZ.js";import"./CheckCircleFilled-CeA80Vz7.js";import"./SVGIconBase-BoqfZkjB.js";import"./Copy-bGDnt_eA.js";/* empty css               */import"./CircularProgressIndicator-DzkihctS.js";import"./ContainerLoading-BWWhxYXy.js";import"./SVGToolTip-CNfJSFVi.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-BKqqWlFj.js";import"./ByteSizeText-CHYzxH06.js";import"./CopyHex-cWjprvyU.js";import"./array_buffer-CdfOeTuC.js";import"./DateTimeText-DADD0_xj.js";import"./FullHexText-C_3bLndC.js";import"./HexText-DCyhXeFm.js";import"./MoneyText-muPhinUz.js";import"./PercentageText-BeVp_1QE.js";import"./RelativeTimeSinceDateText-CBqRQncq.js";import"./TaggedBase64Text-BoPVehwl.js";import"./TimeText-BCP8Ae_b.js";import"./Heading2-Cl_jkTFY.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),pr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
