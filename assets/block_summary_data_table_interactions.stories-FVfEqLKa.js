import{j as o}from"./iframe-BmS3xRbu.js";import{g as m,s as i}from"./data_table_shared-BXwyOTUZ.js";import{D as s}from"./data_provider-Bc8LLRJq.js";import"./blocks-DxW4BCgY.js";import{P as n}from"./nodes-DkqQpvmH.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{B as c}from"./block_summary_data_table-6U9km6sh.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C5ocioGz.js";import"./index-C7WTE1ec.js";import"./index-D9IcjNSq.js";import"./client-DzYR3hGn.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./string-DDfX_5jt.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./base64-GdO7PHhr.js";import"./missing_element_error-BIT--q2G.js";import"./copy_hex-BTy6ke9C.js";import"./array_buffer-D3ACJkCk.js";import"./inline-NDy6MM3u.js";import"./now_provider-N-vzDi1f.js";import"./higher_order-BcBNDTSF.js";import"./check_circle_filled-DVm_fBge.js";import"./svg_icon_base-C9vCfi1H.js";import"./copy-CjmhtO6A.js";import"./path_resolver_provider-D4kQF33W.js";import"./data_table-DQ-k_VTm.js";import"./text-CEhLEmI-.js";import"./chevron_up-D0Pz47GW.js";import"./skeleton_content-1t1_tVBp.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-PjHd0T68.js";import"./number_formatters_provider-BMOfqz6h.js";import"./locale_provider-DXJjPQek.js";import"./date_time_text-BBJvh5H4.js";import"./date_time_formatters_provider-Bq_GZuKL.js";import"./hex_text-Ck3buGva.js";/* empty css               */import"./number_text-3CvBpJ-A.js";import"./link-D0w5oTkU.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
