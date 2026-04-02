import{j as o}from"./iframe-CmLG4Pok.js";import{g as e,s as m}from"./data_table_shared-DomwqaDL.js";import{D as i}from"./data_provider-dnPZr8Zm.js";import"./blocks-DE8KvbdO.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-Chq6rksx.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D07X3gEr.js";import"./index-BgBvZsR8.js";import"./index-CrMXpkeL.js";import"./client-nqOaR84a.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-DkoEaPI0.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-CSVbmvDm.js";import"./inline-D3cva4KO.js";import"./now_provider-BYmmDWBX.js";import"./higher_order-aMxBsUlx.js";import"./check_circle_filled-SoXbLKd4.js";import"./svg_icon_base-B57ylFbh.js";import"./copy-CvSJbZKy.js";import"./path_resolver_provider-Txf-h2eU.js";import"./data_table-BhRISOED.js";import"./text-CEhLEmI-.js";import"./chevron_up-BztjpIQ4.js";import"./skeleton_content-CSUHDwQ0.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-C2ElyEsL.js";import"./date_time_formatters_provider-DNydhZPZ.js";import"./locale_provider-Be6w3M1T.js";import"./number_text-B1GPWJ_a.js";import"./number_formatters_provider-CF2CsDka.js";import"./tagged_base64_text-DA6oEnnC.js";/* empty css               */import"./link-B6ZWobqn.js";import"./roll_up_simple-CRctzn9f.js";import"./espresso-B78Cpgqq.js";import"./espresso_logo-Cv79EDYn.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
