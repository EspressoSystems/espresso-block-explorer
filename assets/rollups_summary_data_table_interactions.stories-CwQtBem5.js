import{j as o}from"./iframe-CPO7J-5p.js";import{D as e}from"./LoadingProvider-BqsRdxCF.js";import"./DateTimeFormattersProvider-Br7i94ug.js";import"./LocaleProvider-Bld4Cmnt.js";import"./PagePathProvider-CVfe-phe.js";import"./NowProvider-DR2Q-jZs.js";import"./NumberFormattersProvider-BNSL7wtz.js";import"./PathResolverProvider-Yb-kM41j.js";import{g as m,s as i}from"./data_table_shared-5swmVaO_.js";import{m as p,i as s}from"./functional-Cgf59ne2.js";import{a as n}from"./RollUpsSummaryDataTable-ClTYheHR.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BE0DeXnC.js";import"./index-CXZCJYEZ.js";import"./index-DFaGZFUT.js";import"./client-HWUfghTq.js";import"./SkeletonContent-GAQeMj3L.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-DiIXgfZY.js";import"./Text-BU7JBOLk.js";import"./DataTable-CPdkIla6.js";import"./typography-DYIw_45M.js";import"./higher_order-DNzVPoVw.js";import"./ChevronUp-Bnp9fN0M.js";import"./SVGIconBase-C4fKu3m4.js";import"./Link-D93Tauvt.js";import"./RollUpSimple-hFWQoXO7.js";import"./Payments-DPL7EKgO.js";import"./TwitterIcon-Dul1GJJZ.js";import"./ArrowRight-CzLQOgJz.js";import"./CheckCircleFilled-DFjBzG3O.js";import"./Close-B_dKNFHZ.js";import"./Copy-ZeHugg_G.js";import"./MediumIcon-oFKoJmOG.js";import"./EspressoLogo-DKYN6oXw.js";import"./EspressoLogoAndTitle-CQFDawcb.js";import"./Menu-DvFyVqos.js";import"./SearchGlass-BRiFJj4j.js";import"./XIcon-G3sIz8-S.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
