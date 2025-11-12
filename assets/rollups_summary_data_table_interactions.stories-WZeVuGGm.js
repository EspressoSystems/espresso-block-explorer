import{j as o}from"./iframe-DCPSZz_3.js";import{D as e}from"./LoadingProvider-Bf1m95A-.js";import"./DateTimeFormattersProvider-cQ3P3CXT.js";import"./LocaleProvider-BWtINspZ.js";import"./PagePathProvider-DCChvPC-.js";import"./NowProvider-NCwNHFL9.js";import"./NumberFormattersProvider-D3veI70u.js";import"./PathResolverProvider-Bqa8_97D.js";import{g as m,s as i}from"./data_table_shared-C3Nz2ixW.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-DlzBDRq2.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-B3-VOCYZ.js";import"./index-CoStvZ7i.js";import"./index-DIKh44Bc.js";import"./client-DBKWokK0.js";import"./SkeletonContent-twYoAYJ9.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-LA0gFWzT.js";import"./Text-BU7JBOLk.js";import"./DataTable-CzQp1Jay.js";import"./typography-qws2gU0X.js";import"./higher_order-CuXztvfh.js";import"./ChevronUp-720FfSpP.js";import"./SVGIconBase-SJC07UFc.js";import"./Link-B_IxivXF.js";import"./RollUpSimple-CUXl9do8.js";import"./Payments-DubIMXBH.js";import"./TwitterIcon-DDpKLhe7.js";import"./ArrowRight-Dd0IXfKp.js";import"./CheckCircleFilled-CoSEID6J.js";import"./Close-CdW12XwV.js";import"./Copy-DVTUcARM.js";import"./MediumIcon-DowZDQGK.js";import"./EspressoLogo-DhllUTWc.js";import"./EspressoLogoAndTitle-C1iyFqRJ.js";import"./Menu-8pFKE3TZ.js";import"./SearchGlass-Bb_bwdGG.js";import"./XIcon-C-BePP98.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
