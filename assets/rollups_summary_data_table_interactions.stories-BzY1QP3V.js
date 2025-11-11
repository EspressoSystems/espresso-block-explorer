import{j as o}from"./iframe-DemEOwrW.js";import{D as e}from"./LoadingProvider-BejkcYK5.js";import"./DateTimeFormattersProvider-DNsYUpWM.js";import"./LocaleProvider-DbdD2VEs.js";import"./PagePathProvider-D4ag8Oi_.js";import"./NowProvider-BKkkit-4.js";import"./NumberFormattersProvider-Cv2n8TIj.js";import"./PathResolverProvider-ZydTQwVi.js";import{g as m,s as i}from"./data_table_shared-BkMqSr68.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-DsMcd-Tq.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-CcxOIFVs.js";import"./index-CKhALns6.js";import"./index-D4mXpXRf.js";import"./client-BO4K9TZ6.js";import"./SkeletonContent-DQfGACWR.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-O_tSvdK5.js";import"./Text-BU7JBOLk.js";import"./DataTable-CkNXTYzH.js";import"./typography-D_5Kic_p.js";import"./higher_order-B41vOjYd.js";import"./ChevronUp-MZDMs01O.js";import"./SVGIconBase-By2Dy568.js";import"./Link-MOCELSgZ.js";import"./RollUpSimple-BYCNNXin.js";import"./Payments-BLoad0Qp.js";import"./TwitterIcon-DMxDDUr4.js";import"./ArrowRight-DaHx-4uE.js";import"./CheckCircleFilled-DUMDewi5.js";import"./Close-CacwCBpC.js";import"./Copy-Bk0N4w0I.js";import"./MediumIcon-BxzPiqqP.js";import"./EspressoLogo-gilQLBEx.js";import"./EspressoLogoAndTitle-xFtXPUCr.js";import"./Menu-DknMKI2I.js";import"./SearchGlass-BTf6vK_C.js";import"./XIcon-yvqvcNu7.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
