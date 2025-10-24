import{j as o}from"./iframe-BHjaQoR_.js";import{D as e}from"./LoadingProvider-BK_eECZs.js";import"./DateTimeFormattersProvider-C490CWS5.js";import"./LocaleProvider-D_LBLk6t.js";import"./PagePathProvider-2NbmsHer.js";import"./NowProvider-C4x-vJBH.js";import"./NumberFormattersProvider-CUY8YoGJ.js";import"./PathResolverProvider-DqEQuimj.js";import{g as m,s as i}from"./data_table_shared-Df_s3zsc.js";import{m as p,i as s}from"./functional-CJQfVQrn.js";import{a as n}from"./RollUpsSummaryDataTable-Dct55Lsq.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-CagCxdCk.js";import"./index-BIlu0H9R.js";import"./index-C5VYqKq3.js";import"./client-D9SK62X2.js";import"./SkeletonContent-C1MGHMD0.js";import"./block_summary-CBGYsBbN.js";import"./data-CeQBE4up.js";import"./NumberText-CvdAo0fc.js";import"./Text-BU7JBOLk.js";import"./DataTable-CRhc5ac4.js";import"./typography-DgOFllQG.js";import"./higher_order-B5xxcO2p.js";import"./ChevronUp-CGDCHAGo.js";import"./SVGIconBase-Ca1lCrFv.js";import"./Link-CrUZsl6z.js";import"./RollUpSimple-Bc_AeaWO.js";import"./Payments-BkZwi3e2.js";import"./TwitterIcon-rwve1l5g.js";import"./ArrowRight-JwTvuzRc.js";import"./CheckCircleFilled-BK1jmySu.js";import"./Close-BpZQpP3A.js";import"./Copy-GPQIP3qy.js";import"./MediumIcon-BFZIHKsa.js";import"./EspressoLogo-CHUeBFti.js";import"./EspressoLogoAndTitle-DnlQrKr6.js";import"./Menu-Dg7HdSzt.js";import"./SearchGlass-CtuRTx6U.js";import"./XIcon-De1rypxV.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    rollupSummaries
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
}`,...r.parameters?.docs?.source}}};const ot=["Interactions"];export{r as Interactions,ot as __namedExportsOrder,at as default};
