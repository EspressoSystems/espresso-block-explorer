import{j as o}from"./iframe-B98JvFlS.js";import{g as m,s as i}from"./data_table_shared-DxW_eoZf.js";import{D as s}from"./data_provider-3-u40w_S.js";import"./blocks-DxW4BCgY.js";import{P as n}from"./nodes-DkqQpvmH.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{B as c}from"./block_summary_data_table-C4JAhsru.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bzlau9Ck.js";import"./index-DzVgPpp9.js";import"./index-Def8Sx_B.js";import"./client-CE2IJ18h.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./string-DDfX_5jt.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./base64-GdO7PHhr.js";import"./missing_element_error-BIT--q2G.js";import"./copy_hex-643USLvo.js";import"./array_buffer-D3ACJkCk.js";import"./inline-CoE879Bc.js";import"./now_provider-BOX7yRpC.js";import"./higher_order-DFW_Utmg.js";import"./check_circle_filled-BGn-E9bU.js";import"./svg_icon_base-CJ0J5j9p.js";import"./copy-Chp_emH-.js";import"./path_resolver_provider-G_S0-zyJ.js";import"./data_table-BX5e_VEt.js";import"./text-CEhLEmI-.js";import"./chevron_up-DqwUH8EF.js";import"./skeleton_content-CeIngfNJ.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DtgDpAum.js";import"./number_formatters_provider-eJntoBts.js";import"./locale_provider-YmKQyVQa.js";import"./date_time_text-DxklR_a2.js";import"./date_time_formatters_provider-L5X9Fiw0.js";import"./hex_text-D4MsPMwE.js";/* empty css               */import"./number_text-DXEYwiPL.js";import"./link-mN7KWGba.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
