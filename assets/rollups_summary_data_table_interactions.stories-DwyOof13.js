import{j as o}from"./iframe-CKCSKCZk.js";import{D as e}from"./LoadingProvider-IZAf8NZo.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PagePathProvider-Bck-CLYd.js";import"./NowProvider-DDm0tQ2h.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./PathResolverProvider-65y-23gj.js";import{g as m,s as i}from"./data_table_shared-Amq6ew_h.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-rovFiD-R.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BNPRQ27L.js";import"./index-DmGiuwIY.js";import"./index-DR30vb4A.js";import"./client-DX8xMgVj.js";import"./SkeletonContent-CmRaKWaw.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-3GIByMNg.js";import"./Text-BU7JBOLk.js";import"./DataTable-CSqEyAGP.js";import"./typography-BFEyteYy.js";import"./higher_order-DLiNGwX1.js";import"./ChevronUp-qUK-_iwc.js";import"./SVGIconBase-DGbb4H2y.js";import"./Link-Bn7YDIhB.js";import"./RollUpSimple-BnDJDTvU.js";import"./Payments-BGh2UMqf.js";import"./TwitterIcon-g9pHzhQS.js";import"./ArrowRight-D-g2t7xC.js";import"./CheckCircleFilled-DdPcBHVp.js";import"./Close-ClIsmZIV.js";import"./Copy-Dw0OUX71.js";import"./MediumIcon-Cplm7Qzg.js";import"./EspressoLogo-DTRd_Otf.js";import"./EspressoLogoAndTitle-CHnEWYG9.js";import"./Menu-DgeIcvwf.js";import"./SearchGlass-CfPtz_kH.js";import"./XIcon-Drff2Uzy.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
