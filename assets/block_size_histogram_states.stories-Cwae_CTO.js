import{j as r}from"./iframe-DfHNakLQ.js";import{L as p,E as c,D as d}from"./LoadingProvider-BYJIF-mI.js";import"./DateTimeFormattersProvider-CpVKlB1P.js";import"./LocaleProvider-BjoXYII7.js";import"./NavDrawerStateProvider-CBukqRJJ.js";import"./NowProvider-DkY9ettO.js";import"./NumberFormattersProvider-CueCmy4H.js";import"./PathResolverProvider-jxTg-n2M.js";import{b as u,i as n}from"./functional-CBrBKmKr.js";import{B as g}from"./BlockSizeHistogram-CDFkcPWP.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-B2OGDzdH.js";import"./string-elRJFjrg.js";import"./UnimplementedError-CRtBpVRh.js";import"./Card-DbcJ10qU.js";import"./higher_order-WjuPy8Zm.js";import"./SkeletonContent-CW0kwa0b.js";import"./typography-Ca4ZlVP6.js";import"./label-BLTnAsWt.js";import"./Text-BU7JBOLk.js";import"./TransactionsPerSecondText-Bx6tqdL4.js";import"./base64-CGLM76xc.js";import"./CopyButton-BxNmo-_j.js";import"./CheckCircle-CCqTADYa.js";import"./SVGIconBase-sp_JN_RY.js";import"./Copy-fs5RTqu2.js";/* empty css               */import"./CircularProgressIndicator-CuEIuDl8.js";import"./ContainerLoading-KhiYAzoH.js";import"./SVGToolTip-CF4ID-3r.js";import"./SVGPathBuilder-4dyJLere.js";import"./AffineTransform-UCCpzMIM.js";import"./NumberText-Djfs-eB4.js";import"./ByteSizeText-DQ4WThAc.js";import"./CopyHex-bWIoTUnL.js";import"./array_buffer-bVPwHeb6.js";import"./DateTimeText-28NgEk6B.js";import"./FullHexText-BBYWB1AK.js";import"./HexText-d4Cv2NYH.js";import"./MoneyText-BAAZD7rs.js";import"./RelativeTimeText-Be7tEprs.js";import"./TaggedBase64Text-9C0KbZjD.js";import"./TimeText-ByVYwMyL.js";import"./Heading2-CaGpes7L.js";/* empty css                */const k=({data:i,error:s,loading:l,...m})=>r.jsx(p.Provider,{value:l,children:r.jsx(c.Provider,{value:s,children:r.jsx(d.Provider,{value:i,children:r.jsx(g,{...m})})})}),sr={title:"Components/Page Sections/Histogram/Block Size/States",component:k},o={args:{data:{blocks:[...n(10)],blockSize:[...u(n(10),()=>Math.random()*100)]},loading:!1,error:null}},a={args:{data:{blocks:[1,2,3,null,5,6,null,8,9,10,null],blockSize:[1,2,3,null,5,6,null,8,9,10,null]},loading:!1,error:null}},t={args:{data:{blocks:[],blockSize:[]},loading:!1,error:null}},e={args:{data:{blocks:[],blockSize:[]},loading:!0,error:null}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
