import{j as o}from"./iframe-CZr8t9jY.js";import{D as e}from"./LoadingProvider-CpQg_alm.js";import"./DateTimeFormattersProvider-DnPksEHq.js";import"./LocaleProvider-C_oPBYMV.js";import"./PagePathProvider--PzVzJcG.js";import"./NowProvider-DNx-Ix2E.js";import"./NumberFormattersProvider-Ih38hUky.js";import"./PathResolverProvider-C2pAxoUb.js";import{g as m,s as i}from"./data_table_shared-FWH5dSHM.js";import{m as p,i as s}from"./functional-Cgf59ne2.js";import{a as n}from"./RollUpsSummaryDataTable-DzBkFSm0.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-CnaU043v.js";import"./index-6D5ZhKjv.js";import"./index-CPFGE3kC.js";import"./client-BUkiJcQZ.js";import"./SkeletonContent-_-h4l-3E.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BecQVMhk.js";import"./Text-BU7JBOLk.js";import"./DataTable-I0tUYPwJ.js";import"./typography-CT4CmWvf.js";import"./higher_order-BJO-eimJ.js";import"./ChevronUp-BJAScdAa.js";import"./SVGIconBase-DuaD1ZtN.js";import"./Link-CIEm4dKV.js";import"./RollUpSimple-DCk3I005.js";import"./Payments-Cemh14bc.js";import"./TwitterIcon-BDaOCGex.js";import"./ArrowRight-P6jSm5d8.js";import"./CheckCircleFilled-D5GKimKt.js";import"./Close--z-NiWuP.js";import"./Copy-EcqMa1xk.js";import"./MediumIcon-DCMJY4T3.js";import"./EspressoLogo-D7OQyh3N.js";import"./EspressoLogoAndTitle-CdWoZK4f.js";import"./Menu-nx6M6WaK.js";import"./SearchGlass-19NKFJ77.js";import"./XIcon-DlWOekjO.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
