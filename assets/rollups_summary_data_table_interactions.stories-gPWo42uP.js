import{j as o}from"./iframe-JNS3S7eL.js";import{D as m}from"./LoadingProvider-jaO_huAJ.js";import"./DateTimeFormattersProvider-Bu6s_REn.js";import"./LocaleProvider-DYWRrg4P.js";import"./PagePathProvider-DcxjeYx6.js";import"./NowProvider-DrewU4Ns.js";import"./NumberFormattersProvider-DDrkjpLU.js";import"./PathResolverProvider-kVM6rfVI.js";import{g as e,s as i}from"./data_table_shared-Du7H94Yx.js";import{m as p,i as s}from"./functional-BkuSRiGx.js";import{a as n}from"./RollUpsSummaryDataTable-CFChgbHM.js";import"./preload-helper-PPVm8Dsz.js";import"./functional_async-BusT9-bd.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-Cxr8OeQ2.js";import"./index--b_OZNDl.js";import"./index-D6BUHfV8.js";import"./client-Bvy7Yn_p.js";import"./SkeletonContent-DWd7u_gj.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./NumberText-BRYtpqXm.js";import"./Text-BU7JBOLk.js";import"./DataTable-Cue0kbpb.js";import"./typography-DT5TFJ0I.js";import"./higher_order-BlyC2PwC.js";import"./ChevronUp-BHo9klre.js";import"./SVGIconBase-CjDAVVkj.js";import"./Link-C5AwkEJv.js";import"./RollUpSimple-C8cPNaTh.js";import"./Payments-D7P7IBrW.js";import"./TwitterIcon-P2qPoUmz.js";import"./ArrowRight-CDgyJp42.js";import"./CheckCircleFilled-DXpsHxW-.js";import"./Close-j9dIY41L.js";import"./Copy-k9Z_1ofE.js";import"./MediumIcon-BdGml5Nc.js";import"./EspressoLogo-CwWMDGOV.js";import"./EspressoLogoAndTitle-CRtfem_q.js";import"./Menu-BMEHgUR7.js";import"./SearchGlass-CT3PFoVH.js";import"./XIcon-rFlYnqT6.js";const l=t=>o.jsx(m.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),ot={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const mt=["Interactions"];export{r as Interactions,mt as __namedExportsOrder,ot as default};
