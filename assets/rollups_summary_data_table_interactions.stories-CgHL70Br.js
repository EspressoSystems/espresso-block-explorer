import{j as o}from"./iframe-B5ACCtQe.js";import{D as e}from"./LoadingProvider-inUiJrG2.js";import"./DateTimeFormattersProvider-B5EcmP53.js";import"./LocaleProvider-CmiabapK.js";import"./PagePathProvider-CfW_IWDG.js";import"./NowProvider-Dv0I_bBi.js";import"./NumberFormattersProvider-BqP1tbDM.js";import"./PathResolverProvider-pwfQA8J8.js";import{g as m,s as i}from"./data_table_shared-BVhvnJ2i.js";import{m as p,i as s}from"./functional-BkuSRiGx.js";import{a as n}from"./RollUpsSummaryDataTable-CRT_6hHl.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BHreGMm4.js";import"./index-B_fSnr5e.js";import"./index-CKJHJ-Zn.js";import"./client-bTAg9zYX.js";import"./SkeletonContent-QgcOifyD.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-Bh585QNs.js";import"./Text-BU7JBOLk.js";import"./DataTable-DRDo8FOH.js";import"./typography-BEMjcSvZ.js";import"./higher_order-DcvTrifj.js";import"./ChevronUp-BOTvOKJH.js";import"./SVGIconBase-Dvte2yLu.js";import"./Link-V6mF5oHi.js";import"./RollUpSimple-BKZ2Rb92.js";import"./Payments-C_cEGcqo.js";import"./TwitterIcon-VvkbbGdr.js";import"./ArrowRight-BVUtRf7O.js";import"./CheckCircleFilled-BiPPd6Eq.js";import"./Close-BoWG0U8e.js";import"./Copy-F5qEbGBt.js";import"./MediumIcon-5Rc7USuJ.js";import"./EspressoLogo-Cpia_7ge.js";import"./EspressoLogoAndTitle-arrs-ojf.js";import"./Menu-r2Fxyhtr.js";import"./SearchGlass-z0Hs8Kwg.js";import"./XIcon-TrUgWusj.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
