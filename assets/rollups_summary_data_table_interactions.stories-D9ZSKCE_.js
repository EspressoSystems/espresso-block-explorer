import{j as o}from"./iframe-D8Xp_xun.js";import{D as e}from"./LoadingProvider-D2cYfIgs.js";import"./DateTimeFormattersProvider-Bs-k3ShI.js";import"./LocaleProvider-HRtypQVb.js";import"./PagePathProvider-BwB57U9a.js";import"./NowProvider-CfKugIy7.js";import"./NumberFormattersProvider-C5Ud-AgN.js";import"./PathResolverProvider-BDnGbYv1.js";import{g as m,s as i}from"./data_table_shared-BSJ7tDUH.js";import{m as p,i as s}from"./functional-By_9lidy.js";import{a as n}from"./RollUpsSummaryDataTable-B_QFY4Ni.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./react.esm-BS51rXa5.js";import"./index-CyXMnPlm.js";import"./index-CrEpRO5z.js";import"./client-DGN3IcB0.js";import"./SkeletonContent-ClpcfR_p.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-B7BvvFcg.js";import"./Text-BU7JBOLk.js";import"./DataTable-i2rBpOeA.js";import"./typography-BDqn6gU5.js";import"./higher_order-B-N0AM-V.js";import"./ChevronUp-CTI4NFpV.js";import"./SVGIconBase-CDuc6DRM.js";import"./Link-C_jYa4UB.js";import"./RollUpSimple-BmMah95M.js";import"./Payments-B2-RwrIG.js";import"./TwitterIcon-DNy660ME.js";import"./ArrowRight-CvgJTdjh.js";import"./CheckCircleFilled-BCdMj2IR.js";import"./Close-DqAAiijd.js";import"./Copy-D-xoe-Q-.js";import"./MediumIcon-BPzGarRN.js";import"./EspressoLogo-BhHjUeso.js";import"./EspressoLogoAndTitle-DxZcITJ_.js";import"./Menu-DHiEZ-Q_.js";import"./SearchGlass-DHYaZ1FV.js";import"./XIcon-VAcO2roK.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
