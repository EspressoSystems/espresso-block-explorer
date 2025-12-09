import{j as o}from"./iframe-BhfBVhTN.js";import{D as m}from"./loading_provider-DuSSXXi4.js";import"./date_time_formatters_provider-DE6pqwEE.js";import"./locale_provider-yL7RjglX.js";import"./page_path_provider-0leIx6sS.js";import"./now_provider-BZ0gf5-c.js";import"./number_formatters_provider-BXMu2AYo.js";import"./path_resolver_provider-B_VwRBzs.js";import{g as i,s}from"./data_table_shared-DX4VM112.js";import"./blocks-uuuFvVC0.js";import{P as p}from"./nodes-BPkpfAJX.js";import{m as n,i as l}from"./functional-CSHHasco.js";import{B as c}from"./block_summary_data_table-DsAXyb42.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CYZ_RHTj.js";import"./index-BieZ3BMC.js";import"./index-DGUlzzb1.js";import"./client-CjB65kfM.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-_MaUAuT1.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-B-w3Vx6j.js";import"./copy_hex-Byt9Vsvp.js";import"./array_buffer-CekOYGOQ.js";import"./copy_button-Cg3_7pgA.js";import"./higher_order-D_YdbROE.js";import"./check_circle_filled-qylX-1Qt.js";import"./svg_icon_base-BmNIBSz5.js";import"./copy-DnRvsYB4.js";/* empty css               */import"./date_time_text-39KZPkCE.js";import"./hex_text-BgbDwq-2.js";import"./number_text-ClR_i9Ow.js";import"./data_table-BxkFH38i.js";import"./text-CEhLEmI-.js";import"./typography-ZJRa9Te0.js";import"./chevron_up-WX9KDKGI.js";import"./link-43hKML25.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
