import{j as o}from"./iframe-ChMM8fie.js";import{g as m,s as i}from"./data_table_shared-D10kuCBF.js";import{D as s}from"./data_provider-DipucN8t.js";import"./blocks-CTgVmMXl.js";import{P as n}from"./nodes-9I9c2iOF.js";import{m as p,i as l}from"./functional-DT4GooI6.js";import{B as c}from"./block_summary_data_table-6icZtxRX.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CDELKqQ0.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./client-laTrBQ9W.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./base64-_rmSu-kQ.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-DMSQJd33.js";import"./array_buffer-BGAdkDgu.js";import"./inline-C5_Tbt8A.js";import"./now_provider-CCB05c4h.js";import"./higher_order-BDzlKa4m.js";import"./check_circle_filled-C0-R1RGO.js";import"./svg_icon_base-CS1Nu1nM.js";import"./copy-DOwzo494.js";import"./path_resolver_provider-Bi7OwYmA.js";import"./data_table-BhlvqEva.js";import"./text-CEhLEmI-.js";import"./chevron_up-4QltwyBf.js";import"./skeleton_content-D_9h32no.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-BCct5yUn.js";import"./number_formatters_provider-CudGGieU.js";import"./locale_provider--Ln2ac7i.js";import"./date_time_text-CsqteGv_.js";import"./date_time_formatters_provider-BWsAdsOr.js";import"./hex_text-DiwkJ0fA.js";/* empty css               */import"./number_text-CahUOGB6.js";import"./link-Cs7jL8in.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
