import{j as o}from"./iframe-6qRHL8kK.js";import{D as e}from"./LoadingProvider-CiRo7IyT.js";import"./DateTimeFormattersProvider-CTAmKTvQ.js";import"./LocaleProvider-Dn-Cb6v6.js";import"./PagePathProvider-BB5_V-vn.js";import"./NowProvider-DFWj2jBI.js";import"./NumberFormattersProvider-BaYHxeOC.js";import"./PathResolverProvider-BhkdUZ3l.js";import{g as m,s as i}from"./data_table_shared-CewjWZOt.js";import{m as p,i as s}from"./functional-DfB4rlpz.js";import{a as n}from"./RollUpsSummaryDataTable-DijQUeZP.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-BvD5kqNE.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./UnimplementedError-ByG_fP0m.js";import"./react.esm-mVV27ITt.js";import"./index-DAPUY6YU.js";import"./index-JrXKFfwy.js";import"./client-BZLXbOhf.js";import"./SkeletonContent-BPdzUoF-.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-CX4omtIU.js";import"./Text-BU7JBOLk.js";import"./DataTable-CYgJuLpt.js";import"./typography-CU0Q2b4v.js";import"./higher_order-BVrk3P2P.js";import"./ChevronUp-CvbK-QV1.js";import"./SVGIconBase-A4DT5FtI.js";import"./Link-BnT3lQB9.js";import"./RollUpSimple-B5XaUZkW.js";import"./Payments-B8QxXbh9.js";import"./TwitterIcon-gTR-r0Lw.js";import"./ArrowRight-hZ-JyIot.js";import"./CheckCircleFilled-BenepkbP.js";import"./Close-Cwv1jWQX.js";import"./Copy-CZ3brQky.js";import"./MediumIcon-CkLT4fpl.js";import"./EspressoLogo-DDpNobQ0.js";import"./EspressoLogoAndTitle-BT9jlPU7.js";import"./Menu-CpkyJ5fa.js";import"./SearchGlass-BuDCMh7z.js";import"./XIcon-BSunDx6h.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
