import{j as o}from"./iframe-B-iMvdD4.js";import{D as m}from"./loading_provider-DGgAz7Nh.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./page_path_provider-DWGnqofr.js";import"./now_provider-D9QH_F6_.js";import"./number_formatters_provider-C7OuKrqX.js";import"./path_resolver_provider-DTKqJOJp.js";import{g as i,s}from"./data_table_shared-CZJdHrGa.js";import"./blocks-BstWny4x.js";import{P as p}from"./nodes-Bp4zkxYj.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-DiUDYOio.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-OKxsuYgY.js";import"./index-C2Py61xS.js";import"./index-BPkPZEbx.js";import"./client-BRFImQn1.js";import"./monetary_value-B9zIXJUb.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-D1knUC6u.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-v3SVavGm.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DfVp7OHb.js";import"./copy_hex-BDJCygmF.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-ByWeuO8A.js";import"./higher_order-p8JWl9JO.js";import"./check_circle_filled-DPIQ4HbT.js";import"./svg_icon_base-BLNI1CYc.js";import"./copy-DlUw72_P.js";/* empty css               */import"./date_time_text-EU368kfm.js";import"./hex_text-Dh3oergr.js";import"./number_text-BjwVE4fU.js";import"./data_table-DdZ_O9RT.js";import"./text-CEhLEmI-.js";import"./typography-12nFQ59z.js";import"./chevron_up-CWaJ9sme.js";import"./link-D6NAia8b.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
