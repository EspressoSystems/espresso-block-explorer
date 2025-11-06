import{j as o}from"./iframe-BZt-oGI2.js";import{D as e}from"./LoadingProvider-DxB0Fjbl.js";import"./DateTimeFormattersProvider-B7GdAoyu.js";import"./LocaleProvider-Dj1DT9ro.js";import"./PagePathProvider-CmyuTqbd.js";import"./NowProvider-DLNJqZ40.js";import"./NumberFormattersProvider-DXFJ5cGD.js";import"./PathResolverProvider-Dycj2KH7.js";import{g as m,s as i}from"./data_table_shared-CtTcge7U.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-DKcbTuo5.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-C_OCskS6.js";import"./index-BXl1AAbx.js";import"./index-CpV6ALFd.js";import"./client-Bii3fxNu.js";import"./SkeletonContent-B2Xy3K34.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-ClxDVIx1.js";import"./Text-BU7JBOLk.js";import"./DataTable-DkjBm27M.js";import"./typography-CB8jWl-O.js";import"./higher_order-PSnDsqAx.js";import"./ChevronUp-BqFsea22.js";import"./SVGIconBase-DXiGZLXq.js";import"./Link-BEXmBmMl.js";import"./RollUpSimple-DjmvZIGB.js";import"./Payments-BIQAYegx.js";import"./TwitterIcon-CZvzCg6P.js";import"./ArrowRight-DwJJ51pA.js";import"./CheckCircleFilled-CxBE9-dX.js";import"./Close-DzllzPzy.js";import"./Copy-4CpKomVk.js";import"./MediumIcon-DOUTwU_g.js";import"./EspressoLogo-gV1rZjK6.js";import"./EspressoLogoAndTitle-PPdMkUfK.js";import"./Menu-9A05I3lL.js";import"./SearchGlass-BIsvlbep.js";import"./XIcon-BKquj4Ix.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
