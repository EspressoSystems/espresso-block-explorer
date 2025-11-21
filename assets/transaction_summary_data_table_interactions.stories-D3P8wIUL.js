import{j as o}from"./iframe-MDHi5BtY.js";import{D as m}from"./LoadingProvider-CWKs1OKS.js";import"./DateTimeFormattersProvider-CpgfAdO1.js";import"./LocaleProvider-C_FH1fdc.js";import"./PagePathProvider-CQM9bELx.js";import"./NowProvider-CcJI5I22.js";import"./NumberFormattersProvider-DXmL9zdB.js";import"./PathResolverProvider-BcSX6lnW.js";import{g as e,s as i}from"./data_table_shared-BVu_lsgo.js";import"./blocks-BXEtmMPs.js";import{P as s}from"./nodes-DBGgm4cu.js";import{m as p,i as n}from"./functional-45VDB5x3.js";import"./string-Bj9RBsFG.js";import"./validator-7S_OUvMM.js";import{T as l}from"./TaggedBase64-CL6rcPDn.js";import{a as c}from"./TransactionSummaryDataTable-BE3SINDy.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-Bmorjp6Y.js";import"./index-Bu6H0fX7.js";import"./index-Dx45Pk4I.js";import"./client-CEW48UON.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-DwwBj-2c.js";import"./wallet_address-JyvO5_Lr.js";import"./array_buffer-C6GouG76.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-3WrbC6qB.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-cUrabOGa.js";import"./higher_order-BL5UuIFh.js";import"./CheckCircleFilled-BxcF7Twl.js";import"./SVGIconBase-CcReponG.js";import"./Copy-C2kKIXDZ.js";/* empty css               */import"./DateTimeText-C2CZTObp.js";import"./NumberText-BIzYnAeN.js";import"./TaggedBase64Text-DX81tLVE.js";import"./Text-BU7JBOLk.js";import"./DataTable-Bt6wqaf5.js";import"./typography-DGJbNoek.js";import"./ChevronUp-BWie7kFO.js";import"./Link-ImtWbzCq.js";import"./RollUpSimple-DOQs1CGr.js";import"./Payments-Dyp_xx1g.js";import"./TwitterIcon-CsDkLwgK.js";import"./ArrowRight-BzQDOQLs.js";import"./Close-BY8K3ajJ.js";import"./MediumIcon-DRfa-aqQ.js";import"./EspressoLogo-BnZfPAja.js";import"./EspressoLogoAndTitle-ByRcKIjQ.js";import"./Menu-Dmjk0FUI.js";import"./SearchGlass-Byj9l7yz.js";import"./XIcon-DVmVjpf0.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
