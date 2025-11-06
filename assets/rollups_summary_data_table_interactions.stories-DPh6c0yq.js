import{j as o}from"./iframe-CoIItnDg.js";import{D as e}from"./LoadingProvider-D3gToPRF.js";import"./DateTimeFormattersProvider-NK-Emwp_.js";import"./LocaleProvider-DjGseKT_.js";import"./PagePathProvider-Cds9E7Bf.js";import"./NowProvider-CYvyuQeG.js";import"./NumberFormattersProvider-DRR430ge.js";import"./PathResolverProvider-DDmd5dVN.js";import{g as m,s as i}from"./data_table_shared-_SaJl4AC.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-BJJ_vKc3.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-DKJ9aFgG.js";import"./index-D2bnl3IT.js";import"./index-BDUJMa5u.js";import"./client-DQRjVC2q.js";import"./SkeletonContent-B_bussuS.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-CnoQTjHV.js";import"./Text-BU7JBOLk.js";import"./DataTable-D3Ys1d5h.js";import"./typography-D27EwMV7.js";import"./higher_order-CRWKtA4N.js";import"./ChevronUp-83aa6e5i.js";import"./SVGIconBase-CsFpHk-L.js";import"./Link-DaDpAacQ.js";import"./RollUpSimple-DkcIvZvy.js";import"./Payments-B-fwyCp_.js";import"./TwitterIcon-BKIwKnV4.js";import"./ArrowRight-CC_tYSrh.js";import"./CheckCircleFilled-C3pP6zIZ.js";import"./Close-CTtcwE2T.js";import"./Copy-BWOcw-FF.js";import"./MediumIcon-BKrVNlDP.js";import"./EspressoLogo-CMKQD5wF.js";import"./EspressoLogoAndTitle-C0McoEXP.js";import"./Menu-CqLApyom.js";import"./SearchGlass-Bn78Bceq.js";import"./XIcon-DVzhflbr.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
