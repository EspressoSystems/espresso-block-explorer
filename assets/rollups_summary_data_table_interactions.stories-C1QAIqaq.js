import{j as o}from"./iframe-C4ZPvz3S.js";import{D as e}from"./LoadingProvider-C0CMoad9.js";import"./DateTimeFormattersProvider-umfK80_V.js";import"./LocaleProvider-Ifjl9SJa.js";import"./PagePathProvider-By61cyAL.js";import"./NowProvider-Bpd3RyKH.js";import"./NumberFormattersProvider-SZx-qAnO.js";import"./PathResolverProvider-CTtpeaKW.js";import{g as m,s as i}from"./data_table_shared-DjG-norJ.js";import{m as p,i as s}from"./functional-g5wG3Azh.js";import{a as n}from"./RollUpsSummaryDataTable-jPzM3cKa.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BaPllKBR.js";import"./index-B5j2zDE0.js";import"./index-7F0X8HIb.js";import"./client-CDbnNTMK.js";import"./SkeletonContent-vrEAX-5I.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-B9xVU4B6.js";import"./Text-BU7JBOLk.js";import"./DataTable-DibrG-zA.js";import"./typography-CZegUgq3.js";import"./higher_order-bNpIPqEX.js";import"./ChevronUp-D8FN3IKk.js";import"./SVGIconBase-D1Jn9W5J.js";import"./Link-BCIlkTlj.js";import"./RollUpSimple-C0eVvwUD.js";import"./Payments-Bkzm7auo.js";import"./TwitterIcon-KeielYHi.js";import"./ArrowRight-DMFC7W3f.js";import"./CheckCircleFilled-BwZlx9EF.js";import"./Close-19Nz6FFy.js";import"./Copy-DJRo9pdy.js";import"./MediumIcon-q2n1cVnx.js";import"./EspressoLogo-Bel_FOei.js";import"./EspressoLogoAndTitle-BrbEQJTK.js";import"./Menu-C8aAyR5S.js";import"./SearchGlass-vtidu_o4.js";import"./XIcon-Dz4xIEXl.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
