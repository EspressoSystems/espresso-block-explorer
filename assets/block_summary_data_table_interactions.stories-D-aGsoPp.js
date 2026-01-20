import{j as o}from"./iframe-B5yazBMa.js";import{g as m,s as i}from"./data_table_shared-CsXKyFGc.js";import{D as s}from"./data_provider-CBESNSYd.js";import"./blocks-CTgVmMXl.js";import{P as n}from"./nodes-9I9c2iOF.js";import{m as p,i as l}from"./functional-DT4GooI6.js";import{B as c}from"./block_summary_data_table-QASnDvxx.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BxvuRqt7.js";import"./index-BxJ8R_BA.js";import"./index-BF6SAvto.js";import"./client-BmhTVXFr.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./base64-_rmSu-kQ.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-STYQy_t1.js";import"./array_buffer-BGAdkDgu.js";import"./inline-VsFotXG0.js";import"./now_provider-CKP5Onif.js";import"./higher_order-BSTN8Q9z.js";import"./check_circle_filled-Cf1muq7p.js";import"./svg_icon_base-Dpg1LSL1.js";import"./copy-B-Iczg8i.js";import"./path_resolver_provider-BIv70dJ5.js";import"./data_table-TyxNtaAu.js";import"./text-CEhLEmI-.js";import"./chevron_up-BDq0EKiF.js";import"./skeleton_content-Di70z-0k.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DT6mR0is.js";import"./number_formatters_provider-B-XsBDCo.js";import"./locale_provider-BWInepqb.js";import"./date_time_text-Dt7jas3i.js";import"./date_time_formatters_provider-BxCsegdJ.js";import"./hex_text-5RPqy6El.js";/* empty css               */import"./number_text-B0ClmNgK.js";import"./link-Dxs4z83q.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
