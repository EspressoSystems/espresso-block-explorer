import{j as o}from"./iframe-FW1O3eUf.js";import{g as m,s as i}from"./data_table_shared-VaBLYEqt.js";import{D as s}from"./data_provider-BbqeYGia.js";import"./blocks-6yclG0ka.js";import{P as n}from"./nodes-B70Gne2-.js";import{m as p,i as l}from"./functional-DzI6oRAM.js";import{B as c}from"./block_summary_data_table-mAaOzcqW.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CPYV7Nbv.js";import"./index-BMEX-Xo9.js";import"./index-CHh1lDEX.js";import"./client-DR6EZN8l.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DXbf4XhX.js";import"./assert-B11BgmXM.js";import"./string-BCb2Pt7Y.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./tagged_base64-B_lPSlUf.js";import"./base64-CqV3gweX.js";import"./missing_element_error-D0dGm0KW.js";import"./copy_hex-B8Q3V8e_.js";import"./array_buffer-DFcBajus.js";import"./inline-BBMDYuCl.js";import"./now_provider-yzpWQ6ve.js";import"./higher_order-CZN8Z6mQ.js";import"./check_circle_filled-CwHJEwU6.js";import"./svg_icon_base-4ERQ15ko.js";import"./copy-CTHVe2vX.js";import"./path_resolver_provider-nbJvAjBm.js";import"./data_table-t1i8txp6.js";import"./text-CEhLEmI-.js";import"./chevron_up-B9MjSPlu.js";import"./skeleton_content-C2ZsUKe2.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-by3M3sfe.js";import"./number_formatters_provider-BUUmLBk_.js";import"./locale_provider-D1mYVGxJ.js";import"./date_time_text-CrmlPWV7.js";import"./date_time_formatters_provider-CpNhPCjr.js";import"./hex_text-C4mrH0FW.js";/* empty css               */import"./number_text-DgAnb3aC.js";import"./link-WSxXw9tq.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
