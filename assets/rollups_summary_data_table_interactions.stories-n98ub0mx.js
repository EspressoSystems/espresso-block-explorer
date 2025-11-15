import{j as o}from"./iframe-CAIcvJ70.js";import{D as e}from"./LoadingProvider-DGChf-KQ.js";import"./DateTimeFormattersProvider-X38tn8qt.js";import"./LocaleProvider-y0Euh852.js";import"./PagePathProvider-C1vNRw3D.js";import"./NowProvider-Cc9-Bxzc.js";import"./NumberFormattersProvider-d1oGBTd3.js";import"./PathResolverProvider-BiLWwEPS.js";import{g as m,s as i}from"./data_table_shared-ElxHRYJu.js";import{m as p,i as s}from"./functional-Cgf59ne2.js";import{a as n}from"./RollUpsSummaryDataTable-B_1TYdmN.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-Df5qRFvM.js";import"./index-CGVd-9q-.js";import"./index-DLmH92gl.js";import"./client-CKLbhzkr.js";import"./SkeletonContent-2MCCOw30.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-WHq5951A.js";import"./Text-BU7JBOLk.js";import"./DataTable-B-FRTyRc.js";import"./typography-wMQVOeJ2.js";import"./higher_order-DYSeXyA3.js";import"./ChevronUp-CALlADTf.js";import"./SVGIconBase-C2htln4Y.js";import"./Link-tBJ7VlgZ.js";import"./RollUpSimple-CuycRjG0.js";import"./Payments-DLleT_ta.js";import"./TwitterIcon-6O_PN-1X.js";import"./ArrowRight-BJPdFFDP.js";import"./CheckCircleFilled-DqLDQU78.js";import"./Close-DYL-CYlL.js";import"./Copy-pW00-f5f.js";import"./MediumIcon-CHTTRw5v.js";import"./EspressoLogo-ByuSjbSh.js";import"./EspressoLogoAndTitle-_FX6vQqQ.js";import"./Menu-D9fXNNfp.js";import"./SearchGlass-BJBoxfOR.js";import"./XIcon-CX83rckg.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
