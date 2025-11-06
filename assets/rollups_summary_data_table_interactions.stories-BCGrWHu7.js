import{j as o}from"./iframe-DiVw3yHA.js";import{D as e}from"./LoadingProvider-Zkt76Ed-.js";import"./DateTimeFormattersProvider-Cke_KSl2.js";import"./LocaleProvider-DHMWAj9Z.js";import"./PagePathProvider-Cvk9bh81.js";import"./NowProvider-DrI6YYBv.js";import"./NumberFormattersProvider-BfcekU16.js";import"./PathResolverProvider-AUu7mEWL.js";import{g as m,s as i}from"./data_table_shared-DVFERkan.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-CRgHS6gg.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BWqZvVyY.js";import"./index-rJ8Cu0im.js";import"./index-AbTblZKA.js";import"./client-C1qNaJNW.js";import"./SkeletonContent-BaB9Abwv.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-4ws4kGsw.js";import"./Text-BU7JBOLk.js";import"./DataTable-2f6GjJNV.js";import"./typography-BKrsIUhr.js";import"./higher_order-DYYvazKI.js";import"./ChevronUp-BDL2JExt.js";import"./SVGIconBase-D9AVKmp6.js";import"./Link-BwoWaFed.js";import"./RollUpSimple-vDCeTTab.js";import"./Payments-CRZ9Ptfh.js";import"./TwitterIcon-BAkGK_ou.js";import"./ArrowRight-DOD6Ornx.js";import"./CheckCircleFilled-Nlm5aBDc.js";import"./Close-D9LHiqGv.js";import"./Copy-CHyUaZ_C.js";import"./MediumIcon-B5tXOAOu.js";import"./EspressoLogo-D4ahokjl.js";import"./EspressoLogoAndTitle-CZ10Pgv2.js";import"./Menu-B0Gt87_K.js";import"./SearchGlass-C4UXAFci.js";import"./XIcon-DGXxoaoe.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
