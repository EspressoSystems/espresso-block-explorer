import{j as o}from"./iframe-CsosU7ok.js";import{D as e}from"./LoadingProvider-AxA0aNAd.js";import"./DateTimeFormattersProvider-BofVQaY6.js";import"./LocaleProvider-CtIKevMd.js";import"./PagePathProvider-smkZoFme.js";import"./NowProvider-fe9o8zdM.js";import"./NumberFormattersProvider-BqBKZweo.js";import"./PathResolverProvider-DVBKdtu_.js";import{g as m,s as i}from"./data_table_shared-BkwotoFJ.js";import{m as p,i as s}from"./functional-45VDB5x3.js";import{a as n}from"./RollUpsSummaryDataTable-DJ28SqKl.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-HXUCLrtK.js";import"./index-tYrwqES5.js";import"./index-BQffFVGz.js";import"./client-CEXsb7e4.js";import"./SkeletonContent-CB_9e_94.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-mFShU_q1.js";import"./Text-BU7JBOLk.js";import"./DataTable-BfPsgOJ2.js";import"./typography-DX4Zo0Oa.js";import"./higher_order-DCgqxpyS.js";import"./ChevronUp-8Q-iejUM.js";import"./SVGIconBase-DLBQdslh.js";import"./Link-Bx84dcg2.js";import"./RollUpSimple-BeMkoTu1.js";import"./Payments-CoKnyUm5.js";import"./TwitterIcon-BtZtkQ17.js";import"./ArrowRight-CvTXYKiy.js";import"./CheckCircleFilled-CUm5i6Tt.js";import"./Close-C5i8Q5Io.js";import"./Copy-oqk4lSc-.js";import"./MediumIcon-_xR99Btw.js";import"./EspressoLogo-Cb_xAmPy.js";import"./EspressoLogoAndTitle-DzjT5-iJ.js";import"./Menu-CiMW3Lqg.js";import"./SearchGlass-BWeOul3U.js";import"./XIcon-D9EF8Ho5.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
