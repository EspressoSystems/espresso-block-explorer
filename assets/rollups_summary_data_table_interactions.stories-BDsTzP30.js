import{j as o}from"./iframe-BYhJ0elB.js";import{D as e}from"./LoadingProvider-Bn4-uxSH.js";import"./DateTimeFormattersProvider-D1BWIJEB.js";import"./LocaleProvider-DStRSijF.js";import"./PagePathProvider-nynPDlzk.js";import"./NowProvider-DPFdN-s-.js";import"./NumberFormattersProvider-BlItbZB7.js";import"./PathResolverProvider-CsgTwCpv.js";import{g as m,s as i}from"./data_table_shared-BIiFY9om.js";import{m as p,i as s}from"./functional-By_9lidy.js";import{a as n}from"./RollUpsSummaryDataTable-B80r7XQp.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./react.esm-BNO_F-p3.js";import"./index-iiudyRW9.js";import"./index-B_8YGfN4.js";import"./client-Djd8YNzz.js";import"./SkeletonContent-Ba_gn-Vd.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BsD_8CBR.js";import"./Text-BU7JBOLk.js";import"./DataTable-Bsd52MkK.js";import"./typography-C9lmU0CM.js";import"./higher_order-CiFIqkYR.js";import"./ChevronUp-BTdUourD.js";import"./SVGIconBase-aGBMO4fP.js";import"./Link-CRkn67I4.js";import"./RollUpSimple-B_EcZasi.js";import"./Payments-PUYEGv5h.js";import"./TwitterIcon-BxQrwveJ.js";import"./ArrowRight-CdQE6Vdq.js";import"./CheckCircleFilled-BTQ9yhTR.js";import"./Close-CMmUJDGo.js";import"./Copy-B8g8a5_A.js";import"./MediumIcon-DKHlDRtH.js";import"./EspressoLogo-Bfy1xbVf.js";import"./EspressoLogoAndTitle-BTinMqNr.js";import"./Menu-CF49AHer.js";import"./SearchGlass-D51lCh_Z.js";import"./XIcon-DKvTYBsW.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
