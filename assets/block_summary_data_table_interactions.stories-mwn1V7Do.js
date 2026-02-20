import{j as o}from"./iframe-TrusCfP7.js";import{g as m,s as i}from"./data_table_shared-Zu3kLD10.js";import{D as s}from"./data_provider-DhSR8fHD.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-C0pzUZPR.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPX_x2RN.js";import"./index-BLtf1UP9.js";import"./index-CmYdQwgm.js";import"./client-DjC4PwCD.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-DKFWK4fi.js";import"./array_buffer-DMedzaQw.js";import"./inline-CfUsX7jX.js";import"./now_provider-C1ZXEB30.js";import"./higher_order-BaXXaYUD.js";import"./check_circle_filled-BJ3ravcz.js";import"./svg_icon_base-CMA4dtm_.js";import"./copy-VY-zqqlc.js";import"./path_resolver_provider-dVkTiHR-.js";import"./data_table-kzgFRMNa.js";import"./text-CEhLEmI-.js";import"./chevron_up-ChAy-4n9.js";import"./skeleton_content-DeKZZP6m.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-1bLtn3ax.js";import"./number_formatters_provider-BjVNSDzq.js";import"./locale_provider-VmkWYhBv.js";import"./date_time_text-CeAneBD3.js";import"./date_time_formatters_provider-18E19bYy.js";import"./hex_text-BuQjJNsp.js";/* empty css               */import"./number_text-Dzzgw1-A.js";import"./link-BLgksYwu.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const mt=["Interactions"];export{r as Interactions,mt as __namedExportsOrder,et as default};
