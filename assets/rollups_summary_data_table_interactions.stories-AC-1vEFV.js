import{j as o}from"./iframe-C10TK4K_.js";import{D as e}from"./LoadingProvider-C2Vxpxyu.js";import"./DateTimeFormattersProvider-BWXeBQHM.js";import"./LocaleProvider-CPWkEasf.js";import"./PagePathProvider-BIxanFJ0.js";import"./NowProvider-DSoQthLn.js";import"./NumberFormattersProvider-bgWstj_C.js";import"./PathResolverProvider-3KgqRF8i.js";import{g as m,s as i}from"./data_table_shared-BgskHxXi.js";import{m as p,i as s}from"./functional-D84nw2eW.js";import{a as n}from"./RollUpsSummaryDataTable-DolIxu_7.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BIpUmqN3.js";import"./index-ClpqAqOC.js";import"./index-CGA5JDZ-.js";import"./client-Db_ejbkt.js";import"./SkeletonContent-Zw-7Yusf.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-DiVuXGXq.js";import"./Text-BU7JBOLk.js";import"./DataTable-CSTzcUhH.js";import"./typography-CaD01Ilh.js";import"./higher_order-M1cvrOm5.js";import"./ChevronUp-CKZNGEK_.js";import"./SVGIconBase-BDaUYJC3.js";import"./Link-C3QLy9ZA.js";import"./RollUpSimple-DMJpV1GQ.js";import"./Payments-BbOaaKAu.js";import"./TwitterIcon-BizFzD8z.js";import"./ArrowRight-ZIGICra-.js";import"./CheckCircleFilled-BqeGpfaK.js";import"./Close-MrCCQkK_.js";import"./Copy-C0DrmXAF.js";import"./MediumIcon-BOVUp-zm.js";import"./EspressoLogo-BCgioX6d.js";import"./EspressoLogoAndTitle-Cxjat-HW.js";import"./Menu-DtIMfxqK.js";import"./SearchGlass-_tVo71tv.js";import"./XIcon-BiplPUD8.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
