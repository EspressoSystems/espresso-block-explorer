import{j as o}from"./iframe-CKCSKCZk.js";import{D as m}from"./LoadingProvider-IZAf8NZo.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PagePathProvider-Bck-CLYd.js";import"./NowProvider-DDm0tQ2h.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./PathResolverProvider-65y-23gj.js";import{g as e,s as i}from"./data_table_shared-Amq6ew_h.js";import"./blocks-DqaRurhN.js";import{P as s}from"./nodes-sPTSRSIJ.js";import{m as p,i as n}from"./functional-D84nw2eW.js";import"./string-Bj9RBsFG.js";import"./validator-CIqZZigT.js";import{T as l}from"./TaggedBase64-CL6rcPDn.js";import{a as c}from"./TransactionSummaryDataTable-DGG1B9Ui.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BNPRQ27L.js";import"./index-DmGiuwIY.js";import"./index-DR30vb4A.js";import"./client-DX8xMgVj.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-DwwBj-2c.js";import"./wallet_address-CpgxLnfk.js";import"./array_buffer-DuWTC5ee.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-CmRaKWaw.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-DZtevsws.js";import"./higher_order-DLiNGwX1.js";import"./CheckCircleFilled-DdPcBHVp.js";import"./SVGIconBase-DGbb4H2y.js";import"./Copy-Dw0OUX71.js";/* empty css               */import"./DateTimeText-H-Z2u3yn.js";import"./NumberText-3GIByMNg.js";import"./TaggedBase64Text-D64-OEXT.js";import"./Text-BU7JBOLk.js";import"./DataTable-CSqEyAGP.js";import"./typography-BFEyteYy.js";import"./ChevronUp-qUK-_iwc.js";import"./Link-Bn7YDIhB.js";import"./RollUpSimple-BnDJDTvU.js";import"./Payments-BGh2UMqf.js";import"./TwitterIcon-g9pHzhQS.js";import"./ArrowRight-D-g2t7xC.js";import"./Close-ClIsmZIV.js";import"./MediumIcon-Cplm7Qzg.js";import"./EspressoLogo-DTRd_Otf.js";import"./EspressoLogoAndTitle-CHnEWYG9.js";import"./Menu-DgeIcvwf.js";import"./SearchGlass-CfPtz_kH.js";import"./XIcon-Drff2Uzy.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    transactionSummaries
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('retrieve the data table element', async () => {
      await getDataTable(canvasElement);
    });
    await step('sort all columns', async () => {
      await selectAllTableHeaderCellsTwice(canvasElement);
    });
  }
}`,...r.parameters?.docs?.source}}};const xt=["Interactions"];export{r as Interactions,xt as __namedExportsOrder,gt as default};
