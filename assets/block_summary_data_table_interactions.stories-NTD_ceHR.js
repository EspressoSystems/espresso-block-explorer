import{j as o}from"./iframe-BwY8Nc_o.js";import{g as m,s as i}from"./data_table_shared-B_KEi0Aq.js";import{D as s}from"./data_provider-BIkZvgj5.js";import"./blocks-Dw_RhIDq.js";import{P as p}from"./nodes-BcMKYiFz.js";import{m as n,i as l}from"./functional-DsFqNm-o.js";import{B as c}from"./block_summary_data_table-DcHtQ7RF.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Dexxyoa5.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./client-BxCpvd2i.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./string-BsSBvYb_.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./base64-C9eISNYa.js";import"./missing_element_error-BOXFIEXu.js";import"./skeleton_content-2CbNU9lX.js";import"./copy_hex-Dp5TMCxl.js";import"./array_buffer-OWUzmdpG.js";import"./inline-B6x12Za0.js";import"./now_provider--GGOYw_8.js";import"./higher_order-CDuDe3l-.js";import"./check_circle_filled-8SKb6LCa.js";import"./svg_icon_base-C4H5d3RL.js";import"./copy-CrkfaOdj.js";import"./path_resolver_provider-Ty5NTk7B.js";import"./data_table-B2ZnAtti.js";import"./text-CEhLEmI-.js";import"./typography-PELJ4Pi9.js";import"./chevron_up-BWu4GSwW.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CzTF4zt-.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";import"./date_time_text-B7XZh9vE.js";import"./date_time_formatters_provider-DyEL5Gtx.js";import"./hex_text-SnO3_FxC.js";/* empty css               */import"./number_text-v_ckRp1n.js";import"./link-D1QpCoYu.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),mt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const it=["Interactions"];export{r as Interactions,it as __namedExportsOrder,mt as default};
