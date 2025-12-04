import{j as o}from"./iframe-D8Xp_xun.js";import{D as m}from"./LoadingProvider-D2cYfIgs.js";import"./DateTimeFormattersProvider-Bs-k3ShI.js";import"./LocaleProvider-HRtypQVb.js";import"./PagePathProvider-BwB57U9a.js";import"./NowProvider-CfKugIy7.js";import"./NumberFormattersProvider-C5Ud-AgN.js";import"./PathResolverProvider-BDnGbYv1.js";import{g as i,s}from"./data_table_shared-BSJ7tDUH.js";import"./blocks-DSOY1HQB.js";import{P as p}from"./nodes-TxP0qWmy.js";import{m as n,i as l}from"./functional-By_9lidy.js";import{B as c}from"./BlockSummaryDataTable-6b3YX-Bb.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./react.esm-BS51rXa5.js";import"./index-CyXMnPlm.js";import"./index-CrEpRO5z.js";import"./client-DGN3IcB0.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./SkeletonContent-ClpcfR_p.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-BltvAO_Y.js";import"./CopyHex-BLDyQRsm.js";import"./array_buffer-CXxOH-jd.js";import"./CopyButton-BhgKxyZz.js";import"./higher_order-B-N0AM-V.js";import"./CheckCircleFilled-BCdMj2IR.js";import"./SVGIconBase-CDuc6DRM.js";import"./Copy-D-xoe-Q-.js";/* empty css               */import"./DateTimeText-BZPG7YWn.js";import"./HexText-BZ632ph6.js";import"./NumberText-B7BvvFcg.js";import"./DataTable-i2rBpOeA.js";import"./Text-BU7JBOLk.js";import"./typography-BDqn6gU5.js";import"./ChevronUp-CTI4NFpV.js";import"./Link-C_jYa4UB.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    blockSummaries: blockSummaries
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
}`,...r.parameters?.docs?.source}}};const st=["Interactions"];export{r as Interactions,st as __namedExportsOrder,it as default};
