import{j as r}from"./iframe-CPO7J-5p.js";import{L as p,E as c,D as d}from"./LoadingProvider-BqsRdxCF.js";import"./DateTimeFormattersProvider-Br7i94ug.js";import"./LocaleProvider-Bld4Cmnt.js";import"./PagePathProvider-CVfe-phe.js";import"./NowProvider-DR2Q-jZs.js";import"./NumberFormattersProvider-BNSL7wtz.js";import"./PathResolverProvider-Yb-kM41j.js";import{b as u,i as n}from"./functional-Cgf59ne2.js";import{B as g}from"./BlockSizeHistogram-BGCH2ni9.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./Card-Ck2NNHX8.js";import"./higher_order-DNzVPoVw.js";import"./LoadingShimmer-skYfPSjU.js";import"./SkeletonContent-GAQeMj3L.js";import"./typography-DYIw_45M.js";import"./label-DB_BV3KO.js";import"./Text-BU7JBOLk.js";import"./VariableByteSizeText-CBvmxC4F.js";import"./base64-KHURY7_E.js";import"./CopyButton-CsfM4kgz.js";import"./CheckCircleFilled-DFjBzG3O.js";import"./SVGIconBase-C4fKu3m4.js";import"./Copy-ZeHugg_G.js";/* empty css               */import"./CircularProgressIndicator-Cw6QluKB.js";import"./ContainerLoading-4kBBH6gc.js";import"./SVGToolTip-CQFtobn0.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-DiIXgfZY.js";import"./ByteSizeText-CA0nUUkg.js";import"./CopyHex-CivD2dEu.js";import"./array_buffer-cBr8gIXV.js";import"./DateTimeText-BSKNW-oJ.js";import"./FullHexText-3tleIpiG.js";import"./HexText-C2pkHct6.js";import"./MoneyText-21ruN-4T.js";import"./RelativeTimeSinceDateText-CbkPWfWT.js";import"./TaggedBase64Text-DAyR8Ad1.js";import"./TimeText-os-BJfUl.js";import"./Heading2-DNRPSs5x.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),mr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
