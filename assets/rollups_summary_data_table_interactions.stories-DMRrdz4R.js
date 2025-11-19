import{j as o}from"./iframe-BoSgNqBp.js";import{D as e}from"./LoadingProvider-CwAifW4j.js";import"./DateTimeFormattersProvider-FuJoOaA5.js";import"./LocaleProvider-f-l0Jujy.js";import"./PagePathProvider-C5stwEi3.js";import"./NowProvider-C2Sgz9rf.js";import"./NumberFormattersProvider-CsVqC7rh.js";import"./PathResolverProvider-BUhwMhFL.js";import{g as m,s as i}from"./data_table_shared-D3DghqnQ.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-B4h4U9zH.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-CFc2OBhr.js";import"./index-DIetdbzc.js";import"./index-D6cO6e_L.js";import"./client-xeh3sM4i.js";import"./SkeletonContent-B3ybZy_b.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-ojqcivk1.js";import"./Text-BU7JBOLk.js";import"./DataTable-CZg-Fv70.js";import"./typography-Dp7dq7gN.js";import"./higher_order-DFRpXnkL.js";import"./ChevronUp-6YF5iJE_.js";import"./SVGIconBase-DrKpLRmr.js";import"./Link-w70UGYEr.js";import"./RollUpSimple-Drmy7iLx.js";import"./Payments-BuRXgd_V.js";import"./TwitterIcon-kk5Hoall.js";import"./ArrowRight-Bzl1asS-.js";import"./CheckCircleFilled-C6Hg_-lA.js";import"./Close-BTjgpjar.js";import"./Copy-BbW09CJG.js";import"./MediumIcon-I28TFJPS.js";import"./EspressoLogo-CKOS3bTP.js";import"./EspressoLogoAndTitle-MB5ZeTdg.js";import"./Menu-BRYoI1zo.js";import"./SearchGlass-CrJ8fGce.js";import"./XIcon-JYl_8eeb.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
