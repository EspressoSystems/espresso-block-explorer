import{j as o}from"./iframe-DIKNrIIb.js";import{D as m}from"./loading_provider-Dn9ytlaz.js";import"./date_time_formatters_provider-DhcWWpu8.js";import"./locale_provider-DYOAFLcG.js";import"./page_path_provider-B1N-ENWh.js";import"./now_provider-DNU3NT7E.js";import"./number_formatters_provider-CoB2HbbC.js";import"./path_resolver_provider-D_k7zmI5.js";import{g as i,s}from"./data_table_shared-CgHw2KBb.js";import"./blocks-D62ayDG_.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-D8YqMGoK.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-PYvwRhAE.js";import"./index-B1u9hlBx.js";import"./index-C8ROo_QO.js";import"./client-Cgb01xwx.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-DoayltBs.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CVlm-gPG.js";import"./copy_hex-zR5ZV97x.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-DrvH4bvD.js";import"./higher_order-CERhs-Yx.js";import"./check_circle_filled-B7jxOVSh.js";import"./svg_icon_base-CJsibPKU.js";import"./copy-CnbsWkwa.js";/* empty css               */import"./date_time_text-Di9xHhdz.js";import"./hex_text-C5T8OYp6.js";import"./number_text-C_D0_0Sh.js";import"./data_table-D7kIY5bn.js";import"./text-CEhLEmI-.js";import"./typography-C-u2xTwd.js";import"./chevron_up-BShDt5bd.js";import"./link-BA2MO7y4.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
