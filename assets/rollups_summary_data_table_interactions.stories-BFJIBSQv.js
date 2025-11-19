import{j as o}from"./iframe-FzErJqN6.js";import{D as e}from"./LoadingProvider-CBligMWO.js";import"./DateTimeFormattersProvider-CZowblb9.js";import"./LocaleProvider-DKgBZSpf.js";import"./PagePathProvider-CP4LF1jP.js";import"./NowProvider-_E-9Clgm.js";import"./NumberFormattersProvider-WL2WBrHm.js";import"./PathResolverProvider-CU74cDgI.js";import{g as m,s as i}from"./data_table_shared-BzrFjlc-.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-BLZOZ2H4.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-D2hH6fTW.js";import"./index-Bp3wDen4.js";import"./index-CpfLKNmN.js";import"./client-C3Wqjtu9.js";import"./SkeletonContent-Cqj7aVKa.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-HNhVnN8v.js";import"./Text-BU7JBOLk.js";import"./DataTable-DWpr4HaW.js";import"./typography-Di2_0slN.js";import"./higher_order-D1aPdQSR.js";import"./ChevronUp-BMgb842L.js";import"./SVGIconBase-yCORSxOm.js";import"./Link-D6iTiXzC.js";import"./RollUpSimple-Bc6c2Fmh.js";import"./Payments-Oblv13UF.js";import"./TwitterIcon-o4nbkoOk.js";import"./ArrowRight-0hEAEfzQ.js";import"./CheckCircleFilled-B65Yvqd6.js";import"./Close-Cl0yDB1K.js";import"./Copy-Dw9BDBZ5.js";import"./MediumIcon-C5oVlAVy.js";import"./EspressoLogo-C17nJgaH.js";import"./EspressoLogoAndTitle-DzWtfgLz.js";import"./Menu-D1kc__cp.js";import"./SearchGlass-D5uxOSop.js";import"./XIcon-DwXQ1rPR.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
