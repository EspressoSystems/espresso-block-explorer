import{j as o}from"./iframe-MDHi5BtY.js";import{D as e}from"./LoadingProvider-CWKs1OKS.js";import"./DateTimeFormattersProvider-CpgfAdO1.js";import"./LocaleProvider-C_FH1fdc.js";import"./PagePathProvider-CQM9bELx.js";import"./NowProvider-CcJI5I22.js";import"./NumberFormattersProvider-DXmL9zdB.js";import"./PathResolverProvider-BcSX6lnW.js";import{g as m,s as i}from"./data_table_shared-BVu_lsgo.js";import{m as p,i as s}from"./functional-45VDB5x3.js";import{a as n}from"./RollUpsSummaryDataTable-D1bUKuFL.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-Bmorjp6Y.js";import"./index-Bu6H0fX7.js";import"./index-Dx45Pk4I.js";import"./client-CEW48UON.js";import"./SkeletonContent-3WrbC6qB.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BIzYnAeN.js";import"./Text-BU7JBOLk.js";import"./DataTable-Bt6wqaf5.js";import"./typography-DGJbNoek.js";import"./higher_order-BL5UuIFh.js";import"./ChevronUp-BWie7kFO.js";import"./SVGIconBase-CcReponG.js";import"./Link-ImtWbzCq.js";import"./RollUpSimple-DOQs1CGr.js";import"./Payments-Dyp_xx1g.js";import"./TwitterIcon-CsDkLwgK.js";import"./ArrowRight-BzQDOQLs.js";import"./CheckCircleFilled-BxcF7Twl.js";import"./Close-BY8K3ajJ.js";import"./Copy-C2kKIXDZ.js";import"./MediumIcon-DRfa-aqQ.js";import"./EspressoLogo-BnZfPAja.js";import"./EspressoLogoAndTitle-ByRcKIjQ.js";import"./Menu-Dmjk0FUI.js";import"./SearchGlass-Byj9l7yz.js";import"./XIcon-DVmVjpf0.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
