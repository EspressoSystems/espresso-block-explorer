import{j as o}from"./iframe-Cfh0eePN.js";import{D as m}from"./LoadingProvider-CKkBrFm2.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";import"./LocaleProvider-D8Kjh7eq.js";import"./PagePathProvider-DS53fVOm.js";import"./NowProvider-gH2ltRAl.js";import"./NumberFormattersProvider-BkhnvKth.js";import"./PathResolverProvider-XIbO0Y2M.js";import{g as e,s as i}from"./data_table_shared-DcWv32yv.js";import{P as s}from"./generateFakeData-DzM1urrr.js";import{m as p,i as n}from"./functional-CJQfVQrn.js";import"./string-DurhFPzJ.js";import"./validator-B3Q91Miu.js";import{T as l}from"./TaggedBase64--rbfr4uv.js";import{a as c}from"./TransactionSummaryDataTable-C3fyatZk.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C7E3UGcJ.js";import"./index-Cc9aKvRX.js";import"./index-BsUSwBcT.js";import"./client-DU1do1ug.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-Cp1wsmOC.js";import"./wallet_address-BavpVfb_.js";import"./array_buffer-C2KvbgUx.js";import"./base64-C1KKyByM.js";import"./SkeletonContent-DFSGCXCf.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-xTnrAFcf.js";import"./higher_order-kZsKjHKn.js";import"./CheckCircleFilled-Vjq3m9Qn.js";import"./SVGIconBase-DvO4AW8t.js";import"./Copy-BiMYs1cj.js";/* empty css               */import"./DateTimeText-C2Q7-R2m.js";import"./NumberText-BeA3jcpj.js";import"./TaggedBase64Text-DStqoIpO.js";import"./Text-BU7JBOLk.js";import"./DataTable-BYFqHc1z.js";import"./typography-CSzJ38pA.js";import"./ChevronUp-DHug100Q.js";import"./Link-K-5c9_v2.js";import"./RollUpSimple-Bia0-F1u.js";import"./Payments-Cd8uXtwh.js";import"./TwitterIcon-EC6fvhkT.js";import"./ArrowRight-DFftu8vA.js";import"./Close-3zdKA3fy.js";import"./MediumIcon-C1vGIasn.js";import"./EspressoLogo-COnJFFF-.js";import"./EspressoLogoAndTitle-10Uzpsox.js";import"./Menu-CkuroZ-L.js";import"./SearchGlass-CQOGxpt-.js";import"./XIcon-CUsEcQAW.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ft={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const gt=["Interactions"];export{r as Interactions,gt as __namedExportsOrder,ft as default};
