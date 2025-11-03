import{j as o}from"./iframe-CYSVuX1x.js";import{D as e}from"./LoadingProvider-MAD86iE_.js";import"./DateTimeFormattersProvider-FXlbRvqz.js";import"./LocaleProvider-2Kr3jmsM.js";import"./PagePathProvider-BamKWudK.js";import"./NowProvider-DPht8VTo.js";import"./NumberFormattersProvider-CsE6Hjjx.js";import"./PathResolverProvider-C1EnTGtp.js";import{g as m,s as i}from"./data_table_shared-CkPiBZpT.js";import{m as p,i as s}from"./functional-BkuSRiGx.js";import{a as n}from"./RollUpsSummaryDataTable-C4jj6VjP.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-COy7Kf2c.js";import"./index-CAo0dEz9.js";import"./index-DYXE1PjN.js";import"./client-CxKbrq6X.js";import"./SkeletonContent-DODOsMVL.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BbsCt4nU.js";import"./Text-BU7JBOLk.js";import"./DataTable-D4kdQJn9.js";import"./typography-70s9wEYp.js";import"./higher_order-Go0fHGBA.js";import"./ChevronUp-CPkt7YF5.js";import"./SVGIconBase-Ce3MMpWa.js";import"./Link-CJggTGfr.js";import"./RollUpSimple-DT4jt97M.js";import"./Payments-BT53DEW9.js";import"./TwitterIcon-Bi0mNePz.js";import"./ArrowRight-Cs6YR0BL.js";import"./CheckCircleFilled-DZkxeFyd.js";import"./Close-BAM7Gsd6.js";import"./Copy-B-rad2pI.js";import"./MediumIcon-BcImOljs.js";import"./EspressoLogo-BBsJARC4.js";import"./EspressoLogoAndTitle-MOmLNcXB.js";import"./Menu-CMNXv-Ml.js";import"./SearchGlass-B6E4S89k.js";import"./XIcon-BR1Ti_7s.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
