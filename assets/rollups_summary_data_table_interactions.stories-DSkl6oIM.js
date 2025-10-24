import{j as o}from"./iframe-Cfh0eePN.js";import{D as e}from"./LoadingProvider-CKkBrFm2.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";import"./LocaleProvider-D8Kjh7eq.js";import"./PagePathProvider-DS53fVOm.js";import"./NowProvider-gH2ltRAl.js";import"./NumberFormattersProvider-BkhnvKth.js";import"./PathResolverProvider-XIbO0Y2M.js";import{g as m,s as i}from"./data_table_shared-DcWv32yv.js";import{m as p,i as s}from"./functional-CJQfVQrn.js";import{a as n}from"./RollUpsSummaryDataTable-WWjsILTh.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C7E3UGcJ.js";import"./index-Cc9aKvRX.js";import"./index-BsUSwBcT.js";import"./client-DU1do1ug.js";import"./SkeletonContent-DFSGCXCf.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BeA3jcpj.js";import"./Text-BU7JBOLk.js";import"./DataTable-BYFqHc1z.js";import"./typography-CSzJ38pA.js";import"./higher_order-kZsKjHKn.js";import"./ChevronUp-DHug100Q.js";import"./SVGIconBase-DvO4AW8t.js";import"./Link-K-5c9_v2.js";import"./RollUpSimple-Bia0-F1u.js";import"./Payments-Cd8uXtwh.js";import"./TwitterIcon-EC6fvhkT.js";import"./ArrowRight-DFftu8vA.js";import"./CheckCircleFilled-Vjq3m9Qn.js";import"./Close-3zdKA3fy.js";import"./Copy-BiMYs1cj.js";import"./MediumIcon-C1vGIasn.js";import"./EspressoLogo-COnJFFF-.js";import"./EspressoLogoAndTitle-10Uzpsox.js";import"./Menu-CkuroZ-L.js";import"./SearchGlass-CQOGxpt-.js";import"./XIcon-CUsEcQAW.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
