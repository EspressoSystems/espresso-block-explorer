import{j as o}from"./iframe-CkJJG84G.js";import{g as m,s as i}from"./data_table_shared-Bgkfz12E.js";import{D as s}from"./data_provider-BOXyJyDw.js";import"./blocks-sWDJM2B-.js";import{P as n}from"./nodes--GPtCQfL.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{B as c}from"./block_summary_data_table-0gY7KoiW.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BpJmwcuS.js";import"./index-lJVqr-aj.js";import"./index-C3BZzNqw.js";import"./client-C5DAk86I.js";import"./sleep-CW-vxfof.js";import"./monetary_value-G07G05gY.js";import"./assert-B11BgmXM.js";import"./string-DDfX_5jt.js";import"./bigint-DiV2x33h.js";import"./data-D5p7UK42.js";import"./tagged_base64-Beas1ikT.js";import"./base64-Cs6zZcIo.js";import"./missing_element_error-BIT--q2G.js";import"./copy_hex-ukHVq4oH.js";import"./array_buffer-BrH4NOGl.js";import"./inline-CYR5u-D3.js";import"./now_provider-CzEuiO7J.js";import"./higher_order-BCKgBdih.js";import"./check_circle_filled-B6Sut2lV.js";import"./svg_icon_base-B8zVWwnL.js";import"./copy-CU_l8Nbo.js";import"./path_resolver_provider-B_G0yp4x.js";import"./data_table-BiQdoL7h.js";import"./text-CEhLEmI-.js";import"./chevron_up-D9eLAgzb.js";import"./skeleton_content-CH2aYyTn.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-D3X2F5ka.js";import"./number_formatters_provider-Ch-9Dh1T.js";import"./locale_provider-D4HbO8u7.js";import"./date_time_text-NIJnJKnu.js";import"./date_time_formatters_provider-BiaU2KTa.js";import"./hex_text-CD2A5jHP.js";/* empty css               */import"./number_text-B9hdqY8d.js";import"./link-ljxhuagx.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
