import{j as o}from"./iframe-f2wUEmLV.js";import{D as e}from"./LoadingProvider-ByZJpGMG.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PagePathProvider-DMTB2oDq.js";import"./NowProvider-DGWfNrty.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./PathResolverProvider-DHybasnL.js";import{g as m,s as i}from"./data_table_shared-D2UBk1UU.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-BHKleWsn.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BfNgPaiw.js";import"./index-ChcI8Gvf.js";import"./index-Cd6Sl8gl.js";import"./client-9wIUT5RQ.js";import"./SkeletonContent-CqhLHFcX.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-Co9Msrjd.js";import"./Text-BU7JBOLk.js";import"./DataTable-D5ZeBsxF.js";import"./typography-BFtRVX_Y.js";import"./higher_order-DPELDOyr.js";import"./ChevronUp-CuNOEU3-.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Link-DNt4TLim.js";import"./RollUpSimple-D8T23-7j.js";import"./Payments-DmJH96s6.js";import"./TwitterIcon-DD5rPkD-.js";import"./ArrowRight-Dqagg5JO.js";import"./CheckCircleFilled-yzKlL67t.js";import"./Close-nZRoo8Me.js";import"./Copy-D321I0JD.js";import"./MediumIcon-bX0XWGVV.js";import"./EspressoLogo-Bfwc2n0e.js";import"./EspressoLogoAndTitle-DE1B3KU_.js";import"./Menu-CsNbh3p6.js";import"./SearchGlass-uxnxQV4S.js";import"./XIcon-Cqty-oAX.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
