import{j as o}from"./iframe-tJD8ctAX.js";import{g as e,s as m}from"./data_table_shared-Dz_8xf2u.js";import{D as i}from"./data_provider-C6PVTx9l.js";import"./blocks-XwzhN47T.js";import{P as s}from"./nodes--GPtCQfL.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-D7TaBp9n.js";import{T as l}from"./tagged_base64-Beas1ikT.js";import{T as c}from"./transaction_summary_data_table-COONfwKC.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-B8emAic1.js";import"./index-D9AGz99-.js";import"./index-F4go5FlQ.js";import"./client-DQNBvfP2.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DvLNDg5r.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64-BaZRPPIE.js";import"./inline-DRfVIDbG.js";import"./now_provider-JQoYOvvm.js";import"./higher_order-DMx3Maq3.js";import"./check_circle_filled-Bw7if0sx.js";import"./svg_icon_base-BGhuzfHK.js";import"./copy-DrquMoLf.js";import"./path_resolver_provider-COaFMYwC.js";import"./data_table-B7uqBxSZ.js";import"./text-CEhLEmI-.js";import"./chevron_up-dJKzCaOa.js";import"./skeleton_content-cNfy38NO.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-ByvKo4c5.js";import"./date_time_formatters_provider-DUKMN7nU.js";import"./locale_provider-BfT--jL0.js";import"./number_text-gCrqYneN.js";import"./number_formatters_provider-Dl9eEFvN.js";import"./tagged_base64_text-BxX-aw0g.js";/* empty css               */import"./link-YfrimRsA.js";import"./roll_up_simple-D6CZKcOV.js";import"./espresso_logo-BIgMo0UX.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ct as __namedExportsOrder,lt as default};
