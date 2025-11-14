import{j as o}from"./iframe-Dv6htQ23.js";import{D as e}from"./LoadingProvider-CRv47c_T.js";import"./DateTimeFormattersProvider-C5t6XUcQ.js";import"./LocaleProvider-2MskVwwW.js";import"./PagePathProvider-CMXtbgHw.js";import"./NowProvider-CUEytW_R.js";import"./NumberFormattersProvider-B9KzUGwo.js";import"./PathResolverProvider-DO2OIcGK.js";import{g as m,s as i}from"./data_table_shared-Cv0ycRZ7.js";import{m as p,i as s}from"./functional-Cgf59ne2.js";import{a as n}from"./RollUpsSummaryDataTable-UzwtZMXk.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-DzhUo7F1.js";import"./index-DXoJfKfG.js";import"./index-DIxc3OCG.js";import"./client-CpU2PEmD.js";import"./SkeletonContent-BQG7cvXG.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-Dj8iVxLU.js";import"./Text-BU7JBOLk.js";import"./DataTable-vr5o8hAd.js";import"./typography-CgR0bGry.js";import"./higher_order-C7N0yVzV.js";import"./ChevronUp-BTRfvUtz.js";import"./SVGIconBase-DcFMrokn.js";import"./Link-DL0PZX4F.js";import"./RollUpSimple-C0tKUwyT.js";import"./Payments-BEmi0p41.js";import"./TwitterIcon-CCbVWpL1.js";import"./ArrowRight-BlFCq5et.js";import"./CheckCircleFilled-CplNTaXF.js";import"./Close-DjPU0pX3.js";import"./Copy-Cg0Q6oFM.js";import"./MediumIcon-yluBc2KW.js";import"./EspressoLogo-CdqU9i4N.js";import"./EspressoLogoAndTitle-CkyvWi-T.js";import"./Menu-DhAeZjGw.js";import"./SearchGlass-CtpKzB4B.js";import"./XIcon-DsQmFlqs.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
