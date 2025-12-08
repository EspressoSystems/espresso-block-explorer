import{j as o}from"./iframe-C-FY04Dt.js";import{D as m}from"./loading_provider-DnAejYMo.js";import"./date_time_formatters_provider-B-vZWfoJ.js";import"./locale_provider-BEfBJ-G2.js";import"./page_path_provider-BLt1qKxU.js";import"./now_provider-CdVpNbMd.js";import"./number_formatters_provider-Cj_9aXLE.js";import"./path_resolver_provider-DSNRN_OB.js";import{g as i,s}from"./data_table_shared-BzxzO9_U.js";import"./blocks-rY6BnBSU.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-ccSz8aIP.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-mJyUse9Y.js";import"./index-1NFWsmuN.js";import"./index-CGPMUsLj.js";import"./client-DG11ClFy.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-BTav3GN9.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DU7EZjAo.js";import"./copy_hex-CoDWbvjo.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-OfjfjW38.js";import"./higher_order-BZ-GvUz5.js";import"./check_circle_filled-Dw0Z14xA.js";import"./svg_icon_base-CdfmCcAh.js";import"./copy-ClB3np3W.js";/* empty css               */import"./date_time_text-h7ay6K-e.js";import"./hex_text-U20HYgdn.js";import"./number_text-Dfg5k-Tp.js";import"./data_table-DmCU9zKE.js";import"./text-CEhLEmI-.js";import"./typography-DKmexolR.js";import"./chevron_up-Ke2o9v55.js";import"./link-B72a8BNx.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
