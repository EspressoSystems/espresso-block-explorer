import{j as o}from"./iframe-6sDIVuv1.js";import{D as e}from"./LoadingProvider-CrTsTokN.js";import"./DateTimeFormattersProvider-B9ptiKJK.js";import"./LocaleProvider-qvoseI_m.js";import"./PagePathProvider-DXgMaDUe.js";import"./NowProvider-9_TLGQLi.js";import"./NumberFormattersProvider-qTTfMxSz.js";import"./PathResolverProvider-BI3bDQHR.js";import{g as m,s as i}from"./data_table_shared-SYep7v3M.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-BszqsmEg.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-D3FClK0z.js";import"./index-gfuw5-ba.js";import"./index-CWZnnTq9.js";import"./client-CuyKNz1O.js";import"./SkeletonContent-D1xueSVF.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-DmOrh8vf.js";import"./Text-BU7JBOLk.js";import"./DataTable-b7uLggST.js";import"./typography-C-j7u7QD.js";import"./higher_order-CqVlj1z5.js";import"./ChevronUp-DH0CVnee.js";import"./SVGIconBase-aCvu50bH.js";import"./Link-echROmSn.js";import"./RollUpSimple-DX2hCxSX.js";import"./Payments-BwoVtcK6.js";import"./TwitterIcon-Cqj1k-9c.js";import"./ArrowRight-Di7tRPK-.js";import"./CheckCircleFilled-BE3oJZM6.js";import"./Close-C4W1PdfJ.js";import"./Copy-DEIJ49QX.js";import"./MediumIcon-wTEeXaAT.js";import"./EspressoLogo-BH4bFDO-.js";import"./EspressoLogoAndTitle-zRq6emkA.js";import"./Menu-BzGBi-tp.js";import"./SearchGlass-CY4dlqG8.js";import"./XIcon-W3RxYLy9.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
