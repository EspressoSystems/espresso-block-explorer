import{j as o}from"./iframe-BhfBVhTN.js";import{D as e}from"./loading_provider-DuSSXXi4.js";import"./date_time_formatters_provider-DE6pqwEE.js";import"./locale_provider-yL7RjglX.js";import"./page_path_provider-0leIx6sS.js";import"./now_provider-BZ0gf5-c.js";import"./number_formatters_provider-BXMu2AYo.js";import"./path_resolver_provider-B_VwRBzs.js";import{g as m,s as i}from"./data_table_shared-DX4VM112.js";import"./blocks-uuuFvVC0.js";import{P as s}from"./nodes-BPkpfAJX.js";import{m as n,i as p}from"./functional-CSHHasco.js";import"./string-DO2hqbbz.js";import"./validator-CiTB3PK8.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-BEMi8MSN.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CYZ_RHTj.js";import"./index-BieZ3BMC.js";import"./index-DGUlzzb1.js";import"./client-CjB65kfM.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-CWJZxHZ9.js";import"./array_buffer-CekOYGOQ.js";import"./base64-Dpbg5EzT.js";import"./url-D2S2nX8d.js";import"./skeleton_content-_MaUAuT1.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-Cg3_7pgA.js";import"./higher_order-D_YdbROE.js";import"./check_circle_filled-qylX-1Qt.js";import"./svg_icon_base-BmNIBSz5.js";import"./copy-DnRvsYB4.js";/* empty css               */import"./date_time_text-39KZPkCE.js";import"./number_text-ClR_i9Ow.js";import"./tagged_base64_text-9vqYyYGM.js";import"./text-CEhLEmI-.js";import"./data_table-BxkFH38i.js";import"./typography-ZJRa9Te0.js";import"./chevron_up-WX9KDKGI.js";import"./link-43hKML25.js";import"./roll_up_simple-DfzDmu-r.js";import"./espresso_logo-BYCu5-AX.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    transactionSummaries
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
}`,...a.parameters?.docs?.source}}};const ct=["Interactions"];export{a as Interactions,ct as __namedExportsOrder,lt as default};
