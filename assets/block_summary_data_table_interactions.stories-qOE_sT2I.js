import{j as o}from"./iframe-DFfdKi-0.js";import{D as m}from"./loading_provider-da-Stdik.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./locale_provider-BSfkAuIP.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./number_formatters_provider-BFBcbrkA.js";import"./path_resolver_provider-DZ-5eptY.js";import{g as i,s}from"./data_table_shared-DI1tcrfp.js";import"./blocks-2SbdhCgZ.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-CH56gb_T.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-QcRRCiS6.js";import"./index-C5KUm6uC.js";import"./index-qjXQvvE7.js";import"./client-IBhBTdAB.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-CLW3IdlQ.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-D8sYOBly.js";import"./copy_hex-DAgaj9SU.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-CNhoUW5a.js";import"./higher_order-CAFNA8md.js";import"./check_circle_filled-C8KuScJK.js";import"./svg_icon_base-Bysx7lQ6.js";import"./copy-Yrm6dGhz.js";/* empty css               */import"./date_time_text-Cno5hICi.js";import"./hex_text-vhhXAAGO.js";import"./number_text-BThEIcq7.js";import"./data_table-CacNGaVF.js";import"./text-CEhLEmI-.js";import"./typography-M3pkdhb1.js";import"./chevron_up-CgozpFm6.js";import"./link-DeuX5Kmo.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
