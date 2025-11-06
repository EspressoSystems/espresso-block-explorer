import{j as o}from"./iframe-DNoZVhxP.js";import{D as e}from"./LoadingProvider-jMPSrBN8.js";import"./DateTimeFormattersProvider-f03wtLTp.js";import"./LocaleProvider-BH2CEei5.js";import"./PagePathProvider-BjlOfnGv.js";import"./NowProvider-DJ1Fnn1P.js";import"./NumberFormattersProvider--vwjDh8x.js";import"./PathResolverProvider-BhgJJ4ag.js";import{g as m,s as i}from"./data_table_shared-B1lfVC7L.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-DmSb8C48.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-cCAuJ8Kz.js";import"./index-BchWXTjL.js";import"./index-ZxRsue2O.js";import"./client-aJVzosdg.js";import"./SkeletonContent-us0uT-_q.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-iNHv8NBq.js";import"./Text-BU7JBOLk.js";import"./DataTable-Zw9tN4b_.js";import"./typography-BZCCN5IO.js";import"./higher_order-Ch0r7QLd.js";import"./ChevronUp-Cy7Eg2uG.js";import"./SVGIconBase-B0yIC6Vs.js";import"./Link-C575qFFK.js";import"./RollUpSimple-CfRtxrPX.js";import"./Payments-CQuypiAB.js";import"./TwitterIcon-B0azqD3e.js";import"./ArrowRight-BwQBNBQC.js";import"./CheckCircleFilled-DpH3Q2_x.js";import"./Close-DXjwWnMR.js";import"./Copy-BdkYT5q1.js";import"./MediumIcon-DAcLVSSt.js";import"./EspressoLogo-B588PgWX.js";import"./EspressoLogoAndTitle-ViuyfviF.js";import"./Menu-BFMrkREI.js";import"./SearchGlass-CP2KPFB9.js";import"./XIcon-yZWZ815G.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
