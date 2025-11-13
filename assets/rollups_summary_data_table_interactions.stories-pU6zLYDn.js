import{j as o}from"./iframe-Bhigqh8S.js";import{D as e}from"./LoadingProvider-B-tzpZix.js";import"./DateTimeFormattersProvider-hijkch1q.js";import"./LocaleProvider-XFyG3k3y.js";import"./PagePathProvider-sdmImp7U.js";import"./NowProvider-CMOF9EXi.js";import"./NumberFormattersProvider-DqfQyzSW.js";import"./PathResolverProvider-R7WzYCMy.js";import{g as m,s as i}from"./data_table_shared-DkZdu1CP.js";import{m as p,i as s}from"./functional-BycAVInn.js";import{a as n}from"./RollUpsSummaryDataTable-CRZFMP3g.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-COkWOs6s.js";import"./index-6rOjFIl9.js";import"./index-DRqb6u-H.js";import"./client-DkKJNYvx.js";import"./SkeletonContent-CCdbvsKX.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-CTdlrJn9.js";import"./Text-BU7JBOLk.js";import"./DataTable-D-EAj6Hm.js";import"./typography-B0Jwoebx.js";import"./higher_order-DB2rAW4M.js";import"./ChevronUp-DWcYHkre.js";import"./SVGIconBase-Y-9iG5mL.js";import"./Link-D0xo7QvX.js";import"./RollUpSimple--IQ6St6I.js";import"./Payments-3vInhcuL.js";import"./TwitterIcon-CLk_vVWM.js";import"./ArrowRight-Uo3kH91l.js";import"./CheckCircleFilled-DhX0c1R4.js";import"./Close-BcFolq0b.js";import"./Copy-DO7KMn7a.js";import"./MediumIcon-BrtWwSFz.js";import"./EspressoLogo-B_mHzClL.js";import"./EspressoLogoAndTitle-oMmK3Tt6.js";import"./Menu-BxpOwwfD.js";import"./SearchGlass-yHMs5n97.js";import"./XIcon-CoWY1FeM.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
