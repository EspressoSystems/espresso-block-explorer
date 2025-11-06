import{j as o}from"./iframe-DbeSBdx1.js";import{D as e}from"./LoadingProvider-CYIEarZO.js";import"./DateTimeFormattersProvider-VwnNOFLX.js";import"./LocaleProvider-ShZNSPZC.js";import"./PagePathProvider-DHZuw_Lh.js";import"./NowProvider-CR5LhUAr.js";import"./NumberFormattersProvider-Cp-tTNjA.js";import"./PathResolverProvider-BbMkGmpS.js";import{g as m,s as i}from"./data_table_shared-DzOYbbyu.js";import{m as p,i as s}from"./functional-BkuSRiGx.js";import{a as n}from"./RollUpsSummaryDataTable-Bo-Xhgal.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-VBIieVXa.js";import"./index-CvOsjU90.js";import"./index-robzuinq.js";import"./client-DnChbwRi.js";import"./SkeletonContent-DJQ_hYxE.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BKqqWlFj.js";import"./Text-BU7JBOLk.js";import"./DataTable-2T5KL_Sh.js";import"./typography-V6XS-j0Y.js";import"./higher_order-B0Ghit15.js";import"./ChevronUp-BddxVJOP.js";import"./SVGIconBase-BoqfZkjB.js";import"./Link-CJCZSdo0.js";import"./RollUpSimple-DHOAjFjp.js";import"./Payments-rpU8NsNX.js";import"./TwitterIcon-C7j02xME.js";import"./ArrowRight-YoLsakZ7.js";import"./CheckCircleFilled-CeA80Vz7.js";import"./Close-CDk4xiUX.js";import"./Copy-bGDnt_eA.js";import"./MediumIcon-C0IArC21.js";import"./EspressoLogo-BwzdQaHR.js";import"./EspressoLogoAndTitle-CxphK9MU.js";import"./Menu-BZsNYXoE.js";import"./SearchGlass-FJZUrUlL.js";import"./XIcon-C2fhLDE4.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
