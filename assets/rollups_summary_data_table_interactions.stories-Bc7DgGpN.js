import{j as o}from"./iframe-xPpTS9dO.js";import{D as e}from"./LoadingProvider-DEoBX8YF.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PagePathProvider-6arKryxS.js";import"./NowProvider-Clo83YBl.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./PathResolverProvider-XKUKdvE1.js";import{g as m,s as i}from"./data_table_shared-Cdi28WET.js";import{m as p,i as s}from"./functional-CJQfVQrn.js";import{a as n}from"./RollUpsSummaryDataTable-BIgRP2by.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C-7xwL5g.js";import"./index-Be3GcqnB.js";import"./index-Du7Eaecz.js";import"./client-BCC1VFLG.js";import"./SkeletonContent-D5S015Dw.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BI77pf0U.js";import"./Text-BU7JBOLk.js";import"./DataTable-OQRlJXH-.js";import"./typography-DOsyjWqi.js";import"./higher_order-cEYzRmR2.js";import"./ChevronUp-BtVhpL9q.js";import"./SVGIconBase-DRQr1LH4.js";import"./Link-8iVPWXNU.js";import"./RollUpSimple-CBzTGYbQ.js";import"./Payments-DE_UIBTP.js";import"./TwitterIcon-BI5uZl3H.js";import"./ArrowRight-Ccowj6fL.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./Close-xYcMDWmd.js";import"./Copy-Bg1Dzap1.js";import"./MediumIcon-D6a_Yh8K.js";import"./EspressoLogo-BJWv9diF.js";import"./EspressoLogoAndTitle-D1feanXk.js";import"./Menu-CD52jHFq.js";import"./SearchGlass-DY-A1JPh.js";import"./XIcon-xEQT8-yh.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
