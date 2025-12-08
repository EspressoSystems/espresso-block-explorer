import{j as o}from"./iframe-CvdxTlUs.js";import{D as m}from"./loading_provider-Cmr501Z2.js";import"./date_time_formatters_provider-BKuJ0hEW.js";import"./locale_provider-Dxagrfa_.js";import"./page_path_provider-YGSPONyz.js";import"./now_provider-Bt5H53_t.js";import"./number_formatters_provider-D6bXYiGi.js";import"./path_resolver_provider-CjPcJbFk.js";import{g as i,s}from"./data_table_shared-BuJwngwM.js";import"./blocks-l6gLalHZ.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-BsybTLr0.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CXCGEuUy.js";import"./index-CVOp5-IZ.js";import"./index-CWvyjRcX.js";import"./client-CUWSojTA.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-CniyB1k2.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-Bit9Zxgp.js";import"./copy_hex-DWphJjHq.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-D0jzV1TE.js";import"./higher_order-D3cZvTNS.js";import"./check_circle_filled-DxQNnYSi.js";import"./svg_icon_base-CPzfBOG-.js";import"./copy-D9JuLAn3.js";/* empty css               */import"./date_time_text-Ts-vL5DY.js";import"./hex_text-Ca8eNDSv.js";import"./number_text-C6OVBCh4.js";import"./data_table-8sqNDofv.js";import"./text-CEhLEmI-.js";import"./typography-CiO7wglO.js";import"./chevron_up-D6bEtNGN.js";import"./link-XNPG_srd.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
